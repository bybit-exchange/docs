"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"Upgrade to Unified Account",sidebar_label:"Upgrade to Unified Account",sidebar_position:2},i=void 0,p={unversionedId:"v5/account/upgrade-unified-account",id:"v5/account/upgrade-unified-account",title:"Upgrade to Unified Account",description:"At the moment, classic account cannot execute the upgrade until end of September 2024.",source:"@site/docs/v5/account/upgrade-unified-account.mdx",sourceDirName:"v5/account",slug:"/v5/account/upgrade-unified-account",permalink:"/docs/v5/account/upgrade-unified-account",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Upgrade to Unified Account",sidebar_label:"Upgrade to Unified Account",sidebar_position:2},sidebar:"v5SideBar",previous:{title:"Get Wallet Balance",permalink:"/docs/v5/account/wallet-balance"},next:{title:"Get Borrow History (2 years)",permalink:"/docs/v5/account/borrow-history"}},c={},l=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=u("Button"),d=u("Tabs"),m=u("TabItem"),f={toc:l};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"mainnet",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At the moment, classic account cannot execute the upgrade until end of September 2024.\nUTA1.0 accounts are available to upgrade to UTA2.0 from 13 Sep, 2024")),(0,r.kt)("admonition",{title:"Upgrade Guidance",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check your current account status by calling this ",(0,r.kt)("a",{parentName:"p",href:"account-info"},"Get Account Info")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For now, classic account is not supported to upgrade, it will be opened afterwards.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if unifiedMarginStatus=3, then it is ",(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-10"},"UTA1.0"),', you have to head to website to click "upgrade" to ',(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-20"},"UTA2.0")," first.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if unifiedMarginStatus=4, then it is ",(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-10"},"UTA1.0")," Pro, you can call below upgrade endpoint to ",(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-20"},"UTA2.0")," Pro. Check\n",(0,r.kt)("a",{parentName:"p",href:"account-info"},"Get Account Info")," after a while and if unifiedMarginStatus=6, then it is successfully upgraded to ",(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-20"},"UTA2.0")," Pro.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if unifiedMarginStatus=5, then it is ",(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-20"},"UTA2.0"),", you can call below upgrade endpoint to ",(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-20"},"UTA2.0")," Pro. Check\n",(0,r.kt)("a",{parentName:"p",href:"account-info"},"Get Account Info")," after a while and if unifiedMarginStatus=6, then it is successfully upgraded to ",(0,r.kt)("a",{parentName:"p",href:"../acct-mode#uta-20"},"UTA2.0")," Pro.")))),(0,r.kt)("admonition",{title:"important",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Banned users cannot upgrade the account to Unified Account")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can upgrade the normal acct to unified acct without closing positions now, but please note belows:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Please avoid upgrading during these period:")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"every hour"),(0,r.kt)("td",{parentName:"tr",align:"left"},"50th minute to 5th minute of next hour")))),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},"Please ensure: there is no open orders when upgrade from ",(0,r.kt)("a",{parentName:"li",href:"../acct-mode#uta-20"},"UTA2.0")," to ",(0,r.kt)("a",{parentName:"li",href:"../acct-mode#uta-20"},"UTA2.0")," Pro",(0,r.kt)("br",null),(0,r.kt)("br",null),"\nRegaring the conditions that upgrade ",(0,r.kt)("a",{parentName:"li",href:"../acct-mode#uta-10"},"UTA1.0")," Pro to ",(0,r.kt)("a",{parentName:"li",href:"../acct-mode#uta-20"},"UTA2.0")," Pro, please ensure:")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"There is no open orders regardless of order types;"),(0,r.kt)("li",{parentName:"ul"},"All inverse contract positions must keep consistent with the margin mode of Unified account.\nIf it is Portfolio Margin mode, you either close inverse positions or switch unified account margin mode to cross\nor isolated margin mode."),(0,r.kt)("li",{parentName:"ul"},"Cannot have hedge mode inverse futures positions, which is not supported in ",(0,r.kt)("a",{parentName:"li",href:"../acct-mode#uta-20"},"UTA2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cannot have TPSL order either"))),(0,r.kt)("ol",{parentName:"admonition",start:3},(0,r.kt)("li",{parentName:"ol"},"During the account upgrade process, the data of ",(0,r.kt)("strong",{parentName:"li"},"Rest API/Websocket stream")," may be inaccurate due to the fact that the account-related\nasset data is in the processing state. It is recommended to query and use it after the upgrade is completed."))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/v5/account/upgrade-to-uta")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unifiedUpdateStatus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Upgrade status. ",(0,r.kt)("inlineCode",{parentName:"td"},"FAIL"),",",(0,r.kt)("inlineCode",{parentName:"td"},"PROCESS"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unifiedUpdateMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"PROCESS"),",",(0,r.kt)("inlineCode",{parentName:"td"},"SUCCESS"),", it returns ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> msg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Error message array. Only ",(0,r.kt)("inlineCode",{parentName:"td"},"FAIL")," will have this field")))),(0,r.kt)("a",{href:"/api-explorer/v5/account/upgrade-unified-account"},(0,r.kt)(s,{mdxType:"Button"},"RUN >>")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)(d,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.kt)(m,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"POST /v5/account/upgrade-to-uta HTTP/1.1\nHost: api-testnet.bybit.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672125123533\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{}\n"))),(0,r.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pybit.unified_trading import HTTP\nsession = HTTP(\n    testnet=True,\n    api_key="XXXXX",\n    api_secret="XXXXX",\n)\nprint(session.upgrade_to_unified_trading_account())\n'))),(0,r.kt)(m,{value:"GO",label:"GO",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    bybit "github.com/wuhewuhe/bybit.go.api"\n)\nclient := bybit.NewBybitHttpClient("YOUR_API_KEY", "YOUR_API_SECRET")\nclient.NewUtaBybitServiceNoParams().UpgradeToUTA(context.Background())\n'))),(0,r.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.bybit.api.client.config.BybitApiConfig;\nimport com.bybit.api.client.domain.account.request.AccountDataRequest;\nimport com.bybit.api.client.domain.account.AccountType;\nimport com.bybit.api.client.service.BybitApiClientFactory;\nvar client = BybitApiClientFactory.newInstance("YOUR_API_KEY", "YOUR_API_SECRET", BybitApiConfig.TESTNET_DOMAIN).newAccountRestClient();\nSystem.out.println(client.upgradeAccountToUTA());\n'))),(0,r.kt)(m,{value:"DotNet",label:".Net",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'using bybit.net.api;\nusing bybit.net.api.ApiServiceImp;\nusing bybit.net.api.Models;\nBybitAccountService accountService = new(apiKey: "xxxxxx", apiSecret: "xxxxx");\nConsole.WriteLine(await accountService.UpgradeAccount());\n'))),(0,r.kt)(m,{value:"Node",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-n4js"},"const { RestClientV5 } = require('bybit-api');\n\nconst client = new RestClientV5({\n    testnet: true,\n    key: 'apikey',\n    secret: 'apisecret',\n});\n\nclient\n    .upgradeToUnifiedAccount()\n    .then((response) => {\n        console.log(response);\n    })\n    .catch((error) => {\n        console.error(error);\n    });\n")))),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "",\n    "result": {\n        "unifiedUpdateStatus": "FAIL",\n        "unifiedUpdateMsg": {\n            "msg": [\n                "Update account failed. You have outstanding liabilities in your Spot account.",\n                "Update account failed. Please close the usdc perpetual positions in USDC Account.",\n                "unable to upgrade, please cancel the usdt perpetual open orders in USDT account.",\n                "unable to upgrade, please close the usdt perpetual positions in USDT account."\n            ]\n    }\n},\n    "retExtInfo": {},\n    "time": 1672125124195\n}\n')))}g.isMDXComponent=!0}}]);