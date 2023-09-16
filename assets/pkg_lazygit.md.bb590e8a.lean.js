import{_ as i,C as s,o as n,c as o,H as r,w as a,k as e,a as t}from"./chunks/framework.98e11516.js";const B=JSON.parse('{"title":"lazygit","titleTemplate":"x-cmd package | 一个 `git` 命令的终端 UI","description":"x-cmd package lazygit | 一个 `git` 命令的终端 UI","frontmatter":{"name":"lazygit","titleTemplate":"x-cmd package | 一个 `git` 命令的终端 UI","head":[["meta",{"name":"og:title","content":"lazygit | x-cmd package"}],["meta",{"name":"og:description","content":"一个 `git` 命令的终端 UI"}],["meta",{"name":"description","content":"x-cmd package lazygit | 一个 `git` 命令的终端 UI"}]],"links":[{"type":"1min","text":"lazygit","link":"/1min/lazygit"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/jesseduffield/lazygit","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/lazygit/releases","https://gitcode.net/x-cmd-build/lazygit/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/lazygit.cn","x-term-name":"lazygit","x-term-desc":"一个 `git` 命令的终端 UI","x-term-size":"large"},"headers":[],"relativePath":"pkg/lazygit.md","filePath":"pkg/lazygit.md"}'),c={name:"pkg/lazygit.md"},g=e("h1",{id:"lazygit",tabindex:"-1"},[t("lazygit "),e("a",{class:"header-anchor",href:"#lazygit","aria-label":'Permalink to "lazygit"'},"​")],-1),d=e("p",{class:"x-desc"},[t("一个 "),e("code",null,"git"),t(" 命令的终端 UI")],-1),p=e("h2",{id:"简介",tabindex:"-1"},[t("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),h=e("p",null,"lazygit 由 Jesse Duffield 于 2018 年使用 Go 语言构建的 git 终端交互式命令行工具，旨在终端界面中便捷管理 git 存储库。",-1),u=e("h2",{id:"首次用户快速实验指南",tabindex:"-1"},[t("首次用户快速实验指南 "),e("a",{class:"header-anchor",href:"#首次用户快速实验指南","aria-label":'Permalink to "首次用户快速实验指南"'},"​")],-1),m=e("ol",null,[e("li",null,"本文的 demo 展现了如何通过 x-cmd 快速使用 lazygit 开启交互模式，预览 git 仓库信息。"),e("li",null,[t("x-cmd 提供了 "),e("a",{href:"/1min/lazygit"},"lazygit 1分钟教程"),t("，配合 x-cmd，马上体验。")]),e("li",null,[t("作者录制了 "),e("a",{href:"https://youtu.be/CPLdltN7wgE",target:"_blank",rel:"noreferrer"},"YouTube 视频教程: 15分钟了解 15个 lazygit 功能点")])],-1),y=e("h2",{id:"功能特点",tabindex:"-1"},[t("功能特点 "),e("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),_=e("ol",null,[e("li",null,[e("strong",null,"功能多样"),t("：lazygit 提供涵盖了大量 git 管理功能，例如 "),e("code",null,"Rebase"),t("，"),e("code",null,"Worktrees"),t("，"),e("code",null,"cherry-pick"),t("，修改仓库提交记录，浏览分支关系图等使用场景，以交互的方式来操作相对复杂的 git 命令操作。")]),e("li",null,[e("strong",null,"交互友好"),t("：lazygit 交互界面拥有美观的 Terminal UI 以及直观的绘图渲染。")]),e("li",null,[e("strong",null,"自定义命令"),t("：提供灵活的配置文件，可在交互模式下绑定快捷键，运行自定义命令。")])],-1),x=e("h2",{id:"类似工具与竞品",tabindex:"-1"},[t("类似工具与竞品 "),e("a",{class:"header-anchor",href:"#类似工具与竞品","aria-label":'Permalink to "类似工具与竞品"'},"​")],-1),k=e("ol",null,[e("li",null,[t("gitui，使用 Rust 语言构建的 git 终端交互式命令行工具，在三者中面对大型存储库中性能表现更好。且在 Roadmap 罗列了对标 lazygit 的功能点，值得期待。x-cmd 也引入了 gitui，有兴趣的读者可以参考 "),e("a",{href:"/pkg/gitui"},"x-cmd pkg gitui")]),e("li",null,[t("tig，使用 C 语言构建的 git 终端交互式命令行工具，在三者中迭代的时间更久，体积更小。使用方面更偏向于使用命令调用。x-cmd 也引入了 tig，有兴趣的读者可以参考 "),e("a",{href:"/pkg/tig"},"x-cmd pkg tig")])],-1),b=e("h2",{id:"进一步探索",tabindex:"-1"},[t("进一步探索 "),e("a",{class:"header-anchor",href:"#进一步探索","aria-label":'Permalink to "进一步探索"'},"​")],-1),f=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/jesseduffield/lazygit",target:"_blank",rel:"noreferrer"},"GitHub: lazygit")]),e("li",null,[e("a",{href:"https://youtu.be/VDXvbHZYeKY",target:"_blank",rel:"noreferrer"},"YouTube 视频教程: 基础教程")]),e("li",null,[e("a",{href:"https://youtu.be/4XaToVut_hs",target:"_blank",rel:"noreferrer"},"YouTube 视频教程: Rebase 魔法教程")])],-1),z=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"lazygit")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"lazygit")])])])],-1);function E(v,P,C,F,I,T){const l=s("PackagePage");return n(),o("div",null,[r(l,null,{default:a(()=>[g,d]),abstract:a(()=>[p,h,u,m,y,_,x,k,b,f]),install:a(()=>[z]),_:1})])}const w=i(c,[["render",E]]);export{B as __pageData,w as default};
