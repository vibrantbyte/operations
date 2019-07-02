var status_lable = { none:"初始化...",start:"守护中...",close:"已停服..." };
var button_status = { open:"" }
// 状态显示
var status_text = status_lable.none;

/*var d = new Date();
console.log(d.toLocaleString());*/
setInterval(function(){
    var pop = chrome.extension.getViews({type:'popup'})[0];
    if (pop) {
        console.log(pop.b);
    }
}, 1000)

// 刷新时间
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // setInterval(function(){
    //     if (flag.change) {
    //         var cab = chrome.tabs.connect(tabId);
    //         cab.postMessage({ flag: flag.begin});
    //         /*chrome.tabs.connect(tabId);
    //         chrome.tabs.sendMessage(tabId, { greeting: "hello"});*/
    //         flag.change = 0;
    //     }
    // },100);
});



// 使用长连接交互
var port = chrome.runtime.connect({name: "con1"});
https://blog.csdn.net/talking12391239/article/details/40432265

// // 发送请求
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
//     setInterval(function(){
//         if(status_text == status_lable.start){
//             chrome.tabs.sendMessage(tabs[0].id, {message:"calculate"}, function(response) {
//                 if(typeof response !='undefined'){
//                     console.log(response);
//                 }else{
//                     console.log("response为空=>"+response);
//                 }
//             });//end  sendMessage 
//         }
//     },1000);
// }); //end query

/*//接收消息
chrome.extension.onConnect.addListener(function(bac) {
    bac.onMessage.addListener(function(msg) {
        console.log(msg.joke);
    })
})*/
//发消息
/*chrome.tabs.query({active:true}, function(tab) {
    chrome.tabs.sendMessage(tab.id, { greeting: "hello"}, 
        function(response) {
            console.log(response.farewell)
        });
}) */
/*chrome.tabs.query({active:true}, function(tab) {
    setInterval(function(){
    console.log(tab.id)

},1000)
    // chrome.tabs.connect(tab.id, {name: "knockknock"})
})*/