// json数据也可以解构赋值
let {a,b,c}={a:1,b:2,c:3};
console.log(a,c,b);

// 1.左右两边数据类型必须一样
// 可以拆成各种粒度的
let [json,[n1,n2,n3],num,str]=[{a:12,b:5},[12,5,8],8,'cbgfh'];
console.log(json,n2,str);

// 2.右边必须合法
// var {a,b}={1,2};
// console.log('这个是错的。右边的格式不合法。既不是对象，又不是数组');

// 3.声明和赋值必须在一句话里完成  