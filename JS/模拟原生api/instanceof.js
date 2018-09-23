/*
 * @Author: Greta Zhang
 * @Date: 2018-09-05 21:33:39 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-06 14:58:52
 *  
 * 实现一个instanceof
 * 原理：判断对象的类型是否等于类型的原型——就是判断对象的_proto_属性是否指向类型的prototype；
 */

function myInstanceOf(left, right) {  // instanceof(对象，某类型)
    // 获取对象类型
    var left = left.__proto__;
    // 获取类型的原型
    var prototype = right.prototype;

    // 是否相等
    while (true) {
        if ( left === null) {
            return false;
        } 
        if (left === prototype){
            return true;
        }
        left = left.__proto__;
    }
}
var str = new String("hello world");
console.log(myInstanceOf(str, String));
console.log(myInstanceOf(str, Number));