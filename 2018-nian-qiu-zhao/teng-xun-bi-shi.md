# 腾讯笔试

![2501537079558\_.pi](http://oypuj66a9.bkt.clouddn.com/2501537079558_.pic.jpg) B,C,D 不存在函数提升，不能做构造函数，this指向是定义时就确定的,

![2511537079577\_.pi](http://oypuj66a9.bkt.clouddn.com/2511537079577_.pic.jpg) 母鸡。。 ![2521537079584\_.pi](http://oypuj66a9.bkt.clouddn.com/2521537079584_.pic.jpg) 算一下 17 ![2531537079591\_.pi](http://oypuj66a9.bkt.clouddn.com/2531537079591_.pic.jpg) 选BCD ![](http://oypuj66a9.bkt.clouddn.com/15370839227236.jpg)

polyfill是指旧的浏览器不支持新的API，那就自己实现一个，打个补丁。用于实现浏览器并不支持的原生API的代码。 抹平新老浏览器 标准原生API 之间的差距的一种封装，而不是实现自己的API。 （shim是相反的，把新的API 引入旧的环境中，用旧环境中已有的手段实现。） D中的AST是指`抽象语法树`，比如chrome的AST就是V8。

## babel主要做了下面这些事情：

### 1.解析  将代码解析成抽象语法数AST

### 2.转换  把1的AST转换成js

### 3.生成  转换后的AST再转化成JS

babel只转移了新标准引入的语法，比如箭头函数； 但是新标准中的新原生对象、新增的原型方法，新增API的等，是不会转移的。要引入相应的polyfill来解决。 ![](http://oypuj66a9.bkt.clouddn.com/15370836019038.jpg)

![2541537079599\_.pi](http://oypuj66a9.bkt.clouddn.com/2541537079599_.pic.jpg) 确定B要选 ，其他母鸡。。 理论上node是后端的，操作DOM有违前后端分离的开发模式。这里先不选？ ![2551537079607\_.pi](http://oypuj66a9.bkt.clouddn.com/2551537079607_.pic.jpg)

## React16废弃的三个生命周期函数

componentWillMount componentWillReceiveProps componentWillUpdate

A，名字里多写了个‘will’ ![2561537079612\_.pi](http://oypuj66a9.bkt.clouddn.com/2561537079612_.pic.jpg) ![2571537079620\_.pi](http://oypuj66a9.bkt.clouddn.com/2571537079620_.pic.jpg) B 20，50

![2581537079626\_.pi](http://oypuj66a9.bkt.clouddn.com/2581537079626_.pic.jpg) 肯定是能追上的，就是通过a选项是的方法验证一个链表是否有环…… A对

## 【知识点】双循环和单循环链表的区别： 双循环有两个指向。B对

## 【知识点】单链表的头指针：C错 ；没有头结点的时候，头指针指向第一个节点。有头节点时，头指针指向头结点。

## 【知识点】静态链表和动态链表：预先分配物理大小，长度固定，对节点操作时不用移动元素，仅需修改指针；后者相反  D对

所以，选ABD

![2591537079631\_.pi](http://oypuj66a9.bkt.clouddn.com/2591537079631_.pic.jpg) 枚举

![2601537079637\_.pi](http://oypuj66a9.bkt.clouddn.com/2601537079637_.pic.jpg)

## 反射型XSS漏洞：

**具体：**发送有恶意脚本代码参数的URL，当URL被打开时，特有的恶意代码参数被HTML解析、执行。比如在url中加入`<script>alert(1)</script>` **放于方式：**转义输入输出的内容；用白名单来过滤不需要的东西；

## CSRF：

**具体：**通过GET请求提交用户评论的接口，攻击者在钓鱼网站中加入一个图片，图片的地址就是评论接口。 **防御方式：**限制第三方网站访问cookie；get请求不对数据进行修改；阻止第三方网站请求接口；请求时附带验证信息，比如验证码或者token（很常见）

![2611537079645\_.pi](http://oypuj66a9.bkt.clouddn.com/2611537079645_.pic.jpg)

![2621537079652\_.pi](http://oypuj66a9.bkt.clouddn.com/2621537079652_.pic.jpg) A ![2631537079659\_.pi](http://oypuj66a9.bkt.clouddn.com/2631537079659_.pic.jpg) 算。。 ![2641537079667\_.pi](http://oypuj66a9.bkt.clouddn.com/2641537079667_.pic.jpg)

![2651537079673\_.pi](http://oypuj66a9.bkt.clouddn.com/2651537079673_.pic.jpg) D ![2661537079680\_.pi](http://oypuj66a9.bkt.clouddn.com/2661537079680_.pic.jpg) ab d选项不一定，如果线性表是有序的，查找“87”时才是顺序表效率高；

## 按值查找

* 顺序表：**有序**，O\(1\)；无序，O\(n\);
* 链表，O\(n\)，必须要从头遍历一遍；

## 按序号查找

顺序表：O\(1\), 链表：O\(n\)

## 插入删除

顺序表：O\(n\), 链表：O\(1\)

![2671537079685\_.pi](http://oypuj66a9.bkt.clouddn.com/2671537079685_.pic.jpg)

## Referer:

表明跳转来源（通过什么跳转到当前链接的） 如果是手动输入URL，那么`referer`为空。

## Authorizaton

主要用作http协议的认证。 ![2681537079693\_.pi](http://oypuj66a9.bkt.clouddn.com/2681537079693_.pic.jpg) 选【不能】! A肯定不能 ![2691537079699\_.pi](http://oypuj66a9.bkt.clouddn.com/2691537079699_.pic.jpg)

```text
(function(callback){
    city = {name:"hangzhou"};
    callback(city)
})(function(obj){
    obj.name='shanghai';
    obj={name:"baijing"};
})

console.log(city.name);  // shanghai
```

原因不知道。。

![2701537080639\_.pi](http://oypuj66a9.bkt.clouddn.com/2701537080639_.pic.jpg) ![2711537080645\_.pi](http://oypuj66a9.bkt.clouddn.com/2711537080645_.pic.jpg) ![2721537080652\_.pi](http://oypuj66a9.bkt.clouddn.com/2721537080652_.pic.jpg) ![2731537080660\_.pi](http://oypuj66a9.bkt.clouddn.com/2731537080660_.pic.jpg) ![2741537080665\_.pi](http://oypuj66a9.bkt.clouddn.com/2741537080665_.pic.jpg)

