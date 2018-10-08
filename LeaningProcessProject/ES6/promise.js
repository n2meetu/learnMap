// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }

// timeout(100).then((value) => {
//     console.log(value);
// });

new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
}).then(
    console.log(3)
);

new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
}).then(
    console.log(3)
);

function getURL(URL) {
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}

const URL = "http://httpbin.org/get";
const URL2 = "http://deepred5.com/cors.php?search=ntr";

getURL(URL).then(function onFulfilled(value) {
    console.log(value);
    // 返回了一个新的Promise对象
    return getURL(URL2)
}).then(function onFulfilled(value) {
    console.log(value);
}).catch(function onRejected(error) {
    console.error(error);
});


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

getURL(URL).then(function xxx(){

}).then(function xxxx(){

}).then(function yyyy(){

}).catch(function zzz(){
    
})