

interface Match<Params extends { [K in keyof Params]?: any } = {}> {
    params: Params
    inExact: boolean
    path: string
    url: string
}

type requestParams<T> = {
    res: T,
    currentPage: number,
    page: number,
    total: number
}

type school = {
    name: string,
    className: string,
    much: number
}

// 也可这样
type _school = 'name' | 'className'
type _s_school = Record<_school, string>

let someVariv: Match<school> = {
    params: {
        name: 'vo',
        className: '7-01',
        much: 8000
    },
    inExact: true,
    path: '../todo',
    url: 'google'
}
