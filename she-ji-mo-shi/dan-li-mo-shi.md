# 单例模式

> 1、单例类只能有一个实例。 2、单例类必须自己创建自己的唯一实例。 3、单例类必须给所有其他对象提供这一实例。

## 1.如何理解：

一个班只有一个班长

**怎么保证在班级中只有一个班长（被称为单例的特殊类）？**

## 2.一个类只有一个实例

`班长`这个类底下只有`李明`一个人。 想new一个班长，首先判断一下现在班级是否有班长，如果还没有，可以new；如果有了，尊重班长，不可以随便换人……

## 3.适用场景

希望在某个系统中，某个类的对象只有一个

## 4.用js实现一个单例模式

```text
// 方案一：字面量对象
var singleTon={
    attr1:true,
    attr2:10,
    method:function(){  
        console.log("A single singleton example");
    }
}

// 方案二：利用闭包实现一个拥有私有变量的单例对象
var singleTon1=(function(){
    var instance;
    function initInstance(){
        var object=new Object();
        object.msg="单例模式";
        return Object;
    }
    return{
        getInstance:function(){
            if(!instance){
                instance=initInstance();
            }
            return instance;
        }
    }
})();
```

