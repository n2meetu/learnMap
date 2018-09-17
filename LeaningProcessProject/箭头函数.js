let arr=[1,21,13,44,150];
// arr.sort(function(n1,n2){
//     return n1-n2;
// });
// console.log(arr);

// 改成箭头函数
arr.sort=((a,b)=>{
    return a-b;
})
console.log(arr);

let c = 2;
// 只有一个参数时，圆括号可以省略
c.show=c=>{
    return c*2;
}
console.log(c);

// 只返回一个return的时候，大括号也可以省略

let show=d=>d*2;
console.log(show(2));