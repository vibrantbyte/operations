(function(){
    $(document).ready(function(){
        var port = chrome.runtime.connect({name: "background"});
        port.onMessage.addListener(function(msg) {
            if(msg.status == status_lable.start){
                console.log(msg);
                // todo

            }
        });
        
        // 请求处理信息
        window.setInterval(function(){
            port.postMessage({cmd: "email"});
        },1000);
    });
})();
