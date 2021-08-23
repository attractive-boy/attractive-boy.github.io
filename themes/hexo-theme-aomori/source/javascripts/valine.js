;(function () {
    if (window.aomori.valine && window.aomori.valine.enable) {
        var emojiMap = new Object();
        for (let i = 0; i <= 112; i++) {
            var key = "img" + i;
            var value = i + ".png";
           emojiMap[key] = value;
        }

        new Valine({
            el: '#valine-container',
            appId: window.aomori.valine.appId,
            appKey: window.aomori.valine.appKey,
            placeholder: "说点什么吧宝贝~",
            avatar: "",
            enableQQ: true,
            requiredFields: ['nick','mail'],
            // 设置小蓝表情包地址
            emojiCDN: 'https://index.attractiveboy.top/picture/blue_and_friends/', 
            // 表情title和图片映射
            emojiMaps: emojiMap,
        })
    }
})()