"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[34980],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18816:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_label:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_position:2},i=void 0,o={unversionedId:"v5/asset/transfer/create-inter-transfer",id:"v5/asset/transfer/create-inter-transfer",title:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",description:"\u5275\u5efa\u55ae\u5e33\u865f\u4e0b\u5e33\u6236\u985e\u578b\u9593\u7684\u5283\u8f49\u64cd\u4f5c",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/asset/transfer/create-inter-transfer.mdx",sourceDirName:"v5/asset/transfer",slug:"/v5/asset/transfer/create-inter-transfer",permalink:"/docs/zh-TW/v5/asset/transfer/create-inter-transfer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_label:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_position:2},sidebar:"v5SideBar",previous:{title:"\u5e33\u6236\u985e\u578b\u9593\u53ef\u5283\u8f49\u7684\u5e63\u7a2e",permalink:"/docs/zh-TW/v5/asset/transfer/transferable-coin"},next:{title:"\u5275\u5efa\u842c\u80fd\u5283\u8f49",permalink:"/docs/zh-TW/v5/asset/transfer/unitransfer"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},d=c("Button"),u=c("Tabs"),m=c("TabItem"),f={toc:s};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5275\u5efa\u55ae\u5e33\u865f\u4e0b",(0,a.kt)("a",{parentName:"p",href:"../../enum#accounttype"},"\u5e33\u6236\u985e\u578b"),"\u9593\u7684\u5283\u8f49\u64cd\u4f5c"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5e33\u6236\u985e\u578b\u6709\u5176\u53ef\u63a5\u53d7\u7684\u5e63\u7a2e\u9650\u5236, \u8a73\u60c5\u8acb\u53c3\u8003",(0,a.kt)("a",{parentName:"li",href:"transferable-coin#"},"\u53ef\u5283\u8f49\u5e63\u7a2e"),"\u63a5\u53e3."),(0,a.kt)("li",{parentName:"ul"},"\u8cc7\u91d1\u8cec\u6236\u8f49\u51fa\u76ee\u524d\u50c5\u652f\u6301\u52a0\u5bc6\u8ca8\u5e63\uff0c\u4e0d\u652f\u6301\u6cd5\u5b9a\u8ca8\u5e63."))),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/asset/transfer/inter-transfer")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID. \u8acb\u81ea\u884c\u624b\u52d5\u751f\u6210UUID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5283\u5165\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../../enum#accounttype"},"fromAccountType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f49\u51fa\u8cec\u6236\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../../enum#accounttype"},"toAccountType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f49\u5165\u8cec\u6236\u985e\u578b")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5283\u8f49\u72c0\u614b ",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"STATUS_UNKNOWN")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"SUCCESS")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"PENDING")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"FAILED")))))),(0,a.kt)("a",{href:"/api-explorer/v5/asset/create-inter-transfer"},(0,a.kt)(d,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(u,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(m,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST v5/asset/transfer/inter-transfer HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670986690556\nX-BAPI-RECV-WINDOW: 50000\nX-BAPI-SIGN: XXXXX\nContent-Type: application/json\n{\n    "transferId": "42c0cfb0-6bca-c242-bc76-4e6df6cbcb16",\n    "coin": "BTC",\n    "amount": "0.05",\n    "fromAccountType": "UNIFIED",\n    "toAccountType": "CONTRACT"\n}\n'))),(0,a.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.create_internal_transfer(\n    transferId="42c0cfb0-6bca-c242-bc76-4e6df6cbcb16",\n    coin="BTC",\n    amount="0.05",\n    fromAccountType="UNIFIED",\n    toAccountType="CONTRACT",\n))\n'))),(0,a.kt)(m,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n  testnet: true,\n  key: 'apikey',\n  secret: 'apisecret',\n});\n\nclient\n  .createInternalTransfer(\n    '42c0cfb0-6bca-c242-bc76-4e6df6cbcb16',\n    'BTC',\n    '0.05',\n    'UNIFIED',\n    'CONTRACT',\n  )\n  .then((response) => {\n    console.log(response);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "transferId": "42c0cfb0-6bca-c242-bc76-4e6df6cbab16",\n        "status": "SUCCESS"\n    },\n    "retExtInfo": {},\n    "time": 1670986962783\n}\n')))}k.isMDXComponent=!0}}]);