# 箭头函数

箭头函数是ES6对函数的扩展这一部分的内容。

> 1.基本用法 2.this指向 3.箭头函数与普通函数的区别？（为什么） 4.形参问题 5.使用场景

## 基本用法

```text
var f=v => v;
//等同于 
var f = fucntion(v){
    return v;
}
```

圆括号内表示参数部分，箭头后是返回值（可以用表达式的形式）：

```text
var f = () => 5;
//等同于
var f = function(){
    return 5;
}
```

```text
const full = ({first,last}) =>first +' '+ last;
//等同于

const full = fucntion(person){
    return person.first+' '+person.last;
}
```

## 箭头函数的特点及其原因

this指向定义时的对象，不是使用时的对象。箭头函数中的this是不变的。 不能做构造函数； 不能使用arguments对象,箭头函数的arguments对象就是外层函数的arguments。

## this

[参考文章](https://blog.csdn.net/Levis_1993/article/details/78342354)

this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数_**根本没有自己的 this，**_导致内部的this就是外层代码块的this。

正是因为它没有this，所以也就不能用作构造函数。

## 箭头函数如何获取形参?

## 使用场景

没有复杂嵌套情况下； 外层最好再包裹一个普通函数。因为箭头函数自身没有this，如果以箭头函数作最外层函数，this指向window对象，这样容易污染全局变量。

