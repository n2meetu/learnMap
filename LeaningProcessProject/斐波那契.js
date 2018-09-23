// // 递归
// function fibonacci(n) {
//     if (n == 0 || n == 1)
//         return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// var res = fibonacci(6);
// console.log(res);


// // ES6
// let fib = n => (n > 1) ? f(n - 1) + f(n - 2) : n;

// 非递归
function fibonacci(n) {
    var last = 1;
    var last2 = 0;
    var current = last2;
    for (var i = 1; i <= n; i++) {
        // 往后挪一个
        last2 = last;
        last = current;
        current = last + last2;
        console.log(current);
    }
    return current
}

console.log('结果：',fibonacci(8));