"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[23105],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14693:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_position:5},o=void 0,i={unversionedId:"v5/account/collateral-info",id:"v5/account/collateral-info",title:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",description:"\u7372\u53d6\u7576\u524d\u7d71\u4e00\u4fdd\u8b49\u91d1\u8cec\u6236\u7684\u62b5\u62bc\u54c1\u4fe1\u606f\uff0c\u5305\u62ec\u501f\u8cb8\u5229\u7387\uff0c\u53ef\u85c9\u8cb8\u91d1\u984d\u4ee5\u53ca\u62b5\u62bc\u54c1\u6298\u7b97\u7387\uff0c\u662f\u5426\u53ef\u62b5\u62bc\u4f5c\u70ba\u4fdd\u8b49\u91d1\u7b49\u4fe1\u606f\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/account/collateral-info.mdx",sourceDirName:"v5/account",slug:"/v5/account/collateral-info",permalink:"/docs/zh-TW/v5/account/collateral-info",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u62b5\u62bc\u54c1\u4fe1\u606f",sidebar_position:5},sidebar:"v5SideBar",previous:{title:"\u67e5\u8a62\u5229\u606f\u8a18\u9304",permalink:"/docs/zh-TW/v5/account/borrow-history"},next:{title:"\u67e5\u8a62Greeks\u4fe1\u606f",permalink:"/docs/zh-TW/v5/account/coin-greeks"}},p={},c=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},d=u("Button"),m=u("Tabs"),s=u("TabItem"),k={toc:c};function f(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7372\u53d6\u7576\u524d\u7d71\u4e00\u4fdd\u8b49\u91d1\u8cec\u6236\u7684\u62b5\u62bc\u54c1\u4fe1\u606f\uff0c\u5305\u62ec\u501f\u8cb8\u5229\u7387\uff0c\u53ef\u85c9\u8cb8\u91d1\u984d\u4ee5\u53ca\u62b5\u62bc\u54c1\u6298\u7b97\u7387\uff0c\u662f\u5426\u53ef\u62b5\u62bc\u4f5c\u70ba\u4fdd\u8b49\u91d1\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/account/collateral-info")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"currency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u524d\u6240\u6709\u62b5\u62bc\u54c1\u7684\u8cc7\u7522\u5e63\u7a2e")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> currency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u524d\u6240\u6709\u62b5\u62bc\u54c1\u7684\u8cc7\u7522\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> hourlyBorrowRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5c0f\u6642\u85c9\u6b3e\u5229\u7387")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> maxBorrowingAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u53ef\u85c9\u8cb8\u984d\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> freeBorrowingAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u514d\u606f\u501f\u8cb8\u984d\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> borrowAmount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5df2\u7528\u501f\u8cb8\u984d\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> availableToBorrow"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6236\u5269\u9918\u53ef\u85c9\u984d\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> borrowable"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u53ef\u85c9\u8cb8\u7684\u5e63\u7a2e, ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),": \u662f. ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),": \u5426")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> marginCollateral"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4f5c\u70ba\u4fdd\u8b49\u91d1\u62b5\u62bc\u5e63\u7a2e, ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),": \u662f. ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),": \u5426")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> collateralRatio"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62b5\u62bc\u54c1\u5e63\u7a2e\u6298\u7b97\u70ba\u4fdd\u8b49\u91d1\u7684\u6298\u7b97\u7387")))),(0,a.kt)("a",{href:"/api-explorer/v5/account/collateral-info"},(0,a.kt)(d,{mdxType:"Button"},"\u904b\u884c\u5be6\u4f8b >>")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)(m,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(s,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/account/collateral-info?currency=BTC HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672127952719\nX-BAPI-RECV-WINDOW: 5000\n"))),(0,a.kt)(s,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.get_collateral_info(\n    currency="BTC",\n))\n')))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "borrowAmount": "0",\n                "availableToBorrow": "2.5",\n                "freeBorrowingAmount": "0",\n                "borrowable": true,\n                "currency": "BTC",\n                "maxBorrowingAmount": "2.5",\n                "hourlyBorrowRate": "0.00000212",\n                "marginCollateral": true,\n                "collateralRatio": "0.95"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672127953899\n}\n')))}f.isMDXComponent=!0}}]);