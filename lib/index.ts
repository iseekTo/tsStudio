import { generErrorObj, reveiveResult } from './question/error'
import { returnFn } from './question/returnfn'
import { tryData } from './question/promise'

tryData().then(res => console.log('data：', res))

// let gener = generErrorObj();
// console.log("push之后的结果：", gener);

// console.log('强制改变只读属性的结果', reveiveResult)

// interface F {
//     cb(this: F): any;
// }

// function fn(args: string[], f: Function) {
//    console.log(args.join(''))
//    return f()
// }
// fn(['1', '2'], () => {
//     console.log('callback 飞鸟')
// })

// returnFn(() => {
//     console.log(['1', '2'], '函数返回值')
// })