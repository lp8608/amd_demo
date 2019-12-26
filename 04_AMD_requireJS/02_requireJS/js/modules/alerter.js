//定义一个有依赖的模块

define(['dataService'], function (dataService) {

    let msg = "alerter msg:"

    function showMsg() {
        console.log(msg, dataService.getName())
    }


    return {
        showMsg
    }
})