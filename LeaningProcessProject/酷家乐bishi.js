function fill(start, stop, step) {
    var arr = [];
    if (arguments.length == 1) {//表示只有stop参数
        for (var i = 0; i < start; i++) {
            arr[i] = i;
        }
    } else if (arguments.length == 2) {
        var j = 0;
        for (var i = start; i < stop; i++) {
            arr[j++] = i;
        }
    } else if (arguments.length == 3) {
        var j = 0;
        for (var i = start; i * step < stop; i++) {
            arr[j++] = i * step;
        }
    }
    console.log(arr);
}