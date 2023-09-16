import{_ as t,C as n,o as s,c as g,H as r,w as a,k as o,a as e}from"./chunks/framework.98e11516.js";const w=JSON.parse('{"title":"doggo","titleTemplate":"x-cmd package | doggo是一个用Golang编写的现代命令行DNS客户端","description":"x-cmd package doggo | doggo是一个用Golang编写的现代命令行DNS客户端","frontmatter":{"name":"doggo","titleTemplate":"x-cmd package | doggo是一个用Golang编写的现代命令行DNS客户端","head":[["meta",{"name":"og:title","content":"doggo | x-cmd package"}],["meta",{"name":"og:description","content":"doggo是一个用Golang编写的现代命令行DNS客户端"}],["meta",{"name":"description","content":"x-cmd package doggo | doggo是一个用Golang编写的现代命令行DNS客户端"}]],"links":[{"type":"1min","text":"doggo","link":"/1min/doggo"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/mr-karan/doggo","license":"MIT","version":{"stable":"v0.5.6"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/doggo/releases","https://gitcode.net/x-cmd-build/doggo/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/doggo.cn","x-term-name":"doggo","x-term-desc":"doggo是一个用Golang编写的现代命令行DNS客户端","x-term-size":"large"},"headers":[],"relativePath":"pkg/doggo.md","filePath":"pkg/doggo.md"}'),d={name:"pkg/doggo.md"},i=o("h1",{id:"doggo",tabindex:"-1"},[e("doggo "),o("a",{class:"header-anchor",href:"#doggo","aria-label":'Permalink to "doggo"'},"​")],-1),c=o("p",{class:"x-desc"},"doggo是一个用Golang编写的现代命令行DNS客户端",-1),h=o("h2",{id:"简介",tabindex:"-1"},[e("简介 "),o("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=o("p",null,[e("doggo 是一个由 Karan Sharma 于 2020 年使用 Go 语言开发的 DNS 客户端。它类似于 "),o("code",null,"dig"),e(" 命令，但旨在以现代化、简洁和可读的格式输出 DNS 查询结果。")],-1),m=o("h2",{id:"首次用户快速实验指南",tabindex:"-1"},[e("首次用户快速实验指南 "),o("a",{class:"header-anchor",href:"#首次用户快速实验指南","aria-label":'Permalink to "首次用户快速实验指南"'},"​")],-1),u=o("ol",null,[o("li",null,[e("本文的 demo 展现了如何通过 x-cmd 快速使用 doggo 命令查询指定网域的 DNS 记录信息，以及查询 "),o("code",null,"9.9.9.9"),e(" DNS 服务器中 "),o("code",null,"github.com"),e(" 的域名服务器的记录信息。")]),o("li",null,[e("x-cmd 提供了 "),o("a",{href:"/1min/doggo"},"doggo 1分钟教程"),e("，配合 x-cmd，马上体验。")])],-1),_=o("h2",{id:"功能特点",tabindex:"-1"},[e("功能特点 "),o("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),x=o("ol",null,[o("li",null,[o("strong",null,"支持多种传输协议"),e("：包括 DoH (HTTPS)、DoT (TLS)、DoQ (QUIC)、TCP、UDP 和 DNSCrypt，以满足不同场景的需要。")]),o("li",null,[o("strong",null,"灵活的查询选项"),e("：提供了四个关键的 DNS 查询参数，其中包括DNS 主机名记录、DNS 记录类型、特定 DNS 服务器地址以及 DNS 记录的网络类别，另外还支持查询和解析 IPv4 与 IPv6，确保您能够获取全面的 DNS 记录信息。")]),o("li",null,[o("strong",null,"多种输出格式"),e("：在默认的交互模式中，doggo 将以可读性良好的数据格式输出信息，同时也支持将信息以 "),o("code",null,"JSON"),e(" 格式输出，以便进一步对数据进行处理或编写脚本。")])],-1),k=o("h2",{id:"类似工具与竞品",tabindex:"-1"},[e("类似工具与竞品 "),o("a",{class:"header-anchor",href:"#类似工具与竞品","aria-label":'Permalink to "类似工具与竞品"'},"​")],-1),b=o("ul",null,[o("li",null,[o("a",{href:"https://github.com/ogham/dog/",target:"_blank",rel:"noreferrer"},"dog"),e("：由 Benjamin Sago 使用 Rust 构建的 DNS 命令行客户端，也是 doggo 项目的灵感来源，但在2020年发布第一代版本后就没有进行迭代更新。该作者还开发了 "),o("a",{href:"/pkg/exa"},"exa"),e(" 使用 Rust 构建的 "),o("code",null,"ls"),e(" 命令现代化替代品，感兴趣的读者可以进一步了解。")])],-1),f=o("h2",{id:"进一步探索",tabindex:"-1"},[e("进一步探索 "),o("a",{class:"header-anchor",href:"#进一步探索","aria-label":'Permalink to "进一步探索"'},"​")],-1),D=o("ul",null,[o("li",null,[o("a",{href:"https://github.com/mr-karan/doggo",target:"_blank",rel:"noreferrer"},"GitHub: doggo")]),o("li",null,[o("a",{href:"https://github.com/mr-karan/doggo#usage-examples",target:"_blank",rel:"noreferrer"},"GitHub: doggo 常见使用案例")]),o("li",null,[o("a",{href:"https://www.linuxuprising.com/2021/04/doggo-is-dns-lookup-utility-with.html",target:"_blank",rel:"noreferrer"},"Doggo Is A DNS Lookup Utility With Colorful Output")])],-1),S=o("div",{class:"language-sh vp-adaptive-theme"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"sh"),o("pre",{class:"shiki github-dark vp-code-dark"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#79B8FF"}},"x"),o("span",{style:{color:"#E1E4E8"}}," "),o("span",{style:{color:"#9ECBFF"}},"env"),o("span",{style:{color:"#E1E4E8"}}," "),o("span",{style:{color:"#9ECBFF"}},"use"),o("span",{style:{color:"#E1E4E8"}}," "),o("span",{style:{color:"#9ECBFF"}},"doggo")])])]),o("pre",{class:"shiki github-light vp-code-light"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#005CC5"}},"x"),o("span",{style:{color:"#24292E"}}," "),o("span",{style:{color:"#032F62"}},"env"),o("span",{style:{color:"#24292E"}}," "),o("span",{style:{color:"#032F62"}},"use"),o("span",{style:{color:"#24292E"}}," "),o("span",{style:{color:"#032F62"}},"doggo")])])])],-1);function N(y,P,v,E,C,F){const l=n("PackagePage");return s(),g("div",null,[r(l,null,{default:a(()=>[i,c]),abstract:a(()=>[h,p,m,u,_,x,k,b,f,D]),install:a(()=>[S]),_:1})])}const T=t(d,[["render",N]]);export{w as __pageData,T as default};
