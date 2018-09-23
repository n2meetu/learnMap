# 1px问题

[1px问题](http://peunzhang.cnblogs.com/) [github文章参考](https://github.com/AlloyTeam/Mars/blob/master/solutions/border-1px.md#一使用border-image实现类似ios7的1px底边)

[推荐参考](https://segmentfault.com/a/1190000007604842) [参考2](https://juejin.im/entry/584e427361ff4b006cd22c7c)

### 比如需要1px的下边框

## 1.border-image

准备2px高度的图片， 一半透明，一般有颜色。 `border-width: 0 0 2px 0;`，`border-image:url("xxx.png" 0 0 2 0 stretch)`

## 2.transform:scaleY\(0.5\)

