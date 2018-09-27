function binarySort(arr) {
    for (var i = 1; i < arr.length; i++) {  // 默认第一个数字已经有序
        var temp = arr[i], high = i - 1, low = 0; // 从子表中找当前元素应该插入的位置
        while (low <= high) {
            var mid = Math.floor((high + low) / 2);
            if (temp < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        for (var j = i; j >= low; j--) {
            arr[j] = arr[j-1];
        }
        arr[low] = temp;
    }
    return arr;
}

var arr = [100, 24, 356, 176, 88, 205];
var res = binarySort(arr);
console.log(res);