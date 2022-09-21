"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[35],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},i="Getting Started with Airbyte Cloud",l={unversionedId:"cloud/getting-started-with-airbyte-cloud",id:"cloud/getting-started-with-airbyte-cloud",title:"Getting Started with Airbyte Cloud",description:"This page guides you through setting up your Airbyte Cloud account, setting up a source, destination, and connection, verifying the sync, and allowlisting an IP address.",source:"@site/../docs/cloud/getting-started-with-airbyte-cloud.md",sourceDirName:"cloud",slug:"/cloud/getting-started-with-airbyte-cloud",permalink:"/cloud/getting-started-with-airbyte-cloud",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/getting-started-with-airbyte-cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Custom or New Connector",permalink:"/integrations/custom-connectors"},next:{title:"Core Concepts",permalink:"/cloud/core-concepts"}},s={},p=[{value:"Set up your Airbyte Cloud account",id:"set-up-your-airbyte-cloud-account",level:2},{value:"Set up a source",id:"set-up-a-source",level:2},{value:"Set up a destination",id:"set-up-a-destination",level:2},{value:"Set up a connection",id:"set-up-a-connection",level:2},{value:"Verify the connection",id:"verify-the-connection",level:2},{value:"Allowlist IP address",id:"allowlist-ip-address",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-airbyte-cloud"},"Getting Started with Airbyte Cloud"),(0,o.kt)("p",null,"This page guides you through setting up your Airbyte Cloud account, setting up a source, destination, and connection, verifying the sync, and allowlisting an IP address."),(0,o.kt)("h2",{id:"set-up-your-airbyte-cloud-account"},"Set up your Airbyte Cloud account"),(0,o.kt)("p",null,"To use Airbyte Cloud:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you haven't already, ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.airbyte.io/signup?utm_campaign=22Q1_AirbyteCloudSignUpCampaign_Trial&utm_source=Docs&utm_content=SetupGuide"},"sign up for Airbyte Cloud"),"."),(0,o.kt)("p",{parentName:"li"},"Airbyte Cloud offers a 14-day free trial. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.com/pricing"},"Pricing"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Airbyte will send you an email with a verification link. On clicking the link, you'll be taken to your new workspace."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A workspace lets you collaborate with team members and share resources across your team under a shared billing account."))))),(0,o.kt)("p",null,"You will be greeted with an onboarding tutorial to help you set up your first connection. If you haven\u2019t set up a connection on Airbyte Cloud before, we highly recommend following the tutorial. If you are familiar with the connection setup process, click ",(0,o.kt)("strong",{parentName:"p"},"Skip Onboarding")," and follow this guide to set up your next connection."),(0,o.kt)("h2",{id:"set-up-a-source"},"Set up a source"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A source is an API, file, database, or data warehouse that you want to ingest data from."))),(0,o.kt)("p",null,"To set up a source:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Sources")," and then click ",(0,o.kt)("strong",{parentName:"p"},"+ New source"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Set up the source page, select the source you want to set up from the ",(0,o.kt)("strong",{parentName:"p"},"Source type")," dropdown."),(0,o.kt)("p",{parentName:"li"},"The fields relevant to your source are displayed. The Setup Guide provides information to help you fill out the fields for your selected source.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Set up source"),"."))),(0,o.kt)("h2",{id:"set-up-a-destination"},"Set up a destination"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A destination is a data warehouse, data lake, database, or an analytics tool where you want to load your extracted data."))),(0,o.kt)("p",null,"To set up a destination:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Destinations")," and then click ",(0,o.kt)("strong",{parentName:"p"},"+ New destination"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Set up the destination page, select the destination you want to set up from the ",(0,o.kt)("strong",{parentName:"p"},"Destination type")," dropdown."),(0,o.kt)("p",{parentName:"li"},"The fields relevant to your destination are displayed. The Setup Guide provides information to help you fill out the fields for your selected destination.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Set up destination"),"."))),(0,o.kt)("h2",{id:"set-up-a-connection"},"Set up a connection"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A connection is an automated data pipeline that replicates data from a source to a destination."))),(0,o.kt)("p",null,"Setting up a connection involves configuring the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Replication frequency"),(0,o.kt)("td",null,"How often should the data sync?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Destination Namespace and stream names"),(0,o.kt)("td",null,"Where should the replicated data be written?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Catalog selection"),(0,o.kt)("td",null,"Which streams and fields should be replicated from the source to the destination?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Sync mode"),(0,o.kt)("td",null,"How should the streams be replicated (read and written)?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Optional transformations"),(0,o.kt)("td",null,"How should Airbyte protocol messages (raw JSON blob) data be converted into other data representations?"))),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/"},"Connections and Sync Modes")," and ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/namespaces"},"Namespaces")),(0,o.kt)("p",null,"If you need to use ",(0,o.kt)("a",{parentName:"p",href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"},"cron scheduling"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Replication Frequency")," dropdown, click ",(0,o.kt)("strong",{parentName:"li"},"Cron"),". "),(0,o.kt)("li",{parentName:"ol"},"Enter a cron expression and choose a time zone to create a sync schedule.")),(0,o.kt)("p",null,"To set up a connection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Connections")," and then click ",(0,o.kt)("strong",{parentName:"p"},"+ New connection"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the New connection page, select a source:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To use an existing source, select your desired source from the ",(0,o.kt)("strong",{parentName:"p"},"Source")," dropdown. Click ",(0,o.kt)("strong",{parentName:"p"},"Use existing source"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To set up a new source, select the source you want to set up from the ",(0,o.kt)("strong",{parentName:"p"},"Source type")," dropdown. The fields relevant to your source are displayed. The Setup Guide provides information to help you fill out the fields for your selected source. Click ",(0,o.kt)("strong",{parentName:"p"},"Set up source"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a destination:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To use an existing destination, select your desired destination from the ",(0,o.kt)("strong",{parentName:"li"},"Destination")," dropdown. Click ",(0,o.kt)("strong",{parentName:"li"},"Use existing destination"),"."),(0,o.kt)("li",{parentName:"ul"},"To set up a new destination, select the destination you want to set up from the ",(0,o.kt)("strong",{parentName:"li"},"Destination type")," dropdown. The fields relevant to your destination are displayed. The Setup Guide provides information to help you fill out the fields for your selected destination. Click ",(0,o.kt)("strong",{parentName:"li"},"Set up destination"),".")),(0,o.kt)("p",{parentName:"li"},"The Set up the connection page is displayed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Replication frequency")," dropdown, select how often you want the data to sync from the source to the destination."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The default replication frequency is ",(0,o.kt)("strong",{parentName:"p"},"Every 24 hours"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Destination Namespace")," dropdown, select the format in which you want to store the data in the destination:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The default configuration is ",(0,o.kt)("strong",{parentName:"p"},"Mirror source structure"),"."),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Configuration")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Mirror source structure"),(0,o.kt)("td",null,'Some sources (for example, databases) provide namespace information for a stream. If a source provides the namespace information, the destination will reproduce the same namespace when this configuration is set. For sources or streams where the source namespace is not known, the behavior will default to the "Destination default" option')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Destination default"),(0,o.kt)("td",null,"All streams will be replicated and stored in the default namespace defined on the Destination Settings page. For more information, see",(0,o.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#destination-connector-settings"}," \u200b\u200bDestination Connector Settings"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Custom format"),(0,o.kt)("td",null,"All streams will be replicated and stored in a custom format. See",(0,o.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#custom-format"}," Custom format")," for more details"))))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To better understand the destination namespace configurations, see ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/namespaces#examples"},"Destination Namespace example")))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) In the ",(0,o.kt)("strong",{parentName:"p"},"Destination Stream Prefix (Optional)")," field, add a prefix to stream names (for example, adding a prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_")," renames ",(0,o.kt)("inlineCode",{parentName:"p"},"projects")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_projects"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) Click ",(0,o.kt)("strong",{parentName:"p"},"Refresh schema")," if you had previously triggered a sync with a subset of tables in the stream and now want to see all the tables in the stream.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Activate the streams you want to sync:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(Optional) If your source has multiple tables, type the name of the stream you want to enable in the ",(0,o.kt)("strong",{parentName:"li"},"Search stream name")," search box."),(0,o.kt)("li",{parentName:"ul"},"(Optional) To configure the sync settings for multiple streams, select the checkbox next to the desired streams, configure the settings in the purple box, and click ",(0,o.kt)("strong",{parentName:"li"},"Apply"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the sync settings:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toggle the ",(0,o.kt)("strong",{parentName:"p"},"Sync")," button to enable sync for the stream.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Source:")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Namespace"),": The database schema of your source tables (auto-populated for your source)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Stream name"),": The table name in the source (auto-populated for your source)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sync mode"),": Select how you want the data to be replicated from the source to the destination:"),(0,o.kt)("p",{parentName:"li"},"For the source:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Full Refresh")," to copy the entire dataset each time you sync"),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Incremental")," to replicate only the new or modified data")),(0,o.kt)("p",{parentName:"li"},"For the destination:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Overwrite")," to erase the old data and replace it completely")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Append")," to capture changes to your table\n",(0,o.kt)("strong",{parentName:"p"},"Note:")," This creates duplicate records")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Deduped + history")," to mirror your source while keeping records unique"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Some sync modes may not yet be available for your source or destination")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cursor field"),": Used in ",(0,o.kt)("strong",{parentName:"p"},"Incremental")," sync mode to determine which records to sync. Airbyte pre-selects the cursor field for you (example: updated date). If you have multiple cursor fields, select the one you want.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Primary key"),": Used in ",(0,o.kt)("strong",{parentName:"p"},"Deduped + history")," sync mode to determine the unique identifier.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Destination"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Namespace:")," The database schema of your destination tables."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stream name:")," The final table name in destination."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Set up connection"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Airbyte tests the connection. If the sync is successful, the Connection page is displayed."))),(0,o.kt)("h2",{id:"verify-the-connection"},"Verify the connection"),(0,o.kt)("p",null,"Verify the sync by checking the logs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"li"},"Connections"),". The list of connections is displayed. Click on the connection you just set up."),(0,o.kt)("li",{parentName:"ol"},"The Sync History is displayed. Click on the first log in the sync history."),(0,o.kt)("li",{parentName:"ol"},"Check the data at your destination. If you added a Destination Stream Prefix while setting up the connection, make sure to search for the stream name with the prefix.")),(0,o.kt)("h2",{id:"allowlist-ip-address"},"Allowlist IP address"),(0,o.kt)("p",null,"You may need to allowlist one of our IP addresses to enable access to Airbyte:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"34.106.109.131"),(0,o.kt)("li",{parentName:"ul"},"34.106.196.165"),(0,o.kt)("li",{parentName:"ul"},"34.106.60.246")))}c.isMDXComponent=!0}}]);