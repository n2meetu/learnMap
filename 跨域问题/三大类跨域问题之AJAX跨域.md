# 三大类跨域问题之AJAX跨域

> 跨域是浏览器的安全策略，是为了控制js不操作不同域的数据


1.cookie跨域
2.DOM无法获得
3.AJAX请求不能发送

本文讨论上述第3种。

## AJAX跨域
同源策略规定，AJAX请求只能发给同源的网址，否则就报错。

三种方法：
### 1.CORS
> ##### 浏览器发送简单请求时会自动在http头字段中加入：`Origin`字段，说明本次请求来自哪个源，

> ##### 服务器认为我的地址在许可范围内，它返回的响应，会多出几个头信息字段，其中有个字段是必须的，即`Access-control-allow-origin`。（acao）

注意，CORS请求默认不发送Cookie和HTTP认证信息。

想要发***送Cookie***，需要服务器和浏览器两边配合：

> ###### 服务器：添加`Access-control-origin-allow`字段
> ###### 浏览器：ajax请求中添加 `withCredentials：true`


### 2.Websocket协议

> 把自己的ip绑定一个163的host，通知后台将我的ip加入白名单。
> 服务器根据`Origin`字段判断请求来自哪个源，如果域名在白名单内，就允许通信。


### 3.JSONP
只能发GET请求。
**原理**：因为任何带有src属性的标签都可以跨域，比如图片、js文件等)

[参考](https://segmentfault.com/a/1190000012469713)


