for(var i =0 ;i < 5; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },500*i);
    })(i);
}

// for (var i = 1; i < 6; i++) {
//     setTimeout(function timer(i) {
//         console.log(i);
//     }, i * 500,i);
// }