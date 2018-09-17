// 自己实现一个ajax
var oAjax = new XMLHttpRequest;    // new一个ajax对象
oAjax.post("GET","a.txt","true"); // 2. 建立连接：get请求，请求a.txt文件，执行异步操作
oAjax.send();   // 3.发送请求

// 4.接收返回信息
oAjax.onreadystatechange=function(){
    if(oAjax.onreadystatechange==4){ // 接收完毕
        if(oAjax.readyState == 200){   // 接收成功
            console.log(oAjax.respontText);  // 响应文本
         }else{  // 接收失败
            console.log(oAjax.status);
        }
    
    }
}

