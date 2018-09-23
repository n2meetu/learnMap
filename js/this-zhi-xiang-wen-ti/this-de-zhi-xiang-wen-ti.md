# this的指向问题

## ES5

原则：

```text
函数被调用时（即运行时）才会确定该函数内this的指向。
```

### 1.不带任何引用形式去调用函数，指向window对象（严格模式下是undefined\)

```text
var a = 1
function test () {
    console.log(this.a)
}
test()//1
```

`this` 指向 `Window`

### 2.被某个对象调用，指向那个对象

```text
var a = 1
function test () {
    console.log(this.a)
}
var obj = {
    a: 2,
    test
}
var obj0 = {
    a: 3,
    obj 
}
obj0.obj.test()//2
```

this指向 test\(\)函数

#### test\(\)中的this只对直属上司（直接调用者obj）负责

_**谁去调用这个函数的，这个函数中的this就绑定到谁身上。**_

### 3.apply\(\)、call\(\)、bind\(\) 明确指定this的上下文

那么this就是明确指定的那个对象。 `apply()`、`call()`存在于Function.prototype中，所以每个方法都有这两个属性。

### 4. 作为构造函数时，和new一起被调用

this就是即将要被new出来的新对象

```text
var a = 1
function test (a) {
    this.a = a
}
var b = new test(2)
console.log(b.a)    //2
```

## ES6

### 箭头函数：

```text
箭头函数中的this在函数定义的时候就已经确定，它this指向的是它的外层作用域this的指向。
```

## 深入理解（理解this的套路）

JS（ES5）里面有三种函数调用形式：

```text
func(p1, p2) 
obj.child.method(p1, p2)
func.call(context, p1, p2) // 先不讲 apply
```

其实都是从第三种变来的。 比如：

```text
func(p1, p2) 
// 等价于
func.call(undefined, p1, p2)

obj.child.method(p1, p2) 
// 等价于
obj.child.method.call(obj.child, p1, p2)
```

记住：

`func.call(content,p1,p2); // this就是content`

任何情况下，把函数转化成以上写法，再继续判断`this`，就会容易、准确得多

## 结论：

1.this指向的就是`call()`的第一个参数。 2.如果不是call\(\)形式的函数调用，就把函数调用转化成call形式。 怎么转？

```text
func.call(context, p1, p2)
```

如果遇到`[]`,详见参考链接。 [this指向问题的参考](https://zhuanlan.zhihu.com/p/23804247)

