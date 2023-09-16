import{_ as n,C as p,o as t,c as o,H as c,w as a,k as s,a as e}from"./chunks/framework.98e11516.js";const x=JSON.parse('{"title":"sqlite3","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | sqlite3 快速上手 | 一个轻量级的嵌入式关系型数据库管理系统，跨平台支持且使用简单","frontmatter":{"name":"sqlite3","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | sqlite3 快速上手"}],["meta",{"name":"og:description","content":"一个轻量级的嵌入式关系型数据库管理系统，跨平台支持且使用简单"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | sqlite3 快速上手 | 一个轻量级的嵌入式关系型数据库管理系统，跨平台支持且使用简单"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">sqlite3</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">example.db</span></span>\\n<span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.database</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">sqlite3</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">example.db</span></span>\\n<span class=\\"line\\"><span style=\\"color: #032F62\\">.database</span></span></code></pre>\\n</div>","#desc":{"cn":"创建数据库文件，并显示当前连接的数据库","en":"Create a database file and display the currently connected database"},"desc":"创建数据库文件，并显示当前连接的数据库"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.open</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">ex1.db</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.open</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">ex1.db</span></span></code></pre>\\n</div>","#desc":{"cn":"打开并使用 ex1.db 数据库文件","en":"Open and use the ex1. db database file"},"desc":"打开并使用 ex1.db 数据库文件"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.tables</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.tables</span></span></code></pre>\\n</div>","#desc":{"cn":"显示当前数据库中的所有表","en":"Display all tables in the current database"},"desc":"显示当前数据库中的所有表"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.schema</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.schema</span></span></code></pre>\\n</div>","#desc":{"cn":"显示当前数据库中的所有表的结构","en":"Display the structure of all tables in the current database"},"desc":"显示当前数据库中的所有表的结构"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.dump</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.dump</span></span></code></pre>\\n</div>","#desc":{"cn":"将数据库内容呈现为 SQL","en":"Render database content as SQL"},"desc":"将数据库内容呈现为 SQL"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.mode</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.mode</span></span></code></pre>\\n</div>","#desc":{"cn":"查看当前输出模式，并将输出模式设置为 column","en":"View the current output mode and set it to column"},"desc":"查看当前输出模式，并将输出模式设置为 column"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.import</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--csv</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">data.csv</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">pe_table</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.import</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--csv</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">data.csv</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">pe_table</span></span></code></pre>\\n</div>","#desc":{"cn":"从 csv 文件中导入数据到指定的表","en":"Import data from a csv file to the specified table"},"desc":"从 csv 文件中导入数据到指定的表"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.headers</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">on</span></span>\\n<span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.mode</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">csv</span></span>\\n<span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.once</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./dataout.csv</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.headers</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">on</span></span>\\n<span class=\\"line\\"><span style=\\"color: #032F62\\">.mode</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">csv</span></span>\\n<span class=\\"line\\"><span style=\\"color: #032F62\\">.once</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./dataout.csv</span></span></code></pre>\\n</div>","#desc":{"cn":"将 example_table 表的数据导出到 csv 文件","en":"Example_ Export data from table to csv file"},"desc":"将 example_table 表的数据导出到 csv 文件"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">.quit</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">.quit</span></span></code></pre>\\n</div>","#desc":{"cn":"退出 sqlite3 命令行","en":"Exit the sqlite3 command line"},"desc":"退出 sqlite3 命令行"}],"aside":false,"outline":false,"x-term-speg":"1min/sqlite3.cn","x-term-name":"sqlite3","x-term-desc":"一个轻量级的嵌入式关系型数据库管理系统，跨平台支持且使用简单","x-term-size":"large","links":[{"type":"pkg","text":"sqlite3","link":"/pkg/sqlite3"}]},"headers":[],"relativePath":"1min/sqlite3.md","filePath":"1min/sqlite3.md"}'),i={name:"1min/sqlite3.md"},d=s("h1",{id:"sqlite3",tabindex:"-1"},[e("sqlite3 "),s("a",{class:"header-anchor",href:"#sqlite3","aria-label":'Permalink to "sqlite3"'},"​")],-1),r=s("p",{class:"visually-hidden"}," 一个轻量级的嵌入式关系型数据库管理系统，跨平台支持且使用简单 ",-1),h=s("p",null,"本教程将在1分钟内实现:",-1),u=s("ol",null,[s("li",null,[e("使用 "),s("code",null,"sqlite3 <path_database>"),e(" 进入 sqlite3 命令行并指定打开的 SQLite 数据库文件。（如果指定的文件不存在，则会自动创建新的数据库文件）")]),s("li",null,[e("数据库操作： "),s("ul",null,[s("li",null,[e("使用 "),s("code",null,".database"),e(" 命令查看当前打开的数据库文件及其存储路径。")]),s("li",null,[e("使用 "),s("code",null,".open <path_database>"),e(" 命令打开指定的 SQLite 数据库文件。（如果指定的文件不存在，则会自动创建新的数据库文件）")]),s("li",null,[e("使用 "),s("code",null,".dump"),e(" 命令将数据库内容呈现为 SQL。")])])]),s("li",null,[e("数据表操作： "),s("ul",null,[s("li",null,[e("使用 "),s("code",null,".tables"),e(" 命令查看当前数据库中的所有表。")]),s("li",null,[e("使用 "),s("code",null,".schema"),e(" 命令查看当前数据库中的所有表的结构。")])])]),s("li",null,[e("输出模式： "),s("ul",null,[s("li",null,[e("使用 "),s("code",null,".mode"),e(" 命令查看当前输出模式。")]),s("li",null,[e("使用 "),s("code",null,".mode <options_mode>"),e(" 命令更改输出模式。默认为 list 输出模式。")])])]),s("li",null,[e("使用 "),s("code",null,".import"),e(" 命令从 csv 文件中导入数据。")]),s("li",null,[e("使用 "),s("code",null,".once"),e(" 命令将数据导出到指定文件中。")]),s("li",null,[e("使用 "),s("code",null,".quit"),e(" 命令退出 sqlite3 命令行。")])],-1),v=s("p",null,"对此有兴趣的用户，可以查看：",-1),m=s("ul",null,[s("li",null,[s("a",{href:"/pkg/sqlite3"},"x-cmd pkg for sqlite")])],-1);function y(g,b,F,E,k,C){const l=p("OneMinutePage");return t(),o("div",null,[c(l,null,{default:a(()=>[d,r]),abstract:a(()=>[h,u,v,m]),_:1})])}const q=n(i,[["render",y]]);export{x as __pageData,q as default};