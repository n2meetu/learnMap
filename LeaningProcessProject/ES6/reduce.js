// 输出一堆，返回一个
// 功能：汇总

let arr = [12,69,180,8763];

let res = arr.reduce(function(tmp,item,index){
    if(index==arr.length-1){
        return tmp+item;
    }else{
        return (tmp+item)/arr.length;
    }
});
console.log(result);