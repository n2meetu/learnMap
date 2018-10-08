// map 
let arr=[12,5,8];
// let result = arr.map(function(item){
//     alert(item);
// });
 
// arr.map(function(){……})；

let result = arr.map(item=>{
    console.log(item);
});

// 分数在60分以上的
let score = [90,34,57,78,86];
let res = score.map(item=>item>=60?'及格':'不及格');
console.log(res);