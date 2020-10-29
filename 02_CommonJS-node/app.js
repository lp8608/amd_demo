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
console.log('modify on dev and push dev and merge master')

console.log('modify on master')

console.log('modify by lipengak and push local dev')
console.log('modify by others and push dev branch')
console.log('modify by others and push dev branch1')
console.log('modify by luopengc and on github web editor')
console.log('modify by lipengak on local dev  commonjs app.js')

console.log('add some thing in commonjs app.js by lipengak on local dev')

console.log('add something at 20201029 by lipengak')


