import{_ as s,C as r,o,c as n,H as p,w as t,k as a,a as e}from"./chunks/framework.98e11516.js";const N=JSON.parse('{"title":"bwrap","titleTemplate":"x-cmd package | bwrap 是 Flatpak和类似项目使用的低级非特权沙盒工具","description":"x-cmd package bwrap | bwrap 是 Flatpak和类似项目使用的低级非特权沙盒工具","frontmatter":{"name":"bwrap","titleTemplate":"x-cmd package | bwrap 是 Flatpak和类似项目使用的低级非特权沙盒工具","head":[["meta",{"name":"og:title","content":"bwrap | x-cmd package"}],["meta",{"name":"og:description","content":"bwrap 是 Flatpak和类似项目使用的低级非特权沙盒工具"}],["meta",{"name":"description","content":"x-cmd package bwrap | bwrap 是 Flatpak和类似项目使用的低级非特权沙盒工具"}]],"links":[{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/containers/bubblewrap","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","linux/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/bwrap/releases","https://gitcode.net/x-cmd-build/bwrap/-/releases"]}},"headers":[],"relativePath":"pkg/bwrap.md","filePath":"pkg/bwrap.md"}'),c={name:"pkg/bwrap.md"},i=a("h1",{id:"bwrap",tabindex:"-1"},[e("bwrap "),a("a",{class:"header-anchor",href:"#bwrap","aria-label":'Permalink to "bwrap"'},"​")],-1),b=a("p",{class:"x-desc"},"bwrap 是 Flatpak和类似项目使用的低级非特权沙盒工具",-1),d=a("h2",{id:"简介",tabindex:"-1"},[e("简介 "),a("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),h=a("p",null,"bwrap 是 Linux 上的一个实用工具，它的全名是 Bubblewrap，用于运行非特权容器。它通常在容器化技术如 Flatpak 和一些沙盒化解决方案中使用。",-1),u=a("p",null,"Bubblewrap 提供了一个隔离的环境，用于在受限制的系统资源下运行应用程序或进程。这种隔离有助于提高安全性，防止应用程序访问它们不应该访问的资源，并限制它们与主机系统的交互。",-1),m=a("h2",{id:"技术特点",tabindex:"-1"},[e("技术特点 "),a("a",{class:"header-anchor",href:"#技术特点","aria-label":'Permalink to "技术特点"'},"​")],-1),_=a("ol",null,[a("li",null,"Flatpak: Bubblewrap 用于 Flatpak 应用框架，以隔离和安全运行 Linux 桌面应用程序。"),a("li",null,"测试和开发: 开发人员可以使用 Bubblewrap 创建隔离的环境，用于测试和开发应用程序，2而不影响主机系统。"),a("li",null,"安全性: 用于在受控环境中运行潜在不受信任的代码，减少安全漏洞的风险。"),a("li",null,"资源限制: 您可以使用 Bubblewrap 限制应用程序可以访问的资源，如 CPU、内存或网络访问。")],-1),w=a("h2",{id:"进一步阅读",tabindex:"-1"},[e("进一步阅读 "),a("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),k=a("p",null,[a("a",{href:"https://github.com/containers/bubblewrap",target:"_blank",rel:"noreferrer"},"bwrap github")],-1),g=a("p",null,[a("a",{href:"https://blog.lilydjwg.me/2021/8/12/using-bwrap.215869.html",target:"_blank",rel:"noreferrer"},"bwrap 使用教程")],-1),x=a("div",{class:"language-sh vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"sh"),a("pre",{class:"shiki github-dark vp-code-dark"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#79B8FF"}},"x"),a("span",{style:{color:"#E1E4E8"}}," "),a("span",{style:{color:"#9ECBFF"}},"env"),a("span",{style:{color:"#E1E4E8"}}," "),a("span",{style:{color:"#9ECBFF"}},"use"),a("span",{style:{color:"#E1E4E8"}}," "),a("span",{style:{color:"#9ECBFF"}},"bwrap")])])]),a("pre",{class:"shiki github-light vp-code-light"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#005CC5"}},"x"),a("span",{style:{color:"#24292E"}}," "),a("span",{style:{color:"#032F62"}},"env"),a("span",{style:{color:"#24292E"}}," "),a("span",{style:{color:"#032F62"}},"use"),a("span",{style:{color:"#24292E"}}," "),a("span",{style:{color:"#032F62"}},"bwrap")])])])],-1);function F(f,y,E,v,B,C){const l=r("PackagePage");return o(),n("div",null,[p(l,null,{default:t(()=>[i,b]),abstract:t(()=>[d,h,u,m,_,w,k,g]),install:t(()=>[x]),_:1})])}const T=s(c,[["render",F]]);export{N as __pageData,T as default};
