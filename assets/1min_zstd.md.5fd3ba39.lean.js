import{_ as n,C as l,o,c as p,H as c,w as t,k as s,a as e}from"./chunks/framework.98e11516.js";const k=JSON.parse('{"title":"zstd","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | zstd 快速上手 | 一种基于 Zstandard 算法的高效文件压缩工具","frontmatter":{"name":"zstd","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | zstd 快速上手"}],["meta",{"name":"og:description","content":"一种基于 Zstandard 算法的高效文件压缩工具"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | zstd 快速上手 | 一种基于 Zstandard 算法的高效文件压缩工具"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">zstd</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test.exe</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-o</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test.zst</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">zstd</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test.exe</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-o</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test.zst</span></span></code></pre>\\n</div>","#desc":{"cn":"压缩 test.exe 文件并输出保存为 test.zst 文件","en":"Compress the test.exe file and output it as a test.zst file"},"desc":"压缩 test.exe 文件并输出保存为 test.zst 文件"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">zstd</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-10</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test.exe</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-o</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test_10.zst</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">zstd</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-10</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test.exe</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-o</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test_10.zst</span></span></code></pre>\\n</div>","#desc":{"cn":"指定压缩级别，数字越大压缩比越高，压缩速度越慢","en":"Specify compression level"},"desc":"指定压缩级别，数字越大压缩比越高，压缩速度越慢"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">zstd</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-l</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test.zst</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test_10.zst</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">zstd</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-l</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test.zst</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test_10.zst</span></span></code></pre>\\n</div>","#desc":{"cn":"查看压缩文件的详细信息","en":"View detailed information about compressed files"},"desc":"查看压缩文件的详细信息"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">zstd</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-d</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test.zst</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-o</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">test_zstd.exe</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">zstd</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-d</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test.zst</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-o</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">test_zstd.exe</span></span></code></pre>\\n</div>","#desc":{"cn":"解压 test.zst 文件并输出保存为 test_zstd.exe 文件","en":"Decompress the test.zst file and output it as test_ Zstd.exe file"},"desc":"解压 test.zst 文件并输出保存为 test_zstd.exe 文件"}],"aside":false,"outline":false,"x-term-speg":"1min/zstd.cn","x-term-name":"zstd","x-term-desc":"一种基于 Zstandard 算法的高效文件压缩工具","x-term-size":"large","links":[{"type":"pkg","text":"zstd","link":"/pkg/zstd"}]},"headers":[],"relativePath":"1min/zstd.md","filePath":"1min/zstd.md"}'),r={name:"1min/zstd.md"},d=s("h1",{id:"zstd",tabindex:"-1"},[e("zstd "),s("a",{class:"header-anchor",href:"#zstd","aria-label":'Permalink to "zstd"'},"​")],-1),i=s("p",{class:"visually-hidden"}," 一种基于 Zstandard 算法的高效文件压缩工具 ",-1),y=s("p",null,[e("本教程演示了 "),s("code",null,"zstd"),e(" 的基本功能和用法：")],-1),E=s("ol",null,[s("li",null,"压缩文件：以压缩 exe 文件为例。默认压缩级别是 3 ，压缩级别越大，压缩比越高，压缩速度越慢。"),s("li",null,"查看压缩文件的相关信息，例如压缩前后的文件大小、压缩比率、Check 使用的算法。"),s("li",null,"解压：以还原压缩的 exe 文件为例。")],-1),h=s("p",null,"进一步阅读：",-1),F=s("ul",null,[s("li",null,[e("x-cmd 对于 zstd 的介绍和快速安装的方法，可以查看: "),s("a",{href:"/pkg/zstd"},"x-cmd pkg for zstd")])],-1);function m(z,u,C,x,g,v){const a=l("OneMinutePage");return o(),p("div",null,[c(a,null,{default:t(()=>[d,i]),abstract:t(()=>[y,E,h,F]),_:1})])}const B=n(r,[["render",m]]);export{k as __pageData,B as default};
