"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,b=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Get Sub UID List",sidebar_label:"Get Sub UID List",sidebar_position:3,slug:"/account-asset/subuid-list"},s=void 0,i={unversionedId:"v3/account-asset/user/subuid-list",id:"v3/account-asset/user/subuid-list",title:"Get Sub UID List",description:"Get all sub uid of master account. Use master user's api key only.",source:"@site/docs/v3/account-asset/user/subuid-list.mdx",sourceDirName:"v3/account-asset/user",slug:"/account-asset/subuid-list",permalink:"/docs-v2/account-asset/subuid-list",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Get Sub UID List",sidebar_label:"Get Sub UID List",sidebar_position:3,slug:"/account-asset/subuid-list"},sidebar:"v3SideBar",previous:{title:"Create Sub UID API Key",permalink:"/docs-v2/account-asset/create-subuid-apikey"},next:{title:"Froze Sub UID",permalink:"/docs-v2/account-asset/froze-subuid"}},o={},u=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get all sub uid of master account. Use ",(0,a.kt)("strong",{parentName:"p"},"master user's api key")," ",(0,a.kt)("strong",{parentName:"p"},"only"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The API key must own one of permissions will be allowed to call the following API endpoint."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'master API key: "Account Transfer", "Subaccount Transfer", "Withdrawal"'))),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/user/v3/private/query-sub-members")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"subMembers"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"uid"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sub user Id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"username"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memberType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"),": normal sub account, ",(0,a.kt)("inlineCode",{parentName:"td"},"6"),": custodial sub account")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The status of the user account",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": normal"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"2"),": login banned"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"4"),": frozen ")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"remark"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The remark")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /user/v3/private/create-sub-member HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: xxxxxxxxxxxx\nX-BAPI-API-KEY: xxxxxxxxxxxx\nX-BAPI-TIMESTAMP: 1671174837503\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\nContent-Length: 109\n\n{\n    "username": "testsubaccount",\n    "memberType": 1,\n    "switch": 1,\n    "note": "testnet subaccount"\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "uid": "111111111",\n        "username": "testsubaccount",\n        "memberType": 1,\n        "status": 1,\n        "remark": "testnet subaccount"\n    },\n    "retExtInfo": {},\n    "time": 1671174837668\n}\n')))}m.isMDXComponent=!0}}]);