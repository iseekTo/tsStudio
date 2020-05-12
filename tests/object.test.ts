/*
 * @Date: 2020-05-12 16:44:08
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-05-12 17:14:38
 */
import { it, describe } from 'mocha'
import { expect } from 'chai'
import { isObject, shallowCopy, toObject } from '../util/object'

describe('util.ts -> object', () => {
    
    // test isObject
    describe('传入一个对象，检查是否是对象', () => {
        it('应该返回true', () => {
            const obj = {
                name: ''
            }
            const isObj: boolean = isObject(obj)
            expect(isObj).to.equal(true)
        })
    })

    // test shallowCopy
    describe('内部修改浅拷贝之后的对象', () => {
        it('期望拷贝后的值没有被影响', () => {
            const obj = {
                name: '1'
            }
            const shallow = shallowCopy({}, obj)
            obj.name = '22222'
            // 浅拷贝之后的对象值不应该等于源对象
            expect(shallow).to.not.equal(obj)
        })
    })
    
    // test toObject
    describe('传入一个数组对象', () => {
        it('期望返回数组的key，然后组成一个对象', () => {
            const ary = [
                { name: '', age: 11 }
            ]
            const aryObj = toObject(ary)
            expect(aryObj).to.deep.equal(ary[0])
        })
    })
    
})
