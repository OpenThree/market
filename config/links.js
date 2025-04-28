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
            name: '🔥Three',
            url: 'https://openthree.github.io/three-cesium-examples/'
        },
        {
            name: '🌐Cesium',
            url: 'https://jiawanlong.github.io/Cesium-Examples/examples/cesiumEx/examples.html'
        },
        {
            name: '🍃OpenThree',
            url: 'https://openthree.github.io/three-cesium-links/'
        }

    ]
}