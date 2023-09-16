import{_ as s,C as o,o as n,c as i,H as r,w as a,k as e,a as l}from"./chunks/framework.98e11516.js";const H=JSON.parse('{"title":"helix","titleTemplate":"x-cmd package | 一款后现代的多模态文本编辑器，支持多窗口编辑","description":"x-cmd package helix | 一款后现代的多模态文本编辑器，支持多窗口编辑","frontmatter":{"name":"helix","titleTemplate":"x-cmd package | 一款后现代的多模态文本编辑器，支持多窗口编辑","head":[["meta",{"name":"og:title","content":"helix | x-cmd package"}],["meta",{"name":"og:description","content":"一款后现代的多模态文本编辑器，支持多窗口编辑"}],["meta",{"name":"description","content":"x-cmd package helix | 一款后现代的多模态文本编辑器，支持多窗口编辑"}]],"links":[{"type":"1min","text":"helix","link":"/1min/helix"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://helix-editor.com","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/helix/releases","https://gitcode.net/x-cmd-build/helix/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/helix.cn","x-term-name":"helix","x-term-desc":"一款后现代的多模态文本编辑器，支持多窗口编辑","x-term-size":"large"},"headers":[],"relativePath":"pkg/helix.md","filePath":"pkg/helix.md"}'),c={name:"pkg/helix.md"},h=e("h1",{id:"helix",tabindex:"-1"},[l("helix "),e("a",{class:"header-anchor",href:"#helix","aria-label":'Permalink to "helix"'},"​")],-1),d=e("p",{class:"x-desc"},"一款后现代的多模态文本编辑器，支持多窗口编辑",-1),x=e("h2",{id:"简介",tabindex:"-1"},[l("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=e("p",null,"helix 是一款基于Rust语言开发的文本编辑器。旨在为用户更简单，更高效的文本编辑体验。它的操作方式与 Vim 保持一致，可用于快速查看和编辑各种文本文件。",-1),m=e("p",null,[l("helix 非常适合编辑代码，它支持多种编程语言，并提供"),e("strong",null,"代码补全功能"),l("。")],-1),_=e("h2",{id:"用户首次快速实验指南",tabindex:"-1"},[l("用户首次快速实验指南 "),e("a",{class:"header-anchor",href:"#用户首次快速实验指南","aria-label":'Permalink to "用户首次快速实验指南"'},"​")],-1),u=e("ol",null,[e("li",null,"本文的 demo 展现了如何通过 x-cmd 快速使用 helix 。"),e("li",null,[l("x-cmd也提供了"),e("a",{href:"/1min/helix"},"1分钟教程"),l("可以帮你快速入门。")])],-1),k=e("h2",{id:"功能强大的文本编辑器",tabindex:"-1"},[l("功能强大的文本编辑器 "),e("a",{class:"header-anchor",href:"#功能强大的文本编辑器","aria-label":'Permalink to "功能强大的文本编辑器"'},"​")],-1),g=e("p",null,[l("helix 不仅与 vim 的快捷键操作兼容，，还内置了多光标、多选区和选择语法节点(例如: 函数名、类名等)功能。用户可以同时选择"),e("strong",null,"多个文本片段进行编辑"),l("，也可以选择某一节点进行更改。")],-1),b=e("p",null,"helix 支持 LSP（Language Server Protocol）提供了代码补全、重构、跳转到定义以及错误和警告标记等功能。为开发者提供了优秀的编辑环境。",-1),f=e("h2",{id:"独特的编辑语法",tabindex:"-1"},[l("独特的编辑语法 "),e("a",{class:"header-anchor",href:"#独特的编辑语法","aria-label":'Permalink to "独特的编辑语法"'},"​")],-1),v=e("p",null,"helix 在编辑文本的过程中可以通过按键序列触发特殊的编辑事件。在选中某个段文本后，可以通过特殊的按键序列快速实现替换字符、首尾添加字符和删除字符等操作。",-1),y=e("h2",{id:"更酷的终端文本编辑器",tabindex:"-1"},[l("更酷的终端文本编辑器 "),e("a",{class:"header-anchor",href:"#更酷的终端文本编辑器","aria-label":'Permalink to "更酷的终端文本编辑器"'},"​")],-1),E=e("p",null,"helix 通过集成 Tree-sitter 来生成高容错且健壮的语法树，从而实现更好的语法突出显示、缩进计算和代码导航。",-1),P=e("p",null,"helix 提供多款精美主题供用户选择。如果仍不满意，还可以自定义主题。",-1),F=e("h2",{id:"竞品和相关作品",tabindex:"-1"},[l("竞品和相关作品 "),e("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),C=e("ol",null,[e("li",null,[e("a",{href:"https://github.com/mawww/kakoune",target:"_blank",rel:"noreferrer"},"Kakoune"),l(": helix 功能与 Kakoune极为类似，helix也认同Kakoune的大部分设计决策。Kakoune更注重交互性和灵活性，但Kakoune目前还不支持Windows 版本。")]),e("li",null,[e("a",{href:"https://neovim.io/",target:"_blank",rel:"noreferrer"},"Neovim"),l(": neovim 是 helix 灵感的另一个来源，neovim 专注于可扩展性和可用性。目前为止helix 插件系统仍处于设计阶段。")])],-1),w=e("h2",{id:"进一步阅读",tabindex:"-1"},[l("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),B=e("ul",null,[e("li",null,[l("如果你想深入了解，可以参考"),e("a",{href:"https://docs.helix-editor.com/",target:"_blank",rel:"noreferrer"},"官网文档体系"),l(" ，选择感兴趣的篇章阅读")])],-1),K=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"helix")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"helix")])])])],-1);function N(T,V,$,S,L,z){const t=o("PackagePage");return n(),i("div",null,[r(t,null,{default:a(()=>[h,d]),abstract:a(()=>[x,p,m,_,u,k,g,b,f,v,y,E,P,F,C,w,B]),install:a(()=>[K]),_:1})])}const I=s(c,[["render",N]]);export{H as __pageData,I as default};