# 1px问题
[1px问题](http://peunzhang.cnblogs.com/)
[github文章参考](https://github.com/AlloyTeam/Mars/blob/master/solutions/border-1px.md#%E4%B8%80%E4%BD%BF%E7%94%A8border-image%E5%AE%9E%E7%8E%B0%E7%B1%BB%E4%BC%BCios7%E7%9A%841px%E5%BA%95%E8%BE%B9)

[推荐参考](https://segmentfault.com/a/1190000007604842)
[参考2](https://juejin.im/entry/584e427361ff4b006cd22c7c)
##1、 原因
因为dpr = 2;我们用1px设置border的宽度，在设备上就会被放大成两倍粗的线条。

#### 比如需要1px的下边框

## 2、解决方法
### 2.1 border-image
准备2px高度的图片，
一半透明，一半有颜色。
`border-width: 0 0 2px 0;`，`border-image:url("xxx.png" 0 0 2 0 stretch)`

### 2.2 transform:scaleY(0.5)
