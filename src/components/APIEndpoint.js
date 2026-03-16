import React, { useState } from 'react';

export default function APIEndpoint({ method, url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <span className={`api-endpoint api-endpoint--${method.toLowerCase()}`}>
      <span className="api-endpoint__method">{method}</span>
      <code className="api-endpoint__url">{url}</code>
      <button
        className={`api-endpoint__copy${copied ? ' api-endpoint__copy--copied' : ''}`}
        onClick={handleCopy}
        title="Copy path to clipboard"
        aria-label="Copy path to clipboard"
      >
        {copied ? (
          <span>&#10003; Copied</span>
        ) : (
          <span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '3px'}}>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy
          </span>
        )}
      </button>
    </span>
  );
}
