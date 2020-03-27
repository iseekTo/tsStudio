import { Dictory } from './generic/q'

console.log('--------------------------------------------')

const littleNumbers = [
    { a: 1, b: '123' },
    { a: 2, b: '22223' },
    { a: 3, b: '3123' },
] as const
type aa = typeof littleNumbers[number]['b']
let fas: aa = '22223'

let trys: Dictory<number> = {
    l: 2,
    ow: 31,
}

let bol: Dictory<boolean> = {
    isShow: false,
    isGotoOutUrl: true,
}
console.log(trys, bol)

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

const props = {
    func: (): void => console.log('func'),
}
