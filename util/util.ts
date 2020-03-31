/*
 * @Date: 2019-11-08 16:42:28
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-03-29 20:25:04
 */
const obj = Object.prototype;

/**
 * @description 删除指定字符后的所有字符(从第一个字符算起)
 * @param sourceVal 源字符串
 * @param symbols 分隔符
 * */
export const delAfterStr = (sourceVal: string, symbols: string): string =>
    sourceVal.substring(0, sourceVal.indexOf(symbols));

/**
 * @Quote of Redux
 * @returns 是否是一个简单的对象
 */
export const isPlainObject = (obj: object): boolean => {
    if (typeof obj !== 'object' || typeof obj === null) return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
};

export const isString = (str: unknown): str is string =>
    typeof str === 'string';

export const isBoolean = (bol: unknown): bol is boolean =>
    typeof bol === 'boolean';

export const isNumber = (nur: unknown): nur is number =>
    typeof nur === 'number';

export const isRegExp = (reg: unknown): reg is RegExp => {
    return '[object RegExp]' === obj.toString.call(reg);
};

const findFirst = <L>(list: Array<L>, f: Function): cacheType => {
    return list.filter(f)[0];
}


type cacheType = {
    original: object;
    copy: unknown;
}


export const deepCopy = (obj: unknown): unknown => {
    let copy: unknown = {};
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    const siuteType = obj?.constructor.name;

    if (siuteType === 'Array') {
        copy = []
    }

    if (siuteType === 'Object') {
        copy = {}
    }

    for (const k in obj) {
        copy[k] = deepCopy(obj[k])
    }
    return copy;
} 