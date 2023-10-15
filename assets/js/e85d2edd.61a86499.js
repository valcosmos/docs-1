"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4862],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(1163),o=(n(9496),n(9613));const a={},i="2. Develop With Farm",l={unversionedId:"tutorials/start",id:"tutorials/start",title:"2. Develop With Farm",description:"In this chapter, we will introduce commonly used configuration and plugins to help you build complex production-ready web project with Farm.",source:"@site/docs/tutorials/2-start.md",sourceDirName:"tutorials",slug:"/tutorials/start",permalink:"/docs/tutorials/start",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/tutorials/2-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1. Create A Project",permalink:"/docs/tutorials/create"},next:{title:"3. Build For Production",permalink:"/docs/tutorials/build"}},s={},p=[{value:"Introduce Component Library",id:"introduce-component-library",level:2},{value:"Styling the Project",id:"styling-the-project",level:2},{value:"Create a Basic Admin Site Layout",id:"create-a-basic-admin-site-layout",level:3},{value:"Styling With Css Modules",id:"styling-with-css-modules",level:3},{value:"Using Css Preprocessor",id:"using-css-preprocessor",level:3},{value:"Configuring DevServer",id:"configuring-devserver",level:2},{value:"Useful Configuration",id:"useful-configuration",level:3},{value:"Setup Proxy",id:"setup-proxy",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-develop-with-farm"},"2. Develop With Farm"),(0,o.kt)("p",null,"In this chapter, we will introduce ",(0,o.kt)("strong",{parentName:"p"},"commonly used configuration and plugins")," to help you build complex production-ready web project with Farm."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This chapter reuse the project we created in chapter 1")),(0,o.kt)("p",null,"We'll setup our project step by step:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Introduce popular component library ",(0,o.kt)("inlineCode",{parentName:"li"},"antd"),", and configure necessary plugins for it"),(0,o.kt)("li",{parentName:"ol"},"Introduce commonly used plugins like postcss, svgr, less and so on."),(0,o.kt)("li",{parentName:"ol"},"Configure proxies and other useful dev server options")),(0,o.kt)("h2",{id:"introduce-component-library"},"Introduce Component Library"),(0,o.kt)("p",null,"A component library is often necessary when develop a web project, in this section, we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"ant-design")," as a demo to show How to add component libraries in Farm."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We use ant design here only for illustration, you can introduce any component library. Farm does not have objection.")),(0,o.kt)("p",null,"First we need to install ant-design into our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add antd # execute under project root\n")),(0,o.kt)("p",null,"Ant Design needs Sass, so we also need to install plugins for compiling scss. We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"@farmfe/plugin-sass")," which is a Rust Plugin officially provided by Farm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @farmfe/plugin-sass -D\n")),(0,o.kt)("p",null,"Then add this plugin to ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts" {7}',title:'"farm.config.ts"',"{7}":!0},"// ...\n\nexport default defineConfig({\n  // ... ignore other fields\n  plugins: [\n    '@farmfe/plugin-react',\n    '@farmfe/plugin-sass'\n  ]\n});\n")),(0,o.kt)("p",null,"Now Antd is ready, add it to our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4,12}","{4,12}":!0},"import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nimport { DatePicker } from 'antd';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(\n  <div>\n    A React Page compiled by Farm. \n    antd DatePicker: <DatePicker />\n  </div>\n);\n")),(0,o.kt)("p",null,"Then execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," and open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9000")," in browser:"),(0,o.kt)("img",{src:"/img/2023-10-10-21-41-45.png",width:"500"})," \xa0",(0,o.kt)("img",{src:"/img/2023-10-10-21-34-33.png",width:"580"}),(0,o.kt)("h2",{id:"styling-the-project"},"Styling the Project"),(0,o.kt)("p",null,"Now we have successfully introduced a component library into our project. Next we'll learn how to styling."),(0,o.kt)("h3",{id:"create-a-basic-admin-site-layout"},"Create a Basic Admin Site Layout"),(0,o.kt)("p",null,"First we create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"app.tsx")," next to ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"{7}","{7}":!0},".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 app.tsx\n    \u2514\u2500\u2500 index.tsx\n")),(0,o.kt)("p",null,"Content of ",(0,o.kt)("inlineCode",{parentName:"p"},"app.tsx"),"(It's demo code from official site of Antd):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},"import React from 'react';\nimport { Breadcrumb, Layout, Menu, theme } from 'antd';\n\nconst { Header, Content, Footer } = Layout;\n\nconst App: React.FC = () => {\n  const {\n    token: { colorBgContainer },\n  } = theme.useToken();\n\n  return (\n    <Layout className=\"layout\">\n      <Header style={{ display: 'flex', alignItems: 'center' }}>\n        <div className=\"demo-logo\" />\n        <Menu theme=\"dark\" mode=\"horizontal\" defaultSelectedKeys={['2']}\n          items={new Array(15).fill(null).map((_, index) => {\n            const key = index + 1;\n            return {\n              key,\n              label: `nav ${key}`,\n            };\n          })}\n        />\n      </Header>\n      <Content style={{ padding: '0 50px' }}>\n        <Breadcrumb style={{ margin: '16px 0' }}>\n          <Breadcrumb.Item>Home</Breadcrumb.Item>\n          <Breadcrumb.Item>List</Breadcrumb.Item>\n          <Breadcrumb.Item>App</Breadcrumb.Item>\n        </Breadcrumb>\n        <div className=\"site-layout-content\" style={{ background: colorBgContainer }}>\n          Content\n        </div>\n      </Content>\n      <Footer style={{ textAlign: 'center' }}>Ant Design \xa92023 Created by Ant UED</Footer>\n    </Layout>\n  );\n};\n\nexport default App;\n")),(0,o.kt)("p",null,"Then modify ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{4,13} title="index.tsx"',"{4,13}":!0,title:'"index.tsx"'},"import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nimport App from './app';\n// import { DatePicker } from 'antd';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(\n  <div>\n    A React Page compiled by Farm. \n    <App />\n    {/* antd DatePicker: <DatePicker /> */}\n  </div>\n);\n  \n")),(0,o.kt)("p",null,"Then we get a Basic admin layout:"),(0,o.kt)("img",{src:"/img/2023-10-12-22-16-48.png",width:"800"}),(0,o.kt)("h3",{id:"styling-with-css-modules"},"Styling With Css Modules"),(0,o.kt)("p",null,"Farm supports ",(0,o.kt)("inlineCode",{parentName:"p"},"css modules")," out of box, by default, Farm will treat any ",(0,o.kt)("inlineCode",{parentName:"p"},".module.(css|scss|less)")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"css modules"),". Firstly we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.scss"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"{8}","{8}":!0},".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 app.tsx\n    \u251c\u2500\u2500 app.module.scss\n    \u2514\u2500\u2500 index.tsx\n")),(0,o.kt)("p",null,"Content of ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.scss"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="app.module.scss"',title:'"app.module.scss"'},"$primary-color: #1890ff;\n\n.site-layout-content {\n  min-height: 200px;\n  padding: 24px;\n  font-size: 24px;\n  color: $primary-color;\n}\n")),(0,o.kt)("p",null,"Then import ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.scss")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.tsx")," and save it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"\nimport styles from './app.module.scss';\n// ...\n")),(0,o.kt)("p",null,"Then your page should be updated like below:"),(0,o.kt)("img",{src:"/img/2023-10-14-21-24-40.png",width:"800"}),(0,o.kt)("h3",{id:"using-css-preprocessor"},"Using Css Preprocessor"),(0,o.kt)("p",null,"Farm provided official js plugins for ",(0,o.kt)("inlineCode",{parentName:"p"},"postcss"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"@farmfe/js-plugin-postcss"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"less"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"@farmfe/js-plugin-less"),") (We have already installed rust plugin ",(0,o.kt)("inlineCode",{parentName:"p"},"sass"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"@farmfe/plugin-sass"),") above)."),(0,o.kt)("p",null,"To use postcss, First we need to install the plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @farmfe/js-plugin-postcss\n")),(0,o.kt)("p",null,"then configure it in ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"farm.config.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts" {7}',title:'"farm.config.ts"',"{7}":!0},"// ...\nimport farmPluginPostcss from '@farmfe/js-plugin-postcss';\n\nexport default defineConfig({\n  // ... ignore other fields\n  plugins: [\n    '@farmfe/plugin-react',\n    '@farmfe/plugin-sass',\n    farmPluginPostcss()\n  ]\n});\n")),(0,o.kt)("p",null,"Now postcss is fully supported in Farm, we won't cover postcss details here, refer to postcss docs for more details."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugins/overview"},"Farm Plugins")," to learn more about Farm plugins.")),(0,o.kt)("h2",{id:"configuring-devserver"},"Configuring DevServer"),(0,o.kt)("p",null,"You can find server configuration in ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/farm-config#devserver-options---server"},"Farm Dev Server Config"),"."),(0,o.kt)("h3",{id:"useful-configuration"},"Useful Configuration"),(0,o.kt)("p",null,"Example configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n   return config;\n}\n\nexport default defineConfig({\n   // All dev server options are under server\n   server: {\n     open: true,\n     port: 9001,\n     hmr: {\n       // Configure the port for web socket listening\n       port: 9801\n       // Configure the host for web socket listening\n       host: 'localhost',\n       // Files to ignore when configuring file monitoring\n       ignores: ['auto_generated/*']\n     }\n     //...\n   }\n});\n")),(0,o.kt)("p",null,"For above examples, we used following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"open"),": open the browser with specified port automatically"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"port"),": set the dev sever port to ",(0,o.kt)("inlineCode",{parentName:"li"},"9001")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hmr"),": set the hmr port and watched files, we ignores file changes under ",(0,o.kt)("inlineCode",{parentName:"li"},"auto_generated")," directory.")),(0,o.kt)("h3",{id:"setup-proxy"},"Setup Proxy"),(0,o.kt)("p",null,"Configure server proxy. Based on ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/koa-proxies"},"koa-proxies")," implementation, specific options refer to its documentation, example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n   return config;\n}\n\nexport default defineConfig({\n    server: {\n     proxy: {\n       '/api': {\n         target: 'https://music-erkelost.vercel.app/banner',\n         changeOrigin: true,\n         rewrite: (path: any) => path.replace(/^\\/api/, ''),\n       },\n     },\n   },\n});\n\n")))}m.isMDXComponent=!0}}]);