"""
Bybit FIX 4.4 Demo
============================
dependency: pip install cryptography

USE:
  1. fill below config zone
  2. python demo_fix_order.py
"""
import os
import ssl
import socket
import time
import base64
import threading
import uuid
from datetime import datetime, timezone
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding

# ═══════════════════════════════════════════════════════════════════════════════
# CONFIG ZONE
# ═══════════════════════════════════════════════════════════════════════════════
FIX_HOST = "fix-oe-testnet.bybit.com"       # FIX host
FIX_PORT = 9000                              # FIX port
USE_TLS = True                               # tcps:// = True, tcp:// = False

API_KEY = "YOUR_API_KEY"                     # Your RSA generated API Key
PRIVATE_KEY_PATH = "your_private_key.pem"    # RSA private key path

SYMBOL = "BTCUSDT"
SIDE = "Buy"              # Buy / Sell
ORDER_TYPE = "Limit"      # Limit / Market
PRICE = "50000"           # limit price
QTY = "0.001"             # qty
TIME_IN_FORCE = "GTC"     # GTC / IOC / FOK / PostOnly

# ═══════════════════════════════════════════════════════════════════════════════
# FIX protocol implementation
# ═══════════════════════════════════════════════════════════════════════════════
SOH = '\x01'
FIX_VERSION = 'FIX.4.4'
SENDER_COMP_ID = 'FIX_CLIENT'
TARGET_COMP_ID = 'BYBIT_FIX_SERVER'

SIDE_ENCODE = {'Buy': '1', 'Sell': '2'}
ORD_TYPE_ENCODE = {'Limit': '2', 'Market': '1'}
TIF_ENCODE = {'GTC': '1', 'IOC': '3', 'FOK': '4', 'PostOnly': 'P'}

EXEC_TYPE_MAP = {
    '0': 'New', '4': 'Canceled', '8': 'Rejected',
    'A': 'PendingNew', 'F': 'Trade', '6': 'PendingCancel', 'E': 'PendingReplace',
}
ORD_STATUS_MAP = {
    '0': 'New', '1': 'PartiallyFilled', '2': 'Filled', '4': 'Canceled', '8': 'Rejected',
    'A': 'PendingNew',
}


def _utc_ts():
    now = datetime.now(timezone.utc)
    return now.strftime('%Y%m%d-%H:%M:%S.') + f'{now.microsecond // 1000:03d}'


def _checksum(msg):
    return f'{sum(ord(c) for c in msg) % 256:03d}'


def _build_msg(msg_type, fields, seq):
    body_fields = [
        (35, msg_type), (34, str(seq)), (49, SENDER_COMP_ID),
        (52, _utc_ts()), (56, TARGET_COMP_ID),
    ] + fields
    body = SOH.join(f'{t}={v}' for t, v in body_fields) + SOH
    header = f'8={FIX_VERSION}{SOH}9={len(body)}{SOH}'
    full = header + body
    return full + f'10={_checksum(full)}{SOH}'


def _parse_msg(raw):
    fields = {}
    for pair in raw.split(SOH):
        if '=' not in pair:
            continue
        tag, _, val = pair.partition('=')
        if tag.strip().isdigit():
            fields[int(tag.strip())] = val
    return fields


