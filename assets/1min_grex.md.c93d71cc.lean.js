import{_ as o,C as l,o as p,c as t,H as c,w as n,k as s,a}from"./chunks/framework.98e11516.js";const B=JSON.parse('{"title":"grex","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | grex 快速上手 | 命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式","frontmatter":{"name":"grex","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | grex 快速上手"}],["meta",{"name":"og:description","content":"命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | grex 快速上手 | 命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grex</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">a</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">b</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">c</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">d</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">e</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">f</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grex</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">a</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">b</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">c</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">d</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">e</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">f</span></span></code></pre>\\n</div>","#desc":{"cn":"生成字母 a-f 的正则表达式","en":"Generate a regular expression of the letters a-f"},"desc":"生成字母 a-f 的正则表达式"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grex</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-d</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;bc&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;111&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grex</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-d</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;bc&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;111&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"将所有 Unicode 十进制数字转换为 \\\\d","en":"Converts any Unicode decimal digit to \\\\d"},"desc":"将所有 Unicode 十进制数字转换为 \\\\d"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grex</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-D</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">bc</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;111&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grex</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-D</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">bc</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;111&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"将所有不是 Unicode 十进制数字的字符转换为 \\\\D","en":"Converts any character that is not a Unicode decimal number to \\\\D"},"desc":"将所有不是 Unicode 十进制数字的字符转换为 \\\\D"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grex</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-cs</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;bc&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;bc das&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grex</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-cs</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;bc&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;bc das&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"将所有 Unicode 空格字符转换为 \\\\s","en":"Converts any Unicode space characters to \\\\s"},"desc":"将所有 Unicode 空格字符转换为 \\\\s"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grex</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-cw</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;%c*&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;bc das&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grex</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-cw</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;%c*&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;bc das&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"将所有 Unicode 字符转换为 \\\\w","en":"Converts any Unicode character to \\\\w"},"desc":"将所有 Unicode 字符转换为 \\\\w"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grex</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-cr</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;%2c*&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;bbc DDdas&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grex</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-cr</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;%2c*&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;bbc DDdas&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"检测重复的非重叠子字符串并将其转换为量词表示法","en":"Detects repeated, non-overlapping substrings and converts them to quantifier notation"},"desc":"检测重复的非重叠子字符串并将其转换为量词表示法"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grex</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-cxr</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;bbc DDdas&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;123&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grex</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-cxr</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;bbc DDdas&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;123&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"在详细模式下生成外观更好的正则表达式，以及语法突显","en":"Generate better-looking regular expressions in verbose mode, as well as syntax highlighting"},"desc":"在详细模式下生成外观更好的正则表达式，以及语法突显"}],"aside":false,"outline":false,"x-term-speg":"1min/grex.cn","x-term-name":"grex","x-term-desc":"命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式","x-term-size":"large","links":[{"type":"pkg","text":"grex","link":"/pkg/grex"}]},"headers":[],"relativePath":"1min/grex.md","filePath":"1min/grex.md"}'),r={name:"1min/grex.md"},d=s("h1",{id:"grex",tabindex:"-1"},[a("grex "),s("a",{class:"header-anchor",href:"#grex","aria-label":'Permalink to "grex"'},"​")],-1),i=s("p",{class:"visually-hidden"}," 命令行工具和 Rust 库，用于从用户提供的测试用例生成正则表达式 ",-1),y=s("p",null,"本教程介绍 grex 命令的基本用法:",-1),E=s("ol",null,[s("li",null,[a("根据输入生成正则表达式： "),s("ul",null,[s("li",null,"注意，grex 生成的正则表达式默认区分大小写、使用非捕获组"),s("li",null,[a("使用 "),s("code",null,"-i"),a("（不区分大小写），"),s("code",null,"-g"),a("（捕获组）等区分匹配")])])]),s("li",null,[a("将字符转换为指定形式。这里使用 "),s("code",null,"-d"),a(" 参数将所有十进制数字转换为 "),s("code",null,"\\d"),a("。")]),s("li",null,[a("生成易读的正则表达式： "),s("ul",null,[s("li",null,[a("使用 "),s("code",null,"--verbose"),a(" 参数生成在多个缩进的更具可读性的表达式")]),s("li",null,[a("通过指定 "),s("code",null,"--colorize"),a(" 参数为生成的正则表达式提供语法突显")])])])],-1),u=s("p",null,"对此有兴趣的用户，可以查看：",-1),g=s("ul",null,[s("li",null,[s("a",{href:"/pkg/grex"},"x-cmd pkg for grex")])],-1);function F(h,C,x,v,b,m){const e=l("OneMinutePage");return p(),t("div",null,[c(e,null,{default:n(()=>[d,i]),abstract:n(()=>[y,E,u,g]),_:1})])}const k=o(r,[["render",F]]);export{B as __pageData,k as default};