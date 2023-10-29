"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1295],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(1163),r=(n(9496),n(9613));const l={},i="Tree Shake",o={unversionedId:"features/tree-shake",id:"features/tree-shake",title:"Tree Shake",description:"Farm supports Tree Shake, which is automatically enabled in the default Production environment. It can be turned on or off by the compilation.treeShake option.",source:"@site/docs/features/tree-shake.md",sourceDirName:"features",slug:"/features/tree-shake",permalink:"/docs/features/tree-shake",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/tree-shake.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Source Map",permalink:"/docs/features/sourcemap"},next:{title:"Minification",permalink:"/docs/features/minification"}},s={},p=[{value:"Configuring Tree Shake",id:"configuring-tree-shake",level:2},{value:"Deal With Side Effects",id:"deal-with-side-effects",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tree-shake"},"Tree Shake"),(0,r.kt)("p",null,"Farm supports Tree Shake, which is automatically enabled in the default Production environment. It can be turned on or off by the ",(0,r.kt)("inlineCode",{parentName:"p"},"compilation.treeShake")," option."),(0,r.kt)("p",null,"During Tree Shake, the sideEffects field in package.json will be automatically read, and modules with sideEffects will not perform Tree Shake."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Farm will treat all circularly dependent modules as sideEffects and will not perform Tree Shake. Please try to avoid circular dependencies in your project.")),(0,r.kt)("p",null,"Tree shake example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="a.js"',title:'"a.js"'},"import { b1, b2 } from 'b';\nconsole.log(b1);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="b.js"',title:'"b.js"'},'export b1 = "B1";\nexport b2 = "B2";\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a.js")," is entry and it imports ",(0,r.kt)("inlineCode",{parentName:"p"},"b.js"),", after tree shaking, the result is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="a.js"',title:'"a.js"'},"import { b1 } from 'b';\nconsole.log(b1);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="b.js"',title:'"b.js"'},'export b1 = "B1";\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"b2")," is not used and will be removed in both ",(0,r.kt)("inlineCode",{parentName:"p"},"a.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b.js")),(0,r.kt)("h2",{id:"configuring-tree-shake"},"Configuring Tree Shake"),(0,r.kt)("p",null,"Tree Shake is enabled in production mode by default, to disable tree shake, use ",(0,r.kt)("inlineCode",{parentName:"p"},"compilation.treeShake"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"export default {\n   compilation: {\n     treeShake: false,\n   },\n};\n")),(0,r.kt)("h2",{id:"deal-with-side-effects"},"Deal With Side Effects"),(0,r.kt)("p",null,"When a module contains ",(0,r.kt)("inlineCode",{parentName:"p"},"side effects"),", Farm won't apply tree shake for it, and all of its imported and exports are treated as used. Farm will think following modules have ",(0,r.kt)("inlineCode",{parentName:"p"},"side effects"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"CommonJs modules always have side effects."),(0,r.kt)("li",{parentName:"ol"},"A module contains ",(0,r.kt)("inlineCode",{parentName:"li"},"self-executed")," statement at global scope has side effects"),(0,r.kt)("li",{parentName:"ol"},"Modules that contains cyclic dependencies has side effects"),(0,r.kt)("li",{parentName:"ol"},"Modules matches ",(0,r.kt)("inlineCode",{parentName:"li"},"sideEffects")," config in its closest ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ol"},"Entry modules are always has side effects.")),(0,r.kt)("p",null,"Example 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const a = require('./')\nmodule.exports = a;\n")),(0,r.kt)("p",null,"CommonJs module are always has side effects."),(0,r.kt)("p",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import a from './';\n\na();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a()")," is executed at global scope and we treat it as side effect."),(0,r.kt)("p",null,"Example 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// a.js\nimport b from './b.js'\n\n// b.js\nimport a from './a.js'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," are cyclic dependencies, so they will be treated as side effects too."),(0,r.kt)("p",null,"Example 4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "my-package",\n  "sideEffects": [\n    "./global/**.ts"\n  ]\n}\n')),(0,r.kt)("p",null,"all ts  modules under ",(0,r.kt)("inlineCode",{parentName:"p"},"global/")," are treat as side effects."))}u.isMDXComponent=!0}}]);