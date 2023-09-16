import{_ as n,C as s,o,c as r,H as c,w as t,k as e,a}from"./chunks/framework.98e11516.js";const $=JSON.parse('{"title":"socat","titleTemplate":"x-cmd package | 一个多功能的网络工具","description":"x-cmd package socat | 一个多功能的网络工具","frontmatter":{"name":"socat","titleTemplate":"x-cmd package | 一个多功能的网络工具","head":[["meta",{"name":"og:title","content":"socat | x-cmd package"}],["meta",{"name":"og:description","content":"一个多功能的网络工具"}],["meta",{"name":"description","content":"x-cmd package socat | 一个多功能的网络工具"}]],"links":[{"type":"1min","text":"socat","link":"/1min/socat"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"http://www.dest-unreach.org/socat/","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/x64","linux/arm64","darwin/x64","darwin/arm64"],"source":{"repack-official":["https://github.com/x-cmd-build/socat/releases","https://gitcode.net/x-cmd-build/socat/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/socat.cn","x-term-name":"socat","x-term-desc":"一个多功能的网络工具","x-term-size":"large"},"headers":[],"relativePath":"pkg/socat.md","filePath":"pkg/socat.md"}'),i={name:"pkg/socat.md"},d=e("h1",{id:"socat",tabindex:"-1"},[a("socat "),e("a",{class:"header-anchor",href:"#socat","aria-label":'Permalink to "socat"'},"​")],-1),h=e("p",{class:"x-desc"},"一个多功能的网络工具",-1),p=e("h2",{id:"简介",tabindex:"-1"},[a("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),u=e("p",null,"Socat 是一个用于在不同的数据流之间建立连接的网络工具。它的功能丰富，可以用于创建虚拟串口、转发端口、进行 SSL 加密通信、建立代理服务器等各种网络任务。",-1),m=e("p",null,[a("由 "),e("a",{href:"https://linuxsecurity.expert/p/gerhard-rieger",target:"_blank",rel:"noreferrer"},"Gerhard Rieger"),a(" 主持开发，至今仍然活跃。")],-1),g=e("h2",{id:"首次用户",tabindex:"-1"},[a("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),_=e("ol",null,[e("li",null,"本文的 demo 展现了使用 socat 来监听和链接一个 TCP 8080 端口。"),e("li",null,[a("x-cmd 也提供了 "),e("a",{href:"/1min/socat"},"1分钟教程"),a(" 可以帮你快速入门。")])],-1),x=e("h2",{id:"技术特点",tabindex:"-1"},[a("技术特点 "),e("a",{class:"header-anchor",href:"#技术特点","aria-label":'Permalink to "技术特点"'},"​")],-1),f=e("ol",null,[e("li",null,[e("strong",null,"多协议支持"),a("：可以处理多种网络协议，包括 TCP、UDP、SSL、IPv4、IPv6 等，使其适用于各种网络场景。")]),e("li",null,[e("strong",null,"灵活性"),a("：允许用户创建高度定制的数据流连接，可以在不同的协议之间进行数据转换、过滤和修改。")]),e("li",null,[e("strong",null,"端口转发"),a("：可以创建端口转发，将本地端口映射到远程主机或反之，方便进行网络测试和调试。")]),e("li",null,[e("strong",null,"SSL 加密"),a("：支持 SSL/TLS 加密，可以用于安全的数据传输和代理服务器。")]),e("li",null,[e("strong",null,"代理服务器"),a("：可以用于创建各种类型的代理服务器，包括 HTTP 代理、SOCKS 代理等，提供网络访问的灵活性。")])],-1),k=e("h2",{id:"竞品和相关作品",tabindex:"-1"},[a("竞品和相关作品 "),e("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),b=e("p",null,"以下 cli 项目也是常用的网络工具:",-1),y=e("ul",null,[e("li",null,[e("a",{href:"https://nc110.sourceforge.io/",target:"_blank",rel:"noreferrer"},"netcat"),a(" ："),e("code",null,"socat"),a(" 提供了更多的网络协议支持和高级功能，如 SSL 加密、代理服务器等，而 "),e("code",null,"netcat"),a(" 主要用于基本的数据流连接和端口扫描。")]),e("li",null,[e("a",{href:"https://nmap.org/ncat/",target:"_blank",rel:"noreferrer"},"ncat"),a("："),e("code",null,"ncat"),a(" 是 "),e("code",null,"nmap"),a(" 项目的一部分，它是 "),e("code",null,"netcat"),a(" 的改进版本，提供了更多的功能，如 "),e("a",{href:"https://nmap.org/ncat/guide/ncat-ssl.html#:~:text=Ncat%20can%20act%20as%20an,and%202%2C048%2Dbit%20RSA%20key.",target:"_blank",rel:"noreferrer"},"SSL 加密"),a("。")])],-1),w=e("h2",{id:"进一步阅读",tabindex:"-1"},[a("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),P=e("ul",null,[e("li",null,[e("a",{href:"http://www.dest-unreach.org/socat/",target:"_blank",rel:"noreferrer"},"官方文档")]),e("li",null,[e("a",{href:"https://www.baeldung.com/linux/socat-command",target:"_blank",rel:"noreferrer"},"The socat Command in Linux")]),e("li",null,[e("a",{href:"https://www.ubuntumint.com/socat-command-examples/",target:"_blank",rel:"noreferrer"},"socat-command-examples")]),e("li",null,[e("a",{href:"https://www.redhat.com/sysadmin/getting-started-socat",target:"_blank",rel:"noreferrer"},"getting-started-socat")]),e("li",null,[a("中文文章： "),e("ul",null,[e("li",null,[e("a",{href:"https://zhuanlan.zhihu.com/p/347722248",target:"_blank",rel:"noreferrer"},"新版瑞士军刀：socat")])])])],-1),S=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"socat")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"socat")])])])],-1);function v(E,C,F,T,L,B){const l=s("PackagePage");return o(),r("div",null,[c(l,null,{default:t(()=>[d,h]),abstract:t(()=>[p,u,m,g,_,x,f,k,b,y,w,P]),install:t(()=>[S]),_:1})])}const z=n(i,[["render",v]]);export{$ as __pageData,z as default};
