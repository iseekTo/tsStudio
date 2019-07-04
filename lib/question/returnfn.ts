/**
 * @description 函数返回函数
 */

export function returnFn(f: Function, ...args: string[]) {
    return f(args)
}

export let outNames = (arr: string[]) => {
    arr.push('1,', 'true', '{}', 'eeeeee')
    let s = arr
    return s
}

returnFn(outNames)