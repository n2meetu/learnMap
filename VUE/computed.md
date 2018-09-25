# Computed原理
[参考文章](https://juejin.im/post/5afbfce56fb9a07ac0226f21#heading-1)
[最后部分的总结清晰易懂](https://segmentfault.com/a/1190000010408657)
> 有两大优势：
> 1.值修改后会被缓存，被依赖的data值改变时才会重新计算
> 2.逻辑清晰，方便管理

#### 大致流程：
1. data 属性初始化 getter setter
2. computed 计算属性初始化，提供的函数将用作属性 vm.reversedMessage 的 getter
3. 当首次获取 reversedMessage 计算属性的值时，Dep 开始依赖收集
4. 在执行 message getter 方法时，如果 Dep 处于依赖收集状态，则判定 message 为 reversedMessage 的依赖，并建立依赖关系
5. 当 message 发生变化时，根据依赖关系，触发 reverseMessage 的重新计算
通过简单的发布订阅，在一次计算属性求值的过程中收集到相关的依赖。


### 1、计算属性如何与属性建立依赖关系？属性发生变化又如何通知到计算属性重新计算？
    利用 JavaScript 单线程原理和 Vue 的 Getter 设计，通过一个简单的发布订阅，就可以在一次计算属性求值的过程中收集到相关依赖

~~通过define.ObjectProperty监听数据的set和get事件~~
~~当取值的时候，触发get函数，如果探测到有需要运行的computed函数，收集起来~~
~~当赋值或者改变值的时候，触发set函数，此时，那些被收集起来的computed函数都运行。~~


###### 收集依赖的具体做法是什么？
给Dep定义一个全局变量，初始化为null。
如果Watcher调用get方法， Dep.target = this; 让变量指向自己
因此，只需要在每次触发get函数的时候验证 Dep.target有没有值，就可以知道是不是Watch在调用。
如果是，就把这个依赖收集到dep里。

-------

### 2、computed值为什么说是被缓存的呢，如何做的？
如果计算属性依赖的其他数据没有发生改变，那么就不需要执行Computed去计算结果。因为如果依赖的数据不改变，Computed的结果也不会改变。

但是我们怎么知道，Computed依赖谁?

这时候需要加一个watcher，把它`push`到Computed依赖的数据的`dep`中去，这样就可以检测到`Computed`都使用了哪些其他数据。

一旦那个数据发生了变化，就会通知到Computed中的这个watcher，被通知后`watcher`会把`watcher.dirty`设置为`true`，这样 _***当下一次访问数据时***_ 会执行`watch.evaluate`来更新`watch.value`。

##### 注意：为什么要等到下一次才更新?
因为Computed有个属性，`Watcher.dirty`是`lazy`的

### 3.computed 和 watch的差异
[computed 和 watch的差异](http://www.php.cn/js-tutorial-410101.html)

* computed 是计算一个***新*** 的属性，并将该属性挂载到 vm（Vue 实例）上，而 watch 是监听***已经存在且已挂载*** 到 vm 上的数据，所以用 watch 同样可以监听 computed 计算属性的变化（其它还有 data、props）；

* computed 本质是一个**惰性求值**的观察者，具有缓存性（通过设置watcher.dirty），只有当依赖变化后，第一次访问 computed 属性，才会计算新的值，而 watch 则是当数据发生变化便会立即调用执行函数

* 从使用场景上说，computed 适用***一个数据被多个数据影响***，而 watch 适用一个数据影响多个数据；
