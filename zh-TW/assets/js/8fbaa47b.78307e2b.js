"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[31657],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(n),u=r,g=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41154:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da",sidebar_label:"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da",sidebar_position:1},i=void 0,p={unversionedId:"v5/market/kline",id:"v5/market/kline",title:"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da",description:"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/market/kline.mdx",sourceDirName:"v5/market",slug:"/v5/market/kline",permalink:"/docs/zh-TW/v5/market/kline",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da",sidebar_label:"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da",sidebar_position:1},sidebar:"v5SideBar",previous:{title:"\u5982\u4f55\u4f7f\u7528API\u5e36\u55ae",permalink:"/docs/zh-TW/v5/copytrade"},next:{title:"\u67e5\u8a62\u6a19\u8a18\u50f9\u683cK\u7dda\u6578\u64da",permalink:"/docs/zh-TW/v5/market/mark-kline"}},o={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},k=m("Button"),s=m("Tabs"),u=m("TabItem"),g={toc:d};function N(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u67e5\u8a62\u5e02\u5834\u50f9\u683cK\u7dda\u6578\u64da"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u73fe\u8ca8 / USDT\u6c38\u7e8c / USDC\u6c38\u7e8c / USDC\u4ea4\u5272 / \u53cd\u5411\u5408\u7d04"))),(0,r.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/market/kline")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"spot"),",",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#interval"},"interval")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("b",null,"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6642\u9593\u7c92\u5ea6. ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),",",(0,r.kt)("inlineCode",{parentName:"td"},"3"),",",(0,r.kt)("inlineCode",{parentName:"td"},"5"),",",(0,r.kt)("inlineCode",{parentName:"td"},"15"),",",(0,r.kt)("inlineCode",{parentName:"td"},"30"),",",(0,r.kt)("inlineCode",{parentName:"td"},"60"),",",(0,r.kt)("inlineCode",{parentName:"td"},"120"),",",(0,r.kt)("inlineCode",{parentName:"td"},"240"),",",(0,r.kt)("inlineCode",{parentName:"td"},"360"),",",(0,r.kt)("inlineCode",{parentName:"td"},"720"),",",(0,r.kt)("inlineCode",{parentName:"td"},"D"),",",(0,r.kt)("inlineCode",{parentName:"td"},"M"),",",(0,r.kt)("inlineCode",{parentName:"td"},"W"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1000"),"]",". \u9ed8\u8a8d: ",(0,r.kt)("inlineCode",{parentName:"td"},"200"))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4e00\u500b\u5b57\u7b26\u4e32\u6578\u7d44\u69cb\u6210\u55ae\u500b\u881f\u71ed"),(0,r.kt)("li",null,"\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"td"},"startTime"),"\u964d\u5e8f\u6392\u5217")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> list","[0]",": startTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u881f\u71ed\u7684\u958b\u59cb\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> list","[1]",": openPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> list","[2]",": highPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u9ad8\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> list","[3]",": lowPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u4f4e\u50f9\u683c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> list","[4]",": closePrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u50f9\u683c. ",(0,r.kt)("em",{parentName:"td"},"\u5982\u679c\u881f\u71ed\u5c1a\u672a\u7d50\u675f\uff0c\u5247\u8868\u793a\u70ba\u6700\u65b0\u6210\u4ea4\u50f9\u683c"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> list","[5]",": volume"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u91cf. ",(0,r.kt)("em",{parentName:"td"},"\u5408\u7d04\u55ae\u4f4d: \u5408\u7d04\u7684\u5f35\u6578. \u73fe\u8ca8\u55ae\u4f4d: \u5e63\u7a2e\u7684\u6578\u91cf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> list","[6]",": turnover"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u984d. ",(0,r.kt)("em",{parentName:"td"},"\u55ae\u4f4d: \u5831\u50f9\u8ca8\u5e63\u7684\u6578\u91cf"))))),(0,r.kt)("a",{href:"/api-explorer/v5/market/kline"},(0,r.kt)(k,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)(s,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.kt)(u,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/kline?category=inverse&symbol=BTCUSD&interval=60&start=1670601600000&end=1670608800000 HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(testnet=True)\nprint(session.get_kline(\n    category="inverse",\n    symbol="BTCUSD",\n    interval=60,\n    start=1670601600000,\n    end=1670608800000,\n))\n'))),(0,r.kt)(u,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n    testnet: true,\n});\n\nclient\n    .getKline({\n        category: 'inverse',\n        symbol: 'BTCUSD',\n        interval: '60',\n        start: 1670601600000,\n        end: 1670608800000,\n    })\n    .then((response) => {\n        console.log(response);\n    })\n    .catch((error) => {\n        console.error(error);\n    });\n")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "symbol": "BTCUSD",\n        "category": "inverse",\n        "list": [\n            [\n                "1670608800000",\n                "17071",\n                "17073",\n                "17027",\n                "17055.5",\n                "268611",\n                "15.74462667"\n            ],\n            [\n                "1670605200000",\n                "17071.5",\n                "17071.5",\n                "17061",\n                "17071",\n                "4177",\n                "0.24469757"\n            ],\n            [\n                "1670601600000",\n                "17086.5",\n                "17088",\n                "16978",\n                "17071.5",\n                "6356",\n                "0.37288112"\n            ]\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672025956592\n}\n')))}N.isMDXComponent=!0}}]);