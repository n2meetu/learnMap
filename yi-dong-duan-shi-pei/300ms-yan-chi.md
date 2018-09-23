# 300ms延迟

## 一.什么是300ms延迟？

我们点击页面的时候移动端浏览器并不是立即作出反应，而是会等上一小会儿才会出现点击的效果

## 二.为什么有延迟？

因为移动端有双击缩放事件，所以当我们点击touch屏幕后，浏览器会等一会儿，确定是否会点击第二次形成缩放事件。

## 三.怎么解决？

### 方案1：禁用缩放

。。。。

### 方案2 ：

`<meta content="width=device-width">` 浏览器知道网页已经响应式布局，会自动取消缩放事件

不是完全禁用缩放，只是禁用了浏览器默认的**双击缩放**行为，但用户仍然可以通过双指缩放操作来缩放页面。

### 方案3：

在touch事件的某个处理函数中 执行 `e.preverDefault`即可

touch行为比click要优先，那在touch的时候组织click事件触发，也是种思路。

[拿这个html自己试一下](https://github.com/n2meetu/InterviewPreparation/blob/master/移动端/delay300ms.html)

