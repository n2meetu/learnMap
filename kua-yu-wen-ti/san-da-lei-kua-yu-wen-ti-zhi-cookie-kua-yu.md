# 三大类跨域问题之Cookie跨域

> 跨域是浏览器的安全策略，是为了控制js不操作不同域的数据

_**注意：cookie 的不区分协议与端口**_

## 一、ajax可以传送cookie，为什么还要单独解决cookie的跨域问题？

### 一种情况是：

不同子目录的cookie跨域问题，

> 在同一个服务器上有目录如下：`/test/`,`/test/cd/`,`/test/dd/`， 现设一个cookie1的path为`/test/`，cookie2的path为`/test/cd/`，那么test下的所有页面都可以访问到cookie1，而`/test/`和`/test/dd/`的子页面不能访问cookie2。这是因为cookie能让其path路径下的页面访问。

#### 其他可能情况是：

> 如果是一个集群项目，一个前端页面对应n个服务器接口，**每个接口的端口不同**，其他相同。 如果其中一台服务器挂了，马上就会连到另外一台，但是它们跨域了👆。这时必须解决cookie的跨域问题。

### 二、综上，cookie跨域问题需要结合`domain`和`path`。

`domain`属性将指定可访问此cookie的域名，`path`属性将指定该cookie的页面路径。

**1.设置cookie的path：**

`document.cookie = "name=aaa;path=/"`

**2.设置domain**

域A为`t1.test.com`，域B为`t2.test.com`，那么在域A生产一个令域A和域B都能访问的cookie就要将该cookie的domain设置为`.test.com`；

[参考](http://lihaiming.iteye.com/blog/2234372)

第三种方法，后台服务器nginx反向代理。（不了解，暂不展开）

