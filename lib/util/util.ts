const obj = Object.prototype;

/**
 * @description 删除指定字符后的所有字符(从第一个字符算起)
 * @param sourceVal 源字符串
 * @param symbols 分隔符
 * */
export const delAfterStr = (sourceVal: string, symbols: string) =>
    sourceVal.substring(0, sourceVal.indexOf(symbols));

/**
 * @Quote of Redux
 * @returns 是否是一个简单的对象
 */
export const isPlainObject = (obj: object) => {
    if (typeof obj !== 'object' || typeof obj === null) return false
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(obj) === proto
}

export const isString = (str: any): str is string => typeof str === 'string'

export const isBoolean = (bol: any): bol is boolean => typeof bol === 'boolean'

export const isNumber = (nur: any): nur is number => typeof nur === 'number'

export const isRegExp = (reg: any): reg is RegExp => {
    return '[object RegExp]' === obj.toString.call(reg)
}

