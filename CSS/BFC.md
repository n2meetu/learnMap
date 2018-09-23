# BFC 块格式化上下文
[BFC文章参考](https://segmentfault.com/a/1190000013647777#articleHeader0)

同一个BFC中的div之间会存在外边距重合：
![](media/15375205343584.jpg)

```
<head>
div{
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
</head>
<body>
    <div></div>
    <div></div>
</body>
```
因为两个 div 元素都处于同一个 BFC 容器下 (这里指 body 元素) 所以第一个 div 的下边距和第二个 div 的上边距发生了重叠，所以两个盒子之间距离只有 100px，而不是 200px。

#### 解决办法:放到不同的BFC中去
[BFC demo](https://codepen.io/singsingasong/pen/JazbzQ)

### BFC能清除浮动
因为BFC有一个重要的特性是，BFC区域和float元素不会发生重叠。

所以在float的元素外面，包一个父级div，让这个父级div`overflow:hidden`，创建一个BFC区域，就可以解决高度塌陷问题。

### 还有哪些常见特性？
1. 和float不重合，可以清除浮动
2. 从上到下垂直排列，盒子间距由margin决定
3. 同一个BFC会出现**垂直外边**距重合问题
4. 独立的元素，BFC里面的布局不影响外面的元素