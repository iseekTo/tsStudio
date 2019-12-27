// ## 找不到第三方模块时，有两种方法可以消除ts的报警

// 1、在加载第三方模块内部声明
declare const yourModuleName: any;

// 2、在根目录新建 modules.d.ts
declare module 'yourModuleName';


// ## 增强第三方库内部声明--使用相对导入(举例)
declare module '../node_modules/antd/lib/input/Input' {
    export interface InputProps {
        autoFocus?: boolean
    }
}