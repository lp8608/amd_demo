//AMD规范定义一个没有依赖的模块
define(function () {
    let name = 'dataService name'

    function getName() {
        return name
    }
    // export module
    return {
        getName
    }
});