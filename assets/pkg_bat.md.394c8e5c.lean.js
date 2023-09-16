import{_ as n,C as s,o,c,H as i,w as e,k as t,a}from"./chunks/framework.98e11516.js";const N=JSON.parse('{"title":"bat","titleTemplate":"x-cmd package | `cat` 命令的克隆，带有 git 集成，支持语法高亮显示","description":"x-cmd package bat | `cat` 命令的克隆，带有 git 集成，支持语法高亮显示","frontmatter":{"name":"bat","titleTemplate":"x-cmd package | `cat` 命令的克隆，带有 git 集成，支持语法高亮显示","head":[["meta",{"name":"og:title","content":"bat | x-cmd package"}],["meta",{"name":"og:description","content":"`cat` 命令的克隆，带有 git 集成，支持语法高亮显示"}],["meta",{"name":"description","content":"x-cmd package bat | `cat` 命令的克隆，带有 git 集成，支持语法高亮显示"}]],"links":[{"type":"1min","text":"bat","link":"/1min/bat"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/sharkdp/bat","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/bat/releases","https://gitcode.net/x-cmd-build/bat/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/bat.cn","x-term-name":"bat","x-term-desc":"`cat` 命令的克隆，带有 git 集成，支持语法高亮显示","x-term-size":"large"},"headers":[],"relativePath":"pkg/bat.md","filePath":"pkg/bat.md"}'),r={name:"pkg/bat.md"},d=t("h1",{id:"bat",tabindex:"-1"},[a("bat "),t("a",{class:"header-anchor",href:"#bat","aria-label":'Permalink to "bat"'},"​")],-1),h=t("p",{class:"x-desc"},[t("code",null,"cat"),a(" 命令的克隆，带有 git 集成，支持语法高亮显示")],-1),p=t("h2",{id:"简介",tabindex:"-1"},[a("简介 "),t("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),b=t("p",null,[t("code",null,"bat"),a(" 是 "),t("code",null,"cat"),a(" 命令的替代品，对 "),t("code",null,"cat"),a(" 命令进行功能扩展，如语法高亮、自动分页等，为用户提供更友好的显示和定制选项。对于需要在终端频繁查看文本内容的用户，推荐用 "),t("code",null,"bat"),a("。")],-1),u=t("h2",{id:"首次用户",tabindex:"-1"},[a("首次用户 "),t("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),g=t("ol",null,[t("li",null,[a("本文的 demo 展现了 "),t("code",null,"bat"),a(" 的几种基础用法，以及如何结合 "),t("code",null,"find"),a(" 命令预览多个文件内容。")]),t("li",null,[a("x-cmd也提供了"),t("a",{href:"/1min/bat"},"1分钟教程"),a("可以帮你快速入门。")])],-1),m=t("h2",{id:"功能特点",tabindex:"-1"},[a("功能特点 "),t("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),_=t("ol",null,[t("li",null,[t("strong",null,"语法高亮"),a("：支持语法高亮显示大部分编程和标记语言，（使用 "),t("code",null,"--list-languages"),a(" 可查看其支持的语言）。")]),t("li",null,[t("strong",null,"集成 Git"),a(": bat 与 git 结合，能显示文件的修改内容。")]),t("li",null,[t("strong",null,"显示不可见字符"),a("：使用 "),t("code",null,"-A / --show-all"),a(" 可高亮显示不可见字符。")]),t("li",null,[t("strong",null,"自动分页"),a("：当输出文本内容过多时，"),t("code",null,"bat"),a(" 会使用 pager (e.g. less) 进行分页显示，避免一次性显示大量文本从而导致屏幕滚动不可控。")]),t("li",null,[t("strong",null,"个性化设置"),a("：bat内置多种主题可供选择。使用 bat "),t("code",null,"--list-themes"),a(" 可以列出所有可用的主题。")]),t("li",null,[t("strong",null,"跨平台性"),a("：可以在不同的平台上安装和运行（Windows，Linux，MacOS 等）")])],-1),x=t("h1",{id:"进一步阅读",tabindex:"-1"},[a("进一步阅读 "),t("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),k=t("ul",null,[t("li",null,[a("bat 项目托管在 "),t("a",{href:"https://github.com/sharkdp/bat",target:"_blank",rel:"noreferrer"},"github: bat")]),t("li",null,[a("如何想看 bat 与其他相关程序的比较，可以看这篇 bat 官方统计的文件："),t("a",{href:"https://github.com/sharkdp/bat/blob/master/doc/alternatives.md",target:"_blank",rel:"noreferrer"},"bat与相关程序的比较")]),t("li",null,[a("其他相关的文档介绍："),t("a",{href:"https://ostechnix.com/bat-a-cat-clone-with-syntax-highlighting-and-git-integration/",target:"_blank",rel:"noreferrer"},"bat 介绍")])],-1),f=t("div",{class:"language-sh vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"sh"),t("pre",{class:"shiki github-dark vp-code-dark"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"x"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"env"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"use"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"bat")])])]),t("pre",{class:"shiki github-light vp-code-light"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#005CC5"}},"x"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"env"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"use"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"bat")])])])],-1);function y(E,v,F,P,C,w){const l=s("PackagePage");return o(),c("div",null,[i(l,null,{default:e(()=>[d,h]),abstract:e(()=>[p,b,u,g,m,_,x,k]),install:e(()=>[f]),_:1})])}const T=n(r,[["render",y]]);export{N as __pageData,T as default};