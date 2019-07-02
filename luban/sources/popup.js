//获取background页面,popup与background通信
var bg = chrome.extension.getBackgroundPage();
// 页面加载完成
$(document).ready(function(){  
    // 判断是否存在
    if(bg){
        $("#i_status").text(bg.status_text);
        if(bg.status_text == bg.status_lable.start){
            $("#btn_switch").text("停止规则监控");
        }else{
            $("#btn_switch").text("开启规则监控");
        }
    } 
    
    // 开启规则监控
    $("#btn_switch").click(function(){
        //更新后台数据
        if(bg.status_text == bg.status_lable.start){
            bg.status_text = bg.status_lable.close;
            $("#btn_switch").text("开启规则监控");
        }else{
            bg.status_text = bg.status_lable.start;
            $("#btn_switch").text("停止规则监控");  
        }
        $("#i_status").text(bg.status_text);
    });

});