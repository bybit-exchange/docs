"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[85836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Delete Sub API Key",sidebar_label:"Delete Sub API Key",sidebar_position:9},i=void 0,l={unversionedId:"v5/user/rm-sub-apikey",id:"v5/user/rm-sub-apikey",title:"Delete Sub API Key",description:"Delete the api key of sub account. Use the sub api key pending to be delete to call the endpoint or use the master api key",source:"@site/docs/v5/user/rm-sub-apikey.mdx",sourceDirName:"v5/user",slug:"/v5/user/rm-sub-apikey",permalink:"/docs/v5/user/rm-sub-apikey",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Delete Sub API Key",sidebar_label:"Delete Sub API Key",sidebar_position:9},sidebar:"v5SideBar",previous:{title:"Delete Master API Key",permalink:"/docs/v5/user/rm-master-apikey"},next:{title:"Get Affiliate User Info",permalink:"/docs/v5/user/affiliate-info"}},s={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("Tabs"),c=u("TabItem"),d={toc:p};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete the api key of sub account. Use the sub api key pending to be delete to call the endpoint or use the master api key\nto delete corresponding sub account api key"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The API key must have one of the below permissions in order to call this endpoint."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'sub API key: "Account Transfer", "Sub Member Transfer"'),(0,a.kt)("li",{parentName:"ul"},'master API Key: "Account Transfer", "Sub Member Transfer", "Withdrawal"'))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"BE CAREFUL! The Sub account API key will be invalid immediately after calling the endpoint.")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/v5/user/delete-sub-api")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"apikey"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sub account api key ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"You must pass this param when you use master account manage sub account api key settings"),(0,a.kt)("li",null,"If you use corresponding sub uid api key call this endpoint, ",(0,a.kt)("inlineCode",{parentName:"td"},"apikey")," param cannot be passed, otherwise throwing an error")))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)(m,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.kt)(c,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"POST /v5/user/delete-sub-api HTTP/1.1\nHost: api.bybit.com\nX-BAPI-API-KEY: XXXXXX\nX-BAPI-TIMESTAMP: 1676431922953\nX-BAPI-RECV-WINDOW: 5000\nX-BAPI-SIGN: XXXXXX\nContent-Type: application/json\n\n{\n\n}\n"))),(0,a.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.delete_sub_api_key())\n')))),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1676431924719\n}\n')))}b.isMDXComponent=!0}}]);