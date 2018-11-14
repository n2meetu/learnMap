let str = '{"age":18,"name":"Allen"}'
let res = JSON.parse(str);
console.log(res);
console.log('666');

let json = {
    a:12,
    show:function(){
        console.log(this.a);
    }
};

json.show();