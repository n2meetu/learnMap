function main(arr,sum){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if((i+j)==sum){  // 等于sum
               console.log(i,j); 
            }
        }
    }

}
var arr = [1,2,3,4,5,6,7,8,9];
main(arr,10);