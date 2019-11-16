/**
 * @description 删除指定字符后的所有字符(从第一个字符算起)
 * @param sourceVal 源字符串
 * @param symbols 分隔符
 * */
export let delAfterStr = (sourceVal: string, symbols: string) =>
    sourceVal.substring(0, sourceVal.indexOf(symbols))
