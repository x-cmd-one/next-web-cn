import{_ as l,C as s,o as n,c as o,H as r,w as i,k as t,a as e}from"./chunks/framework.98e11516.js";const N=JSON.parse('{"title":"gitui","titleTemplate":"x-cmd package | gitui 是一个基于终端的 Git 用户界面工具","description":"x-cmd package gitui | gitui 是一个基于终端的 Git 用户界面工具","frontmatter":{"name":"gitui","titleTemplate":"x-cmd package | gitui 是一个基于终端的 Git 用户界面工具","head":[["meta",{"name":"og:title","content":"gitui | x-cmd package"}],["meta",{"name":"og:description","content":"gitui 是一个基于终端的 Git 用户界面工具"}],["meta",{"name":"description","content":"x-cmd package gitui | gitui 是一个基于终端的 Git 用户界面工具"}]],"links":[{"type":"1min","text":"gitui","link":"/1min/gitui"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/extrawurst/gitui","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/gitui/releases","https://gitcode.net/x-cmd-build/gitui/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/gitui.cn","x-term-name":"gitui","x-term-desc":"gitui 是一个基于终端的 Git 用户界面工具","x-term-size":"large"},"headers":[],"relativePath":"pkg/gitui.md","filePath":"pkg/gitui.md"}'),c={name:"pkg/gitui.md"},g=t("h1",{id:"gitui",tabindex:"-1"},[e("gitui "),t("a",{class:"header-anchor",href:"#gitui","aria-label":'Permalink to "gitui"'},"​")],-1),u=t("p",{class:"x-desc"},"gitui 是一个基于终端的 Git 用户界面工具",-1),d=t("h2",{id:"简介",tabindex:"-1"},[e("简介 "),t("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=t("p",null,"gitui 由 Stephan D 于 2020 年使用 Rust 语言构建的 git 终端交互式命令行工具，旨在终端界面中便捷管理 git 存储库。",-1),h=t("h2",{id:"首次用户快速实验指南",tabindex:"-1"},[e("首次用户快速实验指南 "),t("a",{class:"header-anchor",href:"#首次用户快速实验指南","aria-label":'Permalink to "首次用户快速实验指南"'},"​")],-1),m=t("ol",null,[t("li",null,"本文的 demo 展现了如何通过 x-cmd 快速使用 gitui 开启交互模式，查看存储库状态，提交记录等信息。"),t("li",null,[e("x-cmd 提供了 "),t("a",{href:"/1min/gitui"},"gitui 1分钟教程"),e("，配合 x-cmd，马上体验。")])],-1),x=t("h2",{id:"功能特点",tabindex:"-1"},[e("功能特点 "),t("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),_=t("ol",null,[t("li",null,[t("strong",null,"高效稳定"),e("：gitui 相比于其他交互式工具 (lazygit, tig) 在管理大型仓库中, 有更快的启动时间，更小的内存占用，详情可查看 "),t("a",{href:"https://github.com/extrawurst/gitui#3--benchmarks-top-",target:"_blank",rel:"noreferrer"},"gitui 的对比测试"),e("。")]),t("li",null,[t("strong",null,"快捷操作"),e("：可在交互模式中，执行拉取，提交，推送以及 "),t("code",null,"stash"),e(" 等操作。")]),t("li",null,[t("strong",null,"检索与浏览"),e("：gitui 不仅可以检索浏览本地文件，还可以用于检索 git 提交记录，浏览提交更改等储存库信息。")])],-1),k=t("h2",{id:"类似工具与竞品",tabindex:"-1"},[e("类似工具与竞品 "),t("a",{class:"header-anchor",href:"#类似工具与竞品","aria-label":'Permalink to "类似工具与竞品"'},"​")],-1),b=t("ol",null,[t("li",null,[e("lazygit，使用 Go 语言构建的 git 终端交互式命令行工具，在三者中功能更加全面，交互界面更加友好，但在面对大型存储库中性能上不及另外两个。x-cmd 也引入了 lazygit，有兴趣的读者可以参考 "),t("a",{href:"/pkg/lazygit"},"x-cmd pkg lazygit")]),t("li",null,[e("tig，使用 C 语言构建的 git 终端交互式命令行工具，在三者中迭代的时间更久，体积更小。使用方面更偏向于使用命令调用。x-cmd 也引入了 tig，有兴趣的读者可以参考 "),t("a",{href:"/pkg/tig"},"x-cmd pkg tig")])],-1),f=t("h2",{id:"进一步探索",tabindex:"-1"},[e("进一步探索 "),t("a",{class:"header-anchor",href:"#进一步探索","aria-label":'Permalink to "进一步探索"'},"​")],-1),y=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/extrawurst/gitui",target:"_blank",rel:"noreferrer"},"GitHub: gitui")])],-1),E=t("div",{class:"language-sh vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"sh"),t("pre",{class:"shiki github-dark vp-code-dark"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"x"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"env"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"use"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"gitui")])])]),t("pre",{class:"shiki github-light vp-code-light"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#005CC5"}},"x"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"env"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"use"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"gitui")])])])],-1);function v(P,C,F,G,w,B){const a=s("PackagePage");return n(),o("div",null,[r(a,null,{default:i(()=>[g,u]),abstract:i(()=>[d,p,h,m,x,_,k,b,f,y]),install:i(()=>[E]),_:1})])}const T=l(c,[["render",v]]);export{N as __pageData,T as default};
