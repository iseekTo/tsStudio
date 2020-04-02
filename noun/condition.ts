/*
 * @Date: 2020-03-27 16:07:43
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-03-31 11:05:45
 */

type animal = 'dog' | 'cat' | 'lion' | 'elephant';

type filter<S> = S extends 'cat' ? S : never;

// filter 'cat' type.
type cat = filter<animal>

