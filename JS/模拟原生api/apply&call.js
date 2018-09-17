// 模拟apply
Function.prototype.myApply = function (context) {
    var context = context || window
    context.fn = this
    var result
    // 需要判断是否存储第二个参数 // 如果存在，就将第二个参数展开 
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
// 模拟 call (context后面的参数必须逐个传入)
Function.prototype.myCall = function (context) {
    var context = context || window
    // 给 context 添加一个属性
    // getValue.call(a, 'yck', '24') => a.fn = getValue context.fn = this
    // 将 context 后面的参数取出来
    var args = [...arguments].slice(1)
    // getValue.call(a, 'yck', '24') => a.fn('yck', '24') 
    var result = context.fn(...args)
    // 删除 fn
    delete context.fn
    return result
}

// // 有只猫叫小黑，小黑会吃鱼
// const cat = {
//     name: '猫咪',
//     eatFish(...args) {
//         console.log('this指向=>', this);
//         // console.log('...args', args);
//         console.log(this.name + '吃鱼');
//     },
// }

// const dog = {
//     name: '狗狗',
//     eatBone(...args) {
//         console.log('this指向=>', this);
//         // console.log('...args', args);
//         console.log(this.name + '吃骨头');
//     },
// }

// const test1 = cat.eatFish.bind(dog)
// // const test2 = dog.eatBone.bind(cat)
// test1()
// test2()


// 至于bind方法，他是直接改变这个函数的this指向并且返回一个新的函数，
// 之后再次调用这个函数的时候this都是指向bind绑定的第一个参数。
// 模拟bind() 和call、apply一样。只是它会返回一个函数
// Function.prototype.myBind = function (context) {
//     if (typeof this !== 'function') {
//         throw new TypeError('Error')
//     }

//     var _this = this // 有对象的嵌套，则this的值会随对象的改变而改变，因此先用_this保留最初的this
//     var args = [...arguments].slice(1) // 返回一个函数

//     return function F() {
//         // 因为返回了一个函数，我们可以 new F()，所以需要判断 if (this instanceof F) {
//         return new _this(...args, ...arguments)
//     }
//     return _this.apply(context, args.concat(...arguments))
// }

let obj = {
    ll: 'seve'
};


Function.prototype.bind = function (context) {
    var self = this;
    return function () {
        return self.apply(context, arguments);
    };
};

let func0 = function (a, b, c) {
    // console.log(this.ll);
    console.log([a, b, c]);
}.bind(obj, 1, 2);

func0(3); // seve
// [ 3, undefined, undefined ] 发现1，2并没有填入