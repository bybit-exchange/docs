"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[14491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),c=n,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"Merged Order Book",sidebar_label:"Merged Order Book",sidebar_position:2.5,slug:"/spot/public/merge-depth"},o=void 0,i={unversionedId:"v3/spot/rest-public/merge-orderbook",id:"v3/spot/rest-public/merge-orderbook",title:"Merged Order Book",description:"HTTP Request",source:"@site/docs/v3/spot/rest-public/merge-orderbook.mdx",sourceDirName:"v3/spot/rest-public",slug:"/spot/public/merge-depth",permalink:"/docs/spot/public/merge-depth",draft:!1,tags:[],version:"current",sidebarPosition:2.5,frontMatter:{title:"Merged Order Book",sidebar_label:"Merged Order Book",sidebar_position:2.5,slug:"/spot/public/merge-depth"},sidebar:"v3SideBar",previous:{title:"Order Book",permalink:"/docs/spot/public/depth"},next:{title:"Kline",permalink:"/docs/spot/public/kline"}},p={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("code",null,"/spot/v3/public/quote/depth/merged")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the trading pair")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scale"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Precision of the merged orderbook, 1 means 1 digit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Limit for data size. ","[",(0,n.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"200"),"]",". Default: ",(0,n.kt)("inlineCode",{parentName:"td"},"100"))))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Current time, unit in millisecond")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bids"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid price and quantity, with best bid prices ranked from top to bottom")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask price and quantity, with best ask prices ranked from top to bottom")))),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-http"},"curl --location --request GET 'https://api-testnet.bybit.com/spot/v3/public/quote/depth/merged?symbol=BTCUSDT&scale=1&limit=1'\n")),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "retCode": 0,\n  "retMsg": "OK",\n  "result": {\n    "time": 1659429646349,\n    "bids": [\n      [\n        "21170.1",\n        "0.049096"\n      ]\n    ],\n    "asks": [\n      [\n        "21250",\n        "0.00211"\n      ]\n    ]\n  },\n  "retExtInfo": {},\n  "time": 1659429646652\n}\n')))}d.isMDXComponent=!0}}]);