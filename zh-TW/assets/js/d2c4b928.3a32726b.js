"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[79796],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84814:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u8a2d\u7f6e\u5145\u503c\u5e33\u6236",sidebar_label:"\u8a2d\u7f6e\u5145\u503c\u5e33\u6236",sidebar_position:1.5,slug:"/account-asset/set-deposit-acct"},i=void 0,o={unversionedId:"v3/account-asset/withdraw-deposit/set-deposit-acct",id:"v3/account-asset/withdraw-deposit/set-deposit-acct",title:"\u8a2d\u7f6e\u5145\u503c\u5e33\u6236",description:"\u8a2d\u7f6e\u5145\u503c\u5f8c\u7684\u81ea\u52d5\u8f49\u5165\u5e33\u6236\u985e\u578b\u3002\u8a72\u529f\u80fd\u8207\u7db2\u9801\u7aef-\u8a2d\u7f6e-\u5145\u503c\u4fdd\u6301\u4e00\u81f4\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account-asset/withdraw-deposit/set-deposit-acct.mdx",sourceDirName:"v3/account-asset/withdraw-deposit",slug:"/account-asset/set-deposit-acct",permalink:"/docs/zh-TW/account-asset/set-deposit-acct",draft:!1,tags:[],version:"current",sidebarPosition:1.5,frontMatter:{title:"\u8a2d\u7f6e\u5145\u503c\u5e33\u6236",sidebar_label:"\u8a2d\u7f6e\u5145\u503c\u5e33\u6236",sidebar_position:1.5,slug:"/account-asset/set-deposit-acct"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5145\u503c\u76f8\u95dc\u7684\u898f\u683c",permalink:"/docs/zh-TW/account-asset/deposit-spec"},next:{title:"\u67e5\u8a62\u5145\u503c\u8a18\u9304 (\u93c8\u4e0a)",permalink:"/docs/zh-TW/account-asset/deposit-record"}},p={},c=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8a2d\u7f6e\u5145\u503c\u5f8c\u7684\u81ea\u52d5\u8f49\u5165\u5e33\u6236\u985e\u578b\u3002\u8a72\u529f\u80fd\u8207",(0,r.kt)("a",{href:"https://www.bybit.com/app/user/settings"},"\u7db2\u9801\u7aef"),"-\u8a2d\u7f6e-\u5145\u503c\u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u8cc7\u91d1\u6703\u9ed8\u8a8d\u5145\u503c\u81f3\u8cc7\u91d1\u5e33\u6236, \u901a\u904e\u8a72\u63a5\u53e3\u8a2d\u7f6e\u81ea\u52d5\u5283\u8f49\u5e33\u6236\u5f8c\uff0c\u7cfb\u7d71\u5c07\u6703\u81ea\u52d5\u5283\u8f49\u81f3\u76ee\u6a19\u5e33\u6236\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u50c5\u652f\u6301",(0,r.kt)("strong",{parentName:"li"},"\u4e3b\u5e33\u865f"),"\u8abf\u7528\u3002"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u7d71\u4e00\u4ea4\u6613\u5e33\u6236(UTA)\u64c1\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"FUND"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UNIFIED"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTRACT"),"(\u53cd\u5411\u671f\u8ca8\u9322\u5305), ",(0,r.kt)("inlineCode",{parentName:"li"},"SPOT"),"(\u5c07\u57282\u6708\u5e95\u5408\u4f75\u5165UNIFIED\u9322\u5305)"),(0,r.kt)("li",{parentName:"ul"},"\u7d71\u4e00\u4fdd\u8b49\u91d1\u5e33\u6236(UMA)\u64c1\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"FUND"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UNIFIED"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTRACT"),"(\u53cd\u5411\u671f\u8ca8\u9322\u5305), ",(0,r.kt)("inlineCode",{parentName:"li"},"SPOT")),(0,r.kt)("li",{parentName:"ul"},"\u666e\u901a\u5e33\u6236\u64c1\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"FUND"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OPTION"),"(USDC\u9322\u5305), ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTRACT"),"(\u671f\u8ca8\u9322\u5305), ",(0,r.kt)("inlineCode",{parentName:"li"},"SPOT")))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/asset/v3/private/deposit/deposit-to-account")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"enum#accounttype"},"accountType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e33\u6236\u985e\u578b ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"UNIFIED")),(0,r.kt)("li",null,(0,r.kt)("code",null,"SPOT")),(0,r.kt)("li",null,(0,r.kt)("code",null,"OPTION")),(0,r.kt)("li",null,(0,r.kt)("code",null,"CONTRACT")),(0,r.kt)("li",null,(0,r.kt)("code",null,"FUND"))))))),(0,r.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8acb\u6c42\u72c0\u614b: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"1"),": \u4fee\u6539\u6210\u529f"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"0"),": \u4fee\u6539\u5931\u6557")))))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /asset/v3/private/deposit/deposit-to-account HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXXX\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1676887913670\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\n\n{\n    "accountType": "CONTRACT"\n}\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "status": 1\n    },\n    "retExtInfo": {},\n    "time": 1676887914363\n}\n')))}u.isMDXComponent=!0}}]);