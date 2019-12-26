//定义一个有依赖的模块

(function (window, dataService) {
    let msg = 'alerter msg'

    function bar() {
        console.log(msg, dataService.getName())
    }
    window.alerter = {
        bar
    }

})(window, dataService)