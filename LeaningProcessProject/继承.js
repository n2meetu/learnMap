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


// —————————— ES6 新增Class关键字 ————————————
class User {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }

    showName() {
        alert(this.name);
    }
    showPass() {
        alert(this.pass);
    }
}

class VipUser extends User {
    constructor(name, pass, level) {
        super(name, pass);
        this.level = level;
    }

    showLevel() {
        alert(this.level);
    }
}

var v1 = new VipUser('blue', '123456', 3);

v1.showName();
v1.showPass();
v1.showLevel();