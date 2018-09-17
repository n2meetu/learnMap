// 交换两个节点
function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：假设 结点 i 以下的子堆已经是一个大顶堆，
// shiftDown函数实现的功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
// 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点都执行 shiftDown操作，
// 所以就满足了结点 i 以下的子堆已经是一大顶堆
function shiftDown(A, i, length) {
    let temp = A[i]; // 当前父节点
    
    // j<length 的目的是对结点 i 以下的结点全部做顺序调整
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        if (j + 1 < length && A[j] < A[j + 1]) {
            j++;   // 找到两个孩子中较大的一个，再与父节点比较
        }
        if (temp < A[j]) {
            swap(A, i, j) // 如果父节点小于子节点:交换；否则跳出
            i = j;  // 交换后，temp 的下标变为 j
        } else {
            break;
        }
    }
}

// 堆排序
function heapSort(A) {
    // 初始化大顶堆，从第一个非叶子结点开始
    for (let i = Math.floor(A.length / 2) - 1; i >= 0; i--) {
        shiftDown(A, i, A.length);
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for (let i = Math.floor(A.length - 1); i > 0; i--) {
        swap(A, 0, i); // 根节点与最后一个节点交换
        shiftDown(A, 0, i); 
    }
}

let Arr = [1, 4, 3, 5, 6];
heapSort(Arr);
console.log(Arr);