import{aw as s,q as i,p as a,aS as n}from"./chunks/framework.D2i5q5tO.js";const c=JSON.parse('{"title":"命令模式：封装操作为对象的强大技术","description":"","frontmatter":{},"headers":[],"relativePath":"Python/系列文章/23种设计模式/命令模式：封装操作为对象的强大技术.md","filePath":"Python/系列文章/23种设计模式/命令模式：封装操作为对象的强大技术.md","lastUpdated":1718006042000}'),l={name:"Python/系列文章/23种设计模式/命令模式：封装操作为对象的强大技术.md"},t=n(`<h1 id="命令模式-封装操作为对象的强大技术" tabindex="-1">命令模式：封装操作为对象的强大技术 <a class="header-anchor" href="#命令模式-封装操作为对象的强大技术" aria-label="Permalink to &quot;命令模式：封装操作为对象的强大技术&quot;">​</a></h1><p>在软件工程中，命令模式是一种行为型设计模式，它将一个请求或简单操作封装成一个对象。这种模式允许用户根据不同的请求对用户进行参数化处理，同时使得请求排队或记录请求日志以及支持可撤销的操作成为可能。本文将详细介绍命令模式的定义、实现、应用场景以及优缺点。 <img src="https://img-blog.csdnimg.cn/direct/351affcf0c274e8788797201e2b6d3da.webp#pic_center" alt="在这里插入图片描述"></p><h2 id="_1-命令模式的定义" tabindex="-1">1. 命令模式的定义 <a class="header-anchor" href="#_1-命令模式的定义" aria-label="Permalink to &quot;1. 命令模式的定义&quot;">​</a></h2><p>命令模式（Command Pattern）使得你可以将操作封装成对象，从而让你将不同的请求、队列或日志请求以及支持撤销操作的功能嵌入到客户端中。在命令模式中，一个中心化的调用者（Invoker）调用命令对象执行操作，命令对象则封装了接收者（Receiver），即实际执行操作的对象。</p><h2 id="_2-实现命令模式" tabindex="-1">2. 实现命令模式 <a class="header-anchor" href="#_2-实现命令模式" aria-label="Permalink to &quot;2. 实现命令模式&quot;">​</a></h2><p>在Python中，实现命令模式通常涉及定义命令接口，具体命令类以及一个或多个接收者。以下是命令模式的简单实现示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> abc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ABC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, abstractmethod</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ABC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;命令抽象类&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @abstractmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Light</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;接收者类，真正执行命令的类&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> turn_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The light is on&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> turn_off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The light is off&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TurnOnCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;具体命令类，执行开灯的操作&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, light):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._light </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> light</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._light.turn_on()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TurnOffCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;具体命令类，执行关灯的操作&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, light):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._light </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> light</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">._light.turn_off()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RemoteControl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;调用者类，通过它来调用命令&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> submit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, command):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        command.execute()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 客户端代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">light </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Light()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn_on_command </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TurnOnCommand(light)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn_off_command </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TurnOffCommand(light)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RemoteControl()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote.submit(turn_on_command)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote.submit(turn_off_command)</span></span></code></pre></div><h2 id="_3-命令模式的应用实例" tabindex="-1">3. 命令模式的应用实例 <a class="header-anchor" href="#_3-命令模式的应用实例" aria-label="Permalink to &quot;3. 命令模式的应用实例&quot;">​</a></h2><p>命令模式广泛应用于各种场景，尤其适用于：</p><ul><li><strong>用户界面按钮和菜单项</strong>：每个按钮和菜单项都可以是一个命令对象。</li><li><strong>操作历史</strong>：支持撤销和重做操作。</li><li><strong>事务行为</strong>：用于实现事务型行为，如数据库的事务管理。</li></ul><h2 id="_4-优点和缺点" tabindex="-1">4. 优点和缺点 <a class="header-anchor" href="#_4-优点和缺点" aria-label="Permalink to &quot;4. 优点和缺点&quot;">​</a></h2><h3 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h3><ul><li>降低系统的耦合度。</li><li>增强了系统的灵活性和可扩展性。</li></ul><h3 id="缺点" tabindex="-1">缺点： <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点：&quot;">​</a></h3><ul><li>可能导致某些系统有过多的具体命令类。</li></ul><h2 id="_5-总结" tabindex="-1">5. 总结 <a class="header-anchor" href="#_5-总结" aria-label="Permalink to &quot;5. 总结&quot;">​</a></h2><p>命令模式是一种非常有用的设计模式，适用于需要对操作进行参数化、记录操作日志以及实现操作撤销和恢复的场景。通过正确使用命令模式，可以有效地管理复杂的操作和请求。</p>`,17),h=[t];function p(k,e,r,d,E,o){return a(),i("div",null,h)}const y=s(l,[["render",p]]);export{c as __pageData,y as default};
