"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[11606],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),o=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):d(d({},e),t)),r},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),g=o(r),s=n,c=g["".concat(p,".").concat(s)]||g[s]||k[s]||l;return r?a.createElement(c,d(d({ref:e},m),{},{components:r})):a.createElement(c,d({ref:e},m))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,d=new Array(l);d[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,d[1]=i;for(var o=2;o<l;o++)d[o]=r[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9492:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u67e5\u8a62\u6d3b\u52d5\u59d4\u6258",sidebar_label:"\u67e5\u8a62\u6d3b\u52d5\u59d4\u6258",sidebar_position:2,slug:"/spot/trade/get-order"},d=void 0,i={unversionedId:"v3/spot/rest-spot/get-order",id:"v3/spot/rest-spot/get-order",title:"\u67e5\u8a62\u6d3b\u52d5\u59d4\u6258",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/spot/rest-spot/get-order.mdx",sourceDirName:"v3/spot/rest-spot",slug:"/spot/trade/get-order",permalink:"/docs/zh-TW/spot/trade/get-order",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u67e5\u8a62\u6d3b\u52d5\u59d4\u6258",sidebar_label:"\u67e5\u8a62\u6d3b\u52d5\u59d4\u6258",sidebar_position:2,slug:"/spot/trade/get-order"},sidebar:"v3SideBar",previous:{title:"\u5275\u5efa\u6d3b\u52d5\u59d4\u6258\u55ae",permalink:"/docs/zh-TW/spot/trade/place-order"},next:{title:"\u64a4\u92b7\u6d3b\u52d5\u59d4\u6258\u55ae",permalink:"/docs/zh-TW/spot/trade/cancel"}},p={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},k=m("Tabs"),g=m("TabItem"),s={toc:o};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,n.kt)("p",null,"GET ",(0,n.kt)("code",null,"/spot/v3/private/order")),(0,n.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID. \u7576",(0,n.kt)("code",null,"orderLinkId"),"\u70ba\u7a7a\u6642, \u5247",(0,n.kt)("b",null,"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9ID. \u7576",(0,n.kt)("code",null,"orderId"),"\u70ba\u7a7a\u6642, \u5247",(0,n.kt)("b",null,"\u5fc5\u50b3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderCategory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. \u9ed8\u8a8d\u70ba",(0,n.kt)("code",null,"0"),"\uff1a\u666e\u901a\u8a02\u55ae; ",(0,n.kt)("code",null,"1"),"\uff1a",(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001736"},"\u6b62\u76c8\u6b62\u640d\u8a02\u55ae"),"\uff0c\u82e5\u662f\u6b62\u76c8\u6b62\u640d\u5247",(0,n.kt)("b",null,"\u5fc5\u50b3"))))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"accountId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e63\u5c0d\u540d\u7a31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7279\u6b8a\u8a02\u55aeID\uff0c\u7528\u6236\u81ea\u5df1\u751f\u6210")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55aeID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"execQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u6578\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cummulativeQuoteQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9396\u5b9a\u6578\u91cf\uff08\u5982\u679c\u70ba0\uff0c\u5247\u8aaa\u660e\u8a72\u7b46\u8a02\u55ae\u7684\u8cc7\u91d1\u5df2\u5b8c\u6210\u7d50\u7b97\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"avgPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5df2\u6210\u4ea4\u7684\u5e73\u5747\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b\u3002\u53ef\u80fd\u51fa\u73fe\u7684\u503c\u70ba\uff1aNEW(\u65b0\u8a02\u55ae\uff0c\u7121\u6210\u4ea4)\u3001PARTIALLY_FILLED\uff08\u90e8\u5206\u6210\u4ea4\uff09\u3001FILLED\uff08\u5168\u90e8\u6210\u4ea4\uff09\u3001CANCELED\uff08\u5df2\u53d6\u6d88\uff09\u548cREJECTED\uff08\u8a02\u55ae\u88ab\u62d2\u7d55\uff09.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"timeInForce"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001044"},"\u57f7\u884c\u7b56\u7565"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"orderType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b, LIMIT/MARKET/LIMIT_MAKER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"side"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u65b9\u5411, BUY(\u8cb7\u5165\u505a\u591a)/SELL(\u8ce3\u51fa\u505a\u7a7a)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stopPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u50f9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"icebergQty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8acb\u5ffd\u7565")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64ae\u5408\u5f15\u64ce\u4e2d\u7684\u5275\u5efa\u6642\u9593")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updateTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u4e0a\u6b21\u66f4\u65b0\u7684\u6642\u9593\u6233")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"isWorking"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u751f\u6548. ",(0,n.kt)("code",null,"0"),"\uff1a\u672a\u751f\u6548, ",(0,n.kt)("code",null,"1"),"\uff1a\u5df2\u751f\u6548")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"locked"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9396\u5b9a\u6578\u91cf\uff08\u5982\u679c\u70ba0\uff0c\u5247\u8aaa\u660e\u8a72\u7b46\u8a02\u55ae\u7684\u8cc7\u91d1\u5df2\u5b8c\u6210\u7d50\u7b97\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"blockTradeId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Paradigm\u5927\u5b97\u4ea4\u6613ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cancelType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Cancel type. ",(0,n.kt)("inlineCode",{parentName:"td"},"CancelBySmp"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#smptype"},"smpType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"SMP\u57f7\u884c\u985e\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"smpGroup"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6240\u5c6cSmp\u7d44ID. \u5982\u679cuid\u4e0d\u5c6c\u65bc\u4efb\u4f55\u7d44, \u5247\u9ed8\u8a8d\u70ba",(0,n.kt)("inlineCode",{parentName:"td"},"0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"smpOrderId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b64SMP\u57f7\u884c\u7684\u4ea4\u6613\u5c0d\u624b\u7684 orderID")))),(0,n.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,n.kt)(k,{mdxType:"Tabs"},(0,n.kt)(g,{value:"console",label:"Console",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/spot/v3/private/order?orderLinkId=spotA0010' \\\n--header 'X-BAPI-SIGN: 828571067751622ed4191e7e8ee913defccd1f099b9dfb8332a6a05edf799eaf' \\\n--header 'X-BAPI-API-KEY: {api key}' \\\n--header 'X-BAPI-TIMESTAMP: 1659076396894' \\\n--header 'X-BAPI-RECV-WINDOW: 5000'\n")))),(0,n.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,n.kt)(k,{mdxType:"Tabs"},(0,n.kt)(g,{value:"normal",label:"Normal order",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "accountId": "533287",\n        "symbol": "BTCUSDT",\n        "orderLinkId": "spotA0010",\n        "orderId": "1210810256551063296",\n        "orderPrice": "23500",\n        "orderQty": "0.01",\n        "execQty": "0",\n        "cummulativeQuoteQty": "0",\n        "avgPrice": "0",\n        "status": "NEW",\n        "timeInForce": "GTC",\n        "orderType": "LIMIT",\n        "side": "SELL",\n        "stopPrice": "0.0",\n        "icebergQty": "0.0",\n        "createTime": "1659075830464",\n        "updateTime": "1659075830497",\n        "isWorking": "1",\n        "locked": "0.01",\n        "blockTradeId": "",\n        "cancelType": "UNKNOWN"\n        "smpGroup": 0,\n        "smpOrderId": "",\n        "smpType": "None"\n    },\n    "retExtMap": {},\n    "retExtInfo": {},\n    "time": 1659076397365\n}\n'))),(0,n.kt)(g,{value:"stop",label:"Stop order",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "accountId": "533287",\n        "symbol": "BTCUSDT",\n        "orderLinkId": "testSpot_25",\n        "orderId": "1261611660550946304",\n        "orderPrice": "17000",\n        "orderQty": "0.1",\n        "status": "ORDER_NEW",\n        "timeInForce": "GTC",\n        "orderType": "LIMIT",\n        "side": "BUY",\n        "stopPrice": "0.0",\n        "icebergQty": "0.0",\n        "createTime": "1665131829743",\n        "updateTime": "1665131829743",\n        "isWorking": "1",\n        "executedOrderId": "1261611660550946305",\n        "triggerPrice": "22000",\n        "orderCategory": 1\n    },\n    "retExtMap": {},\n    "retExtInfo": {},\n    "time": 1665131916562\n}\n')))))}c.isMDXComponent=!0}}]);