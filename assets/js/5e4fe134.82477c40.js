"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2112],{3905:(t,l,e)=>{e.d(l,{Zo:()=>d,kt:()=>p});var n=e(67294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function i(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?i(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function a(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var k=n.createContext({}),s=function(t){var l=n.useContext(k),e=l;return t&&(e="function"==typeof t?t(l):u(u({},l),t)),e},d=function(t){var l=s(t.components);return n.createElement(k.Provider,{value:l},t.children)},o={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,i=t.originalType,k=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),c=s(e),p=r,m=c["".concat(k,".").concat(p)]||c[p]||o[p]||i;return e?n.createElement(m,u(u({ref:l},d),{},{components:e})):n.createElement(m,u({ref:l},d))}));function p(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var i=e.length,u=new Array(i);u[0]=c;var a={};for(var k in l)hasOwnProperty.call(l,k)&&(a[k]=l[k]);a.originalType=t,a.mdxType="string"==typeof t?t:r,u[1]=a;for(var s=2;s<i;s++)u[s]=e[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},36696:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>k,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=e(87462),r=(e(67294),e(3905));const i={title:"Tickers",sidebar_label:"Tickers",sidebar_position:3,slug:"/derivatives/ws-public/ticker"},u=void 0,a={unversionedId:"v3/derivatives/wss-public/tickers",id:"v3/derivatives/wss-public/tickers",title:"Tickers",description:"Cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Option",source:"@site/docs/v3/derivatives/wss-public/tickers.mdx",sourceDirName:"v3/derivatives/wss-public",slug:"/derivatives/ws-public/ticker",permalink:"/docs/derivatives/ws-public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tickers",sidebar_label:"Tickers",sidebar_position:3,slug:"/derivatives/ws-public/ticker"},sidebar:"v3SideBar",previous:{title:"Public Trade",permalink:"/docs/derivatives/ws-public/trade"},next:{title:"Kline",permalink:"/docs/derivatives/ws-public/kline"}},k={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscription Example",id:"subscription-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],d=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",l)},o=d("Tabs"),c=d("TabItem"),p={toc:s};function m(t){let{components:l,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Cover: USDT Perpetual, USDC Perpetual, Inverse Perpetual, Inverse Future, Option"))),(0,r.kt)("p",null,"Get latest information of the symbol"),(0,r.kt)("admonition",{title:"important",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Future has ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"delta")," types. If a key does not exist in the field, it means the value is not changed."),(0,r.kt)("li",{parentName:"ul"},"Option has ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," data ",(0,r.kt)("strong",{parentName:"li"},"only"),"."))),(0,r.kt)("p",null,"Push frequency: ",(0,r.kt)("strong",{parentName:"p"},"100ms")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(c,{value:"future",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Data type. ",(0,r.kt)("code",null,"snapshot"),",",(0,r.kt)("code",null,"delta"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Cross sequence")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"The timestamp (ms) that the system generates the data")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tickDirection"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tick direction ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price 24 hours ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price an hour ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Next funding timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Funding rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask size ")))),(0,r.kt)(c,{value:"option",label:"Option",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Data type. `snapshot`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"message ID")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"The timestamp (ms) that the system generates the data")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bidPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bidSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bidIv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> askPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> askSize"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> askIv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPriceIv"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price iv ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> underlyingPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Underlying price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> totalVolume"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total volume ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> totalTurnover"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Total turnover ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> delta"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Delta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> gamma"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Gamma ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> vega"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Vega ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> theta"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Theta ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> predictedDeliveryPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Predicated delivery price. It has value when 30 min before delivery ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> change24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The change in the last 24 hous "))))),(0,r.kt)("h3",{id:"subscription-example"},"Subscription Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "op": "subscribe",\n    "args": [\n        "tickers.BTCUSDT"\n    ],\n    "req_id": "test" // optional\n}\n')),(0,r.kt)("h3",{id:"stream-example"},"Stream Example"),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(c,{value:"ws-linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCUSDT",\n    "type": "snapshot",\n    "data": {\n        "symbol": "BTCUSDT",\n        "tickDirection": "MinusTick",\n        "price24hPcnt": "0.017367",\n        "lastPrice": "17222.00",\n        "prevPrice24h": "16928.00",\n        "highPrice24h": "17281.50",\n        "lowPrice24h": "16915.00",\n        "prevPrice1h": "17238.00",\n        "markPrice": "17224.40",\n        "indexPrice": "17234.84",\n        "openInterest": "68795.534",\n        "openInterestValue": "1184961795.83",\n        "turnover24h": "1572429119.324499",\n        "volume24h": "91823.449",\n        "nextFundingTime": "1673280000000",\n        "fundingRate": "-0.000211",\n        "bid1Price": "17222.00",\n        "bid1Size": "220.358",\n        "ask1Price": "17222.50",\n        "ask1Size": "3.902"\n    },\n    "cs": 24988405605,\n    "ts": 1673273043686\n}\n'))),(0,r.kt)(c,{value:"js option",label:"Option",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "tickers.BTC-6JAN23-17500-C-2480334983-1672917511074",\n    "topic": "tickers.BTC-6JAN23-17500-C",\n    "ts": 1672917511074,\n    "data": {\n        "symbol": "BTC-6JAN23-17500-C",\n        "bidPrice": "0",\n        "bidSize": "0",\n        "bidIv": "0",\n        "askPrice": "10",\n        "askSize": "5.1",\n        "askIv": "0.514",\n        "lastPrice": "10",\n        "highPrice24h": "25",\n        "lowPrice24h": "5",\n        "markPrice": "7.86976724",\n        "indexPrice": "16823.73",\n        "markPriceIv": "0.4896",\n        "underlyingPrice": "16815.1",\n        "openInterest": "49.85",\n        "turnover24h": "446802.8473",\n        "volume24h": "26.55",\n        "totalVolume": "86",\n        "totalTurnover": "1437431",\n        "delta": "0.047831",\n        "gamma": "0.00021453",\n        "vega": "0.81351067",\n        "theta": "-19.9115368",\n        "predictedDeliveryPrice": "0",\n        "change24h": "-0.33333334"\n    },\n    "type": "snapshot"\n}\n')))))}m.isMDXComponent=!0}}]);