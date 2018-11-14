const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

// 比较generate写法和async写法
const gen = function* () {
    const f1 = yield readFile('/etc/fstab');
    const f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

const asyncReadFile = async function () {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

const readFile = function(fileName){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,function(err,data){
            if(err) return reject(err);
            resolve(data);
        });
    });
};

const readFile = async function(){
    const f1 = await readFile();
    const f2 = await readFile();
}