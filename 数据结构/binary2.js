/*
 * @Author: Greta Zhang
 * @Date: 2018-08-27 15:41:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-07 09:52:24
 */

/*
算法：折半插入排序--非递归
思想：
（1）将一新的元素插入到有序数组中，寻找插入点时，将带插区域的首元素设置为arr[low],末元素设置为arr[high],比较时则将待插元素与参考元素arr[mid]（m=(low+high)/2）相比较。；
（2）如果待插元素比参考元素小，则选择arr[low]到arr[m-1]为新的插入区域（即high=mid-1）,否则选择arr[m+1]到arr[high]为插入区域；
（3）如此直到low<=high不成立，即将此位置(low)之后所有元素后移一位，并将新元素插入a[high+1]中。
前提：序列已经有序  
*/
var binarySort = function (arr, n) {
    var len = arr.length,
        high = len,
        low = 1;

    while (high >= low) {
        var mid = Math.floor((high + low) / 2);
        if (n < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    for (var i = len; i > high; i--) {
        arr[i] = arr[i - 1];
    }
    arr[high + 1] = n;

    return arr;
}

var arr = [1, 3, 4, 6, 45, 76, 88, 450];
var res = binarySort(arr, 34);
console.log(res);