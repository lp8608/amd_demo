'use strict'

let uniq = require('uniq')

let module1 = require('./module/module1')
let module2 = require('./module/module2')
let module3 = require('./module/module3')

console.log(uniq(module3.arr))
module1.foo()
module2()
module3.foo()
module3.bar()

console.log(uniq(module3.arr))

console.log('test push push origin dev')