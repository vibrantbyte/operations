//data 
var data = { status:status_lable.none,times:0}

/*var d = new Date();
console.log(d.toLocaleString());*/
// setInterval(function(){
//     var pop = chrome.extension.getViews({type:'popup'})[0];
//     if (pop) {
//         console.log(pop.b);
//     }
// }, 1000)

// 刷新时间
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // setInterval(function(){
    //     // if (flag.change) {
    //     //     var cab = chrome.tabs.connect(tabId);
    //     //     cab.postMessage({ flag: flag.begin});
    //     //     /*chrome.tabs.connect(tabId);
    //     //     chrome.tabs.sendMessage(tabId, { greeting: "hello"});*/
    //     //     flag.change = 0;
    //     // }
    // },1000);
});
//接收content数据
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "background");
    port.onMessage.addListener(function(msg) {
        if(msg.cmd == "monitor" && data.status == status_lable.start){
            port.postMessage(data);
            data.times += 1;
        }else if(msg.cmd == "shop"){
            data.shop = msg.data;
        }
    });
});