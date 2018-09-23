# 面向对象

## 💡面向对象的意义是什么？

> 继承

每次不用从零开始，而是直接在原有的基础上增加方法

## 老版本的继承

1. 构造函数的this：用`call`绑定this指向
2. 用`prototype`指向原型对象
3. `constructor`乱了，重新绑定
4. `new`关键词

### 具体例子

构造函数User

```text
function User(name, pass) {
    this.name = name;
    this.pass = pass;
}

User.prototype.showName = function () {
    console.log(this.name);
}

User.prototype.showPass = function () {
    console.log(this.pass);
}
```

#### ES5的继承

```text
// 1.改造函数
var VipUser = function (name, pass, level) {
    User.call(this, name, pass);
    this.level = level;
}

// 2.原型链调整 prototype 和 constructor
VipUser.prototype = new User();
VipUser.prototype.constructor = VipUser;

// 3.原型对象
VipUser.prototype.showLevel = function () {
    console.log(this.level);
}

var v2 = new VipUser('greta','123123','8');
v2.showLevel();
v2.showName();
v2.showPass();
```

#### ES6的继承

```text

```

## ES6继承的特点：

> 1. 多了class关键字，构造器和类分开
> 2. 直接在构造器Class内加入方法

### 语法：

* super关键字
* 
