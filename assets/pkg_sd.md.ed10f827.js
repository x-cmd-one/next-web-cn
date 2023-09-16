import{_ as t,C as n,o,c as d,H as c,w as l,k as e,a as s}from"./chunks/framework.98e11516.js";const L=JSON.parse('{"title":"sd","titleTemplate":"x-cmd package | sd 是一个直观的查找和替换 CLI","description":"x-cmd package sd | sd 是一个直观的查找和替换 CLI","frontmatter":{"name":"sd","titleTemplate":"x-cmd package | sd 是一个直观的查找和替换 CLI","head":[["meta",{"name":"og:title","content":"sd | x-cmd package"}],["meta",{"name":"og:description","content":"sd 是一个直观的查找和替换 CLI"}],["meta",{"name":"description","content":"x-cmd package sd | sd 是一个直观的查找和替换 CLI"}]],"links":[{"type":"1min","text":"sd","link":"/1min/sd"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/chmln/sd","license":"MIT","version":{"stable":"v0.7.6"},"support":["darwin/arm64","linux/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/sd/releases","https://gitcode.net/x-cmd-build/sd/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/sd.cn","x-term-name":"sd","x-term-desc":"sd 是一个直观的查找和替换 CLI","x-term-size":"large"},"headers":[],"relativePath":"pkg/sd.md","filePath":"pkg/sd.md"}'),r={name:"pkg/sd.md"},i=e("h1",{id:"sd",tabindex:"-1"},[s("sd "),e("a",{class:"header-anchor",href:"#sd","aria-label":'Permalink to "sd"'},"​")],-1),h=e("p",{class:"x-desc"},"sd 是一个直观的查找和替换 CLI",-1),p=e("h2",{id:"简介",tabindex:"-1"},[s("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),m=e("p",null,"sd 是一个基于正则表达式的搜索和替换文本的命令行工具，类似于 sed，但 sd 使用更简单，对用户更为友好。",-1),u=e("h2",{id:"首次用户快速上手",tabindex:"-1"},[s("首次用户快速上手 "),e("a",{class:"header-anchor",href:"#首次用户快速上手","aria-label":'Permalink to "首次用户快速上手"'},"​")],-1),_=e("ol",null,[e("li",null,[s("本文的 demo 展现了采用 sd 来实现单字符替换(逗号换成 "),e("code",null,"\\n"),s(" )，以及从文件中利用正则表达式查找采用 "),e("code",null,"/"),s(" 包围的文本，并里面的字符串内容打印。")]),e("li",null,[s("x-cmd 也提供了"),e("a",{href:"/1min/sd"},"1分钟教程"),s("可以帮你快速入门")])],-1),g=e("h2",{id:"主要特点",tabindex:"-1"},[s("主要特点 "),e("a",{class:"header-anchor",href:"#主要特点","aria-label":'Permalink to "主要特点"'},"​")],-1),x=e("ol",null,[e("li",null,"使用通用正则表达式语法（与 JavaScript 和 Python 中的正则类似的语法）。相比之下，sed 使用的正则表达式比较别具一格，给用户带来额外的学习成本和维护难度。"),e("li",null,"sd 还支持字符串文本模式进行查找和替换。"),e("li",null,"易于书写，易于阅读，易于维护。查找和替换表达式是分开的，这样您就不再需要使用反斜杠或记住哪些字符是特殊的需要转义的。"),e("li",null,[s("相比 sed，其默认设置往往更适用大多数典型场景。以最经典的从配置文件替换相应的值为例。 "),e("ol",null,[e("li",null,[s("sd 默认就是支持的: "),e("code",null,"sd before after file.txt"),s("，简洁直观")]),e("li",null,[s("在 sed 中，需额外采用 "),e("code",null,"-i"),s(" 这个参数: "),e("code",null,"sed -i -e 's/before/after/g' file.txt")]),e("li",null,"sed 之所以略为麻烦，是因为其管道优先的设计理念，输出是默认到标准输出。而 sd 则是默认直接修改文件，这样更符合用户的直觉。")])]),e("li",null,[s("sd 使用 rust 编写，性能优秀。在部份场景上，sd 甚至有相对 sed 更好的效率，详情请参考官方提供的 "),e("a",{href:"https://github.com/chmln/sd#benchmarks",target:"_blank",rel:"noreferrer"},"Benchmark"),s("。")])],-1),f=e("h2",{id:"进一步阅读",tabindex:"-1"},[s("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),k=e("ul",null,[e("li",null,[s("项目托管在 "),e("a",{href:"https://github.com/chmln/sd",target:"_blank",rel:"noreferrer"},"GitHub"),s(" 上，里面的 README 文档提供了详细的参数功能和使用说明")]),e("li",null,[e("a",{href:"https://www.linode.com/docs/guides/linux-sd-command/",target:"_blank",rel:"noreferrer"},"linux-sd-command")]),e("li",null,[e("a",{href:"https://github.com/chmln/sd#comparison-to-sed",target:"_blank",rel:"noreferrer"},"sd vs sed"),s(" 是官方提供的对比文档，可以帮助你更好的理解 sd 的特点")])],-1),b=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"sd")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"sd")])])])],-1);function y(E,C,v,P,F,B){const a=n("PackagePage");return o(),d("div",null,[c(a,null,{default:l(()=>[i,h]),abstract:l(()=>[p,m,u,_,g,x,f,k]),install:l(()=>[b]),_:1})])}const w=t(r,[["render",y]]);export{L as __pageData,w as default};
