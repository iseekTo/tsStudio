/**
 * 快速设置键的统一类型
 */

export type size = 'small' | 'large' | 'middle';

export type vals = {
    [k in size]: string     // 方式一
}

// 方式二
type Records<Q extends keyof any, T> = { [P in Q]: T }

type bs = Records<size, boolean>    

let is_boolean: bs = {
    small: '1',      // error 
    large: true      // success
}

// 方式三 先赋值 后取类型
const typeParams = {
    str: '',
    reg: /^\d+/,
    bol: false,
    arr: ['1', '2', true, {a: 1}]
}

type tys = typeof typeParams;

export let els: tys = {
    arr: [
        '1'
    ],
    reg: /'1234'/
}