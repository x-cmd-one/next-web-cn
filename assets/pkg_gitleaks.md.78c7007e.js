import{_ as s,C as i,o as n,c as o,H as r,w as l,k as e,a as t}from"./chunks/framework.98e11516.js";const G=JSON.parse('{"title":"gitleaks","titleTemplate":"x-cmd package | gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌","description":"x-cmd package gitleaks | gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌","frontmatter":{"name":"gitleaks","titleTemplate":"x-cmd package | gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌","head":[["meta",{"name":"og:title","content":"gitleaks | x-cmd package"}],["meta",{"name":"og:description","content":"gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌"}],["meta",{"name":"description","content":"x-cmd package gitleaks | gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌"}]],"links":[{"type":"1min","text":"gitleaks","link":"/1min/gitleaks"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/gitleaks/gitleaks","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/gitleaks/releases","https://gitcode.net/x-cmd-build/gitleaks/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/gitleaks.cn","x-term-name":"gitleaks","x-term-desc":"gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌","x-term-size":"large"},"headers":[],"relativePath":"pkg/gitleaks.md","filePath":"pkg/gitleaks.md"}'),c={name:"pkg/gitleaks.md"},g=e("h1",{id:"gitleaks",tabindex:"-1"},[t("gitleaks "),e("a",{class:"header-anchor",href:"#gitleaks","aria-label":'Permalink to "gitleaks"'},"​")],-1),d=e("p",{class:"x-desc"},"gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌",-1),h=e("h2",{id:"简介",tabindex:"-1"},[t("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),k=e("p",null,"gitleaks 是一个快速、轻量级的安全扫描工具，用于查找 git 存储库、文件和目录中的潜在安全漏洞。",-1),p=e("h2",{id:"首次用户",tabindex:"-1"},[t("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),u=e("ol",null,[e("li",null,"本文的 demo 展现了如何通过 x-cmd 快速使用 gitleaks 。"),e("li",null,[t("x-cmd 也提供了"),e("a",{href:"/1min/gitleaks"},"1分钟教程"),t("可以帮你快速入门。")])],-1),m=e("h2",{id:"功能特点",tabindex:"-1"},[t("功能特点 "),e("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),_=e("ol",null,[e("li",null,[e("strong",null,"丰富的 secret 支持"),t("：gitleaks 支持超过 160 种"),e("a",{href:"https://github.com/gitleaks/gitleaks/tree/master/cmd/generate/config/rules",target:"_blank",rel:"noreferrer"},"secret 类型"),t("，并持续添加新的类型，以确保你的代码不会泄露密码、API 密钥、证书等敏感信息。")]),e("li",null,[e("strong",null,"自定义规则"),t("：你可以在项目的根目录创建 "),e("code",null,".gitleaks.toml"),t(" 文件，根据 gitleaks 提供的配置格式编写自己的检测规则，以满足特定需求。")]),e("li",null,[e("strong",null,"历史 commit 检测"),t("：gitleaks 不仅扫描最新的源代码，还能够回溯整个 git 历史记录，查找过去提交到代码库的敏感信息，确保历史不会成为漏洞的源头。")]),e("li",null,[e("strong",null,"文件和目录检测"),t("：不仅可以扫描代码文件，还可以检测整个目录，确保你的整个项目中不会存在安全漏洞。如果需要在非 git 存储库中使用 gitleaks，可以通过 "),e("code",null,"--no-git"),t(" 参数来检测。")])],-1),f=e("h2",{id:"竞品和相关作品",tabindex:"-1"},[t("竞品和相关作品 "),e("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),b=e("ol",null,[e("li",null,[e("strong",null,"GitGuardian"),t("： "),e("ul",null,[e("li",null,"优势：支持多种云代码托管平台，包括 GitHub、GitLab 和 Bitbucket。具有强大的自定义规则功能，可以检测各种敏感信息类型。"),e("li",null,"劣势：需要付费订阅才能获得完整功能。相对于 gitleaks，可能配置和使用上稍显复杂。")])]),e("li",null,[e("strong",null,"TruffleHog"),t("： "),e("ul",null,[e("li",null,"优势：开源工具，易于安装和使用。可以检测到常见的高危敏感信息，如密码和 API 密钥。"),e("li",null,"劣势：功能相对较简单，不如 gitleaks 和 GitGuardian 支持广泛的 secret 类型和自定义规则。")])])],-1),x=e("h2",{id:"进一步阅读",tabindex:"-1"},[t("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),v=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/gitleaks/gitleaks",target:"_blank",rel:"noreferrer"},"github: gitleaks")]),e("li",null,[e("a",{href:"https://akashchandwani.medium.com/what-is-gitleaks-and-how-to-use-it-a05f2fb5b034",target:"_blank",rel:"noreferrer"},"What is Gitleaks and how to use it?")]),e("li",null,[e("a",{href:"https://www.crestdatasys.com/blogs/securing-your-codebase-with-gitleaks-comprehensive-guide/",target:"_blank",rel:"noreferrer"},"Securing Your Codebase with GitLeaks")]),e("li",null,[e("a",{href:"https://www.jit.io/blog/the-developers-guide-to-using-gitleaks-to-detect-hardcoded-secrets",target:"_blank",rel:"noreferrer"},"using-gitleaks-to-detect-hardcoded-secrets")]),e("li",null,[e("a",{href:"https://itnext.io/how-to-use-gitleaks-to-prevent-pushing-sensitive-info-cdd0355d5f61",target:"_blank",rel:"noreferrer"},"How to Use Gitleaks to Prevent Pushing Sensitive Info")])],-1),y=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"gitleaks")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"gitleaks")])])])],-1);function w(S,E,P,T,C,F){const a=i("PackagePage");return n(),o("div",null,[r(a,null,{default:l(()=>[g,d]),abstract:l(()=>[h,k,p,u,m,_,f,b,x,v]),install:l(()=>[y]),_:1})])}const B=s(c,[["render",w]]);export{G as __pageData,B as default};
