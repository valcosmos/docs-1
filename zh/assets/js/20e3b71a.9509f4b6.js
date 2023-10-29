"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2402],{294:(e,n,s)=>{s.d(n,{Z:()=>r});var a=s(9496),t=s(5924);const l={tabItem:"tabItem_rlDe"};function r(e){let{children:n,hidden:s,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,r),hidden:s},n)}},4656:(e,n,s)=>{s.d(n,{Z:()=>N});var a=s(1163),t=s(9496),l=s(5924),r=s(9866),i=s(3442),o=s(2981),u=s(1267),p=s(1552);function m(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}function c(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??m(s);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function d(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,l=c(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,u]=f({queryString:s,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,p.Nk)(s);return[a,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:a}),k=(()=>{const e=o??m;return d({value:e,tabValues:l})?e:null})();(0,t.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var k=s(3537);const b={tabList:"tabList_t2F_",tabItem:"tabItem_TXTv"};function h(e){let{className:n,block:s,selectedValue:i,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),c=e=>{const n=e.currentTarget,s=p.indexOf(n),a=u[s].value;a!==i&&(m(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=p.indexOf(e.currentTarget)+1;n=p[s]??p[0];break}case"ArrowLeft":{const s=p.indexOf(e.currentTarget)-1;n=p[s]??p[p.length-1];break}}n?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},n)},u.map((e=>{let{value:n,label:s,attributes:r}=e;return t.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:c},r,{className:(0,l.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===n})}),s??n)})))}function v(e){let{lazy:n,children:s,selectedValue:a}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=g(e);return t.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},t.createElement(h,(0,a.Z)({},e,n)),t.createElement(v,(0,a.Z)({},e,n)))}function N(e){const n=(0,k.Z)();return t.createElement(y,(0,a.Z)({key:String(n)},e))}},8670:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=s(1163),t=(s(9496),s(9613)),l=s(3067),r=s(4656),i=s(294);const o={},u="@farmfe/js-plugin-sass",p={unversionedId:"plugins/official-plugins/js-sass",id:"plugins/official-plugins/js-sass",title:"@farmfe/js-plugin-sass",description:"\u652f\u6301 sass \u7f16\u8bd1.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/js-sass.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-sass",permalink:"/zh/docs/plugins/official-plugins/js-sass",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-sass.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-less",permalink:"/zh/docs/plugins/official-plugins/js-less"},next:{title:"@farmfe/js-plugin-svgr",permalink:"/zh/docs/plugins/official-plugins/js-svgr"}},m={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"sassOptions",id:"sassoptions",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3},{value:"additionalData",id:"additionaldata",level:3},{value:"globals",id:"globals",level:3}],d={toc:c},f="wrapper";function g(e){let{components:n,...s}=e;return(0,t.kt)(f,(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"farmfejs-plugin-sass"},"@farmfe/js-plugin-sass"),(0,t.kt)("p",null,"\u652f\u6301 ",(0,t.kt)("inlineCode",{parentName:"p"},"sass")," \u7f16\u8bd1."),(0,t.kt)("h2",{id:"installation"},"Installation"),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,t.kt)(l.Z,{mdxType:"CodeBlock"},"npm install @farmfe/js-plugin-sass sass")),(0,t.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,t.kt)(l.Z,{mdxType:"CodeBlock"},"yarn add @farmfe/js-plugin-sass sass")),(0,t.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,t.kt)(l.Z,{mdxType:"CodeBlock"},"pnpm add @farmfe/js-plugin-sass sass"))),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,6}","{2,6}":!0},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({ /* options */ })\n  ]\n}\n")),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"export type SassPluginOptions = {\n  sassOptions?: StringOptions<'async'>;\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n\n  /**\n   * - relative or absolute path\n   * - globals file will be added to the top of the sass file\n   * - when file changed, the file can't be hot-reloaded\n   *\n   * relative to project root or cwd\n   */\n  implementation?: string | undefined;\n  globals?: string[];\n  additionalData?:\n    | string\n    | ((content?: string, resolvePath?: string) => string | Promise<string>);\n};\n")),(0,t.kt)("h3",{id:"sassoptions"},"sassOptions"),(0,t.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,t.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/js-api/interfaces/options/"},"sass \u9009\u9879"),"\u3002"),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      sassOptions: {\n        loadPaths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n")),(0,t.kt)("h3",{id:"filters"},"filters"),(0,t.kt)("p",null,"\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u7531 ",(0,t.kt)("inlineCode",{parentName:"p"},"sass")," \u5904\u7406\u3002 \u5bf9\u4e8e load \u94a9\u5b50\u9ed8\u8ba4\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"{resolvedPaths: ['\\\\.(s[ac]ss)$'] }"),", \u5bf9\u4e8e transform \u94a9\u5b50\u9ed8\u8ba4\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"{ moduleTypes: ['sass'] }"),"\u3002"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"resolvedPaths"),": \u4ec5\u5904\u7406\u8fd9\u4e9b\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u3002 \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"moduleTypes"),"\uff1a\u4ec5\u5904\u7406\u5177\u6709\u8fd9\u4e9b\u6a21\u5757\u7c7b\u578b\u7684\u6587\u4ef6\u3002")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"resolvedPaths")," \u548c ",(0,t.kt)("inlineCode",{parentName:"p"},"moduleTypes")," \u53d6\u5e76\u96c6\u3002"),(0,t.kt)("p",null,"\u793a\u4f8b:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-sass$'],\n        moduleTypes: ['sass']\n      }\n    })\n  ]\n}\n\nexport default config;\n")),(0,t.kt)("h3",{id:"implementation"},"implementation"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sass")," \u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"implementation")," \u5305\u540d\u79f0\u3002 \u9ed8\u8ba4\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"sass"),"\u3002 \u5982\u679c\u4f60\u60f3\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"sass-embedded"),"\uff0c\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"sass-embedded"),"\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      implementation: 'sass-embedded'\n    })\n  ]\n}\n")),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"\u60a8\u5e94\u8be5\u624b\u52a8\u5b89\u88c5 ",(0,t.kt)("inlineCode",{parentName:"p"},"sass-embedded"),"\u3002")),(0,t.kt)("h3",{id:"additionaldata"},"additionalData"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"type AdditionalDataOption = string | ((content?: string, resolvePath?: string) => string | Promise<string>);\n")),(0,t.kt)("p",null,"\u8981\u6dfb\u52a0\u5230\u6bcf\u4e2a sass \u6587\u4ef6\u7684\u9644\u52a0\u6570\u636e\u3002 \u4f8b\u5b50\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      // add variables.sass to every sass file\n      additionalData: `\n        @import \"./src/styles/variables.scss\";\n      `\n    })\n  ]\n}\n")),(0,t.kt)("p",null,"Sass \u6587\u4ef6"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sass",metastring:'title="index.scss"',title:'"index.scss"'},".foo {\n  color: @primary-color;\n}\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"additionalData")," \u5c06\u4f1a\u88ab\u6dfb\u52a0\u5230\u8fd9\u4e2a\u6587\u4ef6\u7684\u5934\u90e8\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sass",metastring:'title="index.scss"',title:'"index.scss"'},'@import "./src/styles/variables.scss";\n\n.foo {\n  color: @primary-color;\n}\n')),(0,t.kt)("p",null,"\u51fd\u6570\u5f62\u5f0f\u7528\u6cd5:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      // add variables.sass to every sass file\n      additionalData: (content, resolvePath) => {\n        if (resolvePath === '/path/to/index.sass') {\n          return `\n            @import \"./src/styles/variables.sass\";\n          `;\n        }\n      }\n    })\n  ]\n}\n")),(0,t.kt)("h3",{id:"globals"},"globals"),(0,t.kt)("p",null,"\u5168\u5c40 sass \u6587\u4ef6\u3002 \u8fd9\u4e9b\u6587\u4ef6\u5c06\u6dfb\u52a0\u5230\u6bcf\u4e2a sass \u6587\u4ef6\u7684\u9876\u90e8\u3002 \u5b83\u4e0e ",(0,t.kt)("inlineCode",{parentName:"p"},"additionalData")," \u76f8\u540c\uff0c\u4f46\u66f4\u65b9\u4fbf\u3002"))}g.isMDXComponent=!0}}]);