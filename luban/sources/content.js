// 定义店铺信息
var shop = {};
// 页面加载
(function(){
    $(document).ready(function(){
        var port = chrome.runtime.connect({name: "background"});
        port.onMessage.addListener(function(msg) {
            if(msg.status == status_lable.start){
                // todo
                monitor.shopMessge();
            }
        });
        
        // 请求处理信息
        window.setInterval(function(){
            port.postMessage({cmd: "monitor"});
        },5 * 1000);

        //获取店铺信息
        $.get("common/index/index", function(result){
            if(result){
                if(result.code == 0){
                    //读取成功
                    shop.address = result.data.address;
                    shop.email = result.data.email;
                    shop.collect_tel = result.data.collect_tel;
                    shop.shop_name = result.data.shop_name;
                    port.postMessage({cmd: "shop",data:shop});
                }
            }
        });
    });
})();
