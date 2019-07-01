(function(){

    window.setInterval(function(){
        console.log("规则监控中...");
        // $.get("demo_ajax_load.txt", function(result){
        //     $("div").html(result);
        //   });

    },3000);

    $(document).ready(function(){
        // document.body.contentEditable = "true"
        /*//发消息
        var bac = chrome.extension.connect({name: "bgAndCon"});
        bac.postMessage({joke: "Knock knock"});*/
        //接收消息
        chrome.extension.onConnect.addListener(function(cab) {
            cab.onMessage.addListener(function(msg) {
                if(msg.flag){
                    $("body").find("*").mouseenter(function(){
                        event.stopPropagation();
                        $(this).css({"box-shadow":"0 0 5px 1px #3AB2FF"});
                        $(this).one("click", function(){
                            event.stopPropagation();
                            $(this).hide();
                            return false;
                        })
                    });
                    $("body").find("*").mouseout(function(){
                        event.stopPropagation();
                        $(this).css("box-shadow", "none");
                    })
                } else {
                    $("body").find("*").unbind("mouseenter").unbind("mouseout").unbind("click");
                }
            })
        })
        /*chrome.extension.onConnect.addListener(function(cab) {
            console.log("AAA")
            cab.onMessage.addListener(function(msg) {
                console.log(msg.greeting);
                console.log("BBB")
            })
        })*/

        console.log("开始操作页面内容");

       


    });
})();