/*
 * @Author: Greta Zhang
 * @Date: 2018-08-27 19:49:53 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-05 16:19:37
 * 
 * 插入排序：每个要插入的关键字都和数组中已经排好的元素进行比较（从后往前比）
 * 
 */

function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

var arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log(insertSort(arr));
