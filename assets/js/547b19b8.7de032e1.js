"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[29217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Set Disconnect Cancel All",sidebar_label:"Set Disconnect Cancel All",sidebar_position:11,slug:"/derivatives/unified/dcp"},o=void 0,s={unversionedId:"v3/derivatives/rest-unified/account/dcp",id:"v3/derivatives/rest-unified/account/dcp",title:"Set Disconnect Cancel All",description:"What is Disconnection Protect (DCP)?",source:"@site/docs/v3/derivatives/rest-unified/account/dcp.mdx",sourceDirName:"v3/derivatives/rest-unified/account",slug:"/derivatives/unified/dcp",permalink:"/docs/derivatives/unified/dcp",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Set Disconnect Cancel All",sidebar_label:"Set Disconnect Cancel All",sidebar_position:11,slug:"/derivatives/unified/dcp"},sidebar:"v3SideBar",previous:{title:"Account Info",permalink:"/docs/derivatives/unified/usc-account-info"},next:{title:"Get DCP Info",permalink:"/docs/derivatives/unified/get-dcp"}},c={},l=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h2",{parentName:"admonition",id:"what-is-disconnection-protect-dcp"},"What is Disconnection Protect (DCP)?"),(0,a.kt)("p",{parentName:"admonition"},'Based on the websocket private connection and heartbeat mechanism, Bybit provides disconnection protection function. The\ntiming starts from the first disconnection. If the Bybit server does not receive the reconnection from the client for\nmore than 10 (default) seconds and resumes the heartbeat "ping", then the client is in the state of "disconnection protect",\nall active ',(0,a.kt)("strong",{parentName:"p"},"option"),' orders of the client will be cancelled automatically. If within 10 seconds, the client reconnects\nand resumes the heartbeat "ping", the timing will be reset and restarted at the next disconnection.'),(0,a.kt)("h2",{parentName:"admonition",id:"how-to-enable-dcp"},"How to enable DCP"),(0,a.kt)("p",{parentName:"admonition"},"If you need to turn it on/off, you can contact your client manager for consultation and application. The default\ntime window is 10 seconds."),(0,a.kt)("h2",{parentName:"admonition",id:"applicable"},"Applicable"),(0,a.kt)("p",{parentName:"admonition"},"Effective for ",(0,a.kt)("strong",{parentName:"p"},"options")," only.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"After the request is successfully sent, the system needs a certain time to take effect. It is recommended to query or set again after 10 seconds")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/derivatives/v3/private/dcp-set-timewindow")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"timeWindow"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Disconnection timing window time. ","[",(0,a.kt)("inlineCode",{parentName:"td"},"10"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"300"),"]",", unit: second")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /derivatives/v3/private/dcp-set-timewindow HTTP/1.1\nHost: api.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1675852742375\nX-BAPI-RECV-WINDOW: 50000\nContent-Type: application/json\n\n{\n  "timeWindow": 40\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success"\n}\n')))}d.isMDXComponent=!0}}]);