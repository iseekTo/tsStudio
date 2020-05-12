/*
 * @Date: 2019-12-02 16:52:56
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-05-12 14:46:57
 */

type sex = 'boy' | 'gril'

declare interface Opt  {
    people: {
        readonly id: number;
        sex?: sex;
    };
}
