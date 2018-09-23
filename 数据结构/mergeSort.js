/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-09-03 11:16:21 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-03 11:19:56
 * 
 * 算法思想:
 * 
    把 n 个元素看成 n 个长度为 l 的有序子表
    进行两两归并使记录关键字有序，得到 n/2 个长度为 2 的有序子表
    重复第 2 步直到所有记录归并成一个长度为 n 的有序表为止。

 */

function merge_sort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
    var result = [];
    var i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j++]);
        }
        else {
            result.push(left[i++]);
        }
    }
    while (i < left.length) {
        result.push(left[i++]);
    }
    while (j < right.length) {
        result.push(right[j++]);
    }

    return result;
}

var arr = [10, 3, 59, 6, 72, 118];
var result = merge_sort(arr);
console.log(result); 
