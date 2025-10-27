import { HOST, FILE_HOST } from "./host.js";

export default [
    {
        pid: 'goodExamples',
        name: '精选案例',
        name_en: 'Good Examples',
        children: [
            {
                id: 'test',
                name: '闲鱼出售-点击购买',
                tag: '闲鱼链接',
                author: 'z2586300277',
                githubUrl: 'https://www.goofish.com/personal?userId=2885508577',
                openUrl: 'https://www.goofish.com/personal?userId=2885508577',
                image: "https://z2586300277.github.io/3d-file-server/images/threeCesiumExamples.jpg",
                referUrl: 'https://pan.quark.cn/s/201da5c82fec',
                links: [
                    {
                        name: '📖说明文档',
                        url: 'https://z2586300277.github.io/blog/'
                    },
                    {
                        name: '📺讲解视频',
                        url: 'https://www.bilibili.com/video/BV1F6LLzKEqw/'
                    },

                ],

            },
            {
                id: 'help',
                name: '远程技术(问题、bug)咨询解决',
                tag: '支持帮助',
                author: 'z2586300277',
                openUrl:  HOST + 'images/wx_star.png',
                image: HOST + 'images/wx_star.png',
            },
            // {
            //     id: 'the ship',
            //     name: '免费',
            //     tag: '免费',
            //     tip: '船似浮萍海上漂',
            //     author: 'nico',
            //     githubUrl: 'https://m.tb.cn/h.6z2jhUy?tk=4wkSVp5dLzW ',
            //     // openUrl: 'https://nicowebgl.cn/bolt/ocean/',
            //     openUrl: 'https://z2586300277.github.io/three-cesium-examples/#/codeMirror?navigation=ThreeJS&classify=application&id=phy,ocean',
            //     image: HOST + 'images/nico_wx.jpg',
            //     // referUrl: 'https://pan.quark.cn/s/201da5c82fec',
            // },
            {
                id: 'the ship 2',
                name: '赞赏时留言购买',
                tag: '100元',
                tip: '船的航行仿真',
                author: 'nico',
                githubUrl: HOST + 'images/nico_wx.jpg',
                openUrl: 'https://z2586300277.github.io/show-site/shipProject/#/ocean',
                image: HOST + 'images/ship.png',
                // referUrl: 'https://pan.quark.cn/s/201da5c82fec',
            }

        ]

    }
]
