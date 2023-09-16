import{_ as c,C as t,o as r,c as d,H as e,w as i,k as s,a,Y as o}from"./chunks/framework.98e11516.js";const T=JSON.parse('{"title":"x gt issue","description":"x gt issue | x-cmd module | Issue 管理","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gt issue | x-cmd"}],["meta",{"name":"og:description","content":"Issue 管理"}],["meta",{"name":"description","content":"x gt issue | x-cmd module | Issue 管理"}]]},"headers":[],"relativePath":"mod/gt/issue.md","filePath":"mod/gt/issue.md"}'),y={name:"mod/gt/issue.md"},E=s("h1",{id:"x-gt-issue",tabindex:"-1"},[a("x gt issue "),s("a",{class:"header-anchor",href:"#x-gt-issue","aria-label":'Permalink to "x gt issue"'},"​")],-1),u=s("p",{class:"x-desc"},"Issue 管理",-1),g=o('<h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-gt-issue-ls">x gt issue ls</a></td><td>罗列 issue</td></tr><tr><td><a href="#x-gt-issue-info">x gt issue info</a></td><td>获取 issue 详细信息</td></tr><tr><td><a href="#x-gt-issue-create">x gt issue create</a></td><td>创建 issue</td></tr><tr><td><a href="#x-gt-issue-edit">x gt issue edit</a></td><td>编辑 issue</td></tr></tbody></table></div><h3 id="x-gt-issue-ls" tabindex="-1">x gt issue ls <a class="header-anchor" href="#x-gt-issue-ls" aria-label="Permalink to &quot;x gt issue ls&quot;">​</a></h3><p>罗列 用户|仓库|企业 issue</p><p><code>x gt issue ls</code> 是一个多命令复合命令, 旨在方便快速使用</p><ul><li><code>x gt user issue</code></li><li><code>x gt repo issue ls</code></li><li><code>x gt enterprise issue ls</code></li></ul><p>如果你需要更多控制指令或者编写脚本, 请使用他们</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>所属空间地址(企业|仓库 owner/repo)[可选: 使用当前用户]</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul>',12),F=o('<ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><ul><li><strong>例子</strong> :</li></ul><p>罗列当前用户的 issues</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre></div><p>罗列 &lt;owner/repo&gt; 仓库 issues</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>罗列 &lt;enterprise_address&gt; 企业 issues</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gt-issue-info" tabindex="-1">x gt issue info <a class="header-anchor" href="#x-gt-issue-info" aria-label="Permalink to &quot;x gt issue info&quot;">​</a></h3><p>获取 issue 详细信息</p><p><code>x gt issue info</code> 是一个多命令复合命令, 旨在方便快速使用</p><ul><li><code>x gt repo issue info</code></li><li><code>x gt enterprise issue info</code></li></ul><p>如果你需要更多控制指令或者编写脚本, 请使用他们</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>issue 编号(区分大小写，无需添加 # 号)</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--owner</code> &lt;owner_path&gt;</td><td></td><td>所属空间地址(企业|仓库 owner/repo)</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><ul><li><strong>例子</strong> :</li></ul><p>获取输出 &lt;owner&gt;/&lt;repo&gt; 仓库的 &lt;issue_number&gt; issue 信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--owner</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owne</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--owner</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owne</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>获取输出 &lt;owner&gt;/&lt;repo&gt; 仓库的 &lt;issue_number&gt; issue 信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owne</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owne</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>获取输出 &lt;enterprise_address&gt; 企业的 &lt;issue_number&gt; issue 信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--owner</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--owner</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>获取输出 &lt;enterprise_address&gt; 企业的 &lt;issue_number&gt; issue 信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gt-issue-create" tabindex="-1">x gt issue create <a class="header-anchor" href="#x-gt-issue-create" aria-label="Permalink to &quot;x gt issue create&quot;">​</a></h3><p>创建 issue</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>选项</strong> :</li></ul>',36),h=o('<ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--security</code></td><td>标记为私有 issue</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gt-issue-edit" tabindex="-1">x gt issue edit <a class="header-anchor" href="#x-gt-issue-edit" aria-label="Permalink to &quot;x gt issue edit&quot;">​</a></h3><p>编辑 issue</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">ed</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ed</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>issue 编号(区分大小写，无需添加 # 号)</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul>',9),C=o('<ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--security</code></td><td>标记为私有 issue</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr><tr><td><code>--type</code> &lt;issue_type&gt;</td><td>自定义 issue 类型(非企业默认 issue 类型为“任务”)</td></tr></tbody></table></div><ul><li><strong>例子</strong> :</li></ul><p>变更 &lt;enterprise_address&gt; 企业的 &lt;issue_number&gt; issue 状态为进行中</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--owner</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">progressing</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--owner</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">progressing</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><br>',6),b=s("h2",{id:"相关链接",tabindex:"-1"},[a("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),_=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),a(" 获取补全信息")]),s("p",null,[a("运行 "),s("code",null,"CMD SUBCOMMAND --help"),a(" 可以获取命令的更多信息")])],-1);function v(m,x,B,f,k,A){const n=t("AdsContent"),l=t("DocsGroupTable"),p=t("DocsLinkCard");return r(),d("div",null,[E,u,e(n),g,e(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Optional":{"active":true,"data":[{"name":"<code>--direction</code> ^lt;asc,desc^gt;","default":"<code>\\"desc\\"</code> ","desc":"排序方向"},{"name":"<code>--state</code> ^lt;open,progressing,closed,rejected^gt;","default":"<code>\\"open\\"</code> ","desc":"issue 状态"},{"name":"<code>--labels</code> ^lt;label(separator ,)^gt;","default":"","desc":"标签过滤"},{"name":"<code>--page</code> ^lt;num^gt;","default":"<code>\\"1\\"</code> ","desc":"目标页码"},{"name":"<code>--per_page</code> ^lt;num^gt;","default":"<code>\\"20\\"</code> ","desc":"每页数据量"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,e(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--title</code> ^lt;title^gt;","default":"","desc":"issue 标题"},{"name":"<code>--owner</code> ^lt;path^gt;","default":"","desc":"所属空间地址 (企业名ownerPath/RepoPath)"}]},"Optional":{"active":true,"data":[{"name":"<code>--body</code> ^lt;str^gt;","default":"","desc":"issue 内容 (支持 markdown)"},{"name":"<code>--repo</code>, <code>-r</code>","default":"","desc":""},{"name":"<code>--type</code> ^lt;issue_type^gt;","default":"","desc":"自定义 issue 类型(非企业默认 issue 类型为“任务”)"},{"name":"<code>--assignee</code> ^lt;user_login^gt;","default":"","desc":"issue 负责人"},{"name":"<code>--collaborators</code> ^lt;user_login(separator ,)^gt;","default":"","desc":"issue 协助者"},{"name":"<code>--milestone</code> ^lt;id^gt;","default":"","desc":"里程碑 ID"},{"name":"<code>--labels</code> ^lt;label(separator ,)^gt;","default":"","desc":"标签名"},{"name":"<code>--program</code> ^lt;id^gt;","default":"","desc":"项目 ID"}]},"$NotGroup":{"active":true,"data":[]}}'}),h,e(l,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--owner</code> ^lt;path^gt;","default":"","desc":"所属空间地址 (企业名ownerPath/RepoPath)"},{"name":"<code>--state</code> ^lt;open,progressing,closed^gt;","default":"","desc":"issue 状态"}]},"Optional":{"active":true,"data":[{"name":"<code>--title</code> ^lt;title^gt;","default":"","desc":"issue 标题"},{"name":"<code>--body</code> ^lt;str^gt;","default":"","desc":"issue 内容 (支持 markdown)"},{"name":"<code>--repo</code>, <code>-r</code>","default":"","desc":""},{"name":"<code>--type</code> ^lt;issue_type^gt;","default":"","desc":"自定义 issue 类型(非企业默认 issue 类型为“任务”)"},{"name":"<code>--assignee</code> ^lt;user_login^gt;","default":"","desc":"issue 负责人"},{"name":"<code>--collaborators</code> ^lt;user_login(separator ,)^gt;","default":"","desc":"issue 协助者"},{"name":"<code>--milestone</code> ^lt;id^gt;","default":"","desc":"里程碑 ID"},{"name":"<code>--labels</code> ^lt;label(separator ,)^gt;","default":"","desc":"标签名"},{"name":"<code>--program</code> ^lt;id^gt;","default":"","desc":"项目 ID"}]},"$NotGroup":{"active":true,"data":[]}}'}),C,e(p,null,{default:i(()=>[b]),_:1}),_])}const w=c(y,[["render",v]]);export{T as __pageData,w as default};