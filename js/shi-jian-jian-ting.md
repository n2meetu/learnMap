# 事件监听

## 冒泡传递（从内到外）

## 捕获传递（从外到内）

![](../.gitbook/assets/15373746977421%20%281%29.jpg)

## 例子

```text
document.addEventListener('click',functiona(){ },false) ;
document.addEventListener('click',functionb(){ },false) ;
<div onclick="functionb">
    <div onclick = "functiona">
           点击先触发哪个事件？
    </div>
</div>
点击文本两个div事件同时响应，此时先后顺序是:
如果为false 则阻止捕获，先响应functiona,在响应functionb，否则，响应顺序相反。
```

