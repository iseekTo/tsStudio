/**
 * @description 删除指定字符后的所有字符(从第一个字符算起)
 * @param sourceVal 源字符串
 * @param symbols 分隔符
 * */
export const delAfterStr = (sourceVal: string, symbols: string) =>
    sourceVal.substring(0, sourceVal.indexOf(symbols))

export const isString = (str: string): str is string => typeof str === 'string'

export const isBoolean = (bol: boolean): bol is boolean => typeof bol === 'boolean'

