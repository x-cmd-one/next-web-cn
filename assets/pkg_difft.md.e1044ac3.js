import{_ as l,C as r,o as s,c as f,H as n,w as a,k as t,a as e}from"./chunks/framework.98e11516.js";const $=JSON.parse('{"title":"difft","titleTemplate":"x-cmd package | difft 是一个根据文件语法进行比较的结构化比较工具","description":"x-cmd package difft | difft 是一个根据文件语法进行比较的结构化比较工具","frontmatter":{"name":"difft","titleTemplate":"x-cmd package | difft 是一个根据文件语法进行比较的结构化比较工具","head":[["meta",{"name":"og:title","content":"difft | x-cmd package"}],["meta",{"name":"og:description","content":"difft 是一个根据文件语法进行比较的结构化比较工具"}],["meta",{"name":"description","content":"x-cmd package difft | difft 是一个根据文件语法进行比较的结构化比较工具"}]],"links":[{"type":"1min","text":"difft","link":"/1min/difft"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/Wilfred/difftastic","license":"MIT","version":{"stable":"v0.0.1"},"support":["darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/difft/releases","https://gitcode.net/x-cmd-build/difft/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/difft.cn","x-term-name":"difft","x-term-desc":"difft 是一个根据文件语法进行比较的结构化比较工具","x-term-size":"large"},"headers":[],"relativePath":"pkg/difft.md","filePath":"pkg/difft.md"}'),o={name:"pkg/difft.md"},d=t("h1",{id:"difft",tabindex:"-1"},[e("difft "),t("a",{class:"header-anchor",href:"#difft","aria-label":'Permalink to "difft"'},"​")],-1),c=t("p",{class:"x-desc"},"difft 是一个根据文件语法进行比较的结构化比较工具",-1),h=t("h2",{id:"简介",tabindex:"-1"},[e("简介 "),t("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=t("p",null,"difft（Difftastic） 是一个根据文件语法进行差异分析的结构化比较工具。",-1),m=t("p",null,"Difft的原理是使用 Tree-sitter 来构建解析树，然后将解析树转换为一个更简单的树，可以进行差异比较。这里简单了解一下Tree-sitter： 它是一个用于解析源代码的现代解析器生成工具和库，它可以将源代码解析为抽象语法树（AST），使程序能够理解和处理源代码的结构和语法。",-1),u=t("h2",{id:"首次用户",tabindex:"-1"},[e("首次用户 "),t("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),g=t("ol",null,[t("li",null,[e("本文的demo展现了使用 difft 来比较两个目录和 "),t("code",null,"rust"),e(" 文件在语法上的差异。")]),t("li",null,[e("x-cmd也提供了"),t("a",{href:"/1min/difft"},"1分钟教程"),e("可以帮你快速入门")])],-1),_=t("h2",{id:"更精准的语法高亮",tabindex:"-1"},[e("更精准的语法高亮 "),t("a",{class:"header-anchor",href:"#更精准的语法高亮","aria-label":'Permalink to "更精准的语法高亮"'},"​")],-1),k=t("ol",null,[t("li",null,[e("difft可以根据文件的语法比较文件的不同之处并进行高亮显示，但如果一个文件的扩展名不能识别的话，difft使用的是带有单词高亮的文本差异比较。若要查看difft支持哪些语言，可以点击这个链接查看"),t("a",{href:"https://difftastic.wilfred.me.uk/languages_supported.html",target:"_blank",rel:"noreferrer"},"difft语言支持")]),t("li",null,"支持仅检查两个文件是否具有相同的语法结构，而不进行差异计算")],-1),b=t("h2",{id:"支持在-git-命令中使用-difft-来比较",tabindex:"-1"},[e("支持在 git 命令中使用 difft 来比较 "),t("a",{class:"header-anchor",href:"#支持在-git-命令中使用-difft-来比较","aria-label":'Permalink to "支持在 git 命令中使用 difft 来比较"'},"​")],-1),x=t("ol",null,[t("li",null,[e("当前环境使用： 可以通过设置环境变量GIT_EXTERNAL_DIFF （"),t("code",null," GIT_EXTERNAL_DIFF=difft git diff"),e("）然后在当前环境使用git diff即可")]),t("li",null,[e("全局配置： 如果您想默认使用 difftastic，可以使用 git config 进行配置。[具体操作方式可以在这里查看]（"),t("a",{href:"https://difftastic.wilfred.me.uk/git.html%EF%BC%89",target:"_blank",rel:"noreferrer"},"https://difftastic.wilfred.me.uk/git.html）")])],-1),E=t("p",null,"除git以外，difft还支持Mercurial和Fossil（Mercurial 和 Fossil 都是版本控制系统）",-1),y=t("h2",{id:"已知问题",tabindex:"-1"},[e("已知问题 "),t("a",{class:"header-anchor",href:"#已知问题","aria-label":'Permalink to "已知问题"'},"​")],-1),F=t("ol",null,[t("li",null,[e("difft 在比较大文件上的性能较差，并且有可能会占用大量的内存，详情请看"),t("a",{href:"https://www.reddit.com/r/rust/comments/pp6y3d/comment/hd47wpp/",target:"_blank",rel:"noreferrer"},"这里"),e("。")])],-1),v=t("h2",{id:"竞品和相关作品",tabindex:"-1"},[e("竞品和相关作品 "),t("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),w=t("p",null,"以下cli项目也是基于树进行结构差异分析:",-1),P=t("ol",null,[t("li",null,[t("a",{href:"https://github.com/andreyvit/json-diff",target:"_blank",rel:"noreferrer"},"json-diff"),e("比较 JSON 文件的结构 diff")]),t("li",null,[t("a",{href:"https://github.com/GumTreeDiff/gumtree",target:"_blank",rel:"noreferrer"},"GumTree"),e("解析多种编程语言，然后执行基于树的 diff，输出HTML显示。")]),t("li",null,[t("a",{href:"https://github.com/afnanenayet/diffsitter",target:"_blank",rel:"noreferrer"},"Diffsitter"),e("一个基于树的比较工具。")]),t("li",null,[t("a",{href:"https://fazzone.github.io/autochrome.html",target:"_blank",rel:"noreferrer"},"Autochrome"),e("是一个用于在结构上比较和突出显示 clojure 源代码的程序。")]),t("li",null,[t("a",{href:"https://blog.trailofbits.com/2020/08/28/graphtage/",target:"_blank",rel:"noreferrer"},"graphtage"),e("通过解析为通用文件格式，然后显示差异来比较结构化数据，允许将JSON与YAML进行差异。")])],-1),T=t("h2",{id:"进一步阅读",tabindex:"-1"},[e("进一步阅读 "),t("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),C=t("ul",null,[t("li",null,[e("项目托管在"),t("a",{href:"https://github.com/Wilfred/difftastic",target:"_blank",rel:"noreferrer"},"github"),e("上，里面的README文档提供了详细的参数功能和使用说明。")]),t("li",null,[e("官方提供了详细的"),t("a",{href:"https://difftastic.wilfred.me.uk/",target:"_blank",rel:"noreferrer"},"manual 文档"),e("，该文档对 difft 的解析进行了详尽的说明。")]),t("li",null,[e("如果你是 magit 用户，你可以参考"),t("a",{href:"https://tsdh.org/posts/2022-08-01-difftastic-diffing-with-magit.html",target:"_blank",rel:"noreferrer"},"difftastic-diffing-with-magit"),e("，将 difftastic 与 magit 一起使用。")])],-1),B=t("div",{class:"language-sh vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"sh"),t("pre",{class:"shiki github-dark has-diff vp-code-dark"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"x"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"env"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"use"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"difft")])])]),t("pre",{class:"shiki github-light has-diff vp-code-light"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#005CC5"}},"x"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"env"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"use"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"difft")])])])],-1);function D(N,A,M,I,G,L){const i=r("PackagePage");return s(),f("div",null,[n(i,null,{default:a(()=>[d,c]),abstract:a(()=>[h,p,m,u,g,_,k,b,x,E,y,F,v,w,P,T,C]),install:a(()=>[B]),_:1})])}const j=l(o,[["render",D]]);export{$ as __pageData,j as default};
