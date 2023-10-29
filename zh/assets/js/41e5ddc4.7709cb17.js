"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4589],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=i,g=c["".concat(u,".").concat(f)]||c[f]||m[f]||a;return t?n.createElement(g,o(o({ref:r},s),{},{components:t})):n.createElement(g,o({ref:r},s))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4211:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(1163),i=(t(9496),t(9613));const a={},o="Overview",l={unversionedId:"plugins/overview",id:"plugins/overview",title:"Overview",description:"Farm \u91c7\u7528\u5b8c\u5168\u63d2\u4ef6\u5316\u7684\u5f62\u5f0f\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u6765\u5e72\u9884 Farm \u7684\u51e0\u4e4e\u6240\u6709\u884c\u4e3a\uff0cFarm \u652f\u6301\u7684\u4e3b\u8981\u63d2\u4ef6\u7c7b\u578b\u5206\u4e3a\u4e00\u4e0b\u51e0\u7c7b\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/overview.md",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/zh/docs/plugins/overview",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"\u793e\u533a\u63d2\u4ef6",permalink:"/zh/docs/plugins/community-plugins"},next:{title:"Rust Plugins",permalink:"/zh/docs/plugins/rust-plugin"}},u={},p=[],s={toc:p},c="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(c,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Farm \u91c7\u7528\u5b8c\u5168\u63d2\u4ef6\u5316\u7684\u5f62\u5f0f\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u6765\u5e72\u9884 Farm \u7684\u51e0\u4e4e\u6240\u6709\u884c\u4e3a\uff0cFarm \u652f\u6301\u7684\u4e3b\u8981\u63d2\u4ef6\u7c7b\u578b\u5206\u4e3a\u4e00\u4e0b\u51e0\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7f16\u8bd1\u63d2\u4ef6"),"\uff1a\u5e72\u9884\u3001\u589e\u5f3a Farm \u7684\u7f16\u8bd1\u80fd\u529b\uff0c\u652f\u6301\u4f7f\u7528 Rust\uff08\u63a8\u8350\uff09\u4ee5\u53ca Js \u7f16\u5199\u63d2\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u8fd0\u884c\u65f6\u63d2\u4ef6"),"\uff1a\u5e72\u9884\u3001\u589e\u5f3a Farm \u7684\u8fd0\u884c\u65f6\u80fd\u529b\uff0c\u4f7f\u7528 Js \u7f16\u5199"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dev Server \u63d2\u4ef6"),"\uff1a\u5e72\u9884\u3001\u589e\u5f3a Farm \u7684 Dev Server\uff0c\u4f8b\u5982\u6302\u8f7d\u66f4\u591a\u53d8\u91cf\uff0c\u6ce8\u518c middleware \u7b49")),(0,i.kt)("p",null,"To use a Rust plugin, configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"farm.config.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineFarmConfig } from '@farmfe/core/dist/config';\n\ndefineFarmConfig({\n  // ...\n  plugins: [\n    { /*..*/ }, // Js plugin, a object with hook defined\n    '@farmfe/plugin-react', // rust plugin package name\n  ]\n})\n\n")),(0,i.kt)("p",null,"Farm support both rust plugins and js plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/rust-plugin"},"Rust Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/js-plugin"},"Js plugin"))))}m.isMDXComponent=!0}}]);