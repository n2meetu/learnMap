# Promise
解决函数内部嵌套函数（回调地狱）的问题；
生成一个Promise的实例对象的时候，会被立即执行。


### 一、Promise.then：
#### 定义：
在Promise的原型对象上

#### 作用：
绑定处理操作后的处理程序。

#### 用法：
绑定回调函数（`resolved`状态下）

#### 返回值
返回一个新的promise实例，不是原来的函数。


```
function getURL(URL){
    return new Promise((resolve,reject)=>{
        const req = new XMLHttpRequest();
        req.open('GET','a.txt',true);

        req.onload = (()=>{
            if(req.status === 200){
                if(req.readyState === 4){
                    resolve(req.response);
                }
            }else{
                reject(new Error(req.statusText));
            }
        })
        req.onerror = (()=>{
            reject(new Error(req.statusText));
        })

        req.send();
    })
}

<!-- then 的具体用法 -->
getURL(URL).then(function xxx(){

}).then(function xxxx(){

}).then(function yyyy(){

}).catch(function zzz(){
    
})
```

### 二、Promise.resolve()
#### 作用
把一个对象转为Promise对象。

`Promise.resolve("foo")`

`new Promise ( resolve => resolve('foo") );`


###### 例题1：
立即`resolve`的Promise对象，是在***_本轮_***“ 事件循环”的结束时，而不是***_下一轮事件_*** 循环开始的时候执行。
```
setTimeout(function () {
    console.log('three');  // 在下一轮“事件循环”开始时执行，
}, 0);


Promise.resolve().then(function () {
    console.log('two');  // 在本轮“事件循环”结束时执行
});


console.log('one'); // 立即执行
```


### 三、Promise.reject()
#### 返回
返回一个新的`Promise`对象

