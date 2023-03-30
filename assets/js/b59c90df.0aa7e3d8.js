"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2947],{9613:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(d,c(c({ref:t},f),{},{components:r})):n.createElement(d,c({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(1163),o=(r(9496),r(9613));const a={},c="CLI Options",i={unversionedId:"config/cli",id:"config/cli",title:"CLI Options",description:"create",source:"@site/docs/config/cli.md",sourceDirName:"config",slug:"/config/cli",permalink:"/docs/config/cli",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/config/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"configSidebar",previous:{title:"Config Reference",permalink:"/docs/config/farm-config"}},l={},p=[{value:"create",id:"create",level:2},{value:"build",id:"build",level:2}],f={toc:p},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-options"},"CLI Options"),(0,o.kt)("h2",{id:"create"},"create"),(0,o.kt)("p",null,"Create a new Farm project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @farmfe/cli@latest create [your project name]\n")),(0,o.kt)("h2",{id:"build"},"build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @farmfe/cli@latest build\n")))}s.isMDXComponent=!0}}]);