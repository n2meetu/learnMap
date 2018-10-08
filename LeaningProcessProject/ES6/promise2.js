// var foo = function(){
//     console.log('foo');
// }
const p = Promise.resolve('foo');
p.then(function (s) {
    // console.log(s);  // 基本类型，直接输出
})

setTimeout(function () {
    console.log('three');  // 在下一轮“事件循环”开始时执行，
}, 0);

Promise.resolve().then(function () {
    console.log('two');  // 在本轮“事件循环”结束时执行
});

console.log('one'); // 立即执行

// 生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。
var p = new Promise((resolve, reject) => {
    reject("error");
})

// 等同于
var p = Promise.reject('error');


const thenable = {
    then(resolve, reject) {
        reject('error');
    }
}
Promise.reject(thenable).catch(e => { console.log(e === thenable) });

// 
var p = new Promise((resolve,reject)=>{
    let condition = true;

    if(condition){
        resolve('ok');
    }else{
        reject('no');
    }
})

p.then(function xxx(){
    // ……
}).then(function yyy(){
    // ……
}).catch(function ccc(){
    // ……
})

//创建实例pro1
let pro1 = new Promise(function(resolve){
    setTimeout(function () {
        resolve('实例1操作成功');
    },5000);
});

//创建实例pro2
let pro2 = new Promise(function(resolve){
    setTimeout(function () {
        resolve('实例2操作成功');
    },1000);
});


Promise.all((pro1,pro2).then(function(){
    
}))