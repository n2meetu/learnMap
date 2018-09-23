/*
 * @Author: Greta Zhang
 * @Date: 2018-08-27 21:29:42 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-09 20:20:59
 * 
 * 快速排序算法:
 *    最佳情况：中间的数把左右两边一分为二，O(nlogn)
 *    最差情况：是个递增或者递减的序列，O(n^2)
 */

function quickSort(arr){
    if(arr.length<=1){
        return arr;//如果数组只有一个数，就直接返回；
    }

    var pivot = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整
    var pivotVal = arr.splice(pivot,1);//找到中间数的值
    var left = [];
    var right = [];

    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivotVal){
            left.push(arr[i]);//基准点的左边的数传到左边数组
        }
        else{
            right.push(arr[i]);//基准点的右边的数传到右边数组
        }
    }
    return quickSort(left).concat(pivotVal,quickSort(right));//递归不断重复比较
}
console.log(quickSort([32,45,37,16,2,87])); //弹出“2,16,32,37,45,87”