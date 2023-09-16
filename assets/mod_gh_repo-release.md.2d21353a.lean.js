import{_ as r,C as o,o as c,c as d,H as e,w as h,k as s,a,Y as t}from"./chunks/framework.98e11516.js";const D=JSON.parse('{"title":"x gh repo release","description":"x gh repo release | x-cmd module | 仓库发布管理","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh repo release | x-cmd"}],["meta",{"name":"og:description","content":"仓库发布管理"}],["meta",{"name":"description","content":"x gh repo release | x-cmd module | 仓库发布管理"}]]},"headers":[],"relativePath":"mod/gh/repo-release.md","filePath":"mod/gh/repo-release.md"}'),y={name:"mod/gh/repo-release.md"},i=s("h1",{id:"x-gh-repo-release",tabindex:"-1"},[a("x gh repo release "),s("a",{class:"header-anchor",href:"#x-gh-repo-release","aria-label":'Permalink to "x gh repo release"'},"​")],-1),E=s("p",{class:"x-desc"},"仓库发布管理",-1),g=t("",33),F=t("",36),u=t("",19),b=t("",12),C=t("",13),m=s("h2",{id:"相关链接",tabindex:"-1"},[a("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),v=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),a(" 获取补全信息")]),s("p",null,[a("运行 "),s("code",null,"CMD SUBCOMMAND --help"),a(" 可以获取命令的更多信息")])],-1);function x(_,B,f,k,A,S){const p=o("AdsContent"),l=o("DocsGroupTable"),n=o("DocsLinkCard");return c(),d("div",null,[i,E,e(p),g,e(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"},{"name":"<code>--tag</code> ^lt;tag_name^gt;","default":"","desc":"目标标签名称"}]},"Optional":{"active":true,"data":[{"name":"<code>--name</code> ^lt;release_name^gt;","default":"","desc":"发行名称"},{"name":"<code>--body</code> ^lt;release_desc^gt;","default":"","desc":"发行描述"},{"name":"<code>--target_commitish</code> ^lt;target_commitish^gt;","default":"<code>\\"main\\"</code> ","desc":"发行的分支(默认 is main)"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,e(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"},{"name":"<code>--release_id</code> ^lt;id^gt;","default":"","desc":"发行版本 ID (可通过 <code>x gh repo release ls</code> 获取)"}]},"Optional":{"active":true,"data":[{"name":"<code>--page</code> ^lt;num^gt;","default":"<code>\\"1\\"</code> ","desc":"目标页码"},{"name":"<code>--per_page</code> ^lt;num^gt;","default":"<code>\\"30\\"</code> ","desc":"每页数据量"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,e(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"},{"name":"<code>--release_id</code> ^lt;id^gt;","default":"","desc":"发行版本 ID (可通过 <code>x gh repo release ls</code> 获取)"}]},"Optional":{"active":true,"data":[{"name":"<code>--name</code> ^lt;file_name^gt;","default":"","desc":"发行资源附件文件名"},{"name":"<code>--label</code> ^lt;desc^gt;","default":"","desc":"发行资源附件简短描述"},{"name":"<code>--file_type</code> ^lt;media_type^gt;","default":"<code>\\"octet-stream\\"</code> ","desc":"目标上传附件资源媒体类型"},{"name":"<code>--endpoint</code> ^lt;address^gt;","default":"<code>\\"https://uploads.github.com\\"</code> ","desc":"上传的宿主机端点地址 (提供给 GitHub 私有化部署)"}]},"$NotGroup":{"active":true,"data":[]}}'}),b,e(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--name</code> ^lt;file_name^gt;","default":"","desc":"发行资源附件文件名"},{"name":"<code>--label</code> ^lt;desc^gt;","default":"","desc":"发行资源附件简短描述"}]},"$NotGroup":{"active":true,"data":[]}}'}),C,e(n,null,{default:h(()=>[m]),_:1}),v])}const T=r(y,[["render",x]]);export{D as __pageData,T as default};
