"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[81832],{3905:(t,l,n)=>{n.d(l,{Zo:()=>s,kt:()=>p});var e=n(67294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function a(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function k(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function d(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=e.createContext({}),i=function(t){var l=e.useContext(u),n=l;return t&&(n="function"==typeof t?t(l):k(k({},l),t)),n},s=function(t){var l=i(t.components);return e.createElement(u.Provider,{value:l},t.children)},o={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},c=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),c=i(n),p=r,m=c["".concat(u,".").concat(p)]||c[p]||o[p]||a;return n?e.createElement(m,k(k({ref:l},s),{},{components:n})):e.createElement(m,k({ref:l},s))}));function p(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=n.length,k=new Array(a);k[0]=c;var d={};for(var u in l)hasOwnProperty.call(l,u)&&(d[u]=l[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,k[1]=d;for(var i=2;i<a;i++)k[i]=n[i];return e.createElement.apply(null,k)}return e.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38451:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>u,contentTitle:()=>k,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var e=n(87462),r=(n(67294),n(3905));const a={title:"\u983b\u7387\u9650\u5236",sidebar_label:"\u983b\u7387\u9650\u5236"},k=void 0,d={unversionedId:"v5/rate-limit",id:"v5/rate-limit",title:"\u983b\u7387\u9650\u5236",description:"IP\u9650\u983b",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/rate-limit.mdx",sourceDirName:"v5",slug:"/v5/rate-limit",permalink:"/docs/zh-TW/v5/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"\u983b\u7387\u9650\u5236",sidebar_label:"\u983b\u7387\u9650\u5236"},sidebar:"v5SideBar",previous:{title:"\u65b7\u7dda\u4fdd\u8b77 (\u671f\u6b0a)",permalink:"/docs/zh-TW/v5/websocket/private/dcp"},next:{title:"\u679a\u8209\u5b9a\u7fa9",permalink:"/docs/zh-TW/v5/enum"}},u={},i=[{value:"IP\u9650\u983b",id:"ip\u9650\u983b",level:2},{value:"\u8cec\u6236\u983b\u7387\u9650\u88fd",id:"\u8cec\u6236\u983b\u7387\u9650\u88fd",level:2},{value:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868",id:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868",level:3},{value:"\u4ea4\u6613",id:"\u4ea4\u6613",level:4},{value:"\u6301\u5009",id:"\u6301\u5009",level:4},{value:"\u5e33\u6236",id:"\u5e33\u6236",level:4},{value:"\u8cc7\u7522",id:"\u8cc7\u7522",level:4},{value:"\u7528\u6236",id:"\u7528\u6236",level:4},{value:"\u69d3\u687f\u4ee3\u5e63",id:"\u69d3\u687f\u4ee3\u5e63",level:4},{value:"\u5168\u5009\u69d3\u687f (\u7d71\u4e00\u5e33\u6236)",id:"\u5168\u5009\u69d3\u687f-\u7d71\u4e00\u5e33\u6236",level:4},{value:"\u5168\u5009\u69d3\u687f (\u666e\u901a\u5e33\u6236)",id:"\u5168\u5009\u69d3\u687f-\u666e\u901a\u5e33\u6236",level:4},{value:"\u4e0d\u540cVIP/PRO\u7b49\u7d1a\u7684\u63a5\u53e3\u9650\u983b\u898f\u5247",id:"\u4e0d\u540cvippro\u7b49\u7d1a\u7684\u63a5\u53e3\u9650\u983b\u898f\u5247",level:2},{value:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd",id:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd",level:2}],s=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",l)},o=s("Tabs"),c=s("TabItem"),p={toc:i};function m(t){let{components:l,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},p,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ip\u9650\u983b"},"IP\u9650\u983b"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6536\u5230",(0,r.kt)("strong",{parentName:"p"},"HTTP 403"),"\uff08\u62d2\u7d55\u8a2a\u554f\uff09\u97ff\u61c9, \u60a8\u7684 IP \u5df2\u88ab\u66ab\u6642\u6216\u6c38\u4e45\u7981\u6b62\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u60a8\u61c9\u7acb\u5373\u67e5\u770b\u4ee5\u4e0b\u6307\u5357\uff0c\u4ee5\u78ba\u4fdd\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\u4e0d\u6703\u7e7c\u7e8c\u9055\u53cd\u9650\u5236"),"\u3002\u5982\u679c\u60a8\u5728 30 \u5206\u9418\u5f8c\n\u4ecd\u88ab\u7981\u6b62\uff0c\u5247\u60a8\u53ef\u80fd\u6703\u88ab\u6c38\u4e45\u7981\u6b62\u3002")),(0,r.kt)("p",null,"\u6211\u5011\u4e0d\u5efa\u8b70\u60a8\u5728\u9019\u4e9b\u9650\u5236\u7684\u908a\u7de3\u904b\u884c\u60a8\u7684\u61c9\u7528\u7a0b\u5e8f\uff0c\u4ee5\u9632\u7570\u5e38\u7684\u7db2\u7d61\u6d3b\u52d5\u5c0e\u81f4\u610f\u5916\u9055\u898f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," \u8acb\u6c42 (\u5171\u4eab):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9023\u7e8c 5 \u79d2\u5167\u6bcf\u79d2\u4e0d\u8d85\u904e 120 \u500b\u8acb\u6c42")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u6709\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"api.bybit.com"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"api.bytick.com"),"\u7684\u6d41\u91cf\u5171\u4eab\u6b64\u9650\u5236\uff0c\u7121\u8ad6\u662f\u8a2a\u554f\u73fe\u8ca8\u3001\u671f\u8ca8\u9084\u662f\u671f\u6b0a\u3002")),(0,r.kt)("p",null,"\u9055\u53cd\u9650\u5236\u5f8c\uff0c\u60a8\u7684 IP \u5c07\u88ab\u7981\u6b62\u4e00\u6bb5\u6642\u9593\uff08\u901a\u5e38\u70ba 30 \u5206\u9418\uff09\u3002 \u6301\u7e8c\u9055\u53cd\u9650\u5236\u5c07\u5c0e\u81f4\u6c38\u4e45\u7981\u6b62\u3002 \u6211\u5011\u4e0d\u80fd\u64a4\u92b7\u6c38\u4e45\u7981\u4ee4\u6216\u7e2e\u77ed\u81e8\u6642\u7981\u4ee4\u3002"),(0,r.kt)("h2",{id:"\u8cec\u6236\u983b\u7387\u9650\u88fd"},"\u8cec\u6236\u983b\u7387\u9650\u88fd"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u6536\u5230\u9019\u6a23\u7684\u97ff\u61c9",(0,r.kt)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"'),", \u5247\u8868\u793a\u60a8\u89f8\u767c\u4e86\u5e33\u6236\u983b\u7387\u9650\u5236, \u8acb\u7b49\u5230\u983b\u7387\u9650\u5236\u91cd\u7f6e\u4ee5\u5f8c, \u518d\u7e7c\u7e8c\u767c\u9001\u8acb\u6c42\u3002")),(0,r.kt)("p",null,"Bybit\u57fa\u65bc",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u79d2\u937e"),"\u7684\u6efe\u52d5\u6642\u9593\u7a97\u53e3\u4f86\u505a\u983b\u7387\u9650\u88fd\uff0c\u4e26\u4e14\u662f\u6309",(0,r.kt)("strong",{parentName:"p"},"\u8cec\u6236"),"\uff08uid\uff09\u4f86\u505a\u5283\u5206\u9650\u88fd\uff0c\u6bcf\u6b21\u8acb\u6c42API\u97ff\u61c9\u982d(response header)\u4e2d\u90fd\u6703\u5305\u542b\u5982\u4e0b\u5b57\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - \u8a72\u63a5\u53e3\u7576\u524d\u6642\u9593\u7a97\u53e3\u5269\u4f59\u53ef\u7528\u8acb\u6c42\u6578"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - \u8a72\u63a5\u53e3\u7576\u524d\u983b\u7387\u9650\u88fd\u4e0a\u9650"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - \u5982\u679c\u60a8\u5df2\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u4e0b\u500b\u53ef\u7528\u6642\u9593\u7a97\u53e3\u7684\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09\uff0c\u5373\u4ec0\u9ebd\u6642\u5019\u53ef\u4ee5\u6062\u5fa9\u8a2a\u554f\uff1b\u5982\u679c\u60a8\u672a\u8d85\u904e\u8a72\u63a5\u53e3\u7576\u524d\u7a97\u53e3\u983b\u7387\u9650\u88fd\uff0c\u8a72\u5b57\u6bb5\u8868\u793a\u8fd4\u56de\u7684\u662f\u7576\u524d\u670d\u52d9\u5668\u6642\u9593\uff08\u6beb\u79d2).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Http \u97ff\u61c9\u982d\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,r.kt)("h3",{id:"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868"},"\u63a5\u53e3\u983b\u7387\u9650\u5236\u8868"),(0,r.kt)("h4",{id:"\u4ea4\u6613"},"\u4ea4\u6613"),(0,r.kt)(o,{groupId:"account-type",mdxType:"Tabs"},(0,r.kt)(c,{value:"classic",label:"\u7d93\u5178\u5e33\u6236",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{rowSpan:"2"},"\u8def\u5f91"),(0,r.kt)("th",{colSpan:"3",align:"center"},"\u7d93\u5178\u5e33\u6236"),(0,r.kt)("th",{rowSpan:"2"},"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"4"},"POST"),(0,r.kt)("td",null,"/v5/order/create"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-all"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"GET"),(0,r.kt)("td",null,"/v5/order/realtime"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/history"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro",label:"UTA Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{rowSpan:"2"},"\u8def\u5f91"),(0,r.kt)("th",{colSpan:"4",align:"center"},"UTA Pro"),(0,r.kt)("th",{rowSpan:"2"},"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"option"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"8"},"POST"),(0,r.kt)("td",null,"/v5/order/create"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-all"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"1/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/create-batch"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/amend-batch"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/cancel-batch"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"Y")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/disconnected-cancel-all"),(0,r.kt)("td",{colSpan:"2",align:"center"},"-"),(0,r.kt)("td",{align:"center"},"1/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"GET"),(0,r.kt)("td",null,"/v5/order/realtime"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"3",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/history"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"3",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/order/spot-borrow-check"),(0,r.kt)("td",{colSpan:"3",align:"center"},"-"),(0,r.kt)("td",{align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")))))),(0,r.kt)("h4",{id:"\u6301\u5009"},"\u6301\u5009"),(0,r.kt)(o,{groupId:"account-type",mdxType:"Tabs"},(0,r.kt)(c,{value:"classic",label:"\u7d93\u5178\u5e33\u6236",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{rowSpan:"2"},"\u8def\u5f91"),(0,r.kt)("th",{colSpan:"3",align:"center"},"\u7d93\u5178\u5e33\u6236"),(0,r.kt)("th",{rowSpan:"2"},"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"GET"),(0,r.kt)("td",null,"/v5/position/list"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/execution/list"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/position/closed-pnl"),(0,r.kt)("td",{colSpan:"2",align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro",label:"UTA Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",{rowSpan:"2"},"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{rowSpan:"2"},"\u8def\u5f91"),(0,r.kt)("th",{colSpan:"4",align:"center"},"UTA Pro"),(0,r.kt)("th",{rowSpan:"2"},"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"inverse"),(0,r.kt)("th",null,"linear"),(0,r.kt)("th",null,"option"),(0,r.kt)("th",null,"spot")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"GET"),(0,r.kt)("td",null,"/v5/position/list"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"2",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/execution/list"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{colSpan:"3",align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/position/closed-pnl"),(0,r.kt)("td",{align:"center"},"10/s"),(0,r.kt)("td",{align:"center"},"50/s"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",{align:"center"},"N")))))),(0,r.kt)("h4",{id:"\u5e33\u6236"},"\u5e33\u6236"),(0,r.kt)(o,{groupId:"account-type",mdxType:"Tabs"},(0,r.kt)(c,{value:"classic",label:"\u7d93\u5178\u5e33\u6236",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",null,"\u8def\u5f91"),(0,r.kt)("th",null),(0,r.kt)("th",null,"\u983b\u7387"),(0,r.kt)("th",null,"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"5"},"GET"),(0,r.kt)("td",{rowSpan:"2"},"/v5/account/wallet-balance"),(0,r.kt)("td",null,"accountType=SPOT"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"accountType=CONTRACT"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"/v5/account/fee-rate"),(0,r.kt)("td",null,"category=linear"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=spot"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=option"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N"))))),(0,r.kt)(c,{value:"uta-pro",label:"UTA Pro",mdxType:"TabItem"},(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",null,"\u8def\u5f91"),(0,r.kt)("th",null),(0,r.kt)("th",null,"\u983b\u7387"),(0,r.kt)("th",null,"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"9"},"GET"),(0,r.kt)("td",{rowSpan:"2"},"/v5/account/wallet-balance"),(0,r.kt)("td",null,"accountType=CONTRACT"),(0,r.kt)("td",{rowSpan:"2"},"50/s"),(0,r.kt)("td",{rowSpan:"2",align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"accountType=UNIFIED")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/borrow-history"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/collateral-info"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/coin-greeks"),(0,r.kt)("td",null),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/account/transaction-log"),(0,r.kt)("td",null,"accountType=UNIFIED"),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3"},"/v5/account/fee-rate"),(0,r.kt)("td",null,"category=linear"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=spot"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category=option"),(0,r.kt)("td",null,"5/s"),(0,r.kt)("td",{align:"center"},"N")))))),(0,r.kt)("h4",{id:"\u8cc7\u7522"},"\u8cc7\u7522"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",null,"\u8def\u5f91"),(0,r.kt)("th",null,"\u983b\u7387"),(0,r.kt)("td",null,"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"14"},"GET"),(0,r.kt)("td",null,"/v5/asset/transfer/query-asset-info"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-transfer-coin-list"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-transfer-coin-list"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-inter-transfer-list"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-sub-member-list"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-universal-transfer-list"),(0,r.kt)("td",null,"2 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/query-account-coins-balance"),(0,r.kt)("td",null,"2 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-record"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-sub-member-record"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-address"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/deposit/query-sub-member-address"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/withdraw/query-record"),(0,r.kt)("td",null,"300 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/coin/query-info"),(0,r.kt)("td",null,"2 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/exchange/order-record"),(0,r.kt)("td",null,"600 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"5"},"POST"),(0,r.kt)("td",null,"/v5/asset/transfer/inter-transfer"),(0,r.kt)("td",null,"20 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/save-transfer-sub-member"),(0,r.kt)("td",null,"20 req/min"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/transfer/universal-transfer"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/withdraw/create"),(0,r.kt)("td",null,"1 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/asset/withdraw/cancel"),(0,r.kt)("td",null,"60 req/min"),(0,r.kt)("td",null,"N")))),(0,r.kt)("h4",{id:"\u7528\u6236"},"\u7528\u6236"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",null,"\u8def\u5f91"),(0,r.kt)("th",null,"\u983b\u7387"),(0,r.kt)("td",null,"\u662f\u5426\u53ef\u63d0\u983b")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"7"},"POST"),(0,r.kt)("td",null,"v5/user/create-sub-member"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/create-sub-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/frozen-sub-member"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/update-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/update-sub-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/delete-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/delete-sub-api"),(0,r.kt)("td",null,"5 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"2"},"GET"),(0,r.kt)("td",null,"/v5/user/query-sub-members"),(0,r.kt)("td",null,"10 req/s"),(0,r.kt)("td",null,"N")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"/v5/user/query-api"),(0,r.kt)("td",null,"10 req/s"),(0,r.kt)("td",null,"N")))),(0,r.kt)("h4",{id:"\u69d3\u687f\u4ee3\u5e63"},"\u69d3\u687f\u4ee3\u5e63"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8def\u5f91"),(0,r.kt)("th",{parentName:"tr",align:null},"\u983b\u7387"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u63d0\u983b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-lever-token/order-record"),(0,r.kt)("td",{parentName:"tr",align:null},"50 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-lever-token/purchase"),(0,r.kt)("td",{parentName:"tr",align:null},"20 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-lever-token/redeem"),(0,r.kt)("td",{parentName:"tr",align:null},"20 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N"))))),(0,r.kt)("h4",{id:"\u5168\u5009\u69d3\u687f-\u7d71\u4e00\u5e33\u6236"},"\u5168\u5009\u69d3\u687f (\u7d71\u4e00\u5e33\u6236)"),(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u76ee\u524d\uff0c\u8a72\u76ee\u9304\u4e0b\u7684\u63a5\u53e3\u6c92\u6709\u983b\u7387\u9650\u5236"))),(0,r.kt)("h4",{id:"\u5168\u5009\u69d3\u687f-\u666e\u901a\u5e33\u6236"},"\u5168\u5009\u69d3\u687f (\u666e\u901a\u5e33\u6236)"),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8acb\u6c42\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8def\u5f91"),(0,r.kt)("th",{parentName:"tr",align:null},"\u983b\u7387"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u63d0\u983b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-cross-margin-trade/loan-info"),(0,r.kt)("td",{parentName:"tr",align:null},"50 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-cross-margin-trade/account"),(0,r.kt)("td",{parentName:"tr",align:null},"50 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-cross-margin-trade/orders"),(0,r.kt)("td",{parentName:"tr",align:null},"50 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-cross-margin-trade/repay-history"),(0,r.kt)("td",{parentName:"tr",align:null},"50 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-cross-margin-trade/loan"),(0,r.kt)("td",{parentName:"tr",align:null},"20 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-cross-margin-trade/repay"),(0,r.kt)("td",{parentName:"tr",align:null},"20 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/v5/spot-cross-margin-trade/switch"),(0,r.kt)("td",{parentName:"tr",align:null},"20 req/s"),(0,r.kt)("td",{parentName:"tr",align:null},"N"))))),(0,r.kt)("h2",{id:"\u4e0d\u540cvippro\u7b49\u7d1a\u7684\u63a5\u53e3\u9650\u983b\u898f\u5247"},"\u4e0d\u540cVIP/PRO\u7b49\u7d1a\u7684\u63a5\u53e3\u9650\u983b\u898f\u5247"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u8868\u683c\u4e2d\u7684\u6578\u503c\uff0c\u4ee3\u8868\u5c0d\u61c9\u7b49\u7d1a\u7684\u53ef\u7533\u8acb\u4e0a\u9650\uff0c\u4e26\u4e0d\u4ee3\u8868\u8655\u65bc\u8a72\u7b49\u7d1a\u7684\u7528\u6236\u5be6\u969b\u9ed8\u8a8d\u81ea\u52d5\u4eab\u6709\u5c0d\u61c9\u7684API Rate Limit"),(0,r.kt)("li",{parentName:"ul"},"\u7d93\u5178\u5e33\u6236\u4e0d\u652f\u6301\u4ea4\u6613USDC\u884d\u751f\u54c1"))),(0,r.kt)("admonition",{title:"\u6279\u91cf\u63a5\u53e3\u7279\u5225\u8aaa\u660e",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6279\u6b21\u8a02\u55ae\u63a5\u53e3\uff08\u5305\u62ec\u5275\u5efa\u3001\u4fee\u6539\u548c\u53d6\u6d88\uff09\u7684\u901f\u7387\u9650\u5236\u4e0d\u6703\u8207\u55ae\u4e00\u7684\u4e0b\u6539\u64a4\u8acb\u6c42\u5171\u4eab\u3002",(0,r.kt)("em",{parentName:"p"},"\u4f8b\u5982\uff0c\u55ae\u4e00\u4e0b\u55ae\u63a5\u53e3\u983b\u7387\u662f100/\u79d2, \u6279\u91cf\u4e0b\u55ae\u63a5\u53e3\u662f100/\u79d2,\uff0c\u90a3\u9ebc\u7576\u7d50\u5408\u5169\u500b\u63a5\u53e3\u4e00\u8d77\u4e0b\u55ae\u6642\uff0c\n\u5c31\u64c1\u6709200\u55ae\u6bcf\u79d2\u7684\u80fd\u529b"),"\u3002"),(0,r.kt)("h4",{parentName:"admonition",id:"\u50c5categorylinear\u6642"},"\u50c5category=linear\u6642"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6279\u91cf\u4e0b\u55ae\u7684\u63a5\u53e3\uff0capi rate limit\uff1a\u63a5\u53e3\u7684\u983b\u6b21\uff0c\u9084\u662f\u7d71\u4e00\u6cbf\u7528\u7576\u524d\u914d\u7f6e\uff0c\u4f46\u662f\u8a08\u6578\u6d88\u8017\u6703\u6839\u64da\u5be6\u969b\u7684\u8a02\u55ae\u6578\u4f86\u6d88\u8017\u3002\uff08\u6d88\u8017\u6578 = \u8acb\u6c42\u6578 * \u8acb\u6c42\u4e2d\u5305\u542b\u7684\u8a02\u55ae\u6578\uff09\uff0c\u696d\u52d9\u7dda\u914d\u7f6e\u76f8\u4e92\u7368\u7acb\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6279\u91cf\u63a5\u53e3\u5141\u8a311-10orders/request\uff0c\u4f8b\u5982\uff0c\u6279\u91cf\u4e0b\u55ae\u8acb\u6c42\u4e00\u6b21\uff0c\u5305\u542b5\u500borders\uff0c\u5247\u672c\u6b21\u8acb\u6c42limit\u6578\u91cf\u6d88\u80175\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u82e51s\u5167\u7684\u6700\u5f8c\u4e00\u6b21\u8acb\u6c42\u7684\u6279\u91cf\u8a02\u55ae\uff0c\u90e8\u5206\u8d85\u9650\uff0c\u5247\u8d85\u904e\u7684\u90e8\u5206\u6703\u5931\u6557\uff08\u5831\u932f\u8d85\u904e\u4e0a\u9650\uff09\uff0c\u672a\u8d85\u904e\u7684\u90e8\u5206\u6703\u6210\u529f\u3002\u4f8b\u5982\uff0c\u90191s\u4e2d\uff0climit\u9084\u52695\uff0c\u4f46\u662f\u6b64\u6642\u4e0b\u4e86\u4e00\u500b\u5305\u542b8\u500borders\u7684\u6279\u91cf\u8acb\u6c42\uff0c\n\u90a3\u9ebc\u524d5\u500borders\u6703\u4e0b\u55ae\u6210\u529f\uff0c\u7b2c6-8\u7684orders\uff0c\u6703\u5831\u932f\u8d85\u904e\u4e0a\u9650\uff0c\u4e0b\u55ae\u5931\u6557\u3002")))),(0,r.kt)("span",{class:"blocky_table"},(0,r.kt)("table",{class:"custom_table"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",{colSpan:"3",align:"center"},"\u7d93\u5178\u5e33\u6236"),(0,r.kt)("th",{colSpan:"3"},"UTA Pro")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7b49\u7d1a\\\u7522\u54c1"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u671f\u8ca8")),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u671f\u6b0a")),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u73fe\u8ca8")),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u671f\u8ca8")),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u671f\u6b0a")),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u73fe\u8ca8"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u9ed8\u8a8d"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"10/s"),(0,r.kt)("td",null,"20/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 1"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"25/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"20/s"),(0,r.kt)("td",null,"25/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 2"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"30/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"30/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 3"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 4"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"VIP 5"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u81f3\u5c0aVIP"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"60/s"),(0,r.kt)("td",null,"40/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO1"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"50/s"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"150/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO2"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"150/s"),(0,r.kt)("td",null,"75/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO3"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"250/s"),(0,r.kt)("td",null,"250/s"),(0,r.kt)("td",null,"250/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO4"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PRO5"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"200/s"),(0,r.kt)("td",null,"100/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s"),(0,r.kt)("td",null,"300/s")))),(0,r.kt)("h2",{id:"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd"},"\u5982\u4f55\u63d0\u9ad8\u983b\u7387\u9650\u88fd"),(0,r.kt)("p",null,"\u8acb\u806f\u7e6b\u60a8\u7684\u5ba2\u6236\u7d93\u7406\u6216\u8005\u767c\u9001\u90f5\u4ef6\u5230 ",(0,r.kt)("a",{parentName:"p",href:"mailto:institutional_services@bybit.com"},"institutional_services@bybit.com"),"\uff0c\u6211\u5011\u6703\u5728 1-4 \u500b\u5de5\u4f5c\u65e5\u5167\u7b54\u5fa9\u3002\u90f5\u4ef6\u5167\u5bb9\u5fc5\u9808\u5305\u542b\u4ee5\u4e0b\u5167\u5bb9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u60a8\u7684\u59d3\u540d\u548c\u516c\u53f8\u540d\u7a31\u548c\u7c21\u4ecb"),(0,r.kt)("li",{parentName:"ol"},"\u60a8\u7684bybit \u8cec\u865fuid\u6216\u8a3b\u518a\u90f5\u7bb1\u624b\u6a5f\u865f,\u4ee5\u53ca\u60a8\u8981\u7533\u8acb\u63d0\u983b\u7684\u4ea4\u6613\u5c0d"),(0,r.kt)("li",{parentName:"ol"},"\u60a8\u4e0a\u500b\u6708\u7684\u4ea4\u6613\u91cf\uff08\u5403\u55ae/\u639b\u55ae\uff09\u4e26\u63d0\u4f9b\u622a\u5716"),(0,r.kt)("li",{parentName:"ol"},"\u7c21\u55ae\u4ecb\u7d39\u60a8\u7684\u4ea4\u6613\u7b56\u7565\u548c\u70ba\u4ec0\u9ebd\u9700\u8981\u66f4\u9ad8\u9650\u983b"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u53ef\u4ee5\uff0c\u8acb\u63d0\u4f9b\u60a8\u7684\u6210\u4ea4\u8a18\u9304csv\u6587\u6a94")))}m.isMDXComponent=!0}}]);