/*
 * @Author: Greta Zhang
 * @Date: 2018-08-27 15:41:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-27 19:38:22
 */

/*
算法：折半插入排序--递归
前提：序列已经有序  
*/
function binarySort (arr,n,low,high) {
    var mid = Math.floor((high + low)/2);

    if(high < low){
        for (var i = arr.length; i > high; i--) {
            arr[i] = arr[i - 1];
        }
        arr[high + 1] = n;
        return arr;
    }else{
        if( n >= arr[mid]){
            return binarySort(arr,n,mid+1,high);
        }else{
            return binarySort(arr,n,low,mid-1);
        }
    }
}

var arr = [1, 3, 4, 6, 45, 76, 88, 450];
var res = binarySort(arr,34,1,arr.length);
console.log(res);