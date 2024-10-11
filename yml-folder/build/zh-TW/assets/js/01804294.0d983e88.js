"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[39494],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=o(a),u=r,k=s["".concat(d,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},55300:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u67e5\u8a62\u9322\u5305\u8cc7\u91d1\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u9322\u5305\u8cc7\u91d1\u7d00\u9304",sidebar_position:3,slug:"/derivatives/contract/wallet-fund"},i=void 0,p={unversionedId:"v3/derivatives/rest-contract/account/wallet-fund-record",id:"v3/derivatives/rest-contract/account/wallet-fund-record",title:"\u67e5\u8a62\u9322\u5305\u8cc7\u91d1\u7d00\u9304",description:"\u7372\u53d6\u9322\u5305\u8cc7\u91d1\u7d00\u9304. \u9019\u500b\u63a5\u53e3\u9084\u5c55\u793a\u4f86\u81ea\u7db2\u9801\u4e0a\u8cc7\u7522\u514c\u63db\u4e0b\u7684\u514c\u63db\u7d00\u9304, \u5176\u4e2d\u5c0d\u61c9\u7684type\u514c\u63db\u985e\u578b\u662fExchangeOrderWithdraw\u548cExchangeOrderDeposit\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/derivatives/rest-contract/account/wallet-fund-record.mdx",sourceDirName:"v3/derivatives/rest-contract/account",slug:"/derivatives/contract/wallet-fund",permalink:"/docs/zh-TW/derivatives/contract/wallet-fund",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u67e5\u8a62\u9322\u5305\u8cc7\u91d1\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u9322\u5305\u8cc7\u91d1\u7d00\u9304",sidebar_position:3,slug:"/derivatives/contract/wallet-fund"}},d={},o=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:o};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7372\u53d6\u9322\u5305\u8cc7\u91d1\u7d00\u9304. \u9019\u500b\u63a5\u53e3\u9084\u5c55\u793a\u4f86\u81ea\u7db2\u9801\u4e0a",(0,r.kt)("a",{href:"https://www.bybit.com/user/assets/records/trade/exchange"},"\u8cc7\u7522\u514c\u63db"),"\u4e0b\u7684\u514c\u63db\u7d00\u9304, \u5176\u4e2d\u5c0d\u61c9\u7684type\u514c\u63db\u985e\u578b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ExchangeOrderWithdraw"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ExchangeOrderDeposit"),"\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u9019\u500b\u63a5\u53e3\u8fd4\u56de\u7684\u95dc\u65bc\u884d\u751f\u54c1\u5e33\u6236\u4e0b\u7684\u5283\u8f49\u7d00\u9304\u7684\u5167\u5bb9\u662f\u4e0d\u5b8c\u6574\u7684\u3002\u63a8\u85a6\u4f7f\u7528\u5e33\u6236\u8cc7\u7522API\u5b8c\u6210\u8cc7\u7522",(0,r.kt)("a",{parentName:"li",href:"../../account-asset/internal-transfer"},"\u5283\u8f49"),"\u7684\u64cd\u4f5c\u548c",(0,r.kt)("a",{parentName:"li",href:"../../account-asset/internal-transfer-list"},"\u7d00\u9304"),"\u6aa2\u7d22\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8a72\u63a5\u53e3\u4e0d\u986f\u793a2021-07-15\u4e4b\u5f8c\u767c\u751f\u7684\u5145\u503c\u63d0\u73fe\u8a18\u9304\u3002\u8981\u5728\u6b64\u65e5\u671f\u4e4b\u5f8c\u7372\u53d6\u8a18\u9304\uff0c\u60a8\u61c9\u8a72\u8abf\u7528 ",(0,r.kt)("a",{parentName:"li",href:"../../account-asset/deposit-record"},"\u67e5\u8a62\u5145\u503c\u8a18\u9304")," \u548c ",(0,r.kt)("a",{parentName:"li",href:"../../account-asset/withdraw-record"},"\u67e5\u8a62\u63d0\u73fe\u8a18\u9304"),"\u63a5\u53e3\u3002\u9019\u662f\u7531\u65bc\u6b64\u6642\u5f15\u5165\u4e86\u73fe\u8ca8\u9322\u5305\u3002"))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/account/wallet/fund-records")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#walletfundtype"},"walletFundType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cc7\u91d1\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"50"),"]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../enum#walletfundtype"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cc7\u91d1\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91d1\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u9918\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57f7\u884c\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /contract/v3/private/account/wallet/fund-records?limit=1 HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670931970500\nX-BAPI-RECV-WINDOW: 5000\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "list": [\n        {\n            "coin": "BTC",\n            "type": "RealisedPNL",\n            "amount": "-0.00003034",\n            "walletBalance": "0.68146653",\n            "execTime": "1665792000030"\n        }\n    ],\n    "nextPageCursor": "K2tqR0xUQ1B1Tyt1a0ZFeVZRa1I2R2ZOT2pVekNKeGZPOTEyWFNpeXd1ejRmRTFoUkhabnVKVlRBNnFtZGk0dlBhRThLdFNHTGxFdWJGQVFMdXBnZ29Bb3JmSDlkczZHV1p1V1JoZmc2dnlRc1VMZ1ZVYlRXeW51ZUVBT3QycjlYSml3alNZampKTHdrdDJzSzFWdnlWK0djRklqczB1M0JYN04wVXltV0ljPQ=="\n},\n    "retExtInfo": {},\n    "time": 1670931971341\n}\n')))}m.isMDXComponent=!0}}]);