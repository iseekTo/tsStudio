import { generErrorObj, reveiveResult } from './question/error'
import { tryData } from './question/promise'
console.log('--------------------------------------------')

tryData().then(res => console.log('da2222222ta：', res))

function strlog<S extends string | null>( 
    text?: S 
): S extends string ? string : null {
    if (!text) return null
    if (typeof text == 'string') return text.toUpperCase()
}

console.log(strlog());



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
