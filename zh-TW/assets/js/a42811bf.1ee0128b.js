"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6021],{3905:(t,l,e)=>{e.d(l,{Zo:()=>s,kt:()=>p});var n=e(67294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function u(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?u(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function i(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var k=n.createContext({}),d=function(t){var l=n.useContext(k),e=l;return t&&(e="function"==typeof t?t(l):a(a({},l),t)),e},s=function(t){var l=d(t.components);return n.createElement(k.Provider,{value:l},t.children)},o={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,u=t.originalType,k=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=d(e),p=r,m=c["".concat(k,".").concat(p)]||c[p]||o[p]||u;return e?n.createElement(m,a(a({ref:l},s),{},{components:e})):n.createElement(m,a({ref:l},s))}));function p(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=e.length,a=new Array(u);a[0]=c;var i={};for(var k in l)hasOwnProperty.call(l,k)&&(i[k]=l[k]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var d=2;d<u;d++)a[d]=e[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},85162:(t,l,e)=>{e.d(l,{Z:()=>a});var n=e(67294),r=e(86010);const u="tabItem_Ymn6";function a(t){let{children:l,hidden:e,className:a}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(u,a),hidden:e},l)}},65488:(t,l,e)=>{e.d(l,{Z:()=>p});var n=e(87462),r=e(67294),u=e(86010),a=e(72389),i=e(67392),k=e(7094),d=e(12466);const s="tabList__CuJ",o="tabItem_LNqP";function c(t){var l;const{lazy:e,block:a,defaultValue:c,values:p,groupId:m,className:g}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??b.map((t=>{let{props:{value:l,label:e,attributes:n}}=t;return{value:l,label:e,attributes:n}})),h=(0,i.l)(v,((t,l)=>t.value===l.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(l=b.find((t=>t.props.default)))?void 0:l.props.value)??b[0].props.value;if(null!==y&&!v.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:P}=(0,k.U)(),[T,N]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=m){const t=f[m];null!=t&&t!==T&&v.some((l=>l.value===t))&&N(t)}const E=t=>{const l=t.currentTarget,e=x.indexOf(l),n=v[e].value;n!==T&&(O(l),N(n),null!=m&&P(m,String(n)))},I=t=>{var l;let e=null;switch(t.key){case"ArrowRight":{const l=x.indexOf(t.currentTarget)+1;e=x[l]??x[0];break}case"ArrowLeft":{const l=x.indexOf(t.currentTarget)-1;e=x[l]??x[x.length-1];break}}null==(l=e)||l.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},g)},v.map((t=>{let{value:l,label:e,attributes:a}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===l?0:-1,"aria-selected":T===l,key:l,ref:t=>x.push(t),onKeyDown:I,onFocus:E,onClick:E},a,{className:(0,u.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":T===l})}),e??l)}))),e?(0,r.cloneElement)(b.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,l)=>(0,r.cloneElement)(t,{key:l,hidden:t.props.value!==T})))))}function p(t){const l=(0,a.Z)();return r.createElement(c,(0,n.Z)({key:String(l)},t))}},41028:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>s,contentTitle:()=>k,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=e(87462),r=(e(67294),e(3905)),u=e(65488),a=e(85162);const i={title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_position:6},k=void 0,d={unversionedId:"v5/market/tickers",id:"v5/market/tickers",title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",description:"\u53ef\u7372\u53d6\u5230\u5feb\u7167\u7684\u6700\u65b0\u5e02\u5834\u50f9\u683c\uff0c\u6700\u4f73\u8cb7\u8ce3\u50f9\u683c\uff0c\u4ee5\u53ca\u904e\u53bb\u6642\u9593\u5167\u7684\u4ea4\u6613\u91cf\u7b49.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v5/market/tickers.mdx",sourceDirName:"v5/market",slug:"/v5/market/tickers",permalink:"/docs-v2/zh-TW/v5/market/tickers",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_position:6},sidebar:"v5SideBar",previous:{title:"Order Book (\u6df1\u5ea6)",permalink:"/docs-v2/zh-TW/v5/market/orderbook"},next:{title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",permalink:"/docs-v2/zh-TW/v5/market/history-fund-rate"}},s={},o=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],c={toc:o};function p(t){let{components:l,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53ef\u7372\u53d6\u5230\u5feb\u7167\u7684\u6700\u65b0\u5e02\u5834\u50f9\u683c\uff0c\u6700\u4f73\u8cb7\u8ce3\u50f9\u683c\uff0c\u4ee5\u53ca\u904e\u53bb\u6642\u9593\u5167\u7684\u4ea4\u6613\u91cf\u7b49."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u73fe\u8ca8 / \u6b63\u5411\u5408\u7d04 / \u53cd\u5411\u5408\u7d04 / \u671f\u6b0a"))),(0,r.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/market/tickers")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.kt)("inlineCode",{parentName:"td"},"spot"),",",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),",",(0,r.kt)("inlineCode",{parentName:"td"},"option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e. \u50c5",(0,r.kt)("inlineCode",{parentName:"td"},"option"),"\u6709\u6548, ",(0,r.kt)("inlineCode",{parentName:"td"},"baseCoin"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),"\u5fc5\u50b3\u5176\u4e2d\u4e00\u500b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expDate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5230\u671f\u65e5. \u8209\u4f8b, 25DEC22. \u50c5",(0,r.kt)("inlineCode",{parentName:"td"},"option"),"\u6709\u6548")))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)(u.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"future",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6307\u6578\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"1\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cc7\u91d1\u8cbb\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4e0b\u6b21\u7d50\u7b97\u8cc7\u91d1\u8cbb\u7528\u7684\u6642\u9593 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> predictedDeliveryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u9810\u8a08\u4ea4\u5272\u50f9\u683c. \u4ea4\u5272\u524d30\u5206\u9418\u6709\u503c")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> basisRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u5272\u5408\u7d04\u57fa\u5dee\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryFeeRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u5272\u8cbb\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> deliveryTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4ea4\u5272\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")))),(0,r.kt)(a.Z,{value:"option",label:"Option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Iv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9\u5c0d\u61c9\u7684iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Iv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9\u5c0d\u61c9\u7684iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6307\u6578\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markIv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6a19\u8a18\u50f9\u683c\u5c0d\u61c9\u7684iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> underlyingPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e95\u5c64\u8cc7\u7522\u7684\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> totalVolume"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7e3d\u6210\u4ea4\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> totalTurnover"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7e3d\u6210\u4ea4\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> delta"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> gamma"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Gamma ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> vega"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Vega ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> theta"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Theta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> predictedDeliveryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u9810\u4f30\u4ea4\u5272\u50f9. \u4ea4\u5272\u524d30\u5206\u9418\u6709\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> change24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u904e\u53bb24\u5c0f\u6642\u7684\u8b8a\u5316 ")))),(0,r.kt)(a.Z,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"category"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> usdIndexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"USD\u6307\u6578\u50f9\u683c\uff0c\u53ef\u4ee5\u70ba\u7a7a "))))),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(u.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"console-inverse",label:"Inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/tickers?category=inverse&symbol=BTCUSD HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(a.Z,{value:"console-option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/tickers?category=option&symbol=BTC-30DEC22-18000-C HTTP/1.1\nHost: api-testnet.bybit.com\n"))),(0,r.kt)(a.Z,{value:"console-spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET /v5/market/tickers?category=spot&symbol=BTCUSDT HTTP/1.1\nHost: api-testnet.bybit.com\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(u.Z,{mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"js inverse",label:"Inverse",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "inverse",\n        "list": [\n            {\n                "symbol": "BTCUSD",\n                "lastPrice": "16597.00",\n                "indexPrice": "16598.54",\n                "markPrice": "16596.00",\n                "prevPrice24h": "16464.50",\n                "price24hPcnt": "0.008047",\n                "highPrice24h": "30912.50",\n                "lowPrice24h": "15700.00",\n                "prevPrice1h": "16595.50",\n                "openInterest": "373504107",\n                "openInterestValue": "22505.67",\n                "turnover24h": "2352.94950046",\n                "volume24h": "49337318",\n                "fundingRate": "-0.001034",\n                "nextFundingTime": "1672387200000",\n                "predictedDeliveryPrice": "",\n                "basisRate": "",\n                "deliveryFeeRate": "",\n                "deliveryTime": "0",\n                "ask1Size": "1",\n                "bid1Price": "16596.00",\n                "ask1Price": "16597.50",\n                "bid1Size": "1"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672376496682\n}\n'))),(0,r.kt)(a.Z,{value:"js option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "option",\n        "list": [\n            {\n                "symbol": "BTC-30DEC22-18000-C",\n                "bid1Price": "0",\n                "bid1Size": "0",\n                "bid1Iv": "0",\n                "ask1Price": "435",\n                "ask1Size": "0.66",\n                "ask1Iv": "5",\n                "lastPrice": "435",\n                "highPrice24h": "435",\n                "lowPrice24h": "165",\n                "markPrice": "0.00000009",\n                "indexPrice": "16600.55",\n                "markIv": "0.7567",\n                "underlyingPrice": "16590.42",\n                "openInterest": "6.3",\n                "turnover24h": "2482.73",\n                "volume24h": "0.15",\n                "totalVolume": "99",\n                "totalTurnover": "1967653",\n                "delta": "0.00000001",\n                "gamma": "0.00000001",\n                "vega": "0.00000004",\n                "theta": "-0.00000152",\n                "predictedDeliveryPrice": "0",\n                "change24h": "86"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672376592395\n}\n'))),(0,r.kt)(a.Z,{value:"js spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "spot",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "bid1Price": "20517.96",\n                "bid1Size": "2",\n                "ask1Price": "20527.77",\n                "ask1Size": "1.862172",\n                "lastPrice": "20533.13",\n                "prevPrice24h": "20393.48",\n                "price24hPcnt": "0.0068",\n                "highPrice24h": "21128.12",\n                "lowPrice24h": "20318.89",\n                "turnover24h": "243765620.65899866",\n                "volume24h": "11801.27771",\n                "usdIndexPrice": "20784.12009279"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1673859087947\n}\n')))))}p.isMDXComponent=!0}}]);