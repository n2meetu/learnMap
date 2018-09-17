for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // 1,2,3,4,5
    }, 1000 * i)
}


for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // 5，5，5，5,5
    }, 1000 * i)
}

for (var i = 0; i < 5; i++) {
    ((j) => {
        setTimeout(() => {
            console.log(j);
        }, 1000 * j)
    })(i)  // 5，5，5，5,5
}