import{_ as r,C as o,o as c,c as d,H as a,w as y,k as s,a as l,Y as t}from"./chunks/framework.98e11516.js";const D=JSON.parse('{"title":"x gh repo file","description":"x gh repo file | x-cmd module | 仓库文件管理","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gh repo file | x-cmd"}],["meta",{"name":"og:description","content":"仓库文件管理"}],["meta",{"name":"description","content":"x gh repo file | x-cmd module | 仓库文件管理"}]]},"headers":[],"relativePath":"mod/gh/repo-file.md","filePath":"mod/gh/repo-file.md"}'),i={name:"mod/gh/repo-file.md"},E=s("h1",{id:"x-gh-repo-file",tabindex:"-1"},[l("x gh repo file "),s("a",{class:"header-anchor",href:"#x-gh-repo-file","aria-label":'Permalink to "x gh repo file"'},"​")],-1),h=s("p",{class:"x-desc"},"仓库文件管理",-1),g=t('<h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><p>罗列仓库根目录的文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>罗列仓库指定目录 &lt;dir&gt; 的文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">di</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">di</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>上传本地 &lt;base_file_path&gt; 文件到 &lt;owner/repo&gt; github 仓库默认分支的 &lt;target_file_path&gt;</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upload</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commi</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--file</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">base_file_pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">target_file_pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upload</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--message</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commi</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--file</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">base_file_pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">target_file_pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-gh-repo-file-ls">x gh repo file ls</a></td><td>罗列仓库目录的文件</td></tr><tr><td><a href="#x-gh-repo-file-tree">x gh repo file tree</a></td><td>罗列仓库目录的文件树</td></tr><tr><td><a href="#x-gh-repo-file-upload">x gh repo file upload</a></td><td>上传文件到仓库</td></tr><tr><td><a href="#x-gh-repo-file-download">x gh repo file download</a></td><td>从仓库下载文件</td></tr></tbody></table></div><h3 id="x-gh-repo-file-ls" tabindex="-1">x gh repo file ls <a class="header-anchor" href="#x-gh-repo-file-ls" aria-label="Permalink to &quot;x gh repo file ls&quot;">​</a></h3><p>罗列仓库目录的文件</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>最大罗列 1000 文件, 如果想罗列更多文件, 可以使用 <code>x gh repo file tree</code> 命令</p></div><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>仓库目录路径. 默认为根目录</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr><tr><td><code>--ref</code> &lt;refs&gt;</td><td></td><td>提交/分支/标签的名称. 默认使用默认分支</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gh-repo-file-tree" tabindex="-1">x gh repo file tree <a class="header-anchor" href="#x-gh-repo-file-tree" aria-label="Permalink to &quot;x gh repo file tree&quot;">​</a></h3><p>罗列仓库目录的文件树</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当使用递归参数时, 树数组的限制为 100,000 个, 最大为 7 MB.</p></div><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tree</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tree</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>目标 tree sha. 默认为仓库根目录</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--recursive</code></td><td>递归罗列目录的内容</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gh-repo-file-upload" tabindex="-1">x gh repo file upload <a class="header-anchor" href="#x-gh-repo-file-upload" aria-label="Permalink to &quot;x gh repo file upload&quot;">​</a></h3><p>上传文件到仓库</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upload</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upload</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>目标上传仓库路径</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul>',38),F=t('<ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><ul><li><strong>例子</strong> :</li></ul><p>上传本地 &lt;base_file_path&gt; 文件到 &lt;owner/repo&gt; github 仓库默认分支的 &lt;target_file_path&gt;</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upload</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">commi</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--file</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">base_file_pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">target_file_pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upload</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--message</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commi</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--file</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">base_file_pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">target_file_pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gh-repo-file-download" tabindex="-1">x gh repo file download <a class="header-anchor" href="#x-gh-repo-file-download" aria-label="Permalink to &quot;x gh repo file download&quot;">​</a></h3><p>从仓库下载文件</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">download</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">2&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">download</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">2&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>目标仓库文件路径</td></tr><tr><td><code>#2</code></td><td>下载到指定本地文件路径. (可选 下载到当前目录)</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul>',12),u=t('<ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--yes</code>, <code>-y</code></td><td>忽略命令行覆盖拦截提示</td></tr></tbody></table></div><br>',3),b=s("h2",{id:"相关链接",tabindex:"-1"},[l("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),C=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[l("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),l(" 获取补全信息")]),s("p",null,[l("运行 "),s("code",null,"CMD SUBCOMMAND --help"),l(" 可以获取命令的更多信息")])],-1);function f(_,v,m,B,x,k){const p=o("AdsContent"),e=o("DocsGroupTable"),n=o("DocsLinkCard");return c(),d("div",null,[E,h,a(p),g,a(e,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"},{"name":"<code>--file</code> ^lt;path^gt;","default":"","desc":"上传本地文件路径"},{"name":"<code>--message</code> ^lt;str^gt;","default":"","desc":"提交信息"}]},"Optional":{"active":true,"data":[{"name":"<code>--branch</code> ^lt;name^gt;","default":"","desc":"分支名称. 默认使用默认分支"}]},"$NotGroup":{"active":true,"data":[]}}'}),F,a(e,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"}]},"Optional":{"active":true,"data":[{"name":"<code>--ref</code> ^lt;refs^gt;","default":"","desc":"提交/分支/标签的名称. 默认使用默认分支"},{"name":"<code>--endpoint</code> ^lt;url^gt;","default":"<code>\\"https://raw.githubusercontent.com\\"</code> ","desc":"下载的 URL endpoint. 提供私有部署"}]},"$NotGroup":{"active":true,"data":[]}}'}),u,a(n,null,{default:y(()=>[b]),_:1}),C])}const w=r(i,[["render",f]]);export{D as __pageData,w as default};