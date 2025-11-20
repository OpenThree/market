const HOST = window.FIX_HOST || (window.origin + window.location.pathname).replace(/\/index.html$/, '/')

const FILE_HOST = 'https://z2586300277.github.io/3d-file-server/' // 文件资源服务器

export { HOST, FILE_HOST }

/* 注 部署可将 资源全部下载 然后配置成自己的资源地址即可 */

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要加1
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${year}/${month}/${day}`;
if (localStorage.getItem('KNOWTIPMarket') != formattedDate) {
    const popup = document.createElement('div');
    const popupContent = document.createElement('div');
    const closeBtn = document.createElement('button');
    Object.assign(popup.style, {
        position: 'fixed',
        top: '180px',
        right: '20px',
        width: '250px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        display: 'none',
        userSelect: 'text',
        zIndex: '1000',
        transition: 'all 0.3s ease'
    });
    Object.assign(popupContent.style, {
        color: '#333',
        padding: '20px',
        position: 'relative'
    });
    popupContent.innerHTML = `
    <h3> 🏪Web前端三维可视化 </h3>
    <p> 此页可帮助开发者放置您出售的作品或者案例。🍃</p>
    <div>售卖链接（淘宝/咸鱼）或收款方式（微信/支付宝）请使用您个人的，完全免费🍀。</div>
    <p> 希望能帮助到所有三维可视化开发者在业余盈利 🍁</p>
    <div>作品添加方式： <a href="https://github.com/OpenThree/market" target="_blank">点击跳转</a> ✋</div>
    <p>问题咨询 : <a href="https://z2586300277.github.io/" target="_blank">优雅永不过时</a> 😊</p>
    <div>问题咨询 : <a href="https://nicowebgl.cn/" target="_blank">Nico</a> 😀</div>
`;
    Object.assign(closeBtn.style, {
        background: '#ffffff',
        border: 'none',
        fontSize: '24px',
        color: '#aaa',
        cursor: 'pointer',
        position: 'absolute',
        top: '10px',
        right: '10px'
    });
    closeBtn.textContent = '×';
    popup.appendChild(popupContent);
    popupContent.appendChild(closeBtn);
    document.body.appendChild(popup);
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'
        localStorage.setItem('KNOWTIPMarket', formattedDate)
    });
    popup.style.display = 'block';
}
