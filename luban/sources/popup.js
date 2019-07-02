//获取background页面,popup与background通信
var bg = chrome.extension.getBackgroundPage();
// 页面加载完成
$(document).ready(function(){  
    // 判断是否存在
    if(bg && bg.data){
        $("#i_status").text(bg.data.status);
        if(bg.data.status == bg.status_lable.start){
            $("#btn_switch").text("停止规则监控");
        }else{
            $("#btn_switch").text("开启规则监控");
        }
        if(bg.data.shop){
            //显示
            $("#shop_name").find("label").text(bg.data.shop.shop_name);
            $("#shop_phone").find("label").text(bg.data.shop.collect_tel);
            $("#shop_email").find("label").text(bg.data.shop.email);
            $("#shop_address").find("label").text(bg.data.shop.address);
        }        
    }
    
    // 开启规则监控
    $("#btn_switch").click(function(){
        //更新后台数据
        if(bg.data.status == bg.status_lable.start){
            bg.data.status = bg.status_lable.close;
            $("#btn_switch").text("开启规则监控");
        }else{
            bg.data.status = bg.status_lable.start;
            $("#btn_switch").text("停止规则监控");  
        }
        $("#i_status").text(bg.data.status);
    });

    //刷新popup
    window.setInterval(function(){
        // 扫描次数
        if(bg && bg.data && bg.data.times){
            $("#safe_times").text(bg.data.times);
        }

    },3 * 1000);

});