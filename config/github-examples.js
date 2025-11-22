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
            },
            {
                id: 'zhxq',
                name: '智慧小区',
                author: 'z2586300277',
                openUrl: HOST + 'zhxq/index.html',
                image: HOST + 'zhxq/index.png',
            },
            {
                id: 'jkpt',
                name: '监控平台',
                author: 'z2586300277',
                openUrl: HOST + 'jkpt/index.html',
                image: HOST + 'jkpt/index.png',
            },
            {
                id: 'digitalFarm',
                name: '智慧农场',
                name_en: 'digitalFarm',
                author: 'AUTO',
                githubUrl: 'https://github.com/gyrate/digitalFarm',
                openUrl: 'https://gyrate.github.io/digitalFarm/dist/index.html',
                image: 'https://z2586300277.github.io/three-cesium-examples/' + 'threeExamples/openSource/digitalFarm.jpg'
            },
            {
                id: 'digitalTraffic',
                name: '数字交通',
                name_en: 'Digital Traffic',
                author: 'AUTO',
                githubUrl: 'https://github.com/gyrate/digitalTraffic',
                openUrl: 'https://gyrate.github.io/digitalTraffic/dist/index.html#/index',
                image: 'https://z2586300277.github.io/three-cesium-examples/threeExamples/openSource/digitalTraffic.jpg'
            },
            {
                id: 'StationMonitor',
                name: '站点监控',
                name_en: 'Station Monitor',
                author: 'AUTO',
                openUrl: 'https://fengtianxi001.github.io/MF-StationMonitor/',
                githubUrl: 'https://github.com/fengtianxi001/MF-StationMonitor',
                image: 'https://z2586300277.github.io/three-cesium-examples/threeExamples/openSource/StationMonitor.jpg'
            },
            {
                id: 'feng_ji',
                name: '风机',
                name_en: 'Wind Turbine',
                author: 'AUTO',
                openUrl: 'https://fengtianxi001.github.io/MF-TurbineMonitor',
                githubUrl: 'https://github.com/fengtianxi001/MF-TurbineMonitor',
                image: FILE_HOST + 'images/fengji.jpg'
            },
            {
                id: 'numberFram',
                name: '数字农场',
                name_en: 'Number Fram',
                author: 'FFMMCC',
                githubUrl: 'https://gitee.com/fu-meichuan/digital-farmland',
                openUrl: 'https://coderfmc.github.io/three.js-demo/digital-farmland/#/carbon-neutral-bigscreen',
                image: 'https://coderfmc.github.io/three.js-demo/fmc-web-3d/img/智慧农田.png'
            },
            {
                id: "sc-datav",
                name: "四川3D地图",
                name_en: "SC DataV",
                author: "knight-L",
                openUrl: "https://knight-l.github.io/sc-datav/",
                githubUrl: "https://github.com/knight-L/sc-datav",
                image: 'https://z2586300277.github.io/three-cesium-examples/' + "threeExamples/openSource/scDatav.jpg",
            }

        ]

    }
]
