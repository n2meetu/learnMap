# generate函数
### 怎么实现【暂停】效果的？

```
// 普通的函数执行后不可以暂停
// generate函数中间可以停顿
function* show() {
    yield console.log('a');

    yield console.log('b');
}

let genObj = show();
genObj.next(); 
genObj.next(); 
```

实际上是把`show()`分成两部分执行：

```
function* show() {
    show1();
    show2();
}

let genObj = show();

function show1(){   
        // 输出
}

function show2(){   
        // 输出
}

genObj.next();     // 执行show2()
genObj.next();     // 执行show2()
```

### yield 
![屏幕快照 2018-10-16 下午2.19.37](media/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-10-16%20%E4%B8%8B%E5%8D%882.19.37.png)

#### 注意：第一个`next()`中传参无用

### 和Promise对比
 
 Promise：适合不需要判断，一次性处理一堆回调的
 yield：适合用于有复杂逻辑、需要多重判断的 。