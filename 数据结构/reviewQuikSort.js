// // 快排

function quickSort(arr) {
    if(arr.length<=1){
        return arr;//如果数组只有一个数，就直接返回；
    }

    var pivot = Math.floor(arr.length / 2);
    var pivotVal = arr.splice(pivot, 1);
    var left = [], right = [],key=arr[pivot];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < key) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivotVal, quickSort(right));//递归不断重复比较
}

console.log(quickSort([32, 45, 37, 16, 2, 87])); //弹出“2,16,32,37,45,87”