// 能被3整除的留下，不能的离开
// let arr = [12,5,18,28];
// let res= arr.filter(item=>item%3==0);

let arr = [12, 5, 8, 99, 27, 36, 75, 11];

let result = arr.filter(item => {
    return item > 30;
});

console.log('555', result);

// 选大于1w元的包包
let price = [
    { title: '男士衬衫', price: 75 },
    { title: '女士包', price: 57842 },
    { title: '男士包', price: 65 },
    { title: '女士鞋', price: 27531 }
];

let res1 = price.filter(json => json.price >= 10000);
console.log(res1);