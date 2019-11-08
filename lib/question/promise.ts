interface IResponse<R> {
    message: string
    result: R
    code: number
}

interface fnProps {
    log: () => string
}

export default class P implements fnProps {
    constructor(public er: string) {}
    log() {
        console.log(this.er + '尾部信息')
        return ''
    }
}

/**
 * 异步传输数据时 我们并不知道返回的数据是什么类型
 * 此时定义一个接口容器来接收传过来的参数。
 */
async function resp(): Promise<IResponse<Array<object>>> {
    return {
        message: '异步信息',
        result: [{ a: 2 }],
        code: 200,
    }
}

export let tryData = async () => await resp()
