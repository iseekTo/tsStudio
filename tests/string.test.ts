/*
 * @Date: 2020-03-27 13:24:18
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-04-05 18:48:58
 */
import { it, describe } from 'mocha'
import { expect } from 'chai'
import { isString, isRegExp } from '../util/util'

describe('util.ts -> type', () => {
    describe('isString', () => {
        it('typeof a value should be "string" ', () => {
            const str: boolean = isString('hahahah')
            expect(str).to.equal(true)
        })
    })
})


describe('util.ts -> reg', () => {
    describe('isRegExp', () => {
        it('typeof the value is "regExp', () => {
            const reg: unknown = isRegExp(/\s+/g)
            expect(reg).to.equal(true)
        })
    })
})
