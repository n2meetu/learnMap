a = [1,3,35,6,73,2];
console.log(...a);

function sum (...vals){
    let sum=0;
    for(var val of vals){
        sum+=val;
    }
    console.log(sum);
}

sum(1,2,3);