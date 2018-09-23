var myModule = (function (window, undefined) {
    let name = "echo";
    function getName() {
        return name;
    }
    return {  // return把对象引用导出赋值给myModule，从而应用到闭包 
        name,
        getName
    }
})(window);

console.log(myModule.name); // echo
console.log(myModule.getName()); // echo