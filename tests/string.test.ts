import { it, describe } from 'mocha'
import { expect } from 'chai'
import { isString } from '../lib/util/util'

describe('util.ts -> type', () => {
    describe('isString', () => {
        it('typeof a value should be "string" ', () => {
            const str: boolean = isString('hahahah')
            expect(str).to.equal(true)
        })
    })
})
