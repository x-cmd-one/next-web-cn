import{_ as l,C as t,o as r,c as s,H as c,w as n,k as e,a}from"./chunks/framework.98e11516.js";const B=JSON.parse('{"title":"pandoc","titleTemplate":"x-cmd package | 一个开源的文档转换工具，支持将多种文档格式相互转换，包括 Markdown、HTML、PDF、DOCX 等","description":"x-cmd package pandoc | 一个开源的文档转换工具，支持将多种文档格式相互转换，包括 Markdown、HTML、PDF、DOCX 等","frontmatter":{"name":"pandoc","titleTemplate":"x-cmd package | 一个开源的文档转换工具，支持将多种文档格式相互转换，包括 Markdown、HTML、PDF、DOCX 等","head":[["meta",{"name":"og:title","content":"pandoc | x-cmd package"}],["meta",{"name":"og:description","content":"一个开源的文档转换工具，支持将多种文档格式相互转换，包括 Markdown、HTML、PDF、DOCX 等"}],["meta",{"name":"description","content":"x-cmd package pandoc | 一个开源的文档转换工具，支持将多种文档格式相互转换，包括 Markdown、HTML、PDF、DOCX 等"}]],"links":[{"type":"1min","text":"pandoc","link":"/1min/pandoc"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://pandoc.org/","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/pandoc/releases","https://gitcode.net/x-cmd-build/pandoc/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/pandoc.cn","x-term-name":"pandoc","x-term-desc":"一个开源的文档转换工具，支持将多种文档格式相互转换，包括 Markdown、HTML、PDF、DOCX 等","x-term-size":"large"},"headers":[],"relativePath":"pkg/pandoc.md","filePath":"pkg/pandoc.md"}'),d={name:"pkg/pandoc.md"},i=e("h1",{id:"pandoc",tabindex:"-1"},[a("pandoc "),e("a",{class:"header-anchor",href:"#pandoc","aria-label":'Permalink to "pandoc"'},"​")],-1),p=e("p",{class:"x-desc"},"一个开源的文档转换工具，支持将多种文档格式相互转换，包括 Markdown、HTML、PDF、DOCX 等",-1),h=e("h1",{id:"简介",tabindex:"-1"},[a("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),u=e("p",null,"Pandoc 是一款通用文档转换工具，它支持任意标记语言之间的格式转换。Pandoc 发展于 2006 年由加州大学伯克利分校的哲学系教授 John MacFarlane 使用 Haskell 语言开发。",-1),m=e("p",null,"Pandoc 被称为”文档转换的瑞士军刀”，因为它几乎可以完成任何标记格式之间的转换。",-1),k=e("p",null,"Pandoc不仅支持多种输出格式和细节调整选项，还支持使用 Lua、Python语言编写自定义文档转换脚本，甚至作为其它文档工具的依赖，例如 R Markdown 和 Quarto。",-1),_=e("h2",{id:"首次用户",tabindex:"-1"},[a("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),g=e("ol",null,[e("li",null,"本文的 demo 展现了如何快速使用 pandoc 将 txt 格式的文档转换为 html 和 docx 格式的文档。"),e("li",null,[a("x-cmd也提供了"),e("a",{href:"/1min/pandoc"},"1分钟教程"),a("可以帮你快速入门。")])],-1),f=e("h2",{id:"功能特点",tabindex:"-1"},[a("功能特点 "),e("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),x=e("ol",null,[e("li",null,[e("strong",null,"多种格式支持"),a("：Pandoc 可以处理多种标记格式，包括 Markdown、HTML、XML 等，以及输出各种文本格式，如纯文本、Markdown、EPUB 等。如果安装了 LaTeX 的还可以输出 PDF 格式。 "),e("ul",null,[e("li",null,[a("更为具体的格式列表可以在"),e("a",{href:"https://pandoc.org/index.html",target:"_blank",rel:"noreferrer"},"Pandoc 官网"),a("或通过 "),e("code",null,"pandoc --list-input-formats"),a(" 和 "),e("code",null,"pandoc --list-output-formats"),a(" 查看。")])])]),e("li",null,[e("strong",null,"强化的 Markdown"),a("：Pandoc支持多种 Markdown 语法扩展，包括表格、脚注、引用、数学公式等，提供更强大的标记功能。同时用户可以通过使用 "),e("code",null,"--strict"),a(" 选项禁用扩展，输出纯粹的 Markdown。")]),e("li",null,[e("strong",null,"模块化设计"),a("：用户可以使用 Lua脚本实现自定义阅读器和写入器，从而满足特殊的文本格式转换。")]),e("li",null,[e("strong",null,"文献引用支持"),a("：Pandoc 可以使用参考文献管理软件的文献数据，并支持多种引文格式。引文格式的支持让Pandoc可以在 Markdown 中生成具有内联引用的学术文章，也可以将文献数据流转换为所选样式的引文列表。")])],-1),P=e("h2",{id:"竞品和相关作品",tabindex:"-1"},[a("竞品和相关作品 "),e("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),b=e("ol",null,[e("li",null,[e("a",{href:"https://panwriter.com/",target:"_blank",rel:"noreferrer"},"PanWriter"),a(" 是一个基于 Pandoc 的 Markdown 编辑器，通过 GUI 的方式实现了 Pandoc 的部分文档转换功能。")]),e("li",null,[e("a",{href:"https://asciidoctor.org/",target:"_blank",rel:"noreferrer"},"AsciiDoctor"),a(" 是一个用 Ruby 编写的文档转换器，专注于 AsciiDoc 格式。它提供了丰富的功能，包括文档生成、PDF输出等。")]),e("li",null,[e("a",{href:"https://docutils.sourceforge.io/docs/user/rst/quickref.html",target:"_blank",rel:"noreferrer"},"reStructuredText"),a(" 是一种轻量级标记语言，用于编写结构化文档。它通常与工具如 Sphinx 结合使用。")]),e("li",null,[e("a",{href:"https://bookdown.org/",target:"_blank",rel:"noreferrer"},"Bookdown"),a(" 是一个 R 语言包，用于创建书籍和文档，支持多种输出格式，包括 PDF、HTML 和 ePub。")])],-1),M=e("h2",{id:"进一步阅读",tabindex:"-1"},[a("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),w=e("ul",null,[e("li",null,[e("a",{href:"https://pandoc.org/index.html",target:"_blank",rel:"noreferrer"},"Pandoc 官方文档")]),e("li",null,[e("a",{href:"https://en.wikipedia.org/wiki/Pandoc",target:"_blank",rel:"noreferrer"},"wikipedia: Pandoc")]),e("li",null,[e("a",{href:"https://linux.die.net/man/1/pandoc",target:"_blank",rel:"noreferrer"},"pandoc(1) - Linux man page")]),e("li",null,[e("a",{href:"https://sspai.com/post/77206",target:"_blank",rel:"noreferrer"},"Pandoc 从入门到精通")])],-1),F=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"pandoc")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"pandoc")])])])],-1);function y(D,C,E,T,v,L){const o=t("PackagePage");return r(),s("div",null,[c(o,null,{default:n(()=>[i,p]),abstract:n(()=>[h,u,m,k,_,g,f,x,P,b,M,w]),install:n(()=>[F]),_:1})])}const X=l(d,[["render",y]]);export{B as __pageData,X as default};
