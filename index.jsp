<%@ page contentType="text/html" %>
<%@ page pageEncoding = "utf-8" %>

<%   String music = request.getParameter("music");
     String pic = request.getParameter("pic");
     String onOrOff=request.getParameter("R");
     if(music==null) music = "";
//      if(pic==null)   pic = "./images/background1.png";
     if(onOrOff==null) onOrOff = "off";
%>

<html>
<head>
<title>快捷应用</title>
    <script src="./js/particles.min.js"></script>
    <style type="text/css">
        #particles-js {
            z-index: -1;
            position: absolute;
            top: 0;
            height: 150%;
            width: 100%;
            background: #090909;
        }
    </style>
    <style>
    .se{
    color:black;
    }
    </style>
<link rel="stylesheet" type="text/css" href="./css/1.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>

<div id="particles-js"></div>
<!--<embed src="./music/something.mp3" hidden=true loop=true>-->
<!--<div class="container">-->
<div class="left">
<p>本站功能:</p>

    <form action=""  method=post>
        <b><span color=white>选择音乐:</span><br>
            <select class="se" name="music" >
                <Option selected value="gentleman.m4a" class="se">Gentleman</option>
                <Option value="something just like this.m4a">Something Just Like This</option>
                <Option value="Yesterday once more.m4a">Yesterday Once More</option>
            </select>
            <input type="radio" name="R" value="on" /><span color=white>打开</span>
            <input type="radio" name="R" value="off" /><span color=white>关闭</span>
            <input class="se" type="submit"  name="submit" value="提交" />
    </form>
    <%   if(onOrOff.equals("on")) {
    %>       <br><embed src="./music/<%= music %>" hidden="true" />
    <%   }
    %>
  </div>


<div class="right">
<p>认识我:</p>

<div class="wangzhankapian hvr-float" onclick="window.open('https://github.com/w-x-x-w/')">
    <div class="wangzhantubiao"><img src="./images/github.ico"></div>
    <div class="wangzhanmingcheng">
        <span>w-x-x-w</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://gitee.com/w-_-x/')">
    <div class="wangzhantubiao"><img src="./images/gitee.ico"></div>
    <div class="wangzhanmingcheng">
        <span>w-_-x</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('#')">
    <div class="wangzhantubiao"><img src="./images/favicon.ico"></div>
    <div class="wangzhanmingcheng">
        <span>why to do</span>
    </div>
</div>

</div>

<div class="biggest">

<!--网站合集-->
<div class="set">
<p>网站合集：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('https://spcqwserdvymm.com.vika.cn/share/shryNwH3HRgvzMTaZVAGx/fodkuzz5eaw0w')">
    <div class="wangzhantubiao"><img src="./images/shoucangjia.png"></div>
    <div class="wangzhanmingcheng">
        <span>收藏夹</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://hao.uisdc.com/')">
    <div class="wangzhantubiao"><img src="./images/youshedaohang.ico"></div>
    <div class="wangzhanmingcheng">
        <span>优设导航</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('http://www.hippter.com/')">
    <div class="wangzhantubiao"><img src="./images/hippter.ico"></div>
    <div class="wangzhanmingcheng">
        <span>HiPPTer</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.seeseed.com/')">
    <div class="wangzhantubiao"><img src="./images/seeseed.png"></div>
    <div class="wangzhanmingcheng">
        <span>seeseed</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://xiangjianan.gitee.io/lks/')">
    <div class="wangzhantubiao"><img src="./images/lks.ico"></div>
    <div class="wangzhanmingcheng">
        <span>LKs</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://uigradients.com/#BackToEarth')">
    <div class="wangzhantubiao"><img src="./images/jianbianse.png"></div>
    <div class="wangzhanmingcheng">
        <span>渐变色</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.itab.link/')">
    <div class="wangzhantubiao"><img src="./images/itab.ico"></div>
    <div class="wangzhanmingcheng">
        <span>iTab</span>
    </div>
</div>

</div>
<!--网站合集结束！-->

<!--音频-->
<div class="set">
<p>音频：</p>
<div class="wangzhankapian hvr-grow-shadow" onclick="window.open('https://www.bilibili.com/')">
    <div class="wangzhantubiao"><img src="./images/bilibili.ico"></div>
    <div class="wangzhanmingcheng">
        <span>哔哩哔哩</span>
    </div>
</div>

<div class="wangzhankapian hvr-grow" onclick="window.open('https://v.qq.com/')">
    <div class="wangzhantubiao"><img src="./images/tengxunshipin.ico"></div>
    <div class="wangzhanmingcheng">
        <span>腾讯视频</span>
    </div>
</div>

