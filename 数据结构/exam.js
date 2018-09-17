var china = {
    a: '1',
    b: '2',
    c: {
        d: '3'
    },
    d: function aa (x) {console.log(666)},
   age: undefined

}
//深复制，要想达到深复制就需要用递归
function deepCopy(o, c) {
    var c = c || {}
    for (var i in o) {
        if (typeof o[i] === 'object') {
            //要考虑深复制问题了
            if (o[i].constructor === Array) {
                //这是数组
                c[i] = []
            } else {
                //这是对象
                c[i] = {}
            }
            deepCopy(o[i], c[i])
        } else {
            c[i] = o[i]
        }
    }
    return c
}
var result = { name: 'result' }
result = deepCopy(china, result)

console.log(result);
console.log(china);

// json字符串解析
var test ={
    name:{
     xing:{ 
         first:'张',
         second:'李'
    },
    ming:'老头'
},
age :40,
friend :['隔壁老王','宋经纪','同事']
}
var result = JSON.parse(JSON.stringify(test));
result.age = 30
result.name.xing.first = '往'
result.friend.push('fdagldf;ghad')
console.dir(test)
console.dir(result)