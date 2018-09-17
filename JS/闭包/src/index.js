function a(){
    let a =1;
    function b(){
        console.log(a);
    }
    return b;
}

var closure = a();  // 引用
closure();   // 1