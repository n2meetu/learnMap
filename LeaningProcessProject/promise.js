// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }

// timeout(100).then((value) => {
//     console.log(value);
// });

new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
}).then(
    console.log(3)
);