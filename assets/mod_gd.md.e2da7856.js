import{_ as c,C as e,o as n,c as r,H as o,w as i,Y as t,k as a,a as s}from"./chunks/framework.98e11516.js";const B=JSON.parse('{"title":"x gd","description":"x gd | x-cmd module | cd 命令增强","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gd | x-cmd"}],["meta",{"name":"og:description","content":"cd 命令增强"}],["meta",{"name":"description","content":"x gd | x-cmd module | cd 命令增强"}]]},"headers":[],"relativePath":"mod/gd.md","filePath":"mod/gd.md"}'),h={name:"mod/gd.md"},g=t('<h1 id="x-gd" tabindex="-1">x gd <a class="header-anchor" href="#x-gd" aria-label="Permalink to &quot;x gd&quot;">​</a></h1><p class="x-desc">cd 命令增强</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>gd 就是 goto directory 的缩写，用于交互环境下，可以让你快速的跳转到你想要的目录。</p><p>类似z，autojump，gd会记录命令的历史，以及命令的执行次数，以此来计算目录的热度，并且提供了一系列的特殊语法，来实现文件夹往前往后的搜索式的跳转。</p><p>gd 模块的实现只依赖 shell/awk 以及 find， 不需要其它二进制依赖。</p><h2 id="c命令-alias-c-x-gd" tabindex="-1">c命令: <code>alias c=&#39;x gd&#39;</code> <a class="header-anchor" href="#c命令-alias-c-x-gd" aria-label="Permalink to &quot;c命令: `alias c=&#39;x gd&#39;`&quot;">​</a></h2><p>由于 gd 命令非常常用，在 x-cmd 加载后，我们会设置一个 gd 的 alias: alias c=&#39;x gd&#39; -- 因此用户只需要输入 <code>c</code>，而不需要输入 <code>x gd</code></p><p>无论在键位上、语义上还是与 <code>cd</code> 的命名匹配上，<code>gd</code> 是很好的选择；因此我才以此命名本模块，也在早期版本引入了 gd 这个alias；团队内部使用良久。</p><p>直到最近，我们在对比 <code>theme</code> 模块和 <code>oh-my-zsh</code> 时发现，<code>oh-my-zsh</code> 会设置 <code>alias gd=&#39;git diff&#39;</code>。我们不愿意影响 <code>gd</code> 用户，所以才放弃了 gd 这个 alias 设定。</p><p>但我们认为切换文件夹实在太常用，必须要找到一个好的别名:</p><ol><li><strong>直接替换 <code>cd</code></strong> 从来不是我们的选择: 为了更好的用户体验， gd 加入了大量的 magic 和交互，这导致了 gd 的行为并不与 cd 完全相同。直接替换会给使用了 cd 并以 <code>source</code> 方式加载的现有脚本引入额外的风险。</li><li>经过考虑，我决定 <code>c</code>，一方面，考虑到习惯了 <code>cd</code> 的用户很容易切换到 <code>c</code> 命令，另一方面，它更简单，比 cd 和 gd 还要短。</li></ol><p>注意，x-cmd 只会在交互模式（非运行脚本）下，才会在加载时引入这个 alias，毕竟这个模块是为交互场景设计。用户在编写脚本，应该使用 <code>cd</code>；如果需要使用本模块，请以 <code>x gd</code> 方式调用。</p><h2 id="尽力而为的一致" tabindex="-1">尽力而为的一致 <a class="header-anchor" href="#尽力而为的一致" aria-label="Permalink to &quot;尽力而为的一致&quot;">​</a></h2><p>设计上，虽然 gd 的行为与 cd 不完全一致，但也照顾原 cd 用户的习惯。以不提供任何参数时的表现为例:</p><ol><li>当用户输入 <code>cd</code>，此时会跳转到用户当前的 HOME 目录</li><li>当用户输入 <code>gd</code>，此时会打开一个候选列表，里面会根据历史和热度列举可能感兴趣的目录 -- 但不管如何，排第一永远都是 HOME 目录。用户如果想跳转回 HOME 目录，只需要 <code>gd</code> 后连击两次回车即可。</li></ol><h2 id="特殊符进行跳转" tabindex="-1">特殊符进行跳转 <a class="header-anchor" href="#特殊符进行跳转" aria-label="Permalink to &quot;特殊符进行跳转&quot;">​</a></h2><ol><li><code>:</code> 跳转: 在 shell 启动时，gd 会记录当前目录为启动目录；而 <code>gd :</code> 则是回到了启动目录。这在 IDE 里的终端非常有用，因为 IDE 的终端打开时默认为项目根目录，利用 <code>gd :</code> 快速回到项目的根目录。</li><li><code>...</code> 以及 <code>.../&lt;关键字&gt;</code>: 前者等同于 <code>../..</code>，后者则是往前找匹配到的目录，如果有多个，以交互方式给用户提供选项。</li></ol><h2 id="别名-以及-relm" tabindex="-1">别名 以及 relm <a class="header-anchor" href="#别名-以及-relm" aria-label="Permalink to &quot;别名 以及 relm&quot;">​</a></h2><p><code>:&lt;别名&gt;</code>: 用户可以对常用的目录起一个别名，进行快速跳转。</p><ol><li>根据系统的特点，我们已经对常用的目录提供了别名。例如可以通过 <code>gd :desk</code> 跳到当前用户的桌面目录。</li><li>我们把这个带别名的目录称之为 relm，用户不仅可以跳到 relm ，还能跳到 relm 内的目录。例如 <code>gd :desk/src</code> 能跳到当前用户的桌面中的src目录。</li><li>用户可以通过 <code>gd --relm -l</code> 来查看预定义和自定义的 relm。</li></ol><h2 id="关于常用目录计算" tabindex="-1">关于常用目录计算 <a class="header-anchor" href="#关于常用目录计算" aria-label="Permalink to &quot;关于常用目录计算&quot;">​</a></h2><p>当前设计，只是记录了使用 gd 切换的目录（ 只存储最近 500 次 ），以此生成建议列表。</p><p>相比 z 和 autojump，当前的 gd 在目录频率计算上等方面有相当不足之处，主要出于下面考虑:</p><ol><li>我们不想引入太多的计算复杂度，gd 应该可以在计算力较差的环境良好进行。</li><li>我们不确定是否引入外部文件索引，除了引入可能的文件依赖，更复杂的设计（额外的 bug），更重要还有隐私方面的顾虑。</li><li>我们暂时还没还清楚这个模块的最终定位，也不确定引入这些内容会是否利大于弊。所以转而先实现了确定性更高的功能。</li></ol><p>我们认为，利用历史记录，以及LRU策略，加上交互式搜索，应该能够达到较好的效果。</p><p>在未来，x-cmd 团队会谨慎根据实际使用的场景分析，逐步引入更复杂的设计。</p>',27),y=t('<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#929292;"> [FLAGS] [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#6C6C6C;"> [FLAGS] [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td></td></tr></tbody></table></div><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--help</code>, <code>-h</code></td><td>显示帮助文档</td></tr></tbody></table></div><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><p>尝试从历史记录中查找匹配的路径，进行跳转</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dir</span></span></code></pre></div><p>向后跳转一层目录，然后再向后跳转两层目录，最后向后跳转三层目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">..</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">...</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">....</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">..</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">...</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">....</span></span></code></pre></div><p>回到历史记录中的第三个目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span></span></code></pre></div><p>向后跳转，假设当前目录是 &#39;/aaa/bbb/ccc&#39;，会在 &#39;/aaa&#39; 和 &#39;/aaa/bbb&#39; 目录搜索和 &#39;x&#39; 相关的文件夹路径</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.../x</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.../x</span></span></code></pre></div><p>清空历史记录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--history</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--clear</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--history</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--clear</span></span></code></pre></div><h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2>',18),u=t('<h3 id="x-gd-b" tabindex="-1">x gd -b <a class="header-anchor" href="#x-gd-b" aria-label="Permalink to &quot;x gd -b&quot;">​</a></h3><p>往后搜索文件夹</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span></span></code></pre></div><h3 id="x-gd-f" tabindex="-1">x gd -f <a class="header-anchor" href="#x-gd-f" aria-label="Permalink to &quot;x gd -f&quot;">​</a></h3><p>往前搜索文件夹</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span></span></code></pre></div><h3 id="x-gd-history" tabindex="-1">x gd --history <a class="header-anchor" href="#x-gd-history" aria-label="Permalink to &quot;x gd --history&quot;">​</a></h3><p>历史记录管理</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--history</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">-H</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--history</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">-H</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--first</code></td><td></td><td>进入历史记录中的第三个路径</td></tr><tr><td><code>--rm</code></td><td></td><td>删除历史记录中指定路径</td></tr><tr><td><code>--head</code></td><td></td><td>将历史记录中的前几行打印到标准输出</td></tr><tr><td><code>--maxnum</code></td><td></td><td>设置存放历史记录的最大条数</td></tr><tr><td><code>--trim</code></td><td></td><td>去重历史记录</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--ls</code>, <code>-l</code></td><td>列出所有的历史路径</td></tr><tr><td><code>--clear</code>, <code>-c</code></td><td>清空历史记录</td></tr><tr><td><code>--load</code></td><td>从 <code>$___X_CMD_GD_HISTORY</code> 文件中加载历史记录</td></tr></tbody></table></div><h3 id="x-gd-relm" tabindex="-1">x gd --relm <a class="header-anchor" href="#x-gd-relm" aria-label="Permalink to &quot;x gd --relm&quot;">​</a></h3><p>relm 管理</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>--ls、--set、--get、--cd</code> 都不包含 <code>ws</code> 和 <code>git</code>，这两个是根据当前路径查找的</p></div><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--relm</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">-r</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--relm</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">-r</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--set</code> &lt;name&gt; &lt;path&gt;</td><td></td><td>设置自定义的 relm 目录</td></tr><tr><td><code>--get</code> &lt;name&gt;</td><td></td><td>获取指定的 relm 目录</td></tr><tr><td><code>--cd</code> &lt;name&gt;</td><td></td><td>去到指定的 relm 目录</td></tr><tr><td><code>--ws</code> &lt;path&gt;</td><td></td><td>去到当前路径下的工作区的根目录</td></tr><tr><td><code>--git</code> &lt;path&gt;</td><td></td><td>去到当前路径下的 .git 目录</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--ls</code>, <code>-l</code></td><td>列出预定义和自定义的 relm</td></tr></tbody></table></div><h3 id="x-gd-i" tabindex="-1">x gd -i <a class="header-anchor" href="#x-gd-i" aria-label="Permalink to &quot;x gd -i&quot;">​</a></h3><p>更改交互搜索的工具</p><ul><li><strong>子命令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-gd-i-pick">x gd -i pick</a></td><td>使用 x pick 进行交互搜索</td></tr><tr><td><a href="#x-gd-i-fzf">x gd -i fzf</a></td><td>使用 x fzf 进行交互搜索</td></tr></tbody></table></div><h3 id="x-gd-i-pick" tabindex="-1">x gd -i pick <a class="header-anchor" href="#x-gd-i-pick" aria-label="Permalink to &quot;x gd -i pick&quot;">​</a></h3><p>使用 x pick 进行交互搜索</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pick</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pick</span></span></code></pre></div><h3 id="x-gd-i-fzf" tabindex="-1">x gd -i fzf <a class="header-anchor" href="#x-gd-i-fzf" aria-label="Permalink to &quot;x gd -i fzf&quot;">​</a></h3><p>使用 x fzf 进行交互搜索</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fzf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fzf</span></span></code></pre></div><br>',38),b=a("h2",{id:"相关链接",tabindex:"-1"},[s("相关链接 "),a("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),E=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[s("在交互式终端中（如 zsh, bash ...），可以使用 "),a("kbd",null,"Tab"),s(" 获取补全信息")]),a("p",null,[s("运行 "),a("code",null,"CMD SUBCOMMAND --help"),s(" 可以获取命令的更多信息")])],-1);function m(F,x,C,v,k,_){const l=e("AdsContent"),d=e("DocsGroupTable"),p=e("DocsLinkCard");return n(),r("div",null,[g,o(l),y,o(d,{header:'["名称","描述"]',group:'{"$NotGroup":{"active":true,"data":[{"name":"<a href=\\"#x-gd-b\\">x gd -b</a>","desc":"往后搜索文件夹"},{"name":"<a href=\\"#x-gd-f\\">x gd -f</a>","desc":"往前搜索文件夹"},{"name":"<a href=\\"#x-gd-history\\">x gd --history</a>","desc":"历史记录管理"},{"name":"<a href=\\"#x-gd-relm\\">x gd --relm</a>","desc":"relm 管理"},{"name":"<a href=\\"#x-gd-i\\">x gd -i</a>","desc":"更改交互搜索的工具"}]}}'}),u,o(p,null,{default:i(()=>[b]),_:1}),E])}const q=c(h,[["render",m]]);export{B as __pageData,q as default};
