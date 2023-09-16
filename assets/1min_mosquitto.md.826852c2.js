import{_ as n,C as e,o as t,c as p,H as c,w as a,k as s,a as o}from"./chunks/framework.98e11516.js";const k=JSON.parse('{"title":"mosquitto","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | mosquitto 快速上手 | 实现 MQTT 协议的消息代理","frontmatter":{"name":"mosquitto","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | mosquitto 快速上手"}],["meta",{"name":"og:description","content":"实现 MQTT 协议的消息代理"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | mosquitto 快速上手 | 实现 MQTT 协议的消息代理"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">mosquitto</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-d</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">mosquitto</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-d</span></span></code></pre>\\n</div>","#desc":{"cn":"启动 mosquitto 服务器","en":"Start the mosquitto server"},"desc":"启动 mosquitto 服务器"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">mosquitto_passwd</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-c</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-b</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">password_file</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">username</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">123456</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">mosquitto_passwd</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-c</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-b</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">password_file</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">username</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">123456</span></span></code></pre>\\n</div>","#desc":{"cn":"新增用户和密码","en":"Add new users and passwords"},"desc":"新增用户和密码"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">mosquitto_sub</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-t</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">HelloWord</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">mosquitto_sub</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-t</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">HelloWord</span></span></code></pre>\\n</div>","#desc":{"cn":"订阅主题","en":"subscribe to a topic"},"desc":"订阅主题"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">mosquitto_pub</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-t</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">HelloWord</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-h</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">localhost</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-m</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;Hello Word&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">mosquitto_pub</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-t</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">HelloWord</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-h</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">localhost</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-m</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;Hello Word&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"发布消息","en":"publish a message"},"desc":"发布消息"}],"aside":false,"outline":false,"x-term-speg":"1min/mosquitto.cn","x-term-name":"mosquitto","x-term-desc":"实现 MQTT 协议的消息代理","x-term-size":"large","links":[{"type":"pkg","text":"mosquitto","link":"/pkg/mosquitto"}]},"headers":[],"relativePath":"1min/mosquitto.md","filePath":"1min/mosquitto.md"}'),r={name:"1min/mosquitto.md"},i=s("h1",{id:"mosquitto",tabindex:"-1"},[o("mosquitto "),s("a",{class:"header-anchor",href:"#mosquitto","aria-label":'Permalink to "mosquitto"'},"​")],-1),d=s("p",{class:"visually-hidden"}," 实现 MQTT 协议的消息代理 ",-1),u=s("p",null,[o("本教程演示了 "),s("code",null,"mosquitto"),o(" 的基本功能和用法:")],-1),y=s("ol",null,[s("li",null,[o("使用 "),s("code",null,"mosquitto -d"),o(" 命令在后台启动服务：默认情况下，代理将监听绑定到 loopback 接口的 1883 端口。")]),s("li",null,[o("通过 "),s("code",null,"mosquitto_passwd"),o(" 命令来创建一个保存 mosquitto 账号密码的文件。")]),s("li",null,[o("订阅主题，并通过该主题发送消息： "),s("ul",null,[s("li",null,[o("这里通过 "),s("code",null,"tmux"),o(" 来打开一个终端窗口，并划分为上下两个窗格来展示发送和接收消息")]),s("li",null,[o("使用 "),s("code",null,"mosquitto_sub"),o(" 命令订阅一个名为 HelloWord 主题")]),s("li",null,[o("使用 "),s("code",null,"mosquitto_pub"),o(" 命令发布消息")])])])],-1),m=s("p",null,"对此有兴趣的用户，可以查看：",-1),E=s("ul",null,[s("li",null,[s("a",{href:"/pkg/mosquitto"},"x-cmd pkg for mosquitto")])],-1);function h(F,C,g,q,v,_){const l=e("OneMinutePage");return t(),p("div",null,[c(l,null,{default:a(()=>[i,d]),abstract:a(()=>[u,y,m,E]),_:1})])}const x=n(r,[["render",h]]);export{k as __pageData,x as default};