import { stringOrArr } from "../util";

interface IBook {
  price?: number;
  label?: stringOrArr;
  where?: stringOrArr;
  [x: string]: any;
}

let book: IBook = {
  price: 200,
  label: "GG",
  where: "天河以南",
  other_key_1: "other_key_2",
  other_key_2: "other_key_2"
};

let base: any = [];
/**
 * 常规遍历：错误
 * 错误信息：Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'IBook'
 * 解析：声明的 IBook 接口含有隐式any类型，给其扩展一个自由属性即可 [x: string]: any
 */
export function generErrorObj() {
  for (let k in book) {
    if (book.hasOwnProperty(k)) {
      const element = book[k];
      base.push(element);
    }
  }
  return base;
}