<div class="wangzhankapian hvr-shrink" onclick="window.open('https://www.iqiyi.com/')">
    <div class="wangzhantubiao"><img src="./images/iqiyi.ico"></div>
    <div class="wangzhanmingcheng">
        <span>爱奇艺</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://y.qq.com/')">
    <div class="wangzhantubiao"><img src="./images/qqmusic.ico"></div>
    <div class="wangzhanmingcheng">
        <span>QQ音乐</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://music.163.com/')">
    <div class="wangzhantubiao"><img src="./images/wangyiyun.ico"></div>
    <div class="wangzhanmingcheng">
        <span>网易云</span>
    </div>
</div>

</div>
<!--音频结束！-->

<!--编程-->
<div class="set">
<p>编程：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('https://github.com/')">
    <div class="wangzhantubiao"><img src="./images/github.ico"></div>
    <div class="wangzhanmingcheng">
        <span>Github</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://gitee.com/')">
    <div class="wangzhantubiao"><img src="./images/gitee.ico"></div>
    <div class="wangzhanmingcheng">
        <span>Gitee</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.runoob.com/')">
    <div class="wangzhantubiao"><img src="./images/cainiao.ico"></div>
    <div class="wangzhanmingcheng">
        <span>菜鸟教程</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.code-nav.cn/')">
    <div class="wangzhantubiao"><img src="./images/bianchengdaohang.png"></div>
    <div class="wangzhanmingcheng">
        <span>编程导航</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://taihu.ipieuvre.com/#/stu/classAPractice')">
    <div class="wangzhantubiao"><img src="./images/dashuju.png"></div>
    <div class="wangzhanmingcheng">
        <span>实训平台</span>
    </div>
</div>


<div class="wangzhankapian hvr-float" onclick="window.open('https://www.csdn.net/')">
    <div class="wangzhantubiao"><img src="./images/csdn.ico"></div>
    <div class="wangzhanmingcheng">
        <span>CSDN</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.aliyun.com/')">
    <div class="wangzhantubiao"><img src="./images/aliyun.ico"></div>
    <div class="wangzhanmingcheng">
        <span>阿里云</span>
    </div>
</div>

</div>
<!--编程结束！-->

<!--学务-->
<div class="set">
<p>学务：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('http://i.chaoxing.com/base?t=1645505215073')">
    <div class="wangzhantubiao"><img src="./images/xuexitong.jpg"></div>
    <div class="wangzhanmingcheng">
        <span>学习通</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://moocs.unipus.cn/')">
    <div class="wangzhantubiao"><img src="./images/waiyumuke.ico"></div>
    <div class="wangzhanmingcheng">
        <span>外语慕课</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://icc.hep.com.cn/')">
    <div class="wangzhantubiao"><img src="./images/icc.png"></div>
    <div class="wangzhanmingcheng">
        <span>数学建模</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://ehall.scuec.edu.cn/new/index.html?browser=no')">
    <div class="wangzhantubiao"><img src="./images/zhongnanminda.png"></div>
    <div class="wangzhanmingcheng">
        <span>信息门户</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('http://xk.scuec.edu.cn/xsxk/index.xk')">
    <div class="wangzhantubiao"><img src="./images/general.png"></div>
    <div class="wangzhanmingcheng">
        <span>选课系统</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.chsi.com.cn/')">
    <div class="wangzhantubiao"><img src="./images/xuexinwang.ico"></div>
    <div class="wangzhanmingcheng">
        <span>学信网</span>
    </div>
</div>

</div>
<!--学务结束！-->

<!--比赛-->
<div class="set">
<p>比赛：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('http://lx.lanqiao.cn/')">
    <div class="wangzhantubiao"><img src="./images/lanqiaobei.ico"></div>
    <div class="wangzhanmingcheng">
        <span>蓝桥杯</span>
    </div>
</div>


<div class="wangzhankapian hvr-float" onclick="window.open('https://www.tipdm.org/')">
    <div class="wangzhantubiao"><img src="./images/tipdm.png"></div>
    <div class="wangzhanmingcheng">
        <span>泰迪杯</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://leetcode-cn.com/')">
    <div class="wangzhantubiao"><img src="./images/likou.ico"></div>
    <div class="wangzhanmingcheng">
        <span>力扣</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://pintia.cn/home')">
    <div class="wangzhantubiao"><img src="./images/pta.ico"></div>
    <div class="wangzhanmingcheng">
        <span>PTA</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.acwing.com/')">
    <div class="wangzhantubiao"><img src="./images/acwing.ico"></div>
    <div class="wangzhanmingcheng">
        <span>AcWing</span>
    </div>
</div>

</div>
<!--比赛结束！-->

