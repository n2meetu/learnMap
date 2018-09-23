
// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },100);
// }

for(let i=0;i<5;i++){
   (function(j){
    setTimeout(function(){
        console.log(j);
    },100);
   })(i)
}
