import{_ as a,C as n,o,c as r,H as i,w as l,k as e,a as s}from"./chunks/framework.98e11516.js";const G=JSON.parse('{"title":"xsv","titleTemplate":"x-cmd package | xsv 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序","description":"x-cmd package xsv | xsv 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序","frontmatter":{"name":"xsv","titleTemplate":"x-cmd package | xsv 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序","head":[["meta",{"name":"og:title","content":"xsv | x-cmd package"}],["meta",{"name":"og:description","content":"xsv 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序"}],["meta",{"name":"description","content":"x-cmd package xsv | xsv 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序"}]],"links":[{"type":"1min","text":"xsv","link":"/1min/xsv"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/BurntSushi/xsv","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/x64","darwin/x64","darwin/arm64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/xsv/releases","https://gitcode.net/x-cmd-build/xsv/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/xsv.cn","x-term-name":"xsv","x-term-desc":"xsv 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序","x-term-size":"large"},"headers":[],"relativePath":"pkg/xsv.md","filePath":"pkg/xsv.md"}'),c={name:"pkg/xsv.md"},d=e("h1",{id:"xsv",tabindex:"-1"},[s("xsv "),e("a",{class:"header-anchor",href:"#xsv","aria-label":'Permalink to "xsv"'},"​")],-1),x=e("p",{class:"x-desc"},"xsv 是一个用于索引、切片、分析、拆分和连接 CSV 文件的命令行程序",-1),h=e("h2",{id:"简介",tabindex:"-1"},[s("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=e("p",null,"xsv 是一个用于索引、切片、分析、拆分和连接 CSV 和 TSV 文件的命令行程序，由 Andrew Gallant 使用 Rust 语言开发，首次发布于 2014 年 11月。",-1),u=e("p",null,"xsv 专为效率而生，并提供很多适合表格数据批处理场景的功能:",-1),v=e("ol",null,[e("li",null,"支持使用正则表达式或 类 SQL 语句进行筛选和排序。"),e("li",null,"提供对 CSV 数据文件统计分析的功能，例如统计行数、列数、频率"),e("li",null,"提供对 CSV 数据文件拼接和拆分的功能，例如将 CSV 数据文件拆分为多个文件、联接 CSV 多个文件")],-1),m=e("h2",{id:"首次用户",tabindex:"-1"},[s("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),_=e("ol",null,[e("li",null,"本文的 demo，以 x-cmd 提供的 ascii 字符表格为例，展现了 xsv 的显示、选择功能"),e("li",null,[s("x-cmd 提供"),e("a",{href:"/1min/xsv"},"1分钟教程"),s("，进一步以 ascii 字符表格为例，展现了表格元信息查看、排序、切片等多项实用功能")])],-1),k=e("h2",{id:"技术特点",tabindex:"-1"},[s("技术特点 "),e("a",{class:"header-anchor",href:"#技术特点","aria-label":'Permalink to "技术特点"'},"​")],-1),g=e("ol",null,[e("li",null,[s("性能优秀 "),e("ol",null,[e("li",null,"xsv 采用 Rust 编写，作者在实现中非常注意优化，因此 xsv 的性能极其优秀，可以胜任大数据场景。"),e("li",null,"在8核16进程，select 的数据吞吐量能够到达325MB/s"),e("li",null,[e("a",{href:"https://github.com/BurntSushi/xsv/blob/master/BENCHMARKS.md",target:"_blank",rel:"noreferrer"},"benchmark")])])]),e("li",null,"常用功能足够简单，同时为了极致的性能，性能方面的选择会暴露在命令项选项当中。"),e("li",null,[s("采用 CSV 存储 GB 级别数据的讨论 "),e("ol",null,[e("li",null,[s("作者很有趣，对该项目的使用场景进行了"),e("a",{href:"https://github.com/BurntSushi/xsv#motivation",target:"_blank",rel:"noreferrer"},"说明"),s("。反过来，也能知道作者使用xsv所处理的数据量都是非常大的。对于一般场景，其性能和可靠性是绰绰有余的。")]),e("li",null,[s("当数据足够大（例如上 GB），数据库是更好的选择，这一点是合理的。而 "),e("a",{href:"/pkg/sqlite3"},"sqlite3"),s(" 非常适合这类场景。")]),e("li",null,"但是，对于冷数据运维场景，或者数据本身高度冗余（以压缩方式存储），GB 级别的数据输入是存在的。而配合日益强大的 CPU 计算，xsv 的存在给了我们更多的选择。")])])],-1),f=e("h2",{id:"进一步阅读",tabindex:"-1"},[s("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),b=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/BurntSushi/xsv",target:"_blank",rel:"noreferrer"},"GitHub: xsv")]),e("li",null,[e("a",{href:"https://writing.openwebcraft.com/xsv-a-fast-csv-cli-toolkit-written-in-rust",target:"_blank",rel:"noreferrer"},"xsv—a fast CSV cli toolkit written in Rust")]),e("li",null,[e("a",{href:"https://www.worldlink.com.cn/osdir/xsv.html",target:"_blank",rel:"noreferrer"},"worldlink: xsv")]),e("li",null,[e("a",{href:"https://kandi.openweaver.com/rust/BurntSushi/xsv",target:"_blank",rel:"noreferrer"},"kandi: xsv")])],-1),C=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"xsv")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"xsv")])])])],-1);function S(y,V,B,E,w,P){const t=n("PackagePage");return o(),r("div",null,[i(t,null,{default:l(()=>[d,x]),abstract:l(()=>[h,p,u,v,m,_,k,g,f,b]),install:l(()=>[C]),_:1})])}const N=a(c,[["render",S]]);export{G as __pageData,N as default};
