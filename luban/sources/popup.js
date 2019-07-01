
var status = { none:"初始化...",start:"守护中...",close:"已停服..." };
//获取background页面,popup与background通信
var bg = chrome.extension.getBackgroundPage();
if(bg){
    $(".btn").click(function(){
        if(!bg.flag.begin) {
            bg.flag.begin = 1;
            bg.flag.change = 1;
        } else {
            bg.flag.begin = 0;
            bg.flag.change = 1;
        }
    })
} 

// 页面加载完成
$(document).ready(function(){
    if(bg.flag.begin)
        $(".btn").html("选择完成");
    else
        $(".btn").html("开启规则监控"); 

        
    // 开启规则监控
    $("#btn_switch").click(function(){
        $("#i_status").text("守护中...");
    });

});