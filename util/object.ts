/*
 * @Date: 2020-05-12 14:45:16
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-05-12 14:52:42
 */

/** 是否是对象 */
const isObject = (obj: object): boolean => typeof obj !== 'object' || typeof obj === null

/**
 * @Quote of Redux
 * @returns 是否是一个简单的对象
 */
const isPlainObject = (obj: object): boolean => {
    if (isObject(obj)) return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
};



// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const shallowCopy = (obj: object, sourceObj: object): object => {
    for (const _key in sourceObj) {
        obj[_key] = sourceObj[_key]
    }
    return obj
}

const toObject = <T>(ary: Array<T>): object => {
    const obj = {}
    for (let i = 0; i < ary.length; i++){
        if (ary[i]) {
            shallowCopy(obj, ary[i])
        }
    }
    return obj
}


export default {
    isPlainObject,
    shallowCopy,
    toObject
}