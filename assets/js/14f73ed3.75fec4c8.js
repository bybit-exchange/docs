"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[37034],{32134:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var a=i(87462),r=(i(67294),i(3905)),n=i(26389),s=i(94891),l=i(74933),m=i(47507),p=i(24310),d=i(63303),o=(i(75035),i(85162));const c={id:"index-kline",title:"Index Price Kline",description:"Get index price kline data",sidebar_label:"Index Price Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get index price kline data",operationId:"index-kline",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms). e.g., 1671494400000 (20 DEC 2022 UTC 0:00)",required:!0,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671926400000 (25 DEC 2022 UTC 0:00)",required:!0,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer"},retMsg:{type:"string"},result:{type:"object",properties:{symbol:{type:"string",example:"ETHUSDT"},category:{type:"string",example:"linear"},list:{type:"array",items:{type:"array",example:["1668528000000","1263.25","1273.25","1258.72","1266.1"]}}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},method:"get",path:"/derivatives/v3/public/index-price-kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Index Price Kline",description:{content:"Get index price kline data",type:"text/plain"},url:{path:["derivatives","v3","public","index-price-kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"(Required) start timestamp (ms). e.g., 1671494400000 (20 DEC 2022 UTC 0:00)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"(Required) end timestamp (ms). e.g., 1671926400000 (25 DEC 2022 UTC 0:00)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/market/bybit-derivatives-explorer"},y=void 0,u={unversionedId:"api-explorer/derivatives/market/index-kline",id:"api-explorer/derivatives/market/index-kline",title:"Index Price Kline",description:"Get index price kline data",source:"@site/docs/api-explorer/derivatives/market/index-kline.api.mdx",sourceDirName:"api-explorer/derivatives/market",slug:"/api-explorer/derivatives/market/index-kline",permalink:"/docs/api-explorer/derivatives/market/index-kline",draft:!1,tags:[],version:"current",frontMatter:{id:"index-kline",title:"Index Price Kline",description:"Get index price kline data",sidebar_label:"Index Price Kline",hide_title:!0,hide_table_of_contents:!0,api:{tags:["market"],description:"Get index price kline data",operationId:"index-kline",parameters:[{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},{name:"start",in:"query",description:"start timestamp (ms). e.g., 1671494400000 (20 DEC 2022 UTC 0:00)",required:!0,schema:{type:"integer"}},{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671926400000 (25 DEC 2022 UTC 0:00)",required:!0,schema:{type:"integer"}},{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{retCode:{type:"integer"},retMsg:{type:"string"},result:{type:"object",properties:{symbol:{type:"string",example:"ETHUSDT"},category:{type:"string",example:"linear"},list:{type:"array",items:{type:"array",example:["1668528000000","1263.25","1273.25","1258.72","1266.1"]}}}},retExtInfo:{type:"object"},time:{type:"integer",format:"timestamp",example:1668740049062}}}}}}},method:"get",path:"/derivatives/v3/public/index-price-kline",servers:[{url:"https://api-testnet.bybit.com",description:"Testnet server"}],info:{description:"Collection of derivatives Restul API\n",version:"3.0.0",title:"Bybit derivatives explorer"},postman:{name:"Index Price Kline",description:{content:"Get index price kline data",type:"text/plain"},url:{path:["derivatives","v3","public","index-price-kline"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Products category",type:"text/plain"},key:"category",value:""},{disabled:!1,description:{content:"(Required) Symbol name",type:"text/plain"},key:"symbol",value:""},{disabled:!1,description:{content:"(Required) kline interval",type:"text/plain"},key:"interval",value:""},{disabled:!1,description:{content:"(Required) start timestamp (ms). e.g., 1671494400000 (20 DEC 2022 UTC 0:00)",type:"text/plain"},key:"start",value:""},{disabled:!1,description:{content:"(Required) end timestamp (ms). e.g., 1671926400000 (25 DEC 2022 UTC 0:00)",type:"text/plain"},key:"end",value:""},{disabled:!1,description:{content:"Maximum 200",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api-explorer/derivatives/market/bybit-derivatives-explorer"},sidebar:"apiExplorerSideBar",previous:{title:"Mark Price Kline",permalink:"/docs/api-explorer/derivatives/market/mark-kline"},next:{title:"Premium Index Price Kline",permalink:"/docs/api-explorer/derivatives/market/premium-index-kline"}},v={},x=[{value:"Index Price Kline",id:"index-price-kline",level:2}],k={toc:x};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"index-price-kline"},"Index Price Kline"),(0,r.kt)("p",null,"Get index price kline data"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"category",in:"query",description:"Products category",required:!1,schema:{type:"array",items:{type:"string",enum:["linear","inverse"]}}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"symbol",in:"query",description:"Symbol name",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"interval",in:"query",description:"kline interval",required:!0,schema:{type:"array",items:{type:"string",enum:[1,3,5,15,30,60,120,240,360,720,"D","M","W"]}}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"start",in:"query",description:"start timestamp (ms). e.g., 1671494400000 (20 DEC 2022 UTC 0:00)",required:!0,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"end",in:"query",description:"end timestamp (ms). e.g., 1671926400000 (25 DEC 2022 UTC 0:00)",required:!0,schema:{type:"integer"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"Maximum 200",required:!1,schema:{type:"integer",default:200}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"retCode",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"retMsg",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"symbol",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"category",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"list",required:!1,schemaDescription:void 0,schemaName:"array[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!1,name:"retExtInfo",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"time",required:!1,schemaDescription:void 0,schemaName:"timestamp",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(m.Z,{responseExample:'{\n  "retCode": 0,\n  "retMsg": "string",\n  "result": {\n    "symbol": "ETHUSDT",\n    "category": "linear",\n    "list": [\n      [\n        "1668528000000",\n        "1263.25",\n        "1273.25",\n        "1258.72",\n        "1266.1"\n      ]\n    ]\n  },\n  "retExtInfo": {},\n  "time": 1668740049062\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);