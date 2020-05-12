/*
 * @Date: 2020-03-27 11:46:15
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-05-12 14:46:49
 */
// reference 代表普通文件里的 import 关键字
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="base.d.ts" />

declare const DEV: string;

declare interface Ipos extends Opt {
    some: string;
}

// ## 找不到第三方模块时，有两种方法可以消除ts的报警

// 1、在加载第三方模块内部声明
declare const yourModuleName: unknown;

// 2、在根目录新建 modules.d.ts
declare module 'yourModuleName' {
    export = yourModuleName
}
