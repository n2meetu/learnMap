# generate函数
怎么实现【暂停】效果的？

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
