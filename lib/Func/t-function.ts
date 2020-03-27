import { expect } from "chai";

interface Action<T> {
    payload?: T;
    type: string;
}

type Connected = {
    school: school,
    delay(input: number): Action<string>,
    setMessage(action: Date): Action<number>
};


type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type PickOnlyFuncType<T> = Pick<T, FunctionPropertyNames<T>>

// 仅挑选函数类型
let only_func: PickOnlyFuncType<Connected> = {
    delay() {
        return {
            payload: 'ss',
            type: '2'
        }
    },
    setMessage(action) {
        return {
            payload: action.getMilliseconds(),
            type: '2'
        }
    }
}


