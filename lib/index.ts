/*
 * @Date: 2019-11-08 17:10:46
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-04-06 22:19:57
 */
import { Dictory } from './generic/q';
import { handleCat } from '../util/util';

console.log('--------------------------------------------');

const h = handleCat('dog');

const od = {
    os: [2, [22], true],
    f: (): number => 3,
    base: 'BASE'
}

// 不知道类型怎么写了，可以先写一个js范例，然后用 typeof显示
type od = typeof od;

type anysh = {
    os: (string | boolean[] | number)[];
    bl?: () => number;
}


const littleNumbers = [
    { a: 1, b: '123' },
    { a: 2, b: '22223' },
    { a: 3, b: '3123' },
] as const;
type aa = typeof littleNumbers[number]['b'];
// const fas: aa = '22223';

const trys: Dictory<number> = {
    l: 2,
    ow: 31,
};

const bol: Dictory<boolean> = {
    isShow: false,
    isGotoOutUrl: true,
};
console.log(trys, bol);

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
