(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),o=a.n(r),i=a("NmYn"),l=a.n(i),c=a("OKom"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),O=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),y=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===n,i=new RegExp(n+"(?!-)"),c=a.replace(i,r);return Object(d.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(d.b)(g.Link,{className:y.link,to:""+c},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},r))))))},n}(o.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,m=b.tabs,O=b.title,g=b.theme,y=b.description,v=b.keywords,k=n.data.site.pathPrefix,C=k?r.pathname.replace(k,""):r.pathname,I=m?C.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:m,homepage:!1,theme:g,pageTitle:O,pageDescription:y,pageKeywords:v,titleType:u},Object(d.b)(h,{title:o?Object(d.b)(o,null):O,label:"label",tabs:m}),m&&Object(d.b)(w,{slug:C,tabs:m,currentTab:I}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:r,slug:C,tabs:m,currentTab:I}),Object(d.b)(c.a,null))}},WTdm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},c=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"This page describes all the steps on how to deploy the Cloud Pak\nfor Integration to managed OpenShift on IBM Cloud.  This requires a paid IBM\nCloud Account with the ability to create Red Hat Open Shift clusters.",Object(n.b)("br",{parentName:"p"}),"\n","It also requires a license to deploy the Cloud\nPak for Integration."),Object(n.b)("h2",null,"Deploying a managed OpenShift Cluster on IBM Cloud"),Object(n.b)("ol",{start:6},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log into your IBM Cloud Account.  From the Dashboard on the Search Bar,\nenter in ",Object(n.b)("inlineCode",{parentName:"p"},"Cloud Pak for Integration"),".  It will take you to the section\nwhere you can create your own cluster.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Follow these steps to deploy Red Hat OpenShift and the Common\nServices —\n",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/cloud-pak-integration?topic=cloud-pak-integration-getting-started"}),"here"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"After you complete the installation process, it will create some\nnamespaces as well as apply some general security settings required to install\nthe Cloud Pak.  It will also automatically create a ",Object(n.b)("inlineCode",{parentName:"p"},"Pull Secret")," that you\ncan use to deploy capabilities.  This secret is called\n",Object(n.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," and will be referenced multiple times."))),Object(n.b)("h2",null,"Helpful Hints"),Object(n.b)("p",null,"This section is designed to help with issues encountered with installing\nthe Cloud Pak for Integration on ROKS (IBM Cloud). "),Object(n.b)("h3",null,"Issues with Accessing Platform Navigator UI after install"),Object(n.b)("p",null,"In order to avoid issues with accessing the cp4i Platform Navigator, be sure\nto delete any old cp4i workspaces you no longer need or be sure to use a\nunique name for your project when provisioning a new Cloud Pak for\nIntegration instance. If you have an existing cp4i workspace and then\nsubsequently provision a new cp4i workspace, the URL link on the Offering\nDashboard will be incorrect. For example the 0000 before .us-south is\nwrong in the following URL. Instead the 0000 needs replaced with 0001:"),Object(n.b)("p",null,"Incorrect URL: ",Object(n.b)("a",o({parentName:"p"},{href:"https://integration-integration.drm-cp4i-cluster-bd61e41b2ca9182e95120f4f372e19d6-0000.us-south.containers.appdomain.cloud/"}),"https://integration-integration.drm-cp4i-cluster-bd61e41b2ca9182e95120f4f372e19d6-0000.us-south.containers.appdomain.cloud/")),Object(n.b)("p",null,"Correct URL: ",Object(n.b)("a",o({parentName:"p"},{href:"https://integration-integration.drm-cp4i-cluster-bd61e41b2ca9182e95120f4f372e19d6-0001.us-south.containers.appdomain.cloud/"}),"https://integration-integration.drm-cp4i-cluster-bd61e41b2ca9182e95120f4f372e19d6-0001.us-south.containers.appdomain.cloud/")),Object(n.b)("p",null,"To delete an old workspace instance, in the IBM Cloud navigate to\n",Object(n.b)("inlineCode",{parentName:"p"},"Schematics->Workspaces")," and delete the old workspace. Do not delete the\nunderlying OpenShift cluster first or you will have to open a support\nticket to delete your workspace as it will error out if the underlying\ncluster is gone."),Object(n.b)("h2",null,"Deploy Capabilities"),Object(n.b)("h3",null,"you will want to create the Tracing capability first"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-tracing"}),"Tracing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-integration"}),"App Connect")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-api-mgmt"}),"API Connect")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-queue-manager"}),"MQ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-eventstreams"}),"Event Streams")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-fast-file-transfer"}),"Aspera")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-secure-gateway"}),"DataPower")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"../deploy-asset-repo"}),"Asset Repository"))))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-roks-index-mdx-db03a0b19cd03ba6c93b.js.map