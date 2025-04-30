import { HOST, FILE_HOST } from "./host.js";

export default [
    {
        pid: 'goodExamples',
        name: '精选案例',
        name_en: 'Good Examples',
        children: [
            {
                id: 'test',
                name: '点击购买',
                tag: '1元',
                tip: '此案例是一个简单的开发者出售的示例',
                author: 'z2586300277',
                githubUrl: 'https://m.tb.cn/h.6lQpi4g?tk=A7vjVePK4zN ',
                openUrl: 'https://z2586300277.github.io/three-editor/dist/#/example',
                image: HOST + 'images/wx_star.png',
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
                // improver: 'Threejs',

            },
            {
                id: 'the ship',
                name: '免费',
                tag: '免费',
                tip: '船似浮萍海上漂',
                author: 'nico',
                githubUrl: 'https://m.tb.cn/h.6lQpi4g?tk=A7vjVePK4zN ',
                // openUrl: 'https://nicowebgl.cn/bolt/ocean/',
                openUrl: 'https://z2586300277.github.io/three-cesium-examples/#/codeMirror?navigation=ThreeJS&classify=application&id=phy,ocean',
                image: HOST + 'images/nico_wx.jpg',
                // referUrl: 'https://pan.quark.cn/s/201da5c82fec',
            },
            {
                id: 'the ship 2',
                name: '赞赏时留言购买',
                tag: '100元',
                tip: '船的航行仿真',
                author: 'nico',
                githubUrl: 'https://github.com/Nicolas-zn',
                openUrl: 'https://nicowebgl.cn/ocean_three/ocean/',
                image: HOST + 'images/nico_wx.jpg',
                // referUrl: 'https://pan.quark.cn/s/201da5c82fec',
            }

        ]

    }
]
