/*
 * @Date: 2020-03-27 16:07:43
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-03-27 16:25:51
 */

type animal = 'dog' | 'cat' | 'lion' | 'elephant';

type filter<S> = S extends 'cat' ? S : never;

type cat = filter<animal>

