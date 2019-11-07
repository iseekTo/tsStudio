interface IResponse<R> {
    message: string
    result: R
    code: number
}

/**
 * 异步传输数据时 我们并不知道返回的数据是什么类型
 * 此时定义一个接口容器来接收传过来的参数。
 * @default 2019/11/7
 */
async function resp(): Promise<IResponse<any>> {
    return {
        message: '异步信息',
        result: ['1', 2, false],
        code: 200,
    }
}

export let tryData = async () => await resp()
