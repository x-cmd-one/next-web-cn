import{_ as o,C as n,o as l,c as r,H as p,w as a,k as s,a as e}from"./chunks/framework.98e11516.js";const f=JSON.parse('{"title":"traceroute","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | traceroute 快速上手 | 一款网络诊断工具，用于跟踪数据包从源主机到目标主机之间的路径","frontmatter":{"name":"traceroute","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | traceroute 快速上手"}],["meta",{"name":"og:description","content":"一款网络诊断工具，用于跟踪数据包从源主机到目标主机之间的路径"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | traceroute 快速上手 | 一款网络诊断工具，用于跟踪数据包从源主机到目标主机之间的路径"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">traceroute</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">www.github.com</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">traceroute</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">www.github.com</span></span></code></pre>\\n</div>","#desc":{"cn":"跟踪数据报的传输路径","en":"Track the transmission path of datagrams"},"desc":"跟踪数据报的传输路径"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">traceroute</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-m</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">7</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">www.github.com</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">traceroute</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-m</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">7</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">www.github.com</span></span></code></pre>\\n</div>","#desc":{"cn":"指定最大跃点数为 7，将数据包的传输路径限制为 7 个路由器","en":"Specify a maximum metric of 7 to limit the transmission path of data packets to 7 routers"},"desc":"指定最大跃点数为 7，将数据包的传输路径限制为 7 个路由器"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">traceroute</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-m</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">7</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-n</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">www.github.com</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">traceroute</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-m</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">7</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-n</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">www.github.com</span></span></code></pre>\\n</div>","#desc":{"cn":"只显示 IP 地址而不显示域名","en":"Display only IP addresses and not domain names"},"desc":"只显示 IP 地址而不显示域名"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">traceroute</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-m</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">7</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-p</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">443</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">www.github.com</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">traceroute</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-m</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">7</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-p</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">443</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">www.github.com</span></span></code></pre>\\n</div>","#desc":{"cn":"指定传输数据包所使用的端口号","en":"Specify the port number used for transmitting data packets"},"desc":"指定传输数据包所使用的端口号"}],"aside":false,"outline":false,"x-term-speg":"1min/traceroute.cn","x-term-name":"traceroute","x-term-desc":"一款网络诊断工具，用于跟踪数据包从源主机到目标主机之间的路径","x-term-size":"large","links":[{"type":"pkg","text":"traceroute","link":"/pkg/traceroute"}]},"headers":[],"relativePath":"1min/traceroute.md","filePath":"1min/traceroute.md"}'),c={name:"1min/traceroute.md"},i=s("h1",{id:"traceroute",tabindex:"-1"},[e("traceroute "),s("a",{class:"header-anchor",href:"#traceroute","aria-label":'Permalink to "traceroute"'},"​")],-1),d=s("p",{class:"visually-hidden"}," 一款网络诊断工具，用于跟踪数据包从源主机到目标主机之间的路径 ",-1),u=s("p",null,[e("本教程演示了 "),s("code",null,"traceroute"),e(" 的基本功能和用法：")],-1),y=s("ol",null,[s("li",null,[e("使用 "),s("code",null,"traceroute <host>"),e(" 命令跟踪本机到目标主机的传输路径。")]),s("li",null,[e("使用 "),s("code",null,"-m <number>"),e(" 指定最大跃点数，以限制数据包在传输过程中的转发次数。")]),s("li",null,[e("使用 "),s("code",null,"-n"),e(" 选项跳过域名解析。")]),s("li",null,[e("使用 "),s("code",null,"-p <端口号>"),e(" 指定传输数据包所使用的端口号。")])],-1),m=s("p",null,"进一步阅读：",-1),h=s("ul",null,[s("li",null,[e("x-cmd 对于 traceroute 的介绍和快速安装的方法，可以查看: "),s("a",{href:"/pkg/traceroute"},"x-cmd pkg for traceroute ")]),s("li",null,[s("a",{href:"https://en.wikipedia.org/wiki/Traceroute",target:"_blank",rel:"noreferrer"},"wikipedia: traceroute")]),s("li",null,[s("a",{href:"https://linux.die.net/man/8/traceroute",target:"_blank",rel:"noreferrer"},"traceroute(8) - Linux man page")]),s("li",null,[s("a",{href:"https://www.cnblogs.com/machangwei-8/p/10353279.html",target:"_blank",rel:"noreferrer"},"traceroute 命令详解")]),s("li",null,[s("a",{href:"https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/tracert",target:"_blank",rel:"noreferrer"},"tracert")]),s("li",null,[s("a",{href:"https://www.fortinet.com/resources/cyberglossary/traceroutes",target:"_blank",rel:"noreferrer"},"What is Traceroute: What Does It Do & How Does It Work?")]),s("li",null,[s("a",{href:"https://www.dnsstuff.com/traceroute-alternative",target:"_blank",rel:"noreferrer"},"5 Best Traceroute Alternative Tools")])],-1);function E(g,F,C,w,k,v){const t=n("OneMinutePage");return l(),r("div",null,[p(t,null,{default:a(()=>[i,d]),abstract:a(()=>[u,y,m,h]),_:1})])}const _=o(c,[["render",E]]);export{f as __pageData,_ as default};