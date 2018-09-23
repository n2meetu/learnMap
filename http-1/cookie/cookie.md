# cookie

## 1.特点：

名，值，有效期 数量和大小都有限：4k，一般50个 如果没有设置有效期，浏览器关闭后就失效

## 2.基本使用

[cooke操作.html](https://github.com/n2meetu/InterviewPreparation/blob/master/Cookie/cookie.html)

`document.cookie`

## 3.属性

#### domain

#### expires

#### httpOnly:

和secure的区别 不能通过js脚本读取到cookie信息--&gt;能防御xss攻击

### secure

只能通过HTTPS连接从浏览器传递到服务器端

#### path

谁能访问cookie

[domain和path的理解](https://www.cnblogs.com/fsjohnhuang/archive/2011/11/22/2258999.html)

简单说一下ssl加密 没有用ssl协议发送报文时，报文是被对称加密的（发送方和接收方都是）。但是ssl协议让发送方用对称加密，接收方用_**非**_对称加密。

