# 继承

## ES5

想加一个新方法，特别麻烦。。。

把想要继承的方法写在**原型对象**上。

每次new一个新的实例，都让新实例的`prototype`指向构造器； 而`constructor`又指向`prototype`。

## es6

* construct属性
* super\(\)方法；
* extends\(\)方法；

**喜大普奔:**

1. 构造器和类分开了
2. class里面可以直接加方法

```text
class User{
      constructor(name, pass){
        this.name=name;
        this.pass=pass;
      }

      showName(){
        alert(this.name);
      }
      showPass(){
        alert(this.pass);
      }
    }

    class VipUser extends User{
      constructor(name, pass, level){
        super(name, pass);

        this.level=level;
      }

      showLevel(){
        alert(this.level);
      }
    }

    var v1=new VipUser('blue', '123456', 3);

    v1.showName();
    v1.showPass();
    v1.showLevel();
```

```text
<!--主要结构-->

person.extends(Person){
    constructor(name,pass,level){
        super(name,pass);
        this.level = level;
    }
    showlevel(){
        // 想要执行的代码
    }
}
```

