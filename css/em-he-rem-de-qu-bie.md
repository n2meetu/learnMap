# em和rem的区别

美团面试问题之一。。

## ✨em是继承自父元素的

```text
<!-- html -->
<div class="parent">父元素
  <div class="child">子元素
      <p class="grandson">孙子</p>
   </div>
</div>

<!--css-->
.parend{
  font-size:48px;
}

.child{
  font-size:0.9em;
}

.grandson{
  font-size:0.8em;
}
/* grandson继承child，child继承parent  */
```

[demo](https://codepen.io/singsingasong/pen/eLrzdQ?editors=1100)

## ✨rem

### html的font-size

### 1rem = 根文字大小

