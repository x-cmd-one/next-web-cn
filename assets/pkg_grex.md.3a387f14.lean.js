import{_ as s,C as r,o as n,c as o,H as i,w as t,k as e,a}from"./chunks/framework.98e11516.js";const T=JSON.parse('{"title":"grex","titleTemplate":"x-cmd package | 命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式","description":"x-cmd package grex | 命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式","frontmatter":{"name":"grex","titleTemplate":"x-cmd package | 命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式","head":[["meta",{"name":"og:title","content":"grex | x-cmd package"}],["meta",{"name":"og:description","content":"命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式"}],["meta",{"name":"description","content":"x-cmd package grex | 命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式"}]],"links":[{"type":"1min","text":"grex","link":"/1min/grex"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/pemistahl/grex","license":"MIT","version":{"stable":"v0.0.1"},"support":["darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/grex/releases","https://gitcode.net/x-cmd-build/grex/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/grex.cn","x-term-name":"grex","x-term-desc":"命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式","x-term-size":"large"},"headers":[],"relativePath":"pkg/grex.md","filePath":"pkg/grex.md"}'),c={name:"pkg/grex.md"},d=e("h1",{id:"grex",tabindex:"-1"},[a("grex "),e("a",{class:"header-anchor",href:"#grex","aria-label":'Permalink to "grex"'},"​")],-1),h=e("p",{class:"x-desc"},"命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式",-1),p=e("h2",{id:"简介",tabindex:"-1"},[a("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),g=e("p",null,"grex是一个旨在简化创作正则表达式的复杂且繁琐任务的库和命令行程序。这个项目最初是 Devon Govett 编写的 JavaScript 工具 regexgen 的 Rust 移植。但 regexgen 在几年前停止了开发。现在grex提供了regexgen提供的所有功能，还增加了许多新的功能。",-1),x=e("h2",{id:"首次用户",tabindex:"-1"},[a("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),u=e("ol",null,[e("li",null,"本文的demo展现了使用 grex 生成[a-f]正则表达式，以及使用可读性更好的方式打印输出。"),e("li",null,[a("x-cmd也提供了"),e("a",{href:"/1min/grex"},"1分钟教程"),a("可以帮你快速入门。")])],-1),m=e("h2",{id:"生成的正则表达式与perl和rust兼容",tabindex:"-1"},[a("生成的正则表达式与perl和rust兼容 "),e("a",{class:"header-anchor",href:"#生成的正则表达式与perl和rust兼容","aria-label":'Permalink to "生成的正则表达式与perl和rust兼容"'},"​")],-1),_=e("p",null,[a("生成的表达式与"),e("a",{href:"/pkg/perl"},"Perl"),a("兼容，也与Rust的regex crate中的正则表达式解析器(1.9.0 或更高版本)兼容。"),e("strong",null,"其他正则表达式解析器或其他编程语言的相应库尚未经过测试")],-1),k=e("h2",{id:"支持-unicode-符号",tabindex:"-1"},[a("支持 Unicode 符号 "),e("a",{class:"header-anchor",href:"#支持-unicode-符号","aria-label":'Permalink to "支持 Unicode 符号"'},"​")],-1),b=e("ol",null,[e("li",null,[a("完全符合"),e("a",{href:"https://unicode.org/versions/Unicode15.0.0/",target:"_blank",rel:"noreferrer"},"Unicode标准15.0")]),e("li",null,"能正确处理由多个Unicode符号组成的图形元素")],-1),f=e("h2",{id:"友好的用户体验",tabindex:"-1"},[a("友好的用户体验 "),e("a",{class:"header-anchor",href:"#友好的用户体验","aria-label":'Permalink to "友好的用户体验"'},"​")],-1),v=e("ol",null,[e("li",null,"自动生成正则表达式：只需提供输入，grex 默认生成最具体的正则表达式，并与给定的输入完全匹配。"),e("li",null,"使用详细模式生成在多个上缩进的更具可读性的表达式"),e("li",null,"语法高亮显示，在支持的终端中提供更好的显示输出。")],-1),y=e("h2",{id:"进一步阅读",tabindex:"-1"},[a("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),E=e("ul",null,[e("li",null,[a("项目托管在"),e("a",{href:"https://github.com/pemistahl/grex",target:"_blank",rel:"noreferrer"},"github"),a("上，里面的README文档提供了详细的参数功能和使用说明。")]),e("li",null,[e("a",{href:"https://pemistahl.github.io/grex-js/",target:"_blank",rel:"noreferrer"},"Demo website")])],-1),P=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"grex")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"grex")])])])],-1);function F(C,R,B,w,U,D){const l=r("PackagePage");return n(),o("div",null,[i(l,null,{default:t(()=>[d,h]),abstract:t(()=>[p,g,x,u,m,_,k,b,f,v,y,E]),install:t(()=>[P]),_:1})])}const $=s(c,[["render",F]]);export{T as __pageData,$ as default};