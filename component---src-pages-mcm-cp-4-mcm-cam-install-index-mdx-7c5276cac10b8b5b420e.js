(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),n=a("q1tI"),l=a.n(n),i=a("NmYn"),c=a.n(i),b=a("OKom"),o=a("k4MR"),p=a("TSYQ"),s=a.n(p),m=a("QH2O"),O=a("qKvR"),u=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(O.b)("div",{className:s()(m.pageHeader,(t={},t[m.withTabs]=n.length,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:m.text},a)))))},j=a("pEPl"),d=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,r=j.data.site.siteMetadata.repository,n=a||r,l=n.baseUrl,i=n.subDirectory,c=l+"/edit/"+n.branch+i+"/src/pages"+t;return l?Object(O.b)("div",{className:"bx--row "+d.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:d.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),h=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var v=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=c()(e,{lower:!0}),l=n===r,i=new RegExp(r+"(?!-)"),b=a.replace(i,n);return Object(O.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(O.b)(h.Link,{className:f.link,to:""+b},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:f.list},n))))))},r}(l.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,i=t.frontmatter,p=void 0===i?{}:i,s=t.relativePagePath,m=t.titleType,j=p.tabs,d=p.title,h=p.theme,f=p.description,C=p.keywords,w=r.data.site.pathPrefix,I=w?n.pathname.replace(w,""):n.pathname,_=j?I.split("/").filter(Boolean).slice(-1)[0]||c()(j[0],{lower:!0}):"";return Object(O.b)(o.a,{tabs:j,homepage:!1,theme:h,pageTitle:d,pageDescription:f,pageKeywords:C,titleType:m},Object(O.b)(u,{title:l?Object(O.b)(l,null):d,label:"label",tabs:j}),j&&Object(O.b)(v,{slug:I,tabs:j,currentTab:_}),Object(O.b)(y.a,{padded:!0},a,Object(O.b)(N,{relativePagePath:s})),Object(O.b)(g.a,{pageContext:t,location:n,slug:I,tabs:j,currentTab:_}),Object(O.b)(b.a,null))}},PMMY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},b=n.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(b,l({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Overview"),Object(r.b)("h3",null,"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"OCP 4.0+"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Install CLI Tools")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Helm CLI"),Object(r.b)("li",{parentName:"ul"},"Kubernetes CLI"),Object(r.b)("li",{parentName:"ul"},"IBM Cloud Pak CLI")),Object(r.b)("p",{parentName:"li"},"For CLI install help, check out the Knowledge Center guides ",Object(r.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html"},"here"),"."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",l({parentName:"li"},{href:"/content/mcm/cp4mcm_mcm_install/"}),"Install MCM")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Install Service Catalog")," (Required for OCP 4.0+. See install ",Object(r.b)("a",{href:"https://docs.openshift.com/container-platform/4.2/applications/service_brokers/installing-service-catalog.html"},"here"),")")),Object(r.b)("h2",null,"Online Installation"),Object(r.b)("h2",null,"Offline Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Download the installer file from Passport Advantage (PPA):")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",l({parentName:"tr"},{align:"center"}),"File Name"),Object(r.b)("th",l({parentName:"tr"},{align:"left"}),"Part Number"),Object(r.b)("th",l({parentName:"tr"},{align:"left"}),"Version"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",l({parentName:"tr"},{align:"center"}),"icp-cam-x86_64-4.1.tar.gz"),Object(r.b)("td",l({parentName:"tr"},{align:"left"}),"CC4E1EN"),Object(r.b)("td",l({parentName:"tr"},{align:"left"}),"1.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",l({parentName:"tr"},{align:"center"}),"IBM_CLOUD_AUTO_MGR_4.2_Lnx.tar.gz"),Object(r.b)("td",l({parentName:"tr"},{align:"left"}),"CC5QFEN"),Object(r.b)("td",l({parentName:"tr"},{align:"left"}),"1.3")))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create SCC policy"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",l({parentName:"pre"},{}),"oc adm policy add-scc-to-user ibm-anyuid-hostpath-scc system:serviceaccount:services:default\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Note"),": Persistent volumes with RWX mode is needed for Cloud Automation Manager. Visit ",Object(r.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_create_pv.html"},"here")," for more information.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Generate a deployment ServiceID API Key in the ",Object(r.b)("inlineCode",{parentName:"p"},"services")," namespace using the following commands:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",l({parentName:"pre"},{}),"export serviceIDName='service-deploy'\nexport serviceApiKeyName='service-deploy-api-key'\ncloudctl login -a <ibm_cloud_pak_mcm_console_url> --skip-ssl-validation -u admin -p <ibm_cloud_pak_mcm_admin_password> -n services\ncloudctl iam service-id-create ${serviceIDName} -d 'Service ID for service-deploy'\ncloudctl iam service-policy-create ${serviceIDName} -r Administrator,ClusterAdministrator --service-name 'idmgmt'\ncloudctl iam service-policy-create ${serviceIDName} -r Administrator,ClusterAdministrator --service-name 'identity'\ncloudctl iam service-api-key-create ${serviceApiKeyName} ${serviceIDName} -d 'Api key for service-deploy'\n")),Object(r.b)("p",{parentName:"li"},"The output with the API Key should look something like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",l({parentName:"pre"},{}),"Name          service-deploy-api-key\nDescription   Api key for service-deploy\nBound To      crn:v1:icp:private:iam-identity:mycluster:n/services::serviceid:ServiceId-163c213a-37f5-4f8b-8a3c-2fd7b3887a4f\nCreated At    2020-01-22T14:46+0000\nAPI Key       <API KEY HERE>\n")),Object(r.b)("p",{parentName:"li"},"Save the API Key for use during install configuration in Step 5b.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Load the PPA Archive using ",Object(r.b)("inlineCode",{parentName:"p"},"cloudctl")," assuming you already logged in from the previous command"),Object(r.b)("p",{parentName:"li"},"Run the following commands with a user with Cluster Admin access:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",l({parentName:"pre"},{}),"docker login -u $(oc whoami) -p $(oc whoami -t) $(oc registry info)\ncloudctl catalog load-archive --archive <archive-name> --registry $(oc registry info)/services\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sync CAM Helm Charts"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Login to MCM UI and sync helm repositories;  Go to ",Object(r.b)("strong",{parentName:"li"},"Administer")," > ",Object(r.b)("strong",{parentName:"li"},"Helm repository")),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Sync All")," in the upper-right corner")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure and Install CAM")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In upper right-hand corner, click the ",Object(r.b)("strong",{parentName:"p"},"Catalog")," icon")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Search for ",Object(r.b)("inlineCode",{parentName:"p"},"ibm-cam")," and click the chart from the ",Object(r.b)("inlineCode",{parentName:"p"},"local-helm")," repository")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Configure")," in the bottom-right, or click the ",Object(r.b)("strong",{parentName:"p"},"Configuration")," tab")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enter the following install parameters:"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Release name")," - Enter ",Object(r.b)("inlineCode",{parentName:"p"},"cam")," in release name.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Target namespace")," - From the drop down list, select ",Object(r.b)("inlineCode",{parentName:"p"},"services"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"I have read and agreed to license agreements")," to accept the license agreements.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Expand ",Object(r.b)("strong",{parentName:"p"},"Parameters")," > ",Object(r.b)("strong",{parentName:"p"},"All Parameters")," section")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Worker node architecture")," - select amd64")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Docker image pull secret"),": for offline installation, set to ",Object(r.b)("em",{parentName:"p"},"default"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Product Identifier")," - Enter ",Object(r.b)("inlineCode",{parentName:"p"},"IBMCloudAutomationManager_5737E67_4100_EE_000")," (v1.2) or  ",Object(r.b)("inlineCode",{parentName:"p"},"IBMCloudAutomationManager_5737E67_4200_EE_000")," (v1.3)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"IAM Service API Key")," - Enter the IAM service API Key you created earlier")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Optionally, select ",Object(r.b)("strong",{parentName:"p"},"Optimize the installation for offline")," to optimize the installation for offline. For example, skip internet access to import public starter templates from github.com on the public internet during the installation.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Optionally, select ",Object(r.b)("strong",{parentName:"p"},"Enable audit")," to enable the audit for actions in Cloud Automation Manager. It requires the management logging service to be installed. For installing the Cloud Automation Manager on IBM Multicloud Manager 3.2.1, select ",Object(r.b)("inlineCode",{parentName:"p"},"Enable legacy audit"),". For installing the Cloud Automation Manager on IBM Multicloud Manager 3.2.x or higher, select ",Object(r.b)("inlineCode",{parentName:"p"},"ICP32"),". For audit related installation parameters, see ",Object(r.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_installation_parameters.html?view=kc"}),"Installation parameters"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Optionally, select ",Object(r.b)("strong",{parentName:"p"},"Enable FIPS for CAM")," to enable FIPS.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Under ",Object(r.b)("strong",{parentName:"p"},"IBM Cloud Private")," > ",Object(r.b)("strong",{parentName:"p"},"Port"),", enter port value 443, or choose your own port")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Under ",Object(r.b)("strong",{parentName:"p"},"Image"),", set Repository value to ",Object(r.b)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc:5000/services/"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If using Dynamic Storage, Check ",Object(r.b)("strong",{parentName:"p"},"Enable Dynamic Provisioning")," and set your Storage Class Name. Repeat for each volume. Note that the Storage Class must support RWM mode"),Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Install")))),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Confirm Installation"),Object(r.b)("p",{parentName:"li"},"Monitor your install with"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",l({parentName:"pre"},{}),"watch oc get pods\n")),Object(r.b)("p",{parentName:"li"}," You should see something like this:"),Object(r.b)("img",l({parentName:"li"},{src:"/assets/img/cp4mcm/cam_install_pods.png",alt:"CAM Install Pods"})),Object(r.b)("p",{parentName:"li"},"Once completed, access CAM in a browser using the url from"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",l({parentName:"pre"},{}),"oc get routes\n")))),Object(r.b)("h2",null,"Additional Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_prereq.html"},"Knowledge Center - CAM Prerequisites")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SS2L37_4.1.0.0/cam_install_offline_icpos.html"},"Knowledge Center - CAM Offline Installation Guide"))))}o.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-cam-install-index-mdx-7c5276cac10b8b5b420e.js.map