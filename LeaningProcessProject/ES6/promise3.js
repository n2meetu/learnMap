let p1 = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'data/arr.txt',
        dataType: 'json',
        success(arr) {
            resolve(arr);
        },
        error(err) {
            reject(err);
        }
    })
});

let p2 = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'data/json.txt',
        dataType: 'json',
        success(arr) {
            resolve(arr);
        },
        error(err) {
            reject(err);
        }
    })
});

Promise.all([]).then(function(){
    console.log('其中有一个失败了!');
})