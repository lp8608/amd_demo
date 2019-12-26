'use strict'
// exports.value 可以暴露多个对象
exports.foo = function () {
    console.log('module3 foo() msg')
}

exports.bar = function () {
    console.log('module3 bar() msg')
}

exports.arr = [3, 33, 3, 4, 5, 6, 2, 3, '2', 's', 'a']