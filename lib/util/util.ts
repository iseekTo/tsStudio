const obj = Object.prototype;

/**
 * @description 删除指定字符后的所有字符(从第一个字符算起)
 * @param sourceVal 源字符串
 * @param symbols 分隔符
 * */
export const delAfterStr = (sourceVal: string, symbols: string) =>
    sourceVal.substring(0, sourceVal.indexOf(symbols))

export const isString = (str: any): str is string => typeof str === 'string'

export const isBoolean = (bol: any): bol is boolean => typeof bol === 'boolean'

export const isNumber = (nur: any): nur is number => typeof nur === 'number'

export const isRegExp = (reg: any): reg is RegExp => {
    return '[object RegExp]' === obj.toString.call(reg)
}
