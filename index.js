function loadDefaultPhoto(){
	// Get Canvas
    var canvas = document.getElementById('photoDisplay');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function() {
        // Draw after loaded
        canvas.width = 637;
        canvas.height = 247;
        ctx.drawImage(img, 0, 0);
    };

    img.src = './images/25logo_jp.png';

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