class FixClient:
    def __init__(self):
        with open(PRIVATE_KEY_PATH, 'rb') as f:
            self._key = serialization.load_pem_private_key(f.read(), password=None)
        self._seq = 1
        self._sock = None
        self._buf = ''
        self._msgs = []
        self._lock = threading.Lock()
        self._running = False

    def connect(self):
        raw = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        raw.settimeout(10)
        if USE_TLS:
            ctx = ssl.create_default_context()
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE
            self._sock = ctx.wrap_socket(raw, server_hostname=FIX_HOST)
        else:
            self._sock = raw
        self._sock.connect((FIX_HOST, FIX_PORT))
        self._running = True
        threading.Thread(target=self._read_loop, daemon=True).start()
        self._logon()
        # 等待 Logon ACK
        deadline = time.time() + 10
        while time.time() < deadline:
            with self._lock:
                for m in self._msgs:
                    if m.get(35) == 'A':
                        print(f"  Logon 成功, connId={m.get(30003, '')}")
                        threading.Thread(target=self._heartbeat, daemon=True).start()
                        return
                    if m.get(35) in ('5', '3'):
                        raise Exception(f"Logon 被拒: {m.get(58, '')}")
            time.sleep(0.1)
        raise Exception("Logon 超时")

    def place_order(self, symbol, side, order_type, price, qty, tif):
        with self._lock:
            self._msgs.clear()
        cl_ord_id = str(uuid.uuid4())
        fields = [
            (30002, str(int(time.time() * 1000))), (30001, '5000'),
            (30010, 'spot'), (55, symbol),
            (54, SIDE_ENCODE[side]), (40, ORD_TYPE_ENCODE[order_type]),
            (59, TIF_ENCODE[tif]), (38, qty), (11, cl_ord_id),
        ]
        if order_type == 'Limit':
            fields.append((44, price))
        msg = _build_msg('D', fields, self._next_seq())
        self._send(msg)
        print(f"  sent: {msg.replace(SOH, '|')}")
        # 等待 ACK
        resp = self._wait_resp(10)
        return resp, cl_ord_id

    def disconnect(self):
        self._running = False
        try:
            self._send(_build_msg('5', [], self._next_seq()))
        except Exception:
            pass
        try:
            self._sock.close()
        except Exception:
            pass

    # --- internal ---

    def _next_seq(self):
        s = self._seq
        self._seq += 1
        return s

    def _send(self, msg):
        self._sock.sendall(msg.encode('ascii'))

    def _logon(self):
        expires = int(time.time() * 1000) + 5000
        payload = f'GET/realtime{expires}'
        sig = self._key.sign(payload.encode(), padding.PKCS1v15(), hashes.SHA256())
        sig_b64 = base64.b64encode(sig).decode()
        fields = [
            (95, str(len(sig_b64))), (96, sig_b64),
            (98, '0'), (108, '10'), (141, 'Y'),
            (553, API_KEY), (25036, '1'), (30023, str(expires)),
        ]
        self._send(_build_msg('A', fields, self._next_seq()))

    def _heartbeat(self):
        while self._running:
            try:
                self._send(_build_msg('0', [], self._next_seq()))
                time.sleep(10)
            except Exception:
                break

    def _read_loop(self):
        while self._running:
            try:
                self._sock.settimeout(1.0)
                data = self._sock.recv(4096)
                if not data:
                    break
                self._buf += data.decode('ascii', errors='replace')
                self._process_buf()
            except socket.timeout:
                continue
            except OSError:
                break

    def _process_buf(self):
        while True:
            marker = SOH + '10='
            idx = self._buf.find(marker)
            if idx == -1:
                break
            end = self._buf.find(SOH, idx + 1 + 3)
            if end == -1:
                break
            raw = self._buf[:end + 1]
            self._buf = self._buf[end + 1:]
            fields = _parse_msg(raw)
            # 回复 TestRequest
            if fields.get(35) == '1':
                hb = _build_msg('0', [(112, fields.get(112, ''))] if fields.get(112) else [], self._next_seq())
                try:
                    self._send(hb)
                except Exception:
                    pass
                continue
            if fields.get(35) == '0':
                continue
            with self._lock:
                self._msgs.append(fields)

    def _wait_resp(self, timeout):
        start = time.time()
        while time.time() - start < timeout:
            with self._lock:
                for m in list(self._msgs):
                    mt = m.get(35, '')
                    if mt in ('8', '3', 'j'):
                        self._msgs.remove(m)
                        return m
            time.sleep(0.05)
        return None


# ═══════════════════════════════════════════════════════════════════════════════
# 主流程
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    print(f"[1] connect {FIX_HOST}:{FIX_PORT} (TLS={USE_TLS})")
    client = FixClient()
    client.connect()

    print(f"[2] send order: {SIDE} {QTY} {SYMBOL} @ {PRICE} ({ORDER_TYPE} {TIME_IN_FORCE})")
    resp, cl_ord_id = client.place_order(SYMBOL, SIDE, ORDER_TYPE, PRICE, QTY, TIME_IN_FORCE)

    print(f"[3] response:")
    if resp is None:
        print("  timeoout, no response")
    else:
        exec_type = EXEC_TYPE_MAP.get(resp.get(150, ''), resp.get(150, ''))
        ord_status = ORD_STATUS_MAP.get(resp.get(39, ''), resp.get(39, ''))
        order_id = resp.get(37, '')
        reject_reason = resp.get(103, '')
        text = resp.get(58, '')
        print(f"  orderId:    {order_id}")
        print(f"  clOrdId:    {cl_ord_id}")
        print(f"  execType:   {exec_type}")
        print(f"  ordStatus:  {ord_status}")
        if reject_reason and reject_reason != '0':
            print(f"  retCode:    {reject_reason}")
            print(f"  retMsg:     {text}")

    print(f"[4] disconnect")
    client.disconnect()
    print("Done.")


if __name__ == '__main__':
    main()
