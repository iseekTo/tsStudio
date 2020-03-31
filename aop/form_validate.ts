/*
 * @Date: 2020-03-31 10:29:41
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-03-31 11:01:02
 */

/**
 * 表单校验
 * 使用策略模式及中间函数无侵入实现
 */

// const validate_form = {
//     is_empty(val) {
//         return val.length === 0
//     },
    
// }

// const validate = (...args) => {
//     for (let k in validate_form) {
//         if (!(validate_form[k].apply(this, args))) {
//             return false
//         }
//         return true
//     }
// }