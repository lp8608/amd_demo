//IIFE模式增强：引入依赖
//现代模块实现的基石

(function (window, $) {
    let msg = 'IIFE module4 msg'

    function foo() {
        console.log('IIFE module4 foo() print:', msg)

    }
    window.module4 = {
        foo
    }

    $('body').css('background', 'red')

})(window, jQuery);