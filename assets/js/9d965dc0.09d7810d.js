"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1232],{9613:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>d});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),c=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},i=function(t){var e=c(t.components);return r.createElement(m.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,d=s["".concat(m,".").concat(k)]||s[k]||u[k]||l;return n?r.createElement(d,o(o({ref:e},i),{},{components:n})):r.createElement(d,o({ref:e},i))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1116:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(1163),a=(n(9496),n(9613));const l={},o="Benchmarks",p={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"Using Turbopack's bench cases (1000 React components), see https://turbo.build/pack/docs/benchmarks.",source:"@site/docs/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/docs/benchmark",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/benchmark.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Syntax Downgrade and Polyfill",permalink:"/docs/features/polyfill"}},m={},c=[],i={toc:c},s="wrapper";function u(t){let{components:e,...l}=t;return(0,a.kt)(s,(0,r.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarks"},"Benchmarks"),(0,a.kt)("p",null,"Using Turbopack's bench cases (1000 React components), see ",(0,a.kt)("a",{parentName:"p",href:"https://turbo.build/pack/docs/benchmarks"},"https://turbo.build/pack/docs/benchmarks"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Test Repo\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-fe/performance-compare"},"https://github.com/farm-fe/performance-compare")),(0,a.kt)("p",{parentName:"blockquote"},"Test Machine\uff08Linux Mint 21.1 Cinnamon\uff0c 11th Gen Intel\xa9 Core\u2122 i5-11400 @ 2.60GHz \xd7 6\uff0c 15.5 GiB\uff09")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Startup")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"HMR (Root)")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"HMR (Leaf)")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Production Build")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Webpack"),(0,a.kt)("td",{parentName:"tr",align:null},"8035ms"),(0,a.kt)("td",{parentName:"tr",align:null},"345ms"),(0,a.kt)("td",{parentName:"tr",align:null},"265ms"),(0,a.kt)("td",{parentName:"tr",align:null},"11321ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vite"),(0,a.kt)("td",{parentName:"tr",align:null},"3078ms"),(0,a.kt)("td",{parentName:"tr",align:null},"35ms"),(0,a.kt)("td",{parentName:"tr",align:null},"18ms"),(0,a.kt)("td",{parentName:"tr",align:null},"2266ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Turbopack"),(0,a.kt)("td",{parentName:"tr",align:null},"3731ms"),(0,a.kt)("td",{parentName:"tr",align:null},"62ms"),(0,a.kt)("td",{parentName:"tr",align:null},"54ms"),(0,a.kt)("td",{parentName:"tr",align:null},"6442ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rspack"),(0,a.kt)("td",{parentName:"tr",align:null},"831ms"),(0,a.kt)("td",{parentName:"tr",align:null},"104ms"),(0,a.kt)("td",{parentName:"tr",align:null},"96ms"),(0,a.kt)("td",{parentName:"tr",align:null},"724ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Farm"),(0,a.kt)("td",{parentName:"tr",align:null},"403ms"),(0,a.kt)("td",{parentName:"tr",align:null},"11ms"),(0,a.kt)("td",{parentName:"tr",align:null},"10ms"),(0,a.kt)("td",{parentName:"tr",align:null},"288ms")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"performance",src:n(2467).Z,width:"2122",height:"1066"})))}u.isMDXComponent=!0},2467:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/2023-10-15-16-44-26-4882d224b089e409a67a6e55c3cedfca.png"}}]);