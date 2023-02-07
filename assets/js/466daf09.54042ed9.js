"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[75066],{5202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=r(87462),i=(r(67294),r(3905)),a=r(26389),s=(r(94891),r(74933)),p=(r(47507),r(24310),r(63303),r(75035),r(85162));const n={id:"order-book",title:"Order Book",description:"Get Order Book",sidebar_label:"Order Book",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Order Book",operationId:"order-book",parameters:[{name:"symbol",in:"query",description:"Name of the trading pair",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 100. Max value is 200",required:!1,schema:{type:"integer",default:100}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/public/quote/depth",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot Restul API\n",version:"3.0.0",title:"Bybit spot explorer"},postman:{name:"Order Book",description:{content:"Get Order Book",type:"text/plain"},url:{path:["spot","v3","public","quote","depth"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Default value is 100. Max value is 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/market/bybit-spot-explorer"},d=void 0,l={unversionedId:"api-explorer/spot/market/order-book",id:"api-explorer/spot/market/order-book",title:"Order Book",description:"Get Order Book",source:"@site/docs/api-explorer/spot/market/order-book.api.mdx",sourceDirName:"api-explorer/spot/market",slug:"/api-explorer/spot/market/order-book",permalink:"/docs/api-explorer/spot/market/order-book",draft:!1,tags:[],version:"current",frontMatter:{id:"order-book",title:"Order Book",description:"Get Order Book",sidebar_label:"Order Book",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Order Book",operationId:"order-book",parameters:[{name:"symbol",in:"query",description:"Name of the trading pair",required:!0,schema:{type:"string"}},{name:"limit",in:"query",description:"Default value is 100. Max value is 200",required:!1,schema:{type:"integer",default:100}}],responses:{200:{description:"successful operation"}},method:"get",path:"/spot/v3/public/quote/depth",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of Spot Restul API\n",version:"3.0.0",title:"Bybit spot explorer"},postman:{name:"Order Book",description:{content:"Get Order Book",type:"text/plain"},url:{path:["spot","v3","public","quote","depth"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Name of the trading pair",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"Default value is 100. Max value is 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/spot/market/bybit-spot-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Instrument Info",permalink:"/docs/api-explorer/spot/market/instrument-info"},next:{title:"Merged Order Book",permalink:"/docs/api-explorer/spot/market/merged-order-book"}},u={},m=[{value:"Order Book",id:"order-book",level:2}],c={toc:m};function k(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"order-book"},"Order Book"),(0,i.kt)("p",null,"Get Order Book"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Name of the trading pair",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Default value is 100. Max value is 200",required:!1,schema:{type:"integer",default:100}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}k.isMDXComponent=!0}}]);