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

function vip(name,pass,level){
    // 绑定this
    User.call(this,name,pass);

    // 自己的属性
    this.level=level;
}

// prototype指向和constructor指向--prototype指向构造器，它的原型的constructor再指回自己；
vip.prototype=new User();  // new的过程 新建一个新对象，绑定原型链，绑定this，返回新对象
vip.prototype.constructor=vip();

vip.prototype.showLevel = function(){  // 为什么要把showlevel放在prototype上面？方便vip的实例对象可以继承
    return this.level;
}


// ES5 老版本 继承（贼麻烦）

function VipUser(name, pass, level) {
    User.call(this, name, pass);  // 要用call来绑定this
    this.level = level;
}

VipUser.prototype = new User();
VipUser.prototype.constructor = VipUser; // 构造函数乱了，还需要重新指向。

VipUser.prototype.showLevel = function () {
    console.log(this.level);
}

var v1 = new VipUser('blue', '123', '9');

v1.showName();
v1.showPass();
v1.showLevel();

// 再写一遍ES5版本的
// 1.改造函数
// var VipUser = function (name, pass, level) {
//     User.call(this, name, pass);
//     this.level = level;
// }
// // 2.原型链调整 prototype 和 constructor
// VipUser.prototype = new User();
// VipUser.prototype.constructor = VipUser;

// // 3.原型对象
// VipUser.prototype.showLevel = function () {
//     console.log(this.level);
// }

// var v2 = new VipUser('greta','123123','8');
// v2.showLevel();
// v2.showName();
// v2.showPass();

// —————————— ES6 新增Class关键字 ————————————
class User {
    var 
}

class VipUser extends User() {
    constructor(name, pass, level) { // 子类也是类，constructor少不了
        super(name, pass)  // 超类  作用等同于原来的 call；表示继承自User
        this.level = level;
    }

    // 新方法
    show() {
        console.log(this.level);
    }
}


var v2 = new VipUser('greta', '123123', '8');
v2.showLevel();
v2.showName();
v2.showPass();