"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11542:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i="Yandex Metrica",s={unversionedId:"integrations/sources/yandex-metrica",id:"integrations/sources/yandex-metrica",title:"Yandex Metrica",description:"This page guides you through the process of setting up the Yandex Metrica source connector.",source:"@site/../docs/integrations/sources/yandex-metrica.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/yandex-metrica",permalink:"/integrations/sources/yandex-metrica",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/yandex-metrica.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Wrike",permalink:"/integrations/sources/wrike"},next:{title:"YouTube Analytics",permalink:"/integrations/sources/youtube-analytics"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Yandex Metrica",id:"setup-yandex-metrica",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Notes",id:"notes",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yandex-metrica"},"Yandex Metrica"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Yandex Metrica source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Counter ID"),(0,n.kt)("li",{parentName:"ul"},"OAuth2 Token")),(0,n.kt)("h2",{id:"setup-yandex-metrica"},"Setup Yandex Metrica"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://metrica.yandex.com/"},"Create a Yandex Metrica account")," if you don't already have one."),(0,n.kt)("li",{parentName:"ol"},"Head to ",(0,n.kt)("a",{parentName:"li",href:"https://metrica.yandex.com/list"},"Management page")," and add new tag or choose an existing one."),(0,n.kt)("li",{parentName:"ol"},"At the top of the dasboard you will see 8 digit number to the right of your website name. This is your ",(0,n.kt)("strong",{parentName:"li"},"Counter ID"),"."),(0,n.kt)("li",{parentName:"ol"},"Create a new app or choose an existing one from ",(0,n.kt)("a",{parentName:"li",href:"https://oauth.yandex.com/"},"My apps page"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Which platform is the app required for?: ",(0,n.kt)("strong",{parentName:"li"},"Web services")),(0,n.kt)("li",{parentName:"ul"},"Callback URL: ",(0,n.kt)("a",{parentName:"li",href:"https://oauth.yandex.com/verification_code"},"https://oauth.yandex.com/verification_code")),(0,n.kt)("li",{parentName:"ul"},"What data do you need?: ",(0,n.kt)("strong",{parentName:"li"},"Yandex.Metrica"),". Read permission will suffice."))),(0,n.kt)("li",{parentName:"ol"},"Choose your app from ",(0,n.kt)("a",{parentName:"li",href:"https://oauth.yandex.com/"},"the list"),". ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To create your API key you will need to grab your ",(0,n.kt)("strong",{parentName:"li"},"ClientID"),", "),(0,n.kt)("li",{parentName:"ul"},"Now to get the API key craft a GET request to an endpoint ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://oauth.yandex.com/authorizE?response_type=token&client_id=%5C"},"https://oauth.yandex.com/authorizE?response_type=token&client_id=\\"),"<Your Client ID",">")),(0,n.kt)("li",{parentName:"ul"},"You will receive a response with your ",(0,n.kt)("strong",{parentName:"li"},"API key"),". Save it.")))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Yandex Metrica source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"After the first sync the connector will set the state for next sync. The ",(0,n.kt)("strong",{parentName:"li"},"start date")," will be set to last syncs ",(0,n.kt)("strong",{parentName:"li"},"end date"),". The ",(0,n.kt)("strong",{parentName:"li"},"end date")," will be set to 1 day before today.")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yandex.com/dev/metrika/doc/api2/logs/fields/hits.html"},"Views")," (Incremental)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yandex.com/dev/metrika/doc/api2/logs/fields/visits.html"},"Sessions")," (Incremental).")),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We recommend syncing data once a day. Because of the Yandex Metrica API limitation it is only possible to extract records up to yesterdays date. Todays records will only be available tomorrow."),(0,n.kt)("li",{parentName:"ul"},"Because of the way API works some syncs may take a long time to finish. Timeout period is 2 hours.")))}u.isMDXComponent=!0}}]);