"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[217],{8410:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=n(1527),c=n(5696),l=n(7123),s=n(9988),a=n(2264);const o={},t="JavaScript Api",d={id:"api/javascript-api",title:"JavaScript Api",description:"Farm \u63d0\u4f9b\u5b8c\u6574\u7684\u5f00\u53d1\u670d\u52a1\u5668\u3001\u7f16\u8bd1\u5668\u3001\u76d1\u542c\u5668\u7b49 JavaScript Api, \u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5f15\u5165 @farmfe/core \u5305\u6765\u4f7f\u7528\u8fd9\u4e9b Api\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/api/javascript-api.mdx",sourceDirName:"api",slug:"/api/javascript-api",permalink:"/zh/docs/api/javascript-api",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/api/javascript-api.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Runtime Plugin API",permalink:"/zh/docs/api/runtime-plugin-api"},next:{title:"Rust Api",permalink:"/zh/docs/api/rust-api"}},p={},h=[{value:"Start",id:"start",level:2},{value:"Build",id:"build",level:2},{value:"Watch",id:"watch",level:2},{value:"Preview",id:"preview",level:2},{value:"Clean",id:"clean",level:2},{value:"loadEnv",id:"loadenv",level:2},{value:"createDevServer",id:"createdevserver",level:3},{value:"createPreviewServer",id:"createpreviewserver",level:3},{value:"getCompiler",id:"getcompiler",level:3},{value:"close",id:"close",level:3},{value:"Compiler",id:"compiler",level:2},{value:"compile",id:"compile",level:3},{value:"compileSync",id:"compilesync",level:3},{value:"traceDependencies",id:"tracedependencies",level:3},{value:"update",id:"update",level:3},{value:"hasModule",id:"hasmodule",level:3},{value:"getParentFiles",id:"getparentfiles",level:3},{value:"resources",id:"resources",level:3},{value:"Resource",id:"resource",level:3},{value:"writeResourcesToDisk",id:"writeresourcestodisk",level:3},{value:"removeOutputPathDir",id:"removeoutputpathdir",level:3},{value:"resolvedWatchPaths",id:"resolvedwatchpaths",level:3},{value:"resolvedModulePaths",id:"resolvedmodulepaths",level:3},{value:"onUpdateFinish",id:"onupdatefinish",level:3},{value:"outputPath",id:"outputpath",level:3},{value:"addExtraWatchFile",id:"addextrawatchfile",level:3},{value:"modules",id:"modules",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"javascript-api",children:"JavaScript Api"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Farm"})," \u63d0\u4f9b\u5b8c\u6574\u7684\u5f00\u53d1\u670d\u52a1\u5668\u3001\u7f16\u8bd1\u5668\u3001\u76d1\u542c\u5668\u7b49 ",(0,i.jsx)(r.code,{children:"JavaScript Api"}),", \u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5f15\u5165 ",(0,i.jsx)(r.code,{children:"@farmfe/core"})," \u5305\u6765\u4f7f\u7528\u8fd9\u4e9b Api\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u5b89\u88c5 ",(0,i.jsx)(r.code,{children:"@farmfe/core"})," \u5305:"]}),"\n",(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"npm",label:"npm",children:(0,i.jsx)(a.Z,{children:"npm install @farmfe/core@latest"})}),(0,i.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,i.jsx)(a.Z,{children:"yarn add @farmfe/core@latest"})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(a.Z,{children:"pnpm add @farmfe/core@latest"})})]})}),"\n",(0,i.jsx)(r.h2,{id:"start",children:"Start"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Start"})," \u65b9\u6cd5\u7528\u4e8e\u5feb\u901f\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668"]}),"\n",(0,i.jsxs)(r.p,{children:["\u8c03\u7528 ",(0,i.jsx)(r.code,{children:"start"})," \u65b9\u6cd5\u4e4b\u540e\u5c31\u53ef\u4ee5\u5728\u5f53\u524d\u63a7\u5236\u53f0\u770b\u89c1\u53ef\u7528\u7684 ",(0,i.jsx)(r.code,{children:"ip"})," \u5730\u5740\u7684\u65e5\u5fd7\u4fe1\u606f, \u9ed8\u8ba4\u4f1a\u7f16\u8bd1\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 ",(0,i.jsx)(r.code,{children:"index.html"})," \u6587\u4ef6"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"start(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { start, logger } from "@farmfe/core";\ntry {\n  await start(options);\n} catch (error) {\n  logger.error(`Failed to start server:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"build",children:"Build"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Build"})," \u65b9\u6cd5\u5bf9\u751f\u4ea7\u73af\u5883\u8fdb\u884c\u6784\u5efa"]}),"\n",(0,i.jsxs)(r.p,{children:["\u8c03\u7528 ",(0,i.jsx)(r.code,{children:"build"})," \u65b9\u6cd5\u4e4b\u540e\u9ed8\u8ba4\u6784\u5efa\u6d4f\u89c8\u5668\u4ea7\u7269, \u5e76\u4e14\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a ",(0,i.jsx)(r.code,{children:"dist"})," \u6587\u4ef6\u5939, \u5982\u82e5\u9700\u8981\u6784\u5efa\u4e0d\u540c\u73af\u5883\u4ee5\u53ca\u4e0d\u540c\u7248\u672c\u4ea7\u7269, \u4f8b\u5982 ",(0,i.jsx)(r.code,{children:"node"}),"\u3001",(0,i.jsx)(r.code,{children:"node-next"}),"\u3001",(0,i.jsx)(r.code,{children:"browser"}),"\u3001",(0,i.jsx)(r.code,{children:"browser-es2017"})," \u7b49, \u53ef\u4ee5\u901a\u8fc7\u67e5\u770b ",(0,i.jsx)(r.a,{href:"/docs/config/compilation-options#output",children:"output targetEnv"})," \u6765\u8fdb\u884c\u914d\u7f6e.\n\u7c7b\u578b:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"build(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { build, logger } from "@farmfe/core";\ntry {\n  await build(options);\n} catch (error) {\n  logger.error(`error during build:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"watch",children:"Watch"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Watch"})," \u65b9\u6cd5\u5bf9\u5f53\u524d\u9879\u76ee\u7684\u7f16\u8bd1\u8fdb\u884c\u5b9e\u65f6\u66f4\u65b0, \u7b49\u540c\u4e8e ",(0,i.jsx)(r.code,{children:"npx farm build --watch"}),", \u4e00\u822c\u4f5c\u7528\u4e8e ",(0,i.jsx)(r.code,{children:"node"})," \u73af\u5883"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"watch(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { watch, logger } from "@farmfe/core";\ntry {\n  await watch(defaultOptions);\n} catch (error) {\n  logger.error(`error during watch project:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"preview",children:"Preview"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Preview"})," \u65b9\u6cd5\u542f\u52a8\u4e00\u4e2a\u9884\u89c8\u670d\u52a1\u5668, \u5bf9\u751f\u4ea7\u73af\u5883\u4ea7\u7269\u8fdb\u884c\u9884\u89c8, \u4f7f\u7528\u65f6\u9700\u8981\u786e\u4fdd\u5df2\u7ecf\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"build"})," \u65b9\u6cd5\u8fdb\u884c\u6784\u5efa, \u5e76\u4e14\u751f\u6210\u4e86\u6b63\u786e\u7684\u751f\u4ea7\u73af\u5883\u4ea7\u7269"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"preview(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { preview, logger } from "@farmfe/core";\ntry {\n  await preview(defaultOptions);\n} catch (error) {\n  logger.error(`Failed to start preview server:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"clean",children:"Clean"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Clean"})," \u65b9\u6cd5\u6e05\u7406 ",(0,i.jsx)(r.code,{children:"farm"})," \u589e\u91cf\u6784\u5efa\u6240\u4ea7\u751f\u7f13\u5b58, \u5982\u679c\u60a8\u5f00\u542f\u4e86\u589e\u91cf\u6784\u5efa\u529f\u80fd, \u90a3\u4e48\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u80fd\u5bf9\u60a8\u6709\u6240\u5e2e\u52a9"]}),"\n",(0,i.jsx)(r.admonition,{type:"warning",children:(0,i.jsx)(r.p,{children:"\u5bf9\u4e8e\u76ee\u524d\u4f7f\u7528\u589e\u91cf\u6784\u5efa\u529f\u80fd\u800c\u5bfc\u81f4\u67d0\u4e9b\u4e0d\u53ef\u9884\u77e5\u6216\u8005\u672a\u53d1\u73b0\u7684\u95ee\u9898\u6240\u5bfc\u81f4\u7684\u7a0b\u5e8f\u5d29\u6e83, \u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u6e05\u7406\u7f13\u5b58\u6765\u89e3\u51b3\u95ee\u9898, \u82e5\u5e76\u4e0d\u80fd\u89e3\u51b3\u8bf7\u5728 github \u4e0a\u63d0\u4ea4 issues"})}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"clean(options: InlineConfig): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { clean, logger } from "@farmfe/core";\ntry {\n  await clean(defaultOptions);\n} catch (error) {\n  logger.error(`Failed to clean cache:\\n ${error.stack}`);\n  process.exit(1);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"loadenv",children:"loadEnv"}),"\n",(0,i.jsx)(r.p,{children:"\u4ece .env \u6587\u4ef6\u52a0\u8f7d\u73af\u5883\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"type LoadEnvFunc = (\n  mode: string,\n  envDir: string,\n  prefixes: string | string[] = ['FARM_', 'VITE_']\n) => [env: Record<string, string>, existsEnvFiles: string[]];\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"mode"})," \u662f ",(0,i.jsx)(r.code,{children:"development"}),"\u3001",(0,i.jsx)(r.code,{children:"Production"})," \u6216\u4efb\u4f55\u5b57\u7b26\u4e32\u3002 ",(0,i.jsx)(r.code,{children:"loadEnv"})," \u5c06\u5c1d\u8bd5\u52a0\u8f7d ",(0,i.jsx)(r.code,{children:"[``.env``, ``.env.local``, ``.env.${mode}``, ``.env.${mode}.local``] "})," \u4e3a ",(0,i.jsx)(r.code,{children:"envDir"}),"\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"envDir"})," \u662f ",(0,i.jsx)(r.code,{children:".env"})," \u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"prefixes"})," \u662f\u73af\u5883\u53d8\u91cf\u7684\u524d\u7f00\u3002 \u9ed8\u8ba4\u503c\u4e3a ",(0,i.jsx)(r.code,{children:"['FARM_', 'VITE_']"})," \u3002 \u5e26\u6709\u8fd9\u4e9b\u524d\u7f00\u7684\u73af\u5883\u53d8\u91cf\u5c06\u81ea\u52a8\u6ce8\u5165\u5230",(0,i.jsx)(r.code,{children:"define"}),"\u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"const [env, files] = loadEnv('development', '/path/to/project/env');\n// use env\n"})}),"\n",(0,i.jsx)(r.h3,{id:"createdevserver",children:"createDevServer"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"createDevServer"})," \u65b9\u6cd5\u7528\u4e8e\u542f\u52a8\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668, \u9700\u8981\u5148\u5b9e\u4f8b\u5316 ",(0,i.jsx)(r.code,{children:"Server"})," \u5bf9\u8c61, \u4f20\u9012\u53c2\u6570\u9700\u8981 ",(0,i.jsx)(r.code,{children:"farm"})," \u7684 ",(0,i.jsx)(r.code,{children:"compiler"})]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"createDevServer(options: DevServerOptions): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Server } from "@farmfe/core";\nconst server = new Server();\nawait server.createDevServer(options);\nserver.listen()\n'})}),"\n",(0,i.jsx)(r.h3,{id:"createpreviewserver",children:"createPreviewServer"}),"\n",(0,i.jsx)(r.p,{children:"\u521b\u5efa\u4e00\u4e2a \u9884\u89c8\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u9884\u89c8\u751f\u4ea7\u73af\u5883\u4ea7\u7269"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"createPreviewServer(options: DevServerOptions): Promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Server } from "@farmfe/core";\nconst server = new Server();\nawait server.createPreviewServer(options);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"getcompiler",children:"getCompiler"}),"\n",(0,i.jsxs)(r.p,{children:["\u83b7\u53d6\u5f53\u524d\u5f00\u53d1\u670d\u52a1\u5668\u7684\u7f16\u8bd1\u5668\u5b9e\u4f8b, \u5728\u5b9e\u4f8b\u5316 ",(0,i.jsx)(r.code,{children:"Server"})," \u7684\u65f6\u5019\u9700\u8981\u4f20\u9012\u4e00\u4e2a ",(0,i.jsx)(r.code,{children:"compiler"})," \u53c2\u6570"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"getCompiler(): Compiler\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Server, Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst server = new Server({\n  compiler\n});\nconst compiler = server.getCompiler();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"close",children:"close"}),"\n",(0,i.jsxs)(r.p,{children:["\u5173\u95ed\u5f53\u524d\u7531 ",(0,i.jsx)(r.code,{children:"createDevServer"})," \u5f00\u542f\u7684\u6240\u6709 ",(0,i.jsx)(r.code,{children:"Server"})," \u4ee5\u53ca ",(0,i.jsx)(r.code,{children:"Webscoker"})," \u670d\u52a1"]}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Server } from "@farmfe/core";\nconst server = new Server();\nawait server.createDevServer(options);\nserver.listen()\nawait server.close();\n'})}),"\n",(0,i.jsx)(r.h2,{id:"compiler",children:"Compiler"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Compiler"})," \u63d0\u4f9b\u4e00\u7cfb\u5217\u7f16\u8bd1\u5668\u7684 ",(0,i.jsx)(r.code,{children:"Api"}),",\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u5316 ",(0,i.jsx)(r.code,{children:"Compiler"})," \u521b\u5efa\u4e00\u4e2a\u7f16\u8bd1\u5668\u5b9e\u4f8b\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"compile",children:"compile"}),"\n",(0,i.jsxs)(r.p,{children:["\u7f16\u8bd1\u5668\u5f02\u6b65\u542f\u52a8\u7f16\u8bd1\u8fc7\u7a0b\u3002\u8fd4\u56de\u4e00\u4e2a ",(0,i.jsx)(r.code,{children:"promise"})]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"\u5982\u679c\u8bbe\u7f6e\u4e86\u7279\u5b9a\u7684\u73af\u5883\u53d8\u91cf (procee.env.FARM_PROFILE) , \u5219\u6267\u884c\u540c\u6b65\u7f16\u8bd1\u3002"})}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"compile(): promise<void>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"compilesync",children:"compileSync"}),"\n",(0,i.jsx)(r.p,{children:"\u7f16\u8bd1\u5668\u540c\u6b65\u542f\u52a8\u7f16\u8bd1\u8fc7\u7a0b\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"compileSync(): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\ncompiler.compileSync();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"tracedependencies",children:"traceDependencies"}),"\n",(0,i.jsxs)(r.p,{children:["\u8ffd\u8e2a\u6587\u4ef6\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb, \u6839\u636e ",(0,i.jsx)(r.code,{children:"compiler"})," \u4f20\u9012\u7684 ",(0,i.jsx)(r.code,{children:"config"})," \u53c2\u6570\u4e2d\u7684 ",(0,i.jsx)(r.code,{children:"input"})," \u8fd4\u56de\u5f53\u524d\u6587\u4ef6\u7684\u6240\u6709\u4f9d\u8d56\u5173\u7cfb, \u8fd9\u5bf9\u4e8e\u6839\u636e\u6587\u4ef6\u4f9d\u8d56\u5173\u7cfb\u8fdb\u884c\u91cd\u542f\u7f16\u8bd1\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"traceDependencies(): Array[string]\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\n\nconst config = {\n  input: "./farm.config.js"\n}\nconst compiler = new Compiler(config);\nconst dependencies = compiler.traceDependencies();\n'})}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u6240\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u8def\u5f84\u7ec4\u6210\u7684\u6570\u7ec4"}),"\n",(0,i.jsx)(r.h3,{id:"update",children:"update"}),"\n",(0,i.jsxs)(r.p,{children:["\u6839\u636e\u63d0\u4f9b\u7684\u8def\u5f84\u6765\u66f4\u65b0\u7f16\u8bd1, \u8fd4\u56de\u4e00\u4e2a\u89e3\u6790\u4e3a ",(0,i.jsx)(r.code,{children:"JsUpdateResult"})," \u7684 ",(0,i.jsx)(r.code,{children:"Promise"}),"\u3002\u5982\u679c\u7f16\u8bd1\u5df2\u7ecf\u5728\u8fdb\u884c\u4e2d, \u5b83\u4f1a\u7b49\u5f85\u5904\u7406\u5e76\u66f4\u65b0\u3002\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,i.jsx)(r.code,{children:"ignoreCompilingCheck"})," \u4e3a ",(0,i.jsx)(r.code,{children:"true"}),", \u5219\u4e0d\u4f1a\u68c0\u67e5\u7f16\u8bd1\u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"update(paths: Array<string>, sync: boolean, ignoreCompilingCheck: boolean): JsUpdateResult\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = await compiler.update(paths, true, true);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"hasmodule",children:"hasModule"}),"\n",(0,i.jsxs)(r.p,{children:["\u4f20\u9012\u4e00\u4e2a ",(0,i.jsx)(r.code,{children:"path"})," \u5224\u65ad\u5f53\u524d ",(0,i.jsx)(r.code,{children:"path"})," \u662f\u5426\u5904\u4e8e ",(0,i.jsx)(r.code,{children:"compiler"})," \u6240\u7f16\u8bd1\u7684\u6a21\u5757\u4e2d\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"hasModule(path: string): boolean\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.hasModule(path);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"getparentfiles",children:"getParentFiles"}),"\n",(0,i.jsxs)(r.p,{children:["\u68c0\u7d22\u7531 \u6a21\u5757\u5bfc\u5165\u540d (",(0,i.jsx)(r.code,{children:"id"}),") \u6216\u5df2\u89e3\u6790\u8def\u5f84\u6807\u8bc6(",(0,i.jsx)(r.code,{children:"resolvedPath"}),")\u7684\u6a21\u5757\u5bfc\u5165\u7684\u5f53\u524d\u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"getParentFiles(resolvedPath: string): Array<string>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.getParentFiles(resolvedPath);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resources",children:"resources"}),"\n",(0,i.jsxs)(r.p,{children:["\u8fd4\u56de\u6240\u6709\u7ecf\u8fc7 ",(0,i.jsx)(r.code,{children:"compiler"})," \u7f16\u8bd1\u540e\u7684\u6240\u6709\u4ea7\u7269\u8d44\u6e90"]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"type Resource = {\n  path: string\n  buffer: Buffer\n}\nresources(): Array<Resource>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resources();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resource",children:"Resource"}),"\n",(0,i.jsxs)(r.p,{children:["\u6839\u636e\u4f20\u5165\u7684\u6587\u4ef6\u8fd4\u56de\u5f53\u524d\u4ea7\u7269\u7684 ",(0,i.jsx)(r.code,{children:"buffer"})]}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"resource(path: string): Buffer | null\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resource(path);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"writeresourcestodisk",children:"writeResourcesToDisk"}),"\n",(0,i.jsx)(r.p,{children:"\u6839\u636e\u914d\u7f6e\u8f93\u51fa\u8def\u5f84\u5c06\u8d44\u6e90\u5199\u5165\u78c1\u76d8"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"writeResourcesToDisk(): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\ncompiler.writeResourcesToDisk();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"removeoutputpathdir",children:"removeOutputPathDir"}),"\n",(0,i.jsx)(r.p,{children:"\u5220\u9664\u8f93\u51fa\u4ea7\u7269\u8def\u5f84\u76ee\u5f55"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"removeOutputPathDir(): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\ncompiler.removeOutputPathDir();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resolvedwatchpaths",children:"resolvedWatchPaths"}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u5df2\u89e3\u6790\u7684\u76d1\u89c6\u8def\u5f84"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"resolvedWatchPaths(): Array<string>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resolvedWatchPaths();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"resolvedmodulepaths",children:"resolvedModulePaths"}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u76f8\u5bf9\u4e8e\u63d0\u4f9b\u7684\u6839\u8def\u5f84\u5df2\u89e3\u6790\u7684\u6a21\u5757\u8def\u5f84\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"resolvedModulePaths(rootPath: string): Array<string>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nawait compiler.compile()\nconst result = compiler.resolvedModulePaths(rootPath);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"onupdatefinish",children:"onUpdateFinish"}),"\n",(0,i.jsx)(r.p,{children:"\u6dfb\u52a0\u4e00\u4e2a\u5728\u66f4\u65b0\u8fc7\u7a0b\u5b8c\u6210\u540e\u6267\u884c\u7684\u56de\u8c03\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"onUpdateFinish(callback: (...args: any[]) => any): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\ncompiler.onUpdateFinish(callback);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"outputpath",children:"outputPath"}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u5df2\u89e3\u6790\u7684\u8f93\u51fa\u8def\u5f84"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"outputPath(): string\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.outputPath();\n'})}),"\n",(0,i.jsx)(r.h3,{id:"addextrawatchfile",children:"addExtraWatchFile"}),"\n",(0,i.jsx)(r.p,{children:"\u4e3a\u7f16\u8bd1\u5668\u6dfb\u52a0\u989d\u5916\u7684\u76d1\u89c6\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"addExtraWatchFile(rootPath: string,. filePath: string[]): void\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\ncompiler.addExtraWatchFile(rootPath, filePath);\n'})}),"\n",(0,i.jsx)(r.h3,{id:"modules",children:"modules"}),"\n",(0,i.jsx)(r.p,{children:"\u8fd4\u56de\u6587\u4ef6\u6a21\u5757\u89e3\u6790\u540e\u7684\u5bf9\u8c61\u6570\u7ec4"}),"\n",(0,i.jsx)(r.p,{children:"\u7c7b\u578b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"export interface Module {\n  id: string\n  moduleType: string\n  moduleGroups: Array<string>\n  resourcePot?: string\n  sideEffects: boolean\n  sourceMapChain: Array<string>\n  external: boolean\n  immutable: boolean\n}\nmodules(): Array<Module>\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u57fa\u672c\u793a\u4f8b:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'import { Compiler } from "@farmfe/core";\nconst compiler = new Compiler(config);\nconst result = compiler.modules();\n'})})]})}function m(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9988:(e,r,n)=>{n.d(r,{Z:()=>s});n(959);var i=n(5341);const c={tabItem:"tabItem_MFY6"};var l=n(1527);function s(e){let{children:r,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.Z)(c.tabItem,s),hidden:n,children:r})}},7123:(e,r,n)=>{n.d(r,{Z:()=>y});var i=n(959),c=n(5341),l=n(5739),s=n(8903),a=n(6206),o=n(6404),t=n(2108),d=n(2685);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:n,attributes:i,default:c}}=e;return{value:r,label:n,attributes:i,default:c}}))}(n);return function(e){const r=(0,t.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const c=(0,s.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o._X)(l),(0,i.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(c.location.search);r.set(l,e),c.replace({...c.location,search:r.toString()})}),[l,c])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:c}=e,l=h(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:l}))),[t,p]=m({queryString:n,groupId:c}),[j,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[c,l]=(0,d.Nk)(n);return[c,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:c}),v=(()=>{const e=t??j;return u({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),x(e)}),[p,x,l]),tabValues:l}}var x=n(8302);const v={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var g=n(1527);function f(e){let{className:r,block:n,selectedValue:i,selectValue:s,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:t}=(0,l.o5)(),d=e=>{const r=e.currentTarget,n=o.indexOf(r),c=a[n].value;c!==i&&(t(r),s(c))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>o.push(e),onKeyDown:p,onClick:d,...l,className:(0,c.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:c}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===c));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==c})))})}function b(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,c.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...e,...r}),(0,g.jsx)(w,{...e,...r})]})}function y(e){const r=(0,x.Z)();return(0,g.jsx)(b,{...e,children:p(e.children)},String(r))}}}]);