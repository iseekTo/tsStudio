// 泛型接收的第一个类型假设是string(D)，则子类型都是string(D)
export type Dictory<D> = {
    [k: string]: D
} 

// 


