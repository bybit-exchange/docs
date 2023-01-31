"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7365],{59937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>m,toc:()=>y});var a=r(87462),i=(r(67294),r(3905)),o=r(26389),s=r(94891),p=r(74933),n=(r(47507),r(24310)),d=(r(63303),r(75035),r(85162));const l={id:"batch-place",title:"Batch Place Order",description:"Batch place orders",sidebar_label:"Batch Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Batch place orders",operationId:"batch-place",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["option"],description:"Product type. option ONLY"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETH-25JAN23-1600-P"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",description:"Order type",enum:["Market","Limit"],example:"Limit"},qty:{type:"string",decription:"Order qty"},price:{type:"string",decription:"Order price"},orderIv:{type:"string",decription:"Order iv"},timeInForce:{type:"string",enum:["GTC","IOC","FOK","PostOnly"],description:"Time in force",example:"GTC"},positionIdx:{type:"integer",enum:[0],description:"Position mode. one-way mode only for unified.",example:0},orderLinkId:{type:"string",description:"REQUIRED param when place an option order",example:"test-xx1"},reduceOnly:{type:"boolean",enum:[!0,!1],description:"specify true if a close position order",example:!1},mmp:{type:"boolean",enum:[!0,!1],description:"market marker protection",example:null}},required:["symbol","side","orderType","qty","orderLinkId"]}}},required:["category","request"]}}}},method:"post",path:"/v5/order/create-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"option",request:[{symbol:"ETH-25JAN23-1600-P",side:"Buy",orderType:"Limit",qty:"string",price:"string",orderIv:"string",timeInForce:"GTC",positionIdx:0,orderLinkId:"test-xx1",reduceOnly:!1,mmp:null}]},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Batch Place Order",description:{content:"Batch place orders",type:"text/plain"},url:{path:["v5","order","create-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},c=void 0,m={unversionedId:"api-explorer/v5/trade/batch-place",id:"api-explorer/v5/trade/batch-place",title:"Batch Place Order",description:"Batch place orders",source:"@site/docs/api-explorer/v5/trade/batch-place.api.mdx",sourceDirName:"api-explorer/v5/trade",slug:"/api-explorer/v5/trade/batch-place",permalink:"/docs-v2/api-explorer/v5/trade/batch-place",draft:!1,tags:[],version:"current",frontMatter:{id:"batch-place",title:"Batch Place Order",description:"Batch place orders",sidebar_label:"Batch Place Order",hide_title:!0,hide_table_of_contents:!0,api:{tags:["trade"],description:"Batch place orders",operationId:"batch-place",parameters:[{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{category:{type:"string",required:!0,enum:["option"],description:"Product type. option ONLY"},request:{type:"array",maxItems:10,items:{type:"object",properties:{symbol:{type:"string",description:"Symbol name",example:"ETH-25JAN23-1600-P"},side:{type:"string",enum:["Buy","Sell"],example:"Buy"},orderType:{type:"string",description:"Order type",enum:["Market","Limit"],example:"Limit"},qty:{type:"string",decription:"Order qty"},price:{type:"string",decription:"Order price"},orderIv:{type:"string",decription:"Order iv"},timeInForce:{type:"string",enum:["GTC","IOC","FOK","PostOnly"],description:"Time in force",example:"GTC"},positionIdx:{type:"integer",enum:[0],description:"Position mode. one-way mode only for unified.",example:0},orderLinkId:{type:"string",description:"REQUIRED param when place an option order",example:"test-xx1"},reduceOnly:{type:"boolean",enum:[!0,!1],description:"specify true if a close position order",example:!1},mmp:{type:"boolean",enum:[!0,!1],description:"market marker protection",example:null}},required:["symbol","side","orderType","qty","orderLinkId"]}}},required:["category","request"]}}}},method:"post",path:"/v5/order/create-batch",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{category:"option",request:[{symbol:"ETH-25JAN23-1600-P",side:"Buy",orderType:"Limit",qty:"string",price:"string",orderIv:"string",timeInForce:"GTC",positionIdx:0,orderLinkId:"test-xx1",reduceOnly:!1,mmp:null}]},info:{description:"Collection of Trade - v5 Restul API, which covers USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Spot and Option.\n",version:"3.0.0",title:"Bybit v5 trade api explorer"},postman:{name:"Batch Place Order",description:{content:"Batch place orders",type:"text/plain"},url:{path:["v5","order","create-batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"A UTA sub account API key is provided by default",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/trade/bybit-v-5-trade-api-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Get Order History (2 years)",permalink:"/docs-v2/api-explorer/v5/trade/order-list"},next:{title:"Batch Amend Order",permalink:"/docs-v2/api-explorer/v5/trade/batch-amend"}},u={},y=[{value:"Batch Place Order",id:"batch-place-order",level:2}],h={toc:y};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"batch-place-order"},"Batch Place Order"),(0,i.kt)("p",null,"Batch place orders"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"A UTA sub account API key is provided by default",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"category",required:!0,schemaDescription:"Product type. option ONLY",schemaName:"string",qualifierMessage:"**Possible values:** [`option`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"request"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<= 10"))),(0,i.kt)(n.Z,{collapsible:!1,name:"symbol",required:!0,schemaDescription:"Symbol name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"side",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Buy`, `Sell`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"orderType",required:!0,schemaDescription:"Order type",schemaName:"string",qualifierMessage:"**Possible values:** [`Market`, `Limit`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"qty",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"price",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"orderIv",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"timeInForce",required:!1,schemaDescription:"Time in force",schemaName:"string",qualifierMessage:"**Possible values:** [`GTC`, `IOC`, `FOK`, `PostOnly`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"positionIdx",required:!1,schemaDescription:"Position mode. one-way mode only for unified.",schemaName:"integer",qualifierMessage:"**Possible values:** [`0`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"orderLinkId",required:!0,schemaDescription:"REQUIRED param when place an option order",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"reduceOnly",required:!1,schemaDescription:"specify true if a close position order",schemaName:"boolean",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"mmp",required:!1,schemaDescription:"market marker protection",schemaName:"boolean",qualifierMessage:"**Possible values:** [`true`, `false`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);