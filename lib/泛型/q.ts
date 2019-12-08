// 泛型接收的第一个类型假设是string(D)，则子类型都是string(D)
export type Dictory<D> = {
    [k: string]: D
} 

// 在使用 type 关键字定义的普通字面量类型时，通常使用 [P in keyof T]
// in 的语法加上keyof解析了P的字符串类型的联合是基于T的
// T[P] --> 查找类型 对应的值可以假设为 T=对象，P=键，那么值就是对应键的类型
export type onlyGenric<T> = {
    readonly [P in keyof T]: T[P]
}
// 对外导出原生 Object.freeze() 的实现
export let onlyGenrics = <T>(local: T): onlyGenric<T> => {
    return local
}

// [x in xxx] --> xxx 只能为 symbol string(任意string类型的参数值，number同样) number any
// in 可理解为 '无限可扩展式类型对象'，键随意定义，值则是[]: xxx 后面的xxx类型
type test_in = {
    [x in symbol]: string
}

// 也可预先使用某些字符串充当每个键
type test_inKey = 'name' | 'sex'
type infite = {
    [x in test_inKey | 'other']: string
}
let oq: infite = {
    name: '123',
    sex: '男',
    other: '...some value'
}

interface testPick {
    name: string
    age: number
}

function fn<T extends keyof testPick>(k: T ) {

}
fn('age')
// pick 实现解析 接收一个类型集合，第二个参数是需要剔除的键(第一个类型上的某个键)
// P用来实现改变后的字符串K，值是对应的类型，写法也就是 T[P] -- testPick[name] --> string
type LPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
type person = LPick<testPick, 'age'>


let onlyObj = {
    s: '',
    w: false
}
let bingo = onlyGenrics(onlyObj)        // 不可改变bingo的key值
