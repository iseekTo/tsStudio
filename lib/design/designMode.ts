// 开放封闭原则
abstract class Top {
    create(): any {
        return new Error('不可直接new我本身')
    }
}

export class Little extends Top {
    create() {
        return 'new styles for extends'
    }
}

// let c = new Top()   // error
let little = new Little()
console.log(little.create())
