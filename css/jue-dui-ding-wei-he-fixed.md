# 绝对定位和fixed

这两个货分别是相对于哪个标签进行定位？？

## 场景：

css：

```text
.a{
    position: relative;
}

.b{
    position: fixed;
}

.c{
    position: absolute;
}
```

html:

```text
<div class="a">
    <div class="b">
        <div class="c"></div>
    </div>
</div>
```

#### 问: div.c相对于 a还是b进行定位？？

## [demo](https://codepen.io/singsingasong/pen/EebeEe?editors=1100)

### 1.absolute

相对于static定位以外的第一个父元素进行定位。

### 2.fixed

相对于浏览器的位置进行定位

#### 譬如，浏览器滚动的时候，fixed定位的元素不动，absolute定位的元素会移动。

### ✨答案:

**相对于div.b**

