// reference 代表普通文件里的 import 关键字
/// <reference path="base.d.ts" />

declare const DEV: string;

declare type ICommon = {
    title: string
}

declare interface IPos extends IOpt {
    some: string
}
