"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[74190],{15909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>d,toc:()=>T});var a=r(87462),s=(r(67294),r(3905)),i=r(26389),n=r(94891),o=r(74933),p=(r(47507),r(24310)),l=(r(63303),r(75035),r(85162));const m={id:"unitransfer",title:"Create Universal Transfer",description:"Create universal transfer",sidebar_label:"Create Universal Transfer",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Create universal transfer",operationId:"unitransfer",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{transferId:{type:"sting",description:"Transfer id. UUID",example:"be7a2462-1138-4e27-80b1-62653f24925e"},coin:{type:"sting",description:"Coin name",example:"USDT"},amount:{type:"sting",description:"Amount",example:"100"},fromMemberId:{type:"intger",description:"From UID",example:12345},toMemberId:{type:"integer",description:"To UID",example:54321},fromAccountType:{type:"string",description:"From account type",enum:["UNIFIED","CONTRACT","SPOT","INVESTMENT","OPTION"],example:"UNIFIED"},toAccountType:{type:"string",description:"To account type",enum:["UNIFIED","CONTRACT","SPOT","INVESTMENT","OPTION"],example:"SPOT"}},required:["transferId","coin","amount","fromMemberId","toMemberId","fromAccountType","toAccountType"]}}}},method:"post",path:"/v5/asset/transfer/universal-transfer",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{transferId:"be7a2462-1138-4e27-80b1-62653f24925e",coin:"USDT",amount:"100",fromMemberId:12345,toMemberId:54321,fromAccountType:"UNIFIED",toAccountType:"SPOT"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Create Universal Transfer",description:{content:"Create universal transfer",type:"text/plain"},url:{path:["v5","asset","transfer","universal-transfer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},c=void 0,d={unversionedId:"api-explorer/v5/asset/unitransfer",id:"api-explorer/v5/asset/unitransfer",title:"Create Universal Transfer",description:"Create universal transfer",source:"@site/docs/api-explorer/v5/asset/unitransfer.api.mdx",sourceDirName:"api-explorer/v5/asset",slug:"/api-explorer/v5/asset/unitransfer",permalink:"/docs/zh-TW/api-explorer/v5/asset/unitransfer",draft:!1,tags:[],version:"current",frontMatter:{id:"unitransfer",title:"Create Universal Transfer",description:"Create universal transfer",sidebar_label:"Create Universal Transfer",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asset"],description:"Create universal transfer",operationId:"unitransfer",parameters:[{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{transferId:{type:"sting",description:"Transfer id. UUID",example:"be7a2462-1138-4e27-80b1-62653f24925e"},coin:{type:"sting",description:"Coin name",example:"USDT"},amount:{type:"sting",description:"Amount",example:"100"},fromMemberId:{type:"intger",description:"From UID",example:12345},toMemberId:{type:"integer",description:"To UID",example:54321},fromAccountType:{type:"string",description:"From account type",enum:["UNIFIED","CONTRACT","SPOT","INVESTMENT","OPTION"],example:"UNIFIED"},toAccountType:{type:"string",description:"To account type",enum:["UNIFIED","CONTRACT","SPOT","INVESTMENT","OPTION"],example:"SPOT"}},required:["transferId","coin","amount","fromMemberId","toMemberId","fromAccountType","toAccountType"]}}}},method:"post",path:"/v5/asset/transfer/universal-transfer",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],jsonRequestBodyExample:{transferId:"be7a2462-1138-4e27-80b1-62653f24925e",coin:"USDT",amount:"100",fromMemberId:12345,toMemberId:54321,fromAccountType:"UNIFIED",toAccountType:"SPOT"},info:{description:"Collection of v5 Restul API\n",version:"3.0.0",title:"Bybit Open API v5 explorer"},postman:{name:"Create Universal Transfer",description:{content:"Create universal transfer",type:"text/plain"},url:{path:["v5","asset","transfer","universal-transfer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"(Required) Use master UID api key",type:"text/plain"},key:"apiKey",value:""},{disabled:!1,description:{content:"(Required) Use master UID api secret",type:"text/plain"},key:"secret",value:""},{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api-explorer/v5/asset/bybit-open-api-v-5-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Enable Universal Transfer For Sub UID",permalink:"/docs/zh-TW/api-explorer/v5/asset/enable-unitransfer-subuid"},next:{title:"Get Universal Transfer Records",permalink:"/docs/zh-TW/api-explorer/v5/asset/unitransfer-list"}},u={},T=[{value:"Create Universal Transfer",id:"create-universal-transfer",level:2}],f={toc:T};function y(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"create-universal-transfer"},"Create Universal Transfer"),(0,s.kt)("p",null,"Create universal transfer"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"apiKey",in:"header",description:"Use master UID api key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"secret",in:"header",description:"Use master UID api secret",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"transferId",required:!0,schemaDescription:"Transfer id. UUID",schemaName:"sting",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"coin",required:!0,schemaDescription:"Coin name",schemaName:"sting",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"amount",required:!0,schemaDescription:"Amount",schemaName:"sting",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"fromMemberId",required:!0,schemaDescription:"From UID",schemaName:"intger",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"toMemberId",required:!0,schemaDescription:"To UID",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"fromAccountType",required:!0,schemaDescription:"From account type",schemaName:"string",qualifierMessage:"**Possible values:** [`UNIFIED`, `CONTRACT`, `SPOT`, `INVESTMENT`, `OPTION`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"toAccountType",required:!0,schemaDescription:"To account type",schemaName:"string",qualifierMessage:"**Possible values:** [`UNIFIED`, `CONTRACT`, `SPOT`, `INVESTMENT`, `OPTION`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);