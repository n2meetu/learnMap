/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-09-08 23:28:33 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-08 23:49:47
 * 
 * 实现一个call：给对象新建一个属性，这个属性就是一个想要调用的方法；
 */

// apply  —— 参数数组
Function.prototype.myCall() = function (context) {
    context = context || window;
    context.fn = this;

    var res;

    if (arguments[1]) {  // 有第二个参数，那么必须全部展开
        res = context.fn(...arguments[1]);
    } else {  // 没有形参，就直接传入
        res = context.fn();
    }

    delete context.fn;
    return res;
}

// call —— 参数列表
Function.prototype.myApply()=function(context){
    context = context || window;
    context.fn = this;

    context.fn(...arguments).slice(1);
    delete context.fn;
    return res;
}