import{_ as r,C as n,o as c,c as d,H as o,w as y,k as s,a,Y as l}from"./chunks/framework.98e11516.js";const T=JSON.parse('{"title":"x gh wf","description":"x gh wf | x-cmd module | `x gh action workflow` 的简写别名","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh wf | x-cmd"}],["meta",{"name":"og:description","content":"`x gh action workflow` 的简写别名"}],["meta",{"name":"description","content":"x gh wf | x-cmd module | `x gh action workflow` 的简写别名"}]]},"headers":[],"relativePath":"mod/gh/wf.md","filePath":"mod/gh/wf.md"}'),i={name:"mod/gh/wf.md"},E=s("h1",{id:"x-gh-wf",tabindex:"-1"},[a("x gh wf "),s("a",{class:"header-anchor",href:"#x-gh-wf","aria-label":'Permalink to "x gh wf"'},"​")],-1),h=s("p",{class:"x-desc"},[s("code",null,"x gh action workflow"),a(" 的简写别名")],-1),g=l('<h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-gh-wf-app">x gh wf --app</a></td><td>交互式表格显示工作流信息</td></tr><tr><td><a href="#x-gh-wf-ls">x gh wf ls</a></td><td>罗列存储库中的工作流</td></tr><tr><td><a href="#x-gh-wf-view">x gh wf view</a></td><td>罗列显示目标工作流的运行信息</td></tr><tr><td><a href="#x-gh-wf-run">x gh wf run</a></td><td>通过 workflow_dispatch 事件运行工作流</td></tr><tr><td><a href="#x-gh-wf-disable">x gh wf disable</a></td><td>禁用工作流</td></tr><tr><td><a href="#x-gh-wf-enable">x gh wf enable</a></td><td>启用工作流</td></tr></tbody></table></div><h3 id="x-gh-wf-app" tabindex="-1">x gh wf --app <a class="header-anchor" href="#x-gh-wf-app" aria-label="Permalink to &quot;x gh wf --app&quot;">​</a></h3><p>交互式表格显示工作流信息</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wf</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--app</span><span style="color:#929292;"> [OPTIONS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wf</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--app</span><span style="color:#6C6C6C;"> [OPTIONS]</span></span></code></pre></div><ul><li><strong>选项</strong> :</li></ul>',7),F=l('<h3 id="x-gh-wf-ls" tabindex="-1">x gh wf ls <a class="header-anchor" href="#x-gh-wf-ls" aria-label="Permalink to &quot;x gh wf ls&quot;">​</a></h3><p>罗列存储库中的工作流</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr><tr><td><code>--per_page</code> &lt;num&gt;</td><td></td><td>每页数据量</td></tr><tr><td><code>--page</code> &lt;num&gt;</td><td></td><td>目标页码</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gh-wf-view" tabindex="-1">x gh wf view <a class="header-anchor" href="#x-gh-wf-view" aria-label="Permalink to &quot;x gh wf view&quot;">​</a></h3><p>罗列显示目标工作流的运行信息</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">view</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">v</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">view</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">v</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>工作流的 ID (可通过 <code>x gh action workflow ls</code> 获取)</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul>',15),u=l('<ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr><tr><td><code>--exclude_pull_requests</code></td><td>响应中省略 pull requests</td></tr></tbody></table></div><h3 id="x-gh-wf-run" tabindex="-1">x gh wf run <a class="header-anchor" href="#x-gh-wf-run" aria-label="Permalink to &quot;x gh wf run&quot;">​</a></h3><p>通过 workflow_dispatch 事件运行工作流</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">dispatch</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">dispatch</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>工作流名称 或 工作流文件相对路径 或 .id=&lt;工作流 ID&gt;</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul>',9),w=l(`<ul><li><strong>例子</strong> :</li></ul><p>通过 workflow_dispatch 事件运行 &lt;workflow 名为 Lint&gt; 工作流</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Lint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Lint</span></span></code></pre></div><p>通过 workflow_dispatch 事件运行 &lt;远程文件 .github/workflows/lint.yml&gt; 工作流并传递定义的键值对 JSON 参数</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name=x-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">msg=hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint.yml</span></span>
<span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--inputs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;,&quot;msg&quot;:&quot;hello&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lint.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name=x-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">msg=hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint.yml</span></span>
<span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--inputs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;,&quot;msg&quot;:&quot;hello&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lint.yml</span></span></code></pre></div><p>通过 workflow_dispatch 事件运行工作流并传递标准输入流的键值对 JSON 参数</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">workflow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--inputs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.id=</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">workflow_i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;name&quot;:&quot;x-cmd&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">workflow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--inputs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.id=</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">workflow_i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gh-wf-disable" tabindex="-1">x gh wf disable <a class="header-anchor" href="#x-gh-wf-disable" aria-label="Permalink to &quot;x gh wf disable&quot;">​</a></h3><p>禁用工作流</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disable</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disable</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>工作流的 ID (可通过 <code>x gh action workflow ls</code> 获取)</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr></tbody></table></div><h3 id="x-gh-wf-enable" tabindex="-1">x gh wf enable <a class="header-anchor" href="#x-gh-wf-enable" aria-label="Permalink to &quot;x gh wf enable&quot;">​</a></h3><p>启用工作流</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>工作流的 ID (可通过 <code>x gh action workflow ls</code> 获取)</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr></tbody></table></div><br>`,24),C=s("h2",{id:"相关链接",tabindex:"-1"},[a("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),f=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),a(" 获取补全信息")]),s("p",null,[a("运行 "),s("code",null,"CMD SUBCOMMAND --help"),a(" 可以获取命令的更多信息")])],-1);function b(v,_,x,m,k,B){const e=n("AdsContent"),t=n("DocsGroupTable"),p=n("DocsLinkCard");return c(),d("div",null,[E,h,o(e),g,o(t,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"optional":{"active":true,"data":[{"name":"<code>--page</code> ^lt;num^gt;","default":"","desc":"目标页码"},{"name":"<code>--per_page</code> ^lt;num^gt;","default":"","desc":"每页数据量"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,o(t,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--branch</code> ^lt;branch^gt;","default":"","desc":"返回与分支关联的工作流运行"},{"name":"<code>--actor</code> ^lt;username^gt;","default":"","desc":"返回目标用户的工作流运行"},{"name":"<code>--event</code> ^lt;event^gt;","default":"","desc":"返回指定的事件触发的工作流运行"},{"name":"<code>--sta</code>, <code>--status</code> ^lt;status^gt;","default":"","desc":"返回指定运行状态的工作流运行"},{"name":"<code>--per_page</code> ^lt;num^gt;","default":"","desc":"每页数据量"},{"name":"<code>--page</code> ^lt;num^gt;","default":"","desc":"目标页码"},{"name":"<code>--created</code> ^lt;ISO 8601^gt;","default":"","desc":"返回日期时间范围内创建的工作流运行"},{"name":"<code>--check_suite_id</code> ^lt;id^gt;","default":"","desc":"使用指定的 check_suite_id 工作流运行"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,o(t,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--inputs</code> ^lt;key_val_json^gt;","default":"","desc":"传递使用已定义 workflow 中的键值对参数. \\"-\\" 使用标准输入流 stdin"},{"name":"<code>--ref</code> ^lt;branch|tag^gt;","default":"","desc":"目标 git reference. 为空获取默认分支"},{"name":"<code>--field</code>, <code>-f</code> ^lt;key=val^gt;","default":"","desc":"传递使用已定义 workflow 中的 ^lt;key^gt;=^lt;value^gt; 参数"}]},"$NotGroup":{"active":true,"data":[]}}'}),w,o(p,null,{default:y(()=>[C]),_:1}),f])}const A=r(i,[["render",b]]);export{T as __pageData,A as default};
