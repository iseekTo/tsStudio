/*
 * @Date: 2020-03-27 16:07:43
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-06-16 18:12:15
 */

export type animal = 'dog' | 'cat' | 'lion' | 'elephant';
export type os = 'android' | 'ios'


// filter 'cat' type.
export type cat = filter<animal>
export type filter<S> = S extends 'cat' ? S : never;
