# 动画

### transition 过渡：比如 `transition:all 0.5s`

### transform 变形：缩放、旋转、移动、倾斜

**translate 移动：translate只是transform的一个属性值，即移动**

### animation 动画：有6个属性

### 例子1

```text
<!DOCTYPE html>
<html lang="en">

<head>
<title>transition</title>
<style>
#box {
  height: 100px;
  width: 100px;
  background: green;
  transition: transform 1s ease-in 1s;
}

#box:hover {
    transform: rotate(180deg) scale(.5, .5);
}
</style>
</head>
<body>
    <div id="box"></div>
</body>
</html>
```

transition 产生动画的条件是 它所设置的`property`发生变化，需要`事件驱动`.

**不足：**

1.事件驱动 2.不会重复，除非重复触发 3.只能定义两个状态：开始和结束，无中间状态。

**语法：transition: property duration timing-function delay;**

#### 例子2

```text
<style>

.box {
  height: 100px;
  width: 100px;
  border: 15px solid black;
  animation: changebox 1s ease-in-out 1s infinite alternate running forwards;
}

.box:hover {
    animation-play-state: paused;
}

@keyframes changebox {

  10% {
      background: red;
  }

  50% {
      width: 80px;
  }

  70% {
      border: 15px solid yellow;
  }

  100% {
    width: 180px;
    height: 180px;

  }

}

</style>

</head>

<body>

    <div class="box"></div>

</body>
```

animation就是好多个transition的叠加 ![](https://github.com/n2meetu/learnMap/tree/bb196769feaa69eee2d191df76bdae5fc46d6f89/CSS/media/15331077853760/15331086604224.jpg)

## 需求：绕着某个原点旋转360

页面加载完就自动旋转，不需要事件触发，且一直转--&gt;animation

