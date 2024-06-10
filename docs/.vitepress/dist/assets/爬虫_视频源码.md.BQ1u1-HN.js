import{aw as s,q as i,p as a,aS as n}from"./chunks/framework.D2i5q5tO.js";const o=JSON.parse('{"title":"一些视频的源码","description":"","frontmatter":{},"headers":[],"relativePath":"爬虫/视频源码.md","filePath":"爬虫/视频源码.md","lastUpdated":1718006042000}'),h={name:"爬虫/视频源码.md"},k=n(`<h1 id="一些视频的源码" tabindex="-1">一些视频的源码 <a class="header-anchor" href="#一些视频的源码" aria-label="Permalink to &quot;一些视频的源码&quot;">​</a></h1><h2 id="selenium自动做问卷星" tabindex="-1">Selenium自动做问卷星 <a class="header-anchor" href="#selenium自动做问卷星" aria-label="Permalink to &quot;Selenium自动做问卷星&quot;">​</a></h2><p>代码写的挺low的，哎，没时间优化了</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于之前自动化做问卷星的视频数据不错，很多人都要了代码。</p><p>但是我觉得那个代码写的特别烂，所以甚至我现在稍稍有些惭愧的感觉。</p><p>距离上一版代码到现在已经有许久许久时间了。</p><p>在这段时间中，爬虫技术在进步，我也同样在进步，虽然说我的技术还不是很厉害，但是这个自动做问卷星的优化思路其实我很早以前就有的，然后刚好再配合上最近发现的一个新技术实现一下。看看这能不能做出一个完美的脚本或者是软件。</p><p>使用的技术依旧是一个自动化工具叫做DrissionPage，代码思路就是首先自己创建一份问卷，所有的题型都加上，然后观察网页标签类名的分布规律，然后自动化去识别填写提交问卷。</p></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#导入相关库</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selenium.webdriver </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Chrome</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selenium.webdriver.chrome.options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Options</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sleep</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> selenium.webdriver.common.by </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> By</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> choice</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#问卷网址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.wjx.cn/vm/hKvbqcL.aspx&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#绕过问卷星的智能检测，将webdriver属性设置为undefined，不设置也不会错</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Options()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option.add_experimental_option(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;excludeSwitches&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;enable-automation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option.add_experimental_option(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;useAutomationExtension&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Chrome(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web.execute_cdp_cmd(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Page.addScriptToEvaluateOnNewDocument&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;source&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Object.defineProperty(navigator,&quot;webdriver&quot;,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{get</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">()=&gt;undefined}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#对页面进行请求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web.get(url)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置每个题目的选项列表</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#分别对每个题进行随机的，或者有倾向填充</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	qa_tmp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web.find_element(By.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XPATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//*[@id=&#39;div</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	answers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">qa_tmp.find_elements(By.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XPATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//div[@class=&#39;ui-radio&#39;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 生成随机选项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# [1,2,3,3,3,33,3,33,3,33,]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	answer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">choice(answers)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	answer.click()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">qa_tmp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web.find_element(By.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XPATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//*[@id=&#39;div4&#39;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">input_</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">qa_tmp.find_element(By.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XPATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">input_.send_keys(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Python 好啊！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#点击提交按钮</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web.find_element(By.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XPATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;//*[@id=&quot;ctlNext&quot;]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).click()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web.quit()</span></span></code></pre></div>`,5),p=[k];function t(l,e,E,r,d,g){return a(),i("div",null,p)}const F=s(h,[["render",t]]);export{o as __pageData,F as default};
