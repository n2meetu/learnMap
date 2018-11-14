# arguments

1. 有length属性
2. 能通过`[ ]`来取值
3. 改变`arguments[1]`后对应的命名参数也被改变了

### 和数组有什么区别？
不能使用`push`等类数组方法；

### 怎么转化成数组？
`Array.prototype.slice.call(obj,0)`

### length属性
用arguments获取形参

### callee属性
