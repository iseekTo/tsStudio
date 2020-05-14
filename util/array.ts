/*
 * @Date: 2020-05-14 09:45:39
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-05-14 10:02:48
 */

/**
 * 以数组对象中的某个key为主键，将相同的value放到一起
 * @param ary 
 * @param key 
 * @returns { object } ks
 * 
 *  const people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
    ]
    const ageObj = revertMainKeyForAry(people)

    // result
    {
        20: [{}, {}],
        21: [{}]
    }
 */
export function revertMainKeyForAry<T = Array<object>>(ary: T, key: string): object {
    const ks: any = {}

    if (Array.isArray(ary)) {
        ary.forEach(val => {
            if (!ks[val[key]]) {
                ks[val[key]] = []
            }
            ks[val[key]].push(val)
        })
    }

    return ks
}