"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2789],{70737:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>m,metadata:()=>d,toc:()=>c});var r=i(87462),a=(i(67294),i(3905)),n=i(26389),s=(i(94891),i(74933)),p=(i(47507),i(24310),i(63303),i(75035),i(85162));const m={id:"mark-price-kline",title:"Get Mark Price Kline",description:"Get Mark Price Kline data",sidebar_label:"Get Mark Price Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Mark Price Kline data",operationId:"mark-price-kline",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/mark-price-kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Mark Price Kline",description:{content:"Get Mark Price Kline data",type:"text/plain"},url:{path:["v5","market","mark-price-kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},l=void 0,d={unversionedId:"api-explorer/v5/market/mark-price-kline",id:"api-explorer/v5/market/mark-price-kline",title:"Get Mark Price Kline",description:"Get Mark Price Kline data",source:"@site/docs/api-explorer/v5/market/mark-price-kline.api.mdx",sourceDirName:"api-explorer/v5/market",slug:"/api-explorer/v5/market/mark-price-kline",permalink:"/docs/zh-TW/api-explorer/v5/market/mark-price-kline",draft:!1,tags:[],version:"current",frontMatter:{id:"mark-price-kline",title:"Get Mark Price Kline",description:"Get Mark Price Kline data",sidebar_label:"Get Mark Price Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get Mark Price Kline data",operationId:"mark-price-kline",parameters:[{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","spot"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation"}},method:"get",path:"/v5/market/mark-price-kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Get Mark Price Kline",description:{content:"Get Mark Price Kline data",type:"text/plain"},url:{path:["v5","market","mark-price-kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Product type",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/v5/market/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Kline",permalink:"/docs/zh-TW/api-explorer/v5/market/kline"},next:{title:"Get Index Price Kline",permalink:"/docs/zh-TW/api-explorer/v5/market/index-price-kline"}},o={},c=[{value:"Get Mark Price Kline",id:"get-mark-price-kline",level:2}],u={toc:c};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-mark-price-kline"},"Get Mark Price Kline"),(0,a.kt)("p",null,"Get Mark Price Kline data"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Product type",required:!0,schema:{type:"array",items:{type:"string",enum:["linear","inverse","spot"]}}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"start",in:"query",description:"start timestamp (ms). e.g., 1669852800000 (1 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671062400000 (15 DEC 2022 UTC 0:00)",required:!1,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,a.kt)(s.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);