import {defineConfig} from 'vitepress'

let nav_tmp = [
    {
        text: '主页', link: '/'
    },
]
export default defineConfig({
    title: "小欣要开心～",
    description: "小欣要开心～",
    base: '/',
    head: [
        // 我的logo
        ['script', {src: '/js/cpython666.js'}],
        // 星露谷物语的飞鸟
        ['script', {src: '/js/birdfly.js'}],


        // 鼠标拖尾
        ['script', {src: '/js/mouse-trail.js'}],
        // 引入自定义的 JavaScript 文件，前端反爬js文件
        // ['script', { src: '/js/fuckspider.js' }],
        [
            'link',
            {rel: 'icon', href: '/logo.svg'}
        ],
        // 点击彩虹
        // <!--鼠标点击特效-->
        // ['script', { type: "text/javascript", src: '/js/clickjs/meme.js' }],
        ['script', {type: "text/javascript", src: '/js/clickjs/anime.min.js'}],
        ['script', {type: "text/javascript", src: '/js/clickjs/fireworks.js'}],
        [
            'meta',
            {name: 'google-site-verification', content: '0QTiVl6hixpkg_fJQSKH37g9Y5iqklaWYFXJRt20CgU'}
        ],
        [
            'meta',
            {name: 'referrer', content: 'no-referrer'}
        ],
        [
            'script',
            {},
            `
      function runtime(){
        // 初始时间，日/月/年 时:分:秒
        X = new Date("10/23/2024 15:32:00");
        Y = new Date();
        T = (Y.getTime()-X.getTime());
        M = 24*60*60*1000;
        a = T/M;
        A = Math.floor(a);
        b = (a-A)*24;
        B = Math.floor(b);
        c = (b-B)*60;
        C = Math.floor((b-B)*60);
        D = Math.floor((c-C)*60);
        //信息写入到DIV中
        document.getElementById("runtime").innerHTML = "与xiaoxin相识: "+"<font style='color:#FFA500;font-weight:bold'>"+A+"</font>"+"天"+"<font style='color:#8A2BE2;font-weight:bold'>"+B+"</font>"+"小时<font style='color:#1DBF97;font-weight:bold'>"+C+"</font>分<font style='color:#007EC6;font-weight:bold'>"+D+"</font>秒"
    }
    setInterval(runtime, 1000);
      `
        ],


    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo_super.svg',
        nav: nav_tmp,
        outline: [2, 3, 4],
        socialLinks: [
            // https://vitepress.dev/zh/reference/default-theme-config#sociallinks
            {
                icon: {
                    svg: '<?xml version="1.0" encoding="UTF-8"?><!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 194 199.5" id="图层_1" version="1.1" viewBox="0 0 194 199.5" x="0px" xml:space="preserve" y="0px">\n' +
                        '<g>\n' +
                        '\t<g id="change1_1"><path d="m37.7 0h118.6c20.8 0 37.7 17.4 37.7 38.8v121.9c0 21.4-16.9 38.8-37.7 38.8h-118.6c-20.8 0-37.7-17.4-37.7-38.8v-121.9c0-21.4 16.9-38.8 37.7-38.8z" fill="#170B1A"/></g>\n' +
                        '\t<g id="change2_1"><path d="m95.4 60.4c0.1-12.4 0-24.8 0.1-37.2h25c-0.1 2.2 0.2 4.4 0.5 6.5h-18.4v100.6c0.1 4.3-1 8.5-3 12.3-3.3 5.7-9.3 9.6-15.8 10.2-4.2 0.4-8.4-0.5-12-2.5-2.8-1.5-5.2-3.7-7-6.3 6.4 3.6 14.7 3.3 20.9-0.8 6-3.7 9.9-10.7 9.9-18-0.2-21.6-0.2-43.2-0.2-64.8zm41.3-7.1c3.5 2.2 7.4 3.9 11.4 4.8 2.4 0.5 4.8 0.8 7.3 0.8v5.7c-7.3-1.7-13.9-5.7-18.7-11.3z" fill="#25F4EE"/></g>\n' +
                        '\t<g id="change2_2"><path d="m50.9 83.5c8.9-5.8 19.5-8.1 30-6.5v6c-2.8 0.1-5.5 0.4-8.3 1-6.7 1.4-13 4.4-18.4 8.5-5.9 4.5-10.4 10.8-13.5 17.6-3 6.6-4.5 13.8-4.4 21.1 0 8 2.1 15.8 5.8 22.7 1.7 3.2 3.6 6.3 6.2 8.9-5.3-3.8-9.6-8.9-12.9-14.6-4.4-7.7-6.5-16.6-6.3-25.6 0.3-8.2 2.6-16.3 6.8-23.4 3.7-6.3 8.8-11.7 15-15.7z" fill="#25F4EE"/></g>\n' +
                        '\t<g id="change3_1"><path d="m102.6 29.9h18.5c0.6 3.6 2 7 3.6 10.3 2.6 5.1 6.3 9.6 11 12.5 0.3 0.2 0.6 0.5 0.8 0.8 4.9 5.7 11.4 9.6 18.7 11.3 0.1 6.6 0 13.3 0 19.9-12.4 0.1-24.4-3.8-34.4-11.1 0 15.8 0 31.7 0.1 47.5 0 2.1 0.1 4.2 0 6.4-0.6 7.7-2.9 15.3-6.7 22-3.2 5.8-7.7 10.9-13 15-6.9 5.1-15.1 8-23.7 8.3-4.3 0.1-8.7-0.1-12.9-1.1-6-1.3-11.6-3.8-16.6-7.4l-0.3-0.3c-2.5-2.5-4.6-5.6-6.3-8.8-3.7-6.8-5.8-14.6-5.8-22.6-0.1-7.2 1.4-14.4 4.4-20.9 3.1-6.8 7.8-13 13.6-17.5 5.5-4.2 11.9-7 18.6-8.5 2.7-0.6 5.5-0.9 8.3-1 0.1 2.5 0 5.1 0.1 7.5v12.9c-3.1-1.1-6.6-1.1-9.9-0.3-3.9 0.9-7.6 2.7-10.6 5.3-1.8 1.6-3.5 3.6-4.5 5.8-2 3.7-2.6 8.1-2.2 12.3 0.4 4.1 2.2 8 4.8 11.1 1.7 2.2 4 3.8 6.3 5.4 1.8 2.6 4.2 4.8 7 6.4 3.7 2 7.9 2.9 12 2.5 6.5-0.4 12.6-4.5 15.8-10.2 2.1-3.7 3.1-8 3-12.3 0.4-33.8 0.3-67.5 0.3-101.2z" fill="#fff"/></g>\n' +
                        '\t<g id="change4_1"><path d="m124 26.6c2.1 0.1 4.3 0 6.5 0 0 7.4 2.2 14.7 6.4 20.8 0.5 0.8 1.1 1.4 1.6 2.1-4.7-3-8.5-7.5-10.9-12.6-1.6-3.2-2.8-6.7-3.6-10.3zm33.8 35c2.4 0.5 4.7 0.8 7.2 0.8v25.7c-12.2 0.1-24.4-4.1-34.4-11.5v50.9c0.1 3.8-0.2 7.7-1.1 11.5-2.4 11.5-9 21.8-18.2 28.5-4.9 3.6-10.4 6.1-16.3 7.5-7.1 1.7-14.4 1.5-21.4-0.3-8.4-2.3-16-7-21.8-13.4 4.9 3.6 10.5 6.1 16.4 7.4 4.2 1 8.5 1.2 12.8 1.1 8.5-0.2 16.7-3.1 23.5-8.3 5.3-4 9.5-9.1 12.9-15 3.8-6.8 6.1-14.3 6.6-22 0.1-2.1 0.1-4.2 0-6.4-0.1-15.9-0.1-31.7-0.1-47.6 9.9 7.3 21.8 11.2 34.1 11.1-0.2-6.6-0.1-13.3-0.2-20z" fill="#FE2C55"/></g>\n' +
                        '\t<g id="change4_2"><path d="m83.1 83.1c2.5 0 5 0.1 7.5 0.4v26.3c-3.7-1.2-7.6-1.3-11.3-0.4-7.1 1.6-12.9 6.7-15.5 13.6-2.5 6.6-1.5 14.3 2.8 19.9-2.5-1.4-4.7-3.2-6.5-5.4-2.7-3.1-4.5-7-4.9-11.1-0.4-4.2 0.2-8.6 2.2-12.3 1.1-2.2 2.8-4.2 4.7-5.8 3.1-2.6 7.1-4.3 11-5.3 3.4-0.8 7-0.8 10.2 0.3v-12.9c-0.2-2.2-0.1-4.7-0.2-7.3z" fill="#FE2C55"/></g>\n' +
                        '</g>\n' +
                        '</svg>'
                    // svg: '<svg t="1711703428533" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4271" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="4272"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="4273"></path></svg>'
                },
                link: 'https://www.douyin.com/note/7451994504657177871'
            }

        ],

        // 编辑链接
        editLink: {
            pattern: "https://github.com/cpython666/cpython666.github.io", // 自己项目仓库地址
            text: "在 github 上编辑此页",
        },
        footer: {
            message: `本站收录内容源自互联网，不对其网站内容或交易负责。&ensp;|&ensp;如有内容侵犯权益，请联系站长删除相关内容！`,
            copyright: '<a href="https://space.bilibili.com/1909782963" target="_blank">Copyright © 2024 IT.Python斗罗</a>&ensp;|&ensp;<span id="runtime"></span>',
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        outlineTitle: "本页目录",
        lastUpdated: true,
        markdown: {
            lineNumbers: true,
            image: {
                // 默认禁用图片懒加载
                lazyLoading: true
            }
        },
        search: {
            provider: 'local'
        },
        // carbonAds: {
        //   code: '广告',
        //   placement: '广告'
        // }

    }
})
