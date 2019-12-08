import { generErrorObj, reveiveResult } from './question/error'
import { tryData } from './question/promise';
import { Little } from './design/designMode'
import { getObjOfValue, base } from './typeStudent/keyof';
console.log('--------------------------------------------')

tryData().then(res => console.log('da2222222ta：', res))

let o = {
    id: 2,
    name: 'tom'
}

let name = getObjOfValue(o, 'id')
console.log(name);

let ba = base<string[]>(['123', '2'])
console.log(ba);

// console.log(strlog());

    // let fs: ICommon = {
    //     title: '123'
    // }

// 三斜线指令的运用
let pro: IPos = {
    some: 'Android',
    people: {
        id: 1,
        sex: 'boy'
    }
}
console.log(pro);


interface Ie {
    one: boolean
    two: string
    fou: RegExp
}

// 根据第一个参数，对应第一个参数的类型
function foo<K extends keyof Ie>(key: K, val: Ie[K]) {
    // 
}

foo('fou', /123/)

type Dictory<T> = {
    [name: string]: T
}

let trys: Dictory<number> = {
    l: 2,
    ow: 31
}

let bol: Dictory<boolean> = {
    isShow: false,
    isOrder: true,
    isGotoOutUrl: true
}

console.log(trys, bol);

type Base<T> = {
    book: T
    price: number
}

let books: Base<string[]> = {
    book: ['1', 'tt'],
    price: 23.12
}






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
