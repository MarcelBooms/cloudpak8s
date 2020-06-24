(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),o=a("NmYn"),l=a.n(o),c=a("OKom"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},d=a("pEPl"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=d.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),j=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),i=r===n,o=new RegExp(n+"(?!-)"),c=a.replace(o,r);return Object(m.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(m.b)(j.Link,{className:v.link,to:""+c},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},r))))))},n}(i.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,d=b.tabs,g=b.title,j=b.theme,v=b.description,N=b.keywords,x=n.data.site.pathPrefix,P=x?r.pathname.replace(x,""):r.pathname,C=d?P.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:d,homepage:!1,theme:j,pageTitle:g,pageDescription:v,pageKeywords:N,titleType:u},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:d}),d&&Object(m.b)(y,{slug:P,tabs:d,currentTab:C}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(f.a,{pageContext:t,location:r,slug:P,tabs:d,currentTab:C}),Object(m.b)(c.a,null))}},"m7K/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l={_frontmatter:o},c=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Pruning Overview: Managing Leftover Objects"),Object(n.b)("p",null,"During the normal operation and utilization of the cluster and cluster services, objects created in OpenShift can accumulate. Maintaining all previous versions of all the objects may end up consuming significant amount of storage which may have an impact on the performance of elements of the platform.  "),Object(n.b)("p",null,"The following are some area that might to be reviewed regularly:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"etcd data storage. Big etcd structure may slowdown the response of any activity related to etcd."),Object(n.b)("li",{parentName:"ul"},"local container registry.  Big registry will slow down the push and pull image operation."),Object(n.b)("li",{parentName:"ul"},"/var/lib/containers.  This is the location of the container runtime and container ephemeral storage area.")),Object(n.b)("p",null,"Architecting and Operating OpenShift Clusters: OpenShift for Infrastructure and Operations Teams",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.oreilly.com/library/view/architecting-and-operating/9781484249857/"}),"https://www.oreilly.com/library/view/architecting-and-operating/9781484249857/"),"    "),Object(n.b)("h2",null,"Pruning"),Object(n.b)("p",null,"Over time, API objects created in OpenShift Container Platform can accumulate in the cluster’s etcd data store through normal user operations, such as when building and deploying applications.",Object(n.b)("br",{parentName:"p"}),"\n","Cluster administrators can periodically prune older versions of objects from the cluster that are no longer required. For example, by pruning images you can delete older images and layers that are no longer in use, but are still taking up disk space.  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Pruning groups"),Object(n.b)("li",{parentName:"ul"},"Pruning deployments"),Object(n.b)("li",{parentName:"ul"},"Pruning builds"),Object(n.b)("li",{parentName:"ul"},"Pruning images"),Object(n.b)("li",{parentName:"ul"},"Pruning cron jobs  ")),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/applications/pruning-objects.html"}),"https://docs.openshift.com/container-platform/4.3/applications/pruning-objects.html")),Object(n.b)("h2",null,"Garbage Collection"),Object(n.b)("p",null,"There are two types of Garbage Collection"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Container Garbage collection."),Object(n.b)("li",{parentName:"ul"},"Image Garbage collection.")),Object(n.b)("p",null,"Both of these can be tuned by modifying the the Kubelet argument settings at the Node ConfigMap.  For more information  please look at\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.oreilly.com/library/view/architecting-and-operating/9781484249857/"}),"Architecting and Operating OpenShift Clusters: OpenShift for Infrastructure and Operations Teams"),"  "))}s.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-day-2-misc-prune-index-mdx-a3ec99242b2784cb8d2e.js.map