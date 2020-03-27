// reference 代表普通文件里的 import 关键字
/// <reference path="base.d.ts" />

declare const DEV: string;

declare interface IPos extends IOpt {
    some: string
}


// ## 找不到第三方模块时，有两种方法可以消除ts的报警

// 1、在加载第三方模块内部声明
declare const yourModuleName: any;

// 2、在根目录新建 modules.d.ts
declare module 'yourModuleName' {
    export = yourModuleName
}

