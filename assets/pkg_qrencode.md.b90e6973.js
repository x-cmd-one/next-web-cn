import{_ as l,C as t,o,c as s,H as c,w as n,k as e,a}from"./chunks/framework.98e11516.js";const S=JSON.parse('{"title":"qrencode","titleTemplate":"x-cmd package | 一个用于将数据编码为 QR 码符号的开源命令行工具和库","description":"x-cmd package qrencode | 一个用于将数据编码为 QR 码符号的开源命令行工具和库","frontmatter":{"name":"qrencode","titleTemplate":"x-cmd package | 一个用于将数据编码为 QR 码符号的开源命令行工具和库","head":[["meta",{"name":"og:title","content":"qrencode | x-cmd package"}],["meta",{"name":"og:description","content":"一个用于将数据编码为 QR 码符号的开源命令行工具和库"}],["meta",{"name":"description","content":"x-cmd package qrencode | 一个用于将数据编码为 QR 码符号的开源命令行工具和库"}]],"links":[{"type":"1min","text":"qrencode","link":"/1min/qrencode"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://fukuchi.org/works/qrencode/","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"x-cmd":["https://github.com/x-cmd-build/qrencode/releases","https://gitcode.net/x-cmd-build/qrencode/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/qrencode.cn","x-term-name":"qrencode","x-term-desc":"一个用于将数据编码为 QR 码符号的开源命令行工具和库","x-term-size":"large"},"headers":[],"relativePath":"pkg/qrencode.md","filePath":"pkg/qrencode.md"}'),i={name:"pkg/qrencode.md"},d=e("h1",{id:"qrencode",tabindex:"-1"},[a("qrencode "),e("a",{class:"header-anchor",href:"#qrencode","aria-label":'Permalink to "qrencode"'},"​")],-1),h=e("p",{class:"x-desc"},"一个用于将数据编码为 QR 码符号的开源命令行工具和库",-1),p=e("h2",{id:"简介",tabindex:"-1"},[a("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),m=e("p",null,"qrencode 是一个用于生成二维码的命令行工具。它可以将文本、URL、电话号码等信息转换为二维码图像。生成的二维码图像可以保存为图片文件，方便在电子文档、网页、移动应用等各种场景中使用。",-1),u=e("p",null,"它支持的二维码是 QR 码，具有信息容量大、可靠性高、可表示汉字及图象等多种文字信息、保密防伪性强等优点，是目前较为常用的二维条码。",-1),_=e("h2",{id:"首次用户",tabindex:"-1"},[a("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),g=e("ol",null,[e("li",null,"本文的 demo 展现了如何快速使用 qrencode 将 url 转换为二维码并保存到 PNG 文件中。"),e("li",null,[a("x-cmd 也提供了"),e("a",{href:"/1min/qrencode"},"1分钟教程"),a("可以帮你快速入门。")])],-1),k=e("h2",{id:"功能特点",tabindex:"-1"},[a("功能特点 "),e("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),x=e("ol",null,[e("li",null,"支持的输出格式：PNG, PNG32, EPS, SVG, XPM, ANSI, ANSI256, ASCII, ASCIIi, UTF8, UTF8i, ANSIUTF8, ANSIUTF8i, ANSI256UTF8。"),e("li",null,"生成的二维码信息容量相对较大，可以容纳 7000 个数字或 4000 个字符的文本信息。"),e("li",null,"生成的二维码具有很高的鲁棒性，面对各种异常情况（如二维码图像损坏、部分被遮挡）时，仍然能够可靠地被扫描和解码。"),e("li",null,"支持配置二维码的各种参数，如二维码的版本、容错级别、尺寸、边距、间距、输出格式、输出图像的分辨率。")],-1),f=e("h2",{id:"竞品和相关作品",tabindex:"-1"},[a("竞品和相关作品 "),e("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),b=e("ol",null,[e("li",null,[e("a",{href:"http://zbar.sourceforge.net/",target:"_blank",rel:"noreferrer"},"ZBar"),a(" 是一个开源的条码和 QR 码识别库，支持多种平台和编程语言。它不仅可以生成 QR 码，还可以用于解码和识别 QR 码。")]),e("li",null,[e("a",{href:"https://github.com/zxing/zxing",target:"_blank",rel:"noreferrer"},"ZXing"),a('（"Zebra Crossing"）是一个用 Java 编写的开源二维码处理库，它支持多种编程语言的移植。它不仅可以生成QR码，还可以识别多种二维码和条形码。')]),e("li",null,[e("a",{href:"https://github.com/davidshimjs/qrcodejs",target:"_blank",rel:"noreferrer"},"QRCode.js"),a(" 是一个用 JavaScript 编写的轻量级 QR 码生成库，适用于在 Web 应用程序中生成 QR 码。")])],-1),q=e("h2",{id:"进一步阅读",tabindex:"-1"},[a("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),Q=e("ul",null,[e("li",null,[e("a",{href:"https://fukuchi.org/works/qrencode/",target:"_blank",rel:"noreferrer"},"Qrencode Home")]),e("li",null,[e("a",{href:"https://en.wikipedia.org/wiki/QR_code",target:"_blank",rel:"noreferrer"},"wikipedia: QR code")]),e("li",null,[e("a",{href:"https://linux.die.net/man/1/qrencode",target:"_blank",rel:"noreferrer"},"qrencode(1) - Linux man page")]),e("li",null,[e("a",{href:"https://www.cnblogs.com/LiuYanYGZ/p/12718058.html",target:"_blank",rel:"noreferrer"},"QR code二维码简介及Qrencode库的移植与使用")]),e("li",null,[e("a",{href:"https://blog.csdn.net/struct_slllp_main/article/details/113753978",target:"_blank",rel:"noreferrer"},"Qt开源库之----qrencode")])],-1),R=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"qrencode")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"qrencode")])])])],-1);function y(v,E,P,F,C,w){const r=t("PackagePage");return o(),s("div",null,[c(r,null,{default:n(()=>[d,h]),abstract:n(()=>[p,m,u,_,g,k,x,f,b,q,Q]),install:n(()=>[R]),_:1})])}const I=l(i,[["render",y]]);export{S as __pageData,I as default};
