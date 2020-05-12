/*
 * @Date: 2019-11-08 16:42:28
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-05-12 14:53:11
 */
const obj = Object.prototype;

/**
 * @description 删除指定字符后的所有字符(从第一个字符算起)
 * @param sourceVal 源字符串
 * @param symbols 分隔符
 * */
export const delAfterStr = (sourceVal: string, symbols: string): string =>
    sourceVal.substring(0, sourceVal.indexOf(symbols));

export const isString = (str: unknown): str is string =>
    typeof str === 'string';

export const isBoolean = (bol: unknown): bol is boolean =>
    typeof bol === 'boolean';

export const isNumber = (nur: unknown): nur is number =>
    typeof nur === 'number';

export const isRegExp = (reg: unknown): reg is RegExp => {
    return '[object RegExp]' === obj.toString.call(reg);
};


export const handleCat = (animalType: import('../runtime/').typeAnimal): string => {
    return animalType;
}