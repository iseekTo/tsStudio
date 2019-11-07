/**
 * @description 每个单词首字母大写（空格隔开的字符）
 * @param { String } str string
 * @example 'hello world'
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