<!--Python常用库文档-->
<div class="set">
<p>Python库：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('https://tensorflow.google.cn/tutorials/images/cnn?hl=zh_cn')">
    <div class="wangzhantubiao"><img src="./images/tensorflow.ico"></div>
    <div class="wangzhanmingcheng">
        <span>TensorFlow</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://matplotlib.org/stable/tutorials/index.html')">
    <div class="wangzhantubiao"><img src="./images/matplotlib.ico"></div>
    <div class="wangzhanmingcheng">
        <span>Matplotlib</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.matplotlib.org.cn/tutorials/')">
    <div class="wangzhantubiao"><img src="./images/matplotlibzhongwen.png"></div>
    <div class="wangzhanmingcheng">
        <span>Matplotlib<br>(中文)</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://github.com/PySimpleGUI/PySimpleGUI')">
    <div class="wangzhantubiao"><img src="./images/pysimple.png"></div>
    <div class="wangzhanmingcheng">
        <span>PySimple<br>GUI</span>
    </div>
</div>

</div>
<!--Python常用库文档！-->

<!--工具-->
<div class="set">
<p>工具：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('https://fanyi.baidu.com/')">
    <div class="wangzhantubiao"><img src="./images/baidufanyi.ico"></div>
    <div class="wangzhanmingcheng">
        <span>百度翻译</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.processon.com/diagrams')">
    <div class="wangzhantubiao"><img src="./images/processon.ico"></div>
    <div class="wangzhanmingcheng">
        <span>ProcessOn</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://pearocr.com/#/')">
    <div class="wangzhantubiao"><img src="./images/pearocr.png"></div>
    <div class="wangzhanmingcheng">
        <span>PearOCR</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('http://ocrwiz.com/')">
    <div class="wangzhantubiao"><img src="./images/general.png"></div>
    <div class="wangzhanmingcheng">
        <span>识文精灵</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.json.cn/')">
    <div class="wangzhantubiao"><img src="./images/json.ico"></div>
    <div class="wangzhanmingcheng">
        <span>json解析</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://mail.qq.com/cgi-bin/frame_html?sid=up6KZlz3BGBz40wu&r=ebc72a3dc579725eb92a51a5a7d86b2f')">
    <div class="wangzhantubiao"><img src="./images/qqmail.ico"></div>
    <div class="wangzhanmingcheng">
        <span>QQ邮箱</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://unbug.github.io/codelf/')">
    <div class="wangzhantubiao"><img src="./images/codelf.png"></div>
    <div class="wangzhanmingcheng">
        <span>CODELF</span>
    </div>
</div>

</div>
<!--工具结束！-->

<!--技术文档-->
<div class="set">
<p>学习文档：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('https://pdai.tech/')">
    <div class="wangzhantubiao"><img src="./images/java.ico"></div>
    <div class="wangzhanmingcheng">
        <span>Java全栈</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://github.com/facert/awesome-spider')">
    <div class="wangzhantubiao"><img src="./images/github.ico"></div>
    <div class="wangzhanmingcheng">
        <span>爬虫集合</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.w3school.com.cn/')">
    <div class="wangzhantubiao"><img src="./images/w3school.png"></div>
    <div class="wangzhanmingcheng">
        <span>Web+编程</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://www.lxlinux.net/')">
    <div class="wangzhantubiao"><img src="./images/linux.png"></div>
    <div class="wangzhanmingcheng">
        <span>Linux指令</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://developer.mozilla.org/zh-CN/docs/Learn/HTML')">
    <div class="wangzhantubiao"><img src="./images/web.ico"></div>
    <div class="wangzhanmingcheng">
        <span>Web开发</span>
    </div>
</div>

</div>
<!--技术学习文档结束！-->

<!--资源-->
<div class="set">
<p>资源：</p>
<div class="wangzhankapian hvr-float" onclick="window.open('https://www.52pojie.cn/')">
    <div class="wangzhantubiao"><img src="./images/52pojie.ico"></div>
    <div class="wangzhanmingcheng">
        <span>吾爱破解</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('http://www.dayanzai.me/')">
    <div class="wangzhantubiao"><img src="./images/dayanzai.ico"></div>
    <div class="wangzhanmingcheng">
        <span>大眼仔</span>
    </div>
</div>

<div class="wangzhankapian hvr-float" onclick="window.open('https://wallhaven.cc/')">
    <div class="wangzhantubiao"><img src="./images/wallhaven.ico"></div>
    <div class="wangzhanmingcheng">
        <span>Wallhaven</span>
    </div>
</div>

</div>
<!--资源结束！-->

<div class="set">
<p>本站资源：</p>

  <div margin-top=50px class="wangzhankapian hvr-float" onclick="window.open('./html/masaike.html')">
  <div class="wangzhantubiao"><img src="./images/masaike.png"></div>
  <div class="wangzhanmingcheng">
      <span>图片马赛克</span>
  </div>
  </div>

</div>
<!--本站资源结束！-->

</div>
<!--biggest-div 结束！-->

</body>
<script src="./js/lizi.js"></script>

</html>