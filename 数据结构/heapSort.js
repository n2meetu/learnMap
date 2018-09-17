/*
 * @Author: Greta Zhang
 * @Date: 2018-09-01 21:37:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-07 11:35:55
 * 
 * 算法：堆排序
 * 关键：1.构造有序的大顶堆 2.交换堆顶元素和未排序数字中的最后一个元素后，如何将序列再次调整为大顶堆
 * 注意：构造大顶堆的时候，是将【非终端节点】当做根节点，将其和其子树调整为大顶堆
 */

function heapSort(arr) {
    // 建堆
    for (var i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }

    // 排序
    for (var j = arr.length - 1; j >= 0; j--) {
        swap(arr, 0, j);
        heapify(arr, 0, j);
    }

}
// 非递归
function heapify(arr, i, heapsize) {
    var temp = arr[i];

    for (var j = 2 * i + 1; j < heapsize; j = 2 * j + 1) {
        if (arr[j] < arr[j + 1] && j + 1 < heapsize) {
            j++;
        }

        if (temp < arr[j]) {
            swap(arr, i, j);
            i = j;
        } else {
            break;
        }
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let Arr = [1, 4, 3, 5, 6];
console.log(heapSort(Arr));