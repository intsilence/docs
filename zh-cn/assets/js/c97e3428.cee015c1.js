"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[185],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28482:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(59496),o=n(45924),a="tabItem_G5LH";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},38142:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(665),o=n(59496),a=n(45924),l=n(46971),i=n(21),c=n(73962),u=n(15469),s="tabList_A7qg",p="tabItem_Keco";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,v=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),N=w.tabGroupChoices,Z=w.setTabGroupChoices,C=(0,o.useState)(y),T=C[0],O=C[1],x=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var I=N[g];null!=I&&I!==T&&b.some((function(e){return e.value===I}))&&O(I)}var S=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==T&&(D(t),O(r),null!=g&&Z(g,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=x.indexOf(e.currentTarget)+1;n=null!=(r=x[o])?r:x[0];break;case"ArrowLeft":var a,l=x.indexOf(e.currentTarget)-1;n=null!=(a=x[l])?a:x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:S,onClick:S},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},87460:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002")))}c.isMDXComponent=!0},32595:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u8fd9\u91cc\u5207\u6362\u5230\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u3002\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a ",(0,a.kt)("code",null,n.redirectUri)," \u7684 Redirect URI \u5e76\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u3002"),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"50%"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," \u662f\u4e00\u4e2a OAuth 2.0 \u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u8868\u660e\u5728 authentication \u540e\u91cd\u5b9a\u5411\u81f3\u7684\u4f4d\u7f6e\u3002"))}c.isMDXComponent=!0},95557:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API"))))}c.isMDXComponent=!0},82328:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u5728\u8c03\u7528 ",(0,a.kt)("code",null,n.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002")))}c.isMDXComponent=!0},88365:function(e,t,n){n.d(t,{ZP:function(){return u}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=n.p+"assets/images/web-sign-in-flow-e0b056d8128741cf51bb6921ce76a564.png",i=["components"],c={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u767b\u5f55\u6d41\u7a0b\u53ef\u4ee5\u88ab\u7b80\u5316\u4e3a\uff1a"),(0,a.kt)("center",null,(0,a.kt)("img",{alt:"Web sign-in flow",src:l,width:"80%"})))}u.isMDXComponent=!0},29719:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()")," \u5c06\u6e05\u7406\u5185\u5b58\u4e0e localStorage \u4e2d\u7684\u6240\u6709 Logto \u6570\u636e\uff08\u5982\u679c\u6709\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u9000\u51fa\u767b\u5f55\u540e\uff0c\u8ba9\u4f60\u7684\u7528\u6237\u91cd\u65b0\u56de\u5230\u4f60\u7684\u7f51\u7ad9\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002\u8ba9\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234")," \u6dfb\u52a0\u81f3\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u91cc\u7684 Post Sign-out URIs \u4e2d\uff08\u4f4d\u4e8e Redirect URIs \u4e0b\u65b9\uff09\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()")," \u7684\u53c2\u6570\u3002"))}c.isMDXComponent=!0},9426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=n(83937),i=n(28482),c=n(38142),u=n(87460),s=n(32595),p=n(95557),d=n(82328),m=n(88365),f=n(29719),g=["components"],v={sidebar_label:"\u539f\u751f JS"},k="\u539f\u751f JS\uff1a\u96c6\u6210 `@logto/browser`",b={unversionedId:"docs/recipes/integrate-logto/vanilla-js",id:"docs/recipes/integrate-logto/vanilla-js",title:"\u539f\u751f JS\uff1a\u96c6\u6210 `@logto/browser`",description:"Browser SDK \u662f \u6846\u67b6\u65e0\u5173 \u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4f60\u5199\u4e00\u5c42\u9002\u914d\u6846\u67b6\u7684 SDK \u5305\u88c5\uff0c\u5373\u53ef\u5728\u4efb\u610f\u4e00\u79cd\u524d\u7aef\u6846\u67b6\u4e2d\u4f7f\u7528\u3002\u8fd9\u4e5f\u662f @logto/react \u548c @logto/vue \u505a\u7684\u4e8b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/vanilla-js.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/vanilla-js",permalink:"/zh-cn/docs/recipes/integrate-logto/vanilla-js",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/vanilla-js.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"\u539f\u751f JS"},sidebar:"docsSidebar",previous:{title:"\u4f20\u7edf Web",permalink:"/zh-cn/docs/recipes/integrate-logto/traditional"},next:{title:"Vue",permalink:"/zh-cn/docs/recipes/integrate-logto/vue"}},h={},y=[{value:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",level:3},{value:"\u5904\u7406\u91cd\u5b9a\u5411",id:"\u5904\u7406\u91cd\u5b9a\u5411",level:3},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",level:3},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],w={toc:y};function N(e){var t=e.components,n=(0,o.Z)(e,g);return(0,a.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u539f\u751f-js\u96c6\u6210-logtobrowser"},"\u539f\u751f JS\uff1a\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"h1"},"@logto/browser")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Browser SDK \u662f ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/64725017/what-does-it-mean-by-framework-agnostic"},"\u6846\u67b6\u65e0\u5173")," \u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4f60\u5199\u4e00\u5c42\u9002\u914d\u6846\u67b6\u7684 SDK \u5305\u88c5\uff0c\u5373\u53ef\u5728\u4efb\u610f\u4e00\u79cd\u524d\u7aef\u6846\u67b6\u4e2d\u4f7f\u7528\u3002\u8fd9\u4e5f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"@logto/react")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"@logto/vue")," \u505a\u7684\u4e8b\u3002")),(0,a.kt)(u.ZP,{type:"\u5355\u9875\u5e94\u7528",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56"},"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56"),(0,a.kt)(c.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/browser\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/browser\n"))),(0,a.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/browser\n")))),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,a.kt)("p",null,"\u5f15\u5165\u5e76\u901a\u8fc7\u914d\u7f6e\u521d\u59cb\u5316 ",(0,a.kt)("inlineCode",{parentName:"p"},"LogtoClient"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import LogtoClient from '@logto/browser';\n\nconst logtoClient = new LogtoClient({\n  endpoint: '<your-logto-endpoint>', // \u4f8b\u5982 http://localhost:3001\n  appId: '<your-application-id>',\n});\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u63a5\u4e0b\u6765\u7684\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u7684\u5e94\u7528\u8fd0\u884c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234"),"\u3002")),(0,a.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)(m.ZP,{mdxType:"SignInFlowSummary"}),(0,a.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,a.kt)(s.ZP,{figureSrc:l.Z,redirectUri:"http://localhost:1234/callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"),(0,a.kt)(d.ZP,{calling:".signIn()",mdxType:"SignInNote"}),(0,a.kt)("p",null,"\u8fd4\u56de\u4f60\u7684 IDE \u6216\u7f16\u8f91\u5668\uff0c\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u6765\u5b9e\u73b0\u4e00\u4e2a\u767b\u5f55\u6309\u94ae\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<button onclick=\"logtoClient.signIn('http://localhost:1234/callback')\">\u767b\u5f55</button>\n")),(0,a.kt)("h3",{id:"\u5904\u7406\u91cd\u5b9a\u5411"},"\u5904\u7406\u91cd\u5b9a\u5411"),(0,a.kt)("p",null,"\u9a6c\u4e0a\u5c31\u8981\u5927\u529f\u544a\u6210\uff01\u5728\u4e0a\u4e00\u6b65\uff0c\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/callback")," \u7528\u4f5c Redirect URI\uff0c\u73b0\u5728\u6211\u4eec\u9700\u8981\u5bf9\u5176\u59a5\u5584\u5904\u7406\u3002\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/callback")," \u8def\u7531\u4e0b\u63d2\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  await logtoClient.handleSignInCallback();\n  console.log(logtoClient.isAuthenticated); // true\n} catch {\n  // \u5904\u7406\u9519\u8bef\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u6d4b\u8bd5\u767b\u5f55\u6d41\u7a0b\u4e86\u3002"),(0,a.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,a.kt)(f.ZP,{mdxType:"SignOutNote"}),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<button onclick=\"logtoClient.signOut('http://localhost:1234')\">\u9000\u51fa\u767b\u5f55</button>\n")),(0,a.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,a.kt)(p.ZP,{mdxType:"FurtherReadings"}))}N.isMDXComponent=!0},83937:function(e,t,n){t.Z=n.p+"assets/images/web-redirect-uri-b4992589015d65ea3dc15b8b8131cd26.png"}}]);