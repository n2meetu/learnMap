# apply、call和bind
apply和call其实一样，但是apply接受数组作为参数，call接受参数列表做参数。

apply和call会立即执行函数。

bind和call很像，但是bind不会立即执行函数。而是返回一个新的对象，bind改变的是这个新对象的this值。原函数的this值没有被改变。


```
if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
        var self = this,                        // 保存原函数
            context = [].shift.call(arguments), // 借用数组的shift方法，提取第一个参数值（第一个参数是上下文）。保存需要绑定的this上下文
            args = [].slice.call(arguments);    // 剩余的参数转为数组
        return function () {                    // 返回一个新函数
            self.apply(context,[].concat.call(args, [].slice.call(arguments)));
        }
    }
}
```