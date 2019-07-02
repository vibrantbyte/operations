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
        if(typeof(bg.data.email) == "undefined" || bg.data.email == ""){
            // todo
        }else{
            $("#txt_email").val(bg.data.email); 
        }
    }
    
    // input获取焦点
    $("#txt_email").click(function(){
        var email = $("#txt_email").val();
        if(email.indexOf("请") > -1){
            $("#txt_email").val("");   
        }
    });
    
    // 开启规则监控
    $("#btn_switch").click(function(){
        var email = $("#txt_email").val();
        if(email.indexOf("@") > -1){
            bg.data.email = email;
        }else{
            alert("请填写正确的邮箱！！！");
            return;
        }

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
});