"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[91250],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=d(n),u=a,c=k["".concat(p,".").concat(u)]||k[u]||m[u]||i;return n?r.createElement(c,l(l({ref:e},s),{},{components:n})):r.createElement(c,l({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88180:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",sidebar_label:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",sidebar_position:3},l=void 0,o={unversionedId:"v5/position/set-risk-limit",id:"v5/position/set-risk-limit",title:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",description:"\u98a8\u96aa\u9650\u984d\u6703\u9650\u5236\u4f60\u5728\u4e0d\u540c\u7684\u4fdd\u8b49\u91d1\u8981\u6c42\u4e0b\u7684\u53ef\u6301\u5009\u7684\u6700\u5927\u5009\u4f4d\u6578\u91cf\uff0c\u5982\u679c\u8981\u6301\u6709\u66f4\u591a\u7684\u5009\u4f4d\uff0c\u9700\u8981\u66f4\u591a\u7684\u4fdd\u8b49\u91d1\u8981\u6c42\u3002\u672c\u63a5\u53e3\u53ef\u4ee5\u8a2d\u7f6e\u55ae\u500b\u5009\u4f4d\u7684\u98a8\u96aa\u9650\u984d\uff0c\u4e0b\u55ae\u6642\u5982\u679c\u8d85\u904e\u7576\u524d\u7684\u98a8\u96aa\u9650\u984d\uff0c\u5247\u6703\u88ab\u62d2\u7d55\u3002\u9ede\u64ca\u9019\u88e1\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u98a8\u96aa\u9650\u984d.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/position/set-risk-limit.mdx",sourceDirName:"v5/position",slug:"/v5/position/set-risk-limit",permalink:"/docs/zh-TW/v5/position/set-risk-limit",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",sidebar_label:"\u8a2d\u7f6e\u98a8\u96aa\u9650\u984d",sidebar_position:3},sidebar:"v5SideBar",previous:{title:"\u5207\u63db\u6301\u5009\u6a21\u5f0f",permalink:"/docs/zh-TW/v5/position/position-mode"},next:{title:"\u8a2d\u7f6e\u6b62\u76c8\u6b62\u640d",permalink:"/docs/zh-TW/v5/position/trading-stop"}},p={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s=(m="Button",function(t){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var m;const k={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u98a8\u96aa\u9650\u984d\u6703\u9650\u5236\u4f60\u5728\u4e0d\u540c\u7684\u4fdd\u8b49\u91d1\u8981\u6c42\u4e0b\u7684\u53ef\u6301\u5009\u7684\u6700\u5927\u5009\u4f4d\u6578\u91cf\uff0c\u5982\u679c\u8981\u6301\u6709\u66f4\u591a\u7684\u5009\u4f4d\uff0c\u9700\u8981\u66f4\u591a\u7684\u4fdd\u8b49\u91d1\u8981\u6c42\u3002\u672c\u63a5\u53e3\u53ef\u4ee5\u8a2d\u7f6e\u55ae\u500b\u5009\u4f4d\u7684\u98a8\u96aa\u9650\u984d\uff0c\u4e0b\u55ae\u6642\u5982\u679c\u8d85\u904e\u7576\u524d\u7684\u98a8\u96aa\u9650\u984d\uff0c\u5247\u6703\u88ab\u62d2\u7d55\u3002\u9ede\u64ca",(0,a.kt)("a",{href:"https://www.bybit.com/zh-TW/help-center/bybitHC_Article?language=zh_TW&id=000001164"},"\u9019\u88e1"),"\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u98a8\u96aa\u9650\u984d."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u7d71\u4e00\u5e33\u6236\u8986\u84cb\u7bc4\u570d: USDT\u548cUSDC\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u666e\u901a\u5e33\u6236\u8986\u84cb\u7bc4\u570d: USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u60a8\u53ef\u4ee5\u7372\u53d6\u901a\u904e\u8a72",(0,a.kt)("a",{parentName:"p",href:"../market/risk-limit#"},"\u63a5\u53e3"),"\u67e5\u8a62\u5230\u98a8\u96aa\u9650\u984d\u4fe1\u606f.")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/position/set-risk-limit")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u7d71\u4e00\u5e33\u6236: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse")),(0,a.kt)("li",null,"\u666e\u901a\u5e33\u6236: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),". \u9019\u88e1",(0,a.kt)("inlineCode",{parentName:"td"},"category"),"\u5b57\u6bb5\u4e0d\u53c3\u8207\u696d\u52d9\u908f\u8f2f\uff0c\u50c5\u505a\u8def\u7531\u4f7f\u7528")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"riskId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u98a8\u96aa\u9650\u984dId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a19\u8b58\uff0c\u7528\u65bc\u6a19\u8b58\u4e0d\u540c\u5009\u4f4d, \u96d9\u5411\u6301\u5009\u6a21\u5f0f\u4e0b\uff0c\u8a72\u5b57\u6bb5",(0,a.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"0"),": \u55ae\u5411\u6301\u5009\u6a21\u5f0f"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": \u8cb7\u5074\u96d9\u5411\u6301\u5009\u6a21\u5f0f"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"2"),": \u8ce3\u5074\u96d9\u5411\u6301\u5009\u6a21\u5f0f")))))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"riskId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u98a8\u96aa\u9650\u984dId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"riskLimitValue"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u98a8\u96aa\u9650\u984dId\u5c0d\u61c9\u7684\u98a8\u96aa\u9650\u984d")))),(0,a.kt)("a",{href:"/api-explorer/v5/position/set-risk-limit"},(0,a.kt)(s,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /v5/position/set-risk-limit HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672282269774\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "category": "linear",\n    "symbol": "BTCUSDT",\n    "riskId": 4,\n    "positionIdx": null\n}\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "riskId": 4,\n        "riskLimitValue": "8000000",\n        "category": "linear"\n    },\n    "retExtInfo": {},\n    "time": 1672282270571\n}\n')))}u.isMDXComponent=!0}}]);