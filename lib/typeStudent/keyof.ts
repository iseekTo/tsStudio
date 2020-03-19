export interface IProp {
    readonly id: number
    name: string
}
// 索引类型查询，
// getProp函数接收两个参数，一个对象，一个对象上的key，返回对应key的value
export function getObjOfValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let f: IProp = {
    id: 1,
    name: '2222',
}

export let base = <F>(p: F) => p


// typescript
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
// 将K中的每个属性([P in K]),都转为T类型
type studentType = 'school' | 'major' | 'age';
type studentParams = Record<studentType, string>  
