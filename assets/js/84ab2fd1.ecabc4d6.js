"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9113],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>d});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(i),d=r,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return i?n.createElement(y,o(o({ref:t},m),{},{components:i})):n.createElement(y,o({ref:t},m))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},79283:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const a={title:"Rate Limit",sidebar_label:"Rate Limit",slug:"/spot/rate-limit"},o=void 0,l={unversionedId:"v3/spot/rate-limit",id:"v3/spot/rate-limit",title:"Rate Limit",description:"IP Rate Limit",source:"@site/docs/v3/spot/rate-limit.mdx",sourceDirName:"v3/spot",slug:"/spot/rate-limit",permalink:"/docs/spot/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"Rate Limit",sidebar_label:"Rate Limit",slug:"/spot/rate-limit"},sidebar:"v3SideBar",previous:{title:"Wallet",permalink:"/docs/spot/ws-private/wallet"},next:{title:"Enums Definitions",permalink:"/docs/spot/enum"}},p={},s=[{value:"IP Rate Limit",id:"ip-rate-limit",level:2},{value:"API Rate Limit",id:"api-rate-limit",level:2},{value:"API Rate Limit Table",id:"api-rate-limit-table",level:3},{value:"How to increase API Limit",id:"how-to-increase-api-limit",level:2}],m={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ip-rate-limit"},"IP Rate Limit"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you receive an ",(0,r.kt)("strong",{parentName:"p"},"HTTP 403")," (Access Denied) response, your IP has been either temporarily or permanently banned.\n",(0,r.kt)("strong",{parentName:"p"},"You should immediately review the below guidelines to ensure your application does not continue to violate the limit."),"\nIf you are still banned after 30 minutes, you likely have a permanent ban.")),(0,r.kt)("p",null,"We do not recommend running your application at the very edge of these limits in case abnormal network activity results\nin an unexpected violation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," method (shared):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"120 requests per second for 5 consecutive seconds")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All traffic to ",(0,r.kt)("inlineCode",{parentName:"p"},"api.bybit.com")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api.bytick.com")," share this limit regardless of if it accesses Spot, Derivatives or Options.")),(0,r.kt)("p",null,"After violating the limit your IP will be banned for a set period of time (usually 30 minutes). Continually violating\nthe limit will result in a permanent ban. We cannot undo permanent bans or shorten temporary bans."),(0,r.kt)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you receive ",(0,r.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"')," in the JSON response, you have hit the API rate limit.")),(0,r.kt)("p",null,"The API rate limit is based on the ",(0,r.kt)("strong",{parentName:"p"},"rolling time window per second and UID"),". In other words, it is per second per UID.\nEvery request to the API returns response header shown in the code panel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - your remaining requests for current endpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - your current limit for current endpoint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - the timestamp indicating when your request limit resets if you have exceeded your rate_limit. Otherwise, this is just the current timestamp.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Http Response Header Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,r.kt)("h3",{id:"api-rate-limit-table"},"API Rate Limit Table"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Limit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cross margin trade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5 req/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"All other private endpoints"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20 req/s"))))),(0,r.kt)("h2",{id:"how-to-increase-api-limit"},"How to increase API Limit"),(0,r.kt)("p",null,"Please email ",(0,r.kt)("a",{parentName:"p",href:"mailto:api@bybit.com"},"api@bybit.com")," with the following information. We will reply within 1-4 working days:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your name and your company details"),(0,r.kt)("li",{parentName:"ol"},"Your Bybit UID or registered email, and the assets you are trading"),(0,r.kt)("li",{parentName:"ol"},"General description of your trading strategy and reasons for higher rate limits"),(0,r.kt)("li",{parentName:"ol"},"Screenshot of previous monthly trading volume (maker/taker) on other platforms"),(0,r.kt)("li",{parentName:"ol"},"Optional: your order history in CSV format")))}u.isMDXComponent=!0}}]);