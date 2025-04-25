import { HOST } from "./host.js"

// 企业可根据自己的需求修改url 成自己的导航地址 链接
export default {
    site: {
        name: '3D Market',
        url: 'https://threejs.org/',
        logo: HOST + 'files/site/logo.png',
        footName: '- Home',
        footLink: HOST
    },
    links: [

        {
            name: '🏠Official',
            url: 'https://openthree.github.io/three-official-examples'
        },

        {
            name: '💎WebGL',
            url: 'https://openthree.github.io/three-cesium-examples/'
        },
        {
            name: '🍏Editor',
            url: 'https://z2586300277.github.io/threejs-editor/'
        },
        {
            name: '🔥WebGPU',
            url: 'https://openthree.github.io/webgpu'
        },
        {
            name: '🍃OpenThree',
            url: 'https://openthree.github.io/three-cesium-links/'
        }

    ]
}