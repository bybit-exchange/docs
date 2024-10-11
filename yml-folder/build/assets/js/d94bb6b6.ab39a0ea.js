"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[84987],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=s(r),c=a,u=g["".concat(p,".").concat(c)]||g[c]||m[c]||i;return r?n.createElement(u,l(l({ref:e},d),{},{components:r})):n.createElement(u,l({ref:e},d))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98752:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Set Trading Stop",sidebar_label:"Set Trading Stop",sidebar_position:6,slug:"/derivatives/contract/trading-stop"},l=void 0,o={unversionedId:"v3/derivatives/rest-contract/position/trading-stop",id:"v3/derivatives/rest-contract/position/trading-stop",title:"Set Trading Stop",description:"Set the take profit, stop loss or trailing stop for the position.",source:"@site/docs/v3/derivatives/rest-contract/position/trading-stop.mdx",sourceDirName:"v3/derivatives/rest-contract/position",slug:"/derivatives/contract/trading-stop",permalink:"/docs/derivatives/contract/trading-stop",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Set Trading Stop",sidebar_label:"Set Trading Stop",sidebar_position:6,slug:"/derivatives/contract/trading-stop"}},p={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:s};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Set the take profit, stop loss or trailing stop for the position."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Passing these parameters will create conditional orders by the system internally."),(0,a.kt)("li",{parentName:"ul"},"The system will cancel these orders if the position is closed, and adjust the qty according to the size of the open position."),(0,a.kt)("li",{parentName:"ul"},"Support USDT Perpetual, Inverse Perpetual, Inverse Future and USDC Perpetual. ",(0,a.kt)("strong",{parentName:"li"},"Note:")," USDC Perpetual does not have partial TP/SL mode."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"New version of TP/SL function supports both holding entire position TP/SL orders and holding partial position TP/SL orders."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Full position TP/SL orders: This API can be used to modify the parameters of existing TP/SL orders."),(0,a.kt)("li",{parentName:"ul"},"Partial position TP/SL orders: This API can only add partial position TP/SL orders."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Under the new version of Tp/SL function, when calling this API to perform one-sided take profit or stop loss modification\non existing TP/SL orders on the holding position, it will cause the paired tp/sl orders to lose binding relationship.\nThis means that when calling the cancel API through the tp/sl order ID, it will only cancel the corresponding one-sided\ntake profit or stop loss order ID.")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/contract/v3/private/position/trading-stop")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel TP. Partial TP/SL cannot be cancelled by set it 0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel SL. Partial TP/SL cannot be cancelled by set it 0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tpslMode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"TP/SL mode. ",(0,a.kt)("inlineCode",{parentName:"td"},"Full"),": entire position TP/SL, ",(0,a.kt)("inlineCode",{parentName:"td"},"Partial"),": partial position TP/SL. As each contract has an initial full TP/SL mode, if it has been modified before, it may be partial. Therefore, if not provided, the system will automatically retrieve the current TP/SL mode configuration for the contract.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tpSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Take profit size. Valid in TP/SL partial mode ",(0,a.kt)("strong",{parentName:"td"},"only"),". Note: the value of tpSize and slSize must equal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"slSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop loss size. Valid in TP/SL partial mode ",(0,a.kt)("strong",{parentName:"td"},"only"),". Note: the value of tpSize and slSize must equal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Take profit trigger price type. default: ",(0,a.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop loss trigger price type. default: ",(0,a.kt)("inlineCode",{parentName:"td"},"LastPrice"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"trailingStop"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Cannot be less than 0, 0 means cancel TS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"activePrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trailing stop trigger price. Trailing stop will be triggered when this price is reached ",(0,a.kt)("strong",{parentName:"td"},"only"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tpLimitPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The limit order price when take profit price is triggered. Only works when tpslMode=Partial and tpOrderType=Limit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"slLimitPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The limit order price when stop loss price is triggered. Only works when tpslMode=Partial and slOrderType=Limit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tpOrderType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The order type when take profit is triggered. ",(0,a.kt)("inlineCode",{parentName:"td"},"Market"),"(default), ",(0,a.kt)("inlineCode",{parentName:"td"},"Limit"),". For tpslMode=Full, it only supports tpOrderType=Market")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"slOrderType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The order type when stop loss is triggered. ",(0,a.kt)("inlineCode",{parentName:"td"},"Market"),"(default), ",(0,a.kt)("inlineCode",{parentName:"td"},"Limit"),". For tpslMode=Full, it only supports slOrderType=Market")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"positionIdx"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to identify positions in different position modes. For hedge-mode, this param is ",(0,a.kt)("strong",{parentName:"td"},"required"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"0"),": one-way mode"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"1"),": hedge-mode Buy side"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"2"),": hedge-mode Sell side")," "))))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'POST /contract/v3/private/position/trading-stop HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670852788387\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n{\n    "symbol": "SOLPERP",\n    "takeProfit": "19",\n    "stopLoss": "10",\n    "activePrice": null,\n    "trailingStop": null,\n    "tpTriggerBy": null,\n    "slTriggerBy": null,\n    "tpslMode": "Partial",\n    "tpOrderType": "Limit"\n    "slOrderType": "Limit"\n    "tpSize": "50",\n    "slSize": "50",\n    "tpLimitPrice": "18",\n    "slLimitPrice": "11",\n    "positionIdx": 0\n}\n')),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1670852788558\n}\n')))}m.isMDXComponent=!0}}]);