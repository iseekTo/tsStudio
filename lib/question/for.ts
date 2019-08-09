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