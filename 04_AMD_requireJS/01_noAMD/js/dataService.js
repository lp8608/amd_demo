//定义一个没有依赖的模块
(function (window) {
    let name = 'dataService msg'

    function getName() {
        return name
    }

    window.dataService = {
        getName
    }

})(window);