/*
 * @Author: Greta Zhang
 * @Date: 2018-08-31 15:53:34 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-01 21:04:40
 * 冒泡排序：关键点在于‘相邻’元素之间的比较，而不是单纯的两两比较。
 */

function bubbleSort(arr) {
    var i, j;
    var flag = true;  // 标识符，是否交换
    for (i = 0; i < arr.length && flag; i++) {
        flag = false;
        for (j = arr.length-1;j>i; j--) {   // 遍历每个数字
            if (arr[j - 1] > arr[j]) {  //当前arr[i]和剩余未排序的数字一一比较
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                flag = true;
            }
        }
        if(!flag){ return arr;} // 若没交换，说明已经有序。直接返回arr
    }
    return arr;
}


var arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log(bubbleSort(arr));