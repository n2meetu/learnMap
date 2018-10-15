// 相对特殊的函数

// 普通的函数执行后不可以暂停
// generate函数中间可以停顿
function* show() {
    yield console.log('a');

    yield console.log('b');
}

let genObj = show();
genObj.next(); 
genObj.next(); 