
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

// ES5 老版本 继承（贼麻烦）

// function VipUser(name, pass, level) {
//     User.call(this, name, pass);  // 要用call来绑定this
//     this.level = level;
// }

// VipUser.prototype = new User();
// VipUser.prototype.constructor = VipUser; // 构造函数乱了，还需要重新指向。

// VipUser.prototype.showLevel = function () {
//     console.log(this.level);
// }

// var v1 = new VipUser('blue', '123', '9');

// v1.showName();
// v1.showPass();
// v1.showLevel();

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