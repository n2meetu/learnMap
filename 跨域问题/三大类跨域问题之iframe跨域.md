# 三大类跨域问题之iframe跨域

> 跨域是浏览器的安全策略，是为了控制js不操作不同域的数据

共四种方法：
1. 片段标识符
2. window.name（内容比较少时）
3. window.postMessage（计算量比较大时）
4. LocalStorage（H5的。兼容低版本时不建议用）

### 1.片段标识符
url中“`#`”后面部分。
`onhashchange`方法，URL 参数列表只要变化就会调用它。

```
window.onhashchange = checkMessage;

function checkMessage() {
  var message = window.location.hash;
  // ...
}
```
改变某个页面的片段标识符：
`xxx.location.href = target + '#' + hash;`

### 2.window.name

#### 2.1 如果是父/子窗口：

> 1.从主窗口`iframe1`打开一个子窗口`iframe2`，把数据data写入`iframe2`的`window.name`属性里。（实际上就是给`iframe2`起了个名字，名字就是要传输的数据data）

> 2.然后让`iframe2`的`location`跳去一个和`iframe1`一个域的地址。（必须父窗口和子窗口同源，父窗口才能读取到子窗口的name）

> 3.`iframe1`去读`iframe2`的`window.name`的值，也就是数据data。
> 
> 有三个页面：

* **页面a**: a.com/app.html：**应用页面**。

* **页面c**: a.com/proxy.html：**代理文件**，一般是一个没有任何内容的html文件，需要_和应用页面在同一域下_。

* **页面b**: b.com/data.html：应用页面需要获取数据的页面，可称为数据页面。

> 在a页面（a.com/app.html）中创建一个iframe，把其src指向b页面（b.com/data.html）。
> ` iframe.src = 'http://b.com/data.html';`

> b页面里写window.name = "数据内容(字符串，json都行)"
> 
> _*a页面监听iframe的onload事件，监听到了，就将iframe的src指向本地域的代理文件c。*_（c页面和a页面是同一个域的）
> 
> `iframe.contentWindow.location = "http://a.com/proxy.html"; `


> b页面拿到数据，a页面小会iframe，释放内存

```
var state = 0;
iframe = document.createElement('iframe');
var loadfn = function(){
    if(state === 0){
        state = 1;
        iframe.contentWindow.location = "http://a.com/proxy.html";
    }else{
        var data = iframe.contentWindow.name;
        console.log(data); //拿到数据
    }
}

iframe.src = "http://b.com/data.html";
if(iframe.attachEvent){
    iframe.attachEvent('onload',loadfn);
}else{
    iframe.onload = loadfn;
}

document.body.appendChild(child);
```


总结：如果跨域了，通过iframe的src跳转一下，指向一个代理文件。代理文件和发送数据的文件是一个域下面的，跨域成功，拿到数据。拿完就把iframe销毁，免得随便谁来了它都src跳转。

#### 2.2 如果是在同一个窗口：
先打开A，然后输入新的地址，还是这个窗口，跳转到B，window.name是不变的，而且B还能读到。


[参考](http://www.cnblogs.com/rainman/archive/2011/02/21/1960044.html)

### 3.window.postMessage

父窗口 http://aaa.com 向子窗口 http://bbb.com 发消息:

```
var popup = window.open("http://bbb.com","title");

popup.postMessage("hello","http://bbb.com");
```


子窗口向父窗口发送消息：

```
window.opener.postMessage('Nice to see you',"http://aaa.com");
```


#### 4.LocalStorage

子窗口将父窗口发来的消息写入自己的localStorage；
（没用过，整理了也记不住。暂时只写这些）

