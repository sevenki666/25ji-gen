function loadDefaultPhoto(){
	// Get Canvas
    var canvas = document.getElementById('photoDisplay');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function() {
        // Draw after loaded
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    img.src = './25logo_jp.png';

//---------download part---------
    var saveBtn = document.getElementById('saveBtn');
    // 为保存按钮添加点击事件
    saveBtn.addEventListener('click', function() {
        // 将Canvas内容转换为数据URL
        var dataURL = canvas.toDataURL('image/png');

        // 创建一个链接元素
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = '25logo.png';
        // 下载
        link.click();
    });
}

function download(selector){
    const canvas = document.querySelector(selector);

    // a tag
    const el = document.createElement('a');
    // 设置 href 为图片经过 base64 编码后的字符串，默认为 png 格式
    el.href = canvas.toDataURL();
    el.download = '25logo.png';
    // 创建一个点击事件并对 a 标签进行触发
    const event = new MouseEvent('click');
    el.dispatchEvent(event);
}