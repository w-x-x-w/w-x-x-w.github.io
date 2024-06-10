import{a as v,e as C,A as k,p as m,q as y,t as l,K as g,aT as _,V as S}from"./chunks/framework.D2i5q5tO.js";function p(){return p=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(o[s]=t[s])}return o},p.apply(this,arguments)}var P={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(o){},onComplete:function(o){},preStringTyped:function(o,e){},onStringTyped:function(o,e){},onLastStringBackspaced:function(o){},onTypingPaused:function(o,e){},onTypingResumed:function(o,e){},onReset:function(o){},onStop:function(o,e){},onStart:function(o,e){},onDestroy:function(o){}},T=new(function(){function o(){}var e=o.prototype;return e.load=function(t,s,n){if(t.el=typeof n=="string"?document.querySelector(n):n,t.options=p({},P,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),i=r.length;if(i)for(var a=0;a<i;a+=1)t.strings.push(r[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var n=document.createElement("style");n.setAttribute(s,"true"),n.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var n=document.createElement("style");n.setAttribute(s,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},o}()),d=new(function(){function o(){}var e=o.prototype;return e.typeHtmlChars=function(t,s,n){if(n.contentType!=="html")return s;var r=t.substring(s).charAt(0);if(r==="<"||r==="&"){var i;for(i=r==="<"?">":";";t.substring(s+1).charAt(0)!==i&&!(1+ ++s>t.length););s++}return s},e.backSpaceHtmlChars=function(t,s,n){if(n.contentType!=="html")return s;var r=t.substring(s).charAt(0);if(r===">"||r===";"){var i;for(i=r===">"?"<":"&";t.substring(s-1).charAt(0)!==i&&!(--s<0););s--}return s},o}()),w=function(){function o(t,s){T.load(this,s,t),this.begin()}var e=o.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,s){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),i=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=d.typeHtmlChars(t,s,n);var a=0,u=t.substring(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var c=1;c+=(u=/\d+/.exec(u)[0]).length,a=parseInt(u),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,s)+t.substring(s+c),n.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(s+i).charAt(0)!=="`"&&(i++,!(s+i>t.length)););var h=t.substring(0,s),f=t.substring(h.length+1,s+i),b=t.substring(s+i+1);t=h+f+b,i--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),s>=t.length?n.doneTyping(t,s):n.keepTyping(t,s,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},a)},r):this.setPauseStatus(t,s,!0)},e.keepTyping=function(t,s,n){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substring(0,s+=n);this.replaceText(r),this.typewrite(t,s)},e.doneTyping=function(t,s){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,s)},this.backDelay))},e.backspace=function(t,s){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=d.backSpaceHtmlChars(t,s,n);var i=t.substring(0,s);if(n.replaceText(i),n.smartBackspace){var a=n.strings[n.arrayPos+1];n.stopNum=a&&i===a.substring(0,s)?s:0}s>n.stopNum?(s--,n.backspace(t,s)):s<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],s))},r)}else this.setPauseStatus(t,s,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,s,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=s},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},o}();const B=l("div",null,[l("img",{id:"index-logo",src:_})],-1),E=l("div",{id:"box-cursor"},[l("span",{id:"box"})],-1),O=[B,E],x={__name:"IndexPage",setup(o){const e=v(""),t=()=>{const i=document.querySelector("header"),a=document.querySelector("#big-bg");console.log(i.clientHeight);const u=i.clientHeight;console.log(u),a.style.height=`calc(100vh - ${u}px)`;const c=document.querySelector("#bg");c.style.height=`calc(100vh - ${u}px)`,console.log("背景图片高度",a.clientHeight)},s=["imgs/bg/small_1.jpg","imgs/bg/small_4.jpg","imgs/bg/small_5.jpg","imgs/bg/small_6.jpg","imgs/bg/small_7.jpg","imgs/bg/small_8.jpg","imgs/bg/small_9.jpg","imgs/bg/small_10.jpg","imgs/bg/small_11.jpg","imgs/bg/small_12.jpg","imgs/bg/small_13.jpg","imgs/bg/small_14.jpg","imgs/bg/small_15.jpg","imgs/bg/small_16.jpg","imgs/bg/small_17.jpg","imgs/bg/small_1.png","imgs/bg/small_2.png","imgs/bg/small_3.png","imgs/bg/small_4.png","imgs/bg/small_5.png"],n=()=>{const i=Math.floor(Math.random()*s.length);return s[i]},r=()=>{const i=n();e.value=i,console.log("改变了背景，",e.value)};return C(()=>{const i={strings:["漫漫星程，你我同行~^1000","星梦启航，代码笔记。^1000","让学习少走弯路，让工作得心应手!^1000","我于这喧嚣世界寻得`一方净土`，可我却已成净土所厌的喧嚣。^5000"],typeSpeed:150,showCursor:!0,cursorChar:"_🌟",loop:!0,loopCount:2};new w("#box",i),r(),t(),window.addEventListener("resize",t)}),k(()=>{window.removeEventListener("resize",t)}),(i,a)=>(m(),y("div",null,[l("div",{id:"bg",style:g({backgroundImage:`url(${e.value})`})},null,4),l("div",{id:"big-bg",style:g({backgroundImage:`url(${e.value})`})},O,4)]))}},L=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","sidebar":false},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1718006042000}'),j={name:"index.md"},A=Object.assign(j,{setup(o){return(e,t)=>(m(),y("div",null,[S(x)]))}});export{L as __pageData,A as default};
