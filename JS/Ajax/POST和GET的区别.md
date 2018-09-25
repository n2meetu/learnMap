# GET和POST的区别
从以下几个方面：
### 1.传输形式
get向服务器传数据，post从服务器取数据；

### 2.大小限制 
浏览器对url大小有限制，所以get请求不能发送大量数据
**GET** `4K~10K ` 
**POST** `2G` 传图片文件
### 3.安全性
GET：信息在url中（明文），不安全。
但是，另一方面，Get请求不会修改服务器数据，这个又是安全的；

POST是通过HTTP post机制，将表单内各个字段与其内容放置在`HTML HEADER`内一起传送到ACTION属性所指的URL地址。用户看不到这个过程。

### 4.缓存
GET有
POST没有，每次POST都会向服务器提取新的信息

### 6.GET请求是幂等的
    同一个请求，发送一次和发送N次效果是一样的！
    
### 7.读取形式
GET:`request.queryString`
POST:`request.From`
 