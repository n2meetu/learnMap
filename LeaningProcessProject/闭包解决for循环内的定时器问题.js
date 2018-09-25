
// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },100);
// }

// for(let i=0;i<5;i++){
//    (function(j){
//     setTimeout(function(){
//         console.log(j);
//     },100);
//    })(i)
// }


// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, j*500);
//     })(i)
// }


for (var i = 1; i <= 5; i++) {
    (function(j){
            setTimeout(function timer() {
                 console.log(j);
            }, j * 1000);
    })(i)
}