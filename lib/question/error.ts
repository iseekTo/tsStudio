export type stringOrArr = string[] | string

interface IBook {
    price?: number
    label?: stringOrArr
    where?: stringOrArr
    [x: string]: any
}

let book: IBook = {
    price: 200,
    label: 'GG',
    where: '天河以南',
    other_key_1: 'other_key_1',
    other_key_2: 'other_key_2',
}

let base: any = []
/**
 * @description 常规遍历：错误
 * 错误信息：Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'IBook'
 * 解析：声明的 IBook 接口含有隐式any类型，给其扩展一个自由属性即可 [x: string]: any
 */
export function generErrorObj() {
    for (let k in book) {
        if (book.hasOwnProperty(k)) {
            const element = book[k]
            base.push(element)
        }
    }
    return base
}

/**
 * @description 只读属性与'改变'
 */

let suchNumber: number[] = [1, 2, 3, 4, 5]
let otherArr: ReadonlyArray<number> = suchNumber
export let reveiveResult: number[]
// otherArr[1] = 2  // error.  error msg: 类型“readonly number[]”中的索引签名仅允许读取

// error msg: 类型“readonly number[]”上不存在属性“push”。
// otherArr.push(1)          // fail error!

// error msg: Cannot assign to 'length' because it is a read-only property.
;(otherArr.length as number) = 123 // 只读属性不可更改长度

// error.  error msg: 只读属性的数组(或其他类型)不可赋值于其他变量
// suchNumber = otherArr     // fail error!

// // 改变只读属性的办法是：使用类型断言重写此变量(注意：不支持01010110 这样的八进制，但是支持类似0o1)。
suchNumber.push(123, 999, 312, 0o1) as number

reveiveResult = suchNumber
