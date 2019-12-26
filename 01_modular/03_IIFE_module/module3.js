//IIFE module 立即执行函数, 匿名函数自调用（闭包）

(function (window) {
    let msg = 'IIFE module msg'

    var foo = function () {
        console.log('IIFE module foo() log:', msg)
    }
    window.module3 = {
        foo
    }
})(window);