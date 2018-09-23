// 数组去重
// 方法1：最原始
function unique(arr) {
    let len = arr.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        for (var j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                break;
            }
        }

        // 判断j是否等于res.length
        if (j === res.length) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(unique([1, 2, '3', 3, 4, 4, 5, 2]));

// 方法2：
function sortfun(i, j) {
    return i - j;
}

function unique2(arr) {
    arr.sort(sortfun);
    var res = [arr[0]];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== res[res.length - 1]) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(unique2([1, 2, '3', 3, 4, 4, 5, 2]));

// 用es6的set set本身就是不允许重复元素出现的
function unique3(arr) {
    let res = [...new Set(arr)];
    return res;
}

var unique4 = (arr => [...new Set(arr)]);
console.log('第四种：', unique4([1, 2, '3', 3, 4, 4, 5, 2]));

// 用es6的Map
function unique5(arr) {
    const seen = new Map();
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}
console.log('第5种：', unique4([1, 2, '3', 3, 4, 4, 5, 2]));

// 用object的key不能重复
function unique6(arr) {
    var obj = {};
    return arr.filter(function (item){
        return obj.hasOwnProperty(item) ? false : (obj[item] = true)
    })
}
console.log('第6种：', unique4([1, 2, '3', 3, 4, 4, 5, 2]));