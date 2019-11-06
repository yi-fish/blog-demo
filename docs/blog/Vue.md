---
sidebarDepth: 2
prev: true
next: true
sidebar: auto
---

# Vue AQ
## try

链接：https://www.nowcoder.com/questionTerminal/41cdfbc12f69419cbb84a8d0f644117f

call（）方法和apply（）方法的作用相同，他们的区别在于接收参数的方式不同。对于call（），第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。（在使用call（）方法时，传递给函数的参数必须逐个列举出来。使用apply（）时，传递给函数的是参数数组）如下代码做出解释：

function add(c, d){ 
return this.a + this.b + c + d; 
} 
var o = {a:1, b:3}; 
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16 
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34 

## 一、DOCTYPE的作用
那么，它的作用是什么呢？

首先，这个声明不是 HTML 标签，而是一种语法格式。
DOCTYPE是定义浏览器使用什么样的文本类型定义（DTD）载入页面，也就是告诉浏览器使用什么样的HTML或者XHTML规范来解析html。一般情况下出现在html文档的开头。
xhtml中有四种模式：
- 1.xhtml 1.0 Strict 严格模式，不包含展示性与弃用的标签，不允许框架集(framesets)，且严格以xml格式来编写标记;
- 
- 2.xhtml 1.0 Transitional 过滤模式，包含展示性与弃用标签，不允许框架集(framesets)，且严格以xml格式来编写标记;
- 
- 3.xhtml 1.0 Frameset 宽松模式，包含展示性与弃用标签，允许框架集(framesets)，且严格以xml格式来编写标记;
- 
- 4.xhtml 1.1，等同于xhtml 1.0 strict，但允许添加模型。

## 二、严格模式和混杂模式
严格模式，又称标准模式，是指浏览器按照W3C标准来解析代码，一种严格要求的DTD，排版和JS运作模式均是以该浏览器支持的最高标准运行。

混杂模式，又称怪异模式或者兼容模式，是指浏览器按照自己的方式来解析代码，页面以宽松的向后兼容的方式显示，就严格度上来说不如严格模式，但是模拟老式浏览器的行为可以防止站点无法工作。

## 三、如何区分严格模式和混杂模式
区分的重点在于文档的DTD：
-  1.如果文档中包含了严格的DOCTYPE，那么它一般以严格模式呈现。
-  2.如果文档中包含过渡DTD和URI的DOCTYPE，也以严格模式呈现，但有过渡DTD而没有URI，会导致文档以混杂模式呈现。
-  3.DOCTYPE不存在或者形式不正确或有误，文档以混杂模式呈现。 
-  4.HTML5没有DTD，因此也就没有严格模式与混杂模式的区分，HTML5相对来说语法比较宽松。

## JavaScript变量： 变量命名原则
变量的命名相对而言没有太多的技术含量，今天整理有关于变量命名相关的原则，主要是想告诉大家，虽然命名没有技术含量，但对于个人编码，或者说一个团队的再次开发及阅读是相当有用的。良好的书写规范可以让你的JavaScript代码更上一个台阶，也更有利于团队的再次开发和阅读代码。

### 全名原则
- 变量名区分大小写，允许包含字母、数字、美元符号($)和下划线，但第一个字符不允许是数字，不允许包含空格和其他标点符号
- 变量命名长度应该尽可能的短，并抓住要点，尽量在变量名中体现出值的类型
- 尽量避免使用没有意义的命名
- 禁止使用JavaScript关键词、保留字全名
- 变量名命名方法常见的有匈牙利命名法、驼峰命名法和帕斯卡命名法

### 一、简单理解Vue中的nextTick
> Vue中的nextTick涉及到Vue中DOM的异步更新，感觉很有意思，特意了解了一下。其中关于nextTick的源码涉及到不少知识，很多不太理解，暂且根据自己的一些感悟介绍下nextTick。
```JS
1. <div class="app">
2.   <div ref="msgDiv">{{msg}}</div>
3.   <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
4.   <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
5.   <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
6.   <button @click="changeMsg">
7.     Change the Message
8.   </button>
9. </div>
```

### 二、应用场景

#### 下面了解下nextTick的主要应用的场景及原因。

>在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。

>在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
具体原因在Vue的官方文档中详细解释：

>Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部尝试对异步队列使用原生的 Promise.then 和MessageChannel，如果执行环境不支持，会采用 setTimeout(fn, 0)代替。

>例如，当你设置vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在事件循环队列清空时的下一个“tick”更新。多数情况我们不需要关心这个过程，但是如果你想在 DOM 状态更新后做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员沿着“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们确实要这么做。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。

- 作者：Ruheng
- 链接：https://www.jianshu.com/p/a7550c0e164f
- 来源：简书

### 三、nextTick源码浅析

#### 作用
Vue.nextTick用于**延迟执行一段代码**，它接受2个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回promise对象。
#### 源码
```js
1. /*** Defer a task to execute it asynchronously.*/
2. 
3. export const nextTick = (function () {
4.   const callbacks = []
5.   let pending = false
6.   let timerFunc
7. 
8.   function nextTickHandler () {
9.     pending = false
10.     const copies = callbacks.slice(0)
11.     callbacks.length = 0
12.     for (let i = 0; i < copies.length; i++) {
13.       copies[i]()
14.     }
15.   }
16. 
17.   // the nextTick behavior leverages the microtask queue, which can be accessed
18.   // via either native Promise.then or MutationObserver.
19.   // MutationObserver has wider support, however it is seriously bugged in
20.   // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
21.   // completely stops working after triggering a few times... so, if native
22.   // Promise is available, we will use it:
23.   /* istanbul ignore if */
24.   if (typeof Promise !== 'undefined' && isNative(Promise)) {
25.     var p = Promise.resolve()
26.     var logError = err => { console.error(err) }
27.     timerFunc = () => {
28.       p.then(nextTickHandler).catch(logError)
29.       // in problematic UIWebViews, Promise.then doesn't completely break, but
30.       // it can get stuck in a weird state where callbacks are pushed into the
31.       // microtask queue but the queue isn't being flushed, until the browser
32.       // needs to do some other work, e.g. handle a timer. Therefore we can
33.       // "force" the microtask queue to be flushed by adding an empty timer.
34.       if (isIOS) setTimeout(noop)
35.     }
36.   } else if (!isIE && typeof MutationObserver !== 'undefined' && (
37.     isNative(MutationObserver) ||
38.     // PhantomJS and iOS 7.x
39.     MutationObserver.toString() === '[object MutationObserverConstructor]'
40.   )) {
41.     // use MutationObserver where native Promise is not available,
42.     // e.g. PhantomJS, iOS7, Android 4.4
43.     var counter = 1
44.     var observer = new MutationObserver(nextTickHandler)
45.     var textNode = document.createTextNode(String(counter))
46.     observer.observe(textNode, {
47.       characterData: true
48.     })
49.     timerFunc = () => {
50.       counter = (counter + 1) % 2
51.       textNode.data = String(counter)
52.     }
53.   } else {
54.     // fallback to setTimeout
55.     /* istanbul ignore next */
56.     timerFunc = () => {
57.       setTimeout(nextTickHandler, 0)
58.     }
59.   }
60. 
61.   return function queueNextTick (cb?: Function, ctx?: Object) {
62.     let _resolve
63.     callbacks.push(() => {
64.       if (cb) {
65.         try {
66.           cb.call(ctx)
67.         } catch (e) {
68.           handleError(e, ctx, 'nextTick')
69.         }
70.       } else if (_resolve) {
71.         _resolve(ctx)
72.       }
73.     })
74.     if (!pending) {
75.       pending = true
76.       timerFunc()
77.     }
78.     if (!cb && typeof Promise !== 'undefined') {
79.       return new Promise((resolve, reject) => {
80.         _resolve = resolve
81.       })
82.     }
83.   }
84. })()

```
首先，先了解nextTick中定义的三个重要变量。

- callbacks 用来存储所有需要执行的回调函数

- pending 用来标志是否正在执行回调函数

- timerFunc 用来触发执行回调函数

接下来，了解nextTickHandler()函数。
```js
1. function nextTickHandler () {
2.     pending = false
3.     const copies = callbacks.slice(0)
4.     callbacks.length = 0
5.     for (let i = 0; i < copies.length; i++) {
6.       copies[i]()
7.     }
8.   }
9. 
```
这个函数用来执行callbacks里存储的所有回调函数。

- 接下来是将触发方式赋值给timerFunc。
- 先判断是否原生支持promise，如果支持，则利用promise来触发执行回调函数；
- 否则，如果支持MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数。
- 如果都不支持，则利用setTimeout设置延时为0。

最后是queueNextTick函数。因为nextTick是一个即时函数，所以queueNextTick函数是返回的函数，接受用户传入的参数，用来往callbacks里存入回调函数。
![执行流程](https://upload-images.jianshu.io/upload_images/3985563-a9e7d48417e3900f.png?imageMogr2/auto-orient/strip|imageView2/2/w/902/format/webp)

上图是整个执行流程，关键在于timeFunc()，该函数起到延迟执行的作用。

从上面的介绍，可以得知timeFunc()一共有三种实现方式。
- Promise
- MutationObserver
- setTimeout

其中Promise和setTimeout很好理解，是一个异步任务，会在同步任务以及更新DOM的异步任务之后回调具体函数。

下面着重介绍一下MutationObserver。

MutationObserver是HTML5中的新API，是个用来监视DOM变动的接口。他能监听一个DOM对象上发生的子节点删除、属性修改、文本内容修改等等。
调用过程很简单，但是有点不太寻常：你需要先给他绑回调：
```js
var mo = new MutationObserver(callback)
```
通过给MutationObserver的构造函数传入一个回调，能得到一个MutationObserver实例，这个回调就会在MutationObserver实例监听到变动时触发。

这个时候你只是给MutationObserver实例绑定好了回调，他具体监听哪个DOM、监听节点删除还是监听属性修改，还没有设置。而调用他的observer方法就可以完成这一步:

```js
1. var domTarget = 你想要监听的dom节点
2. mo.observe(domTarget, {
3.       characterData: true //说明监听文本内容的修改。
4. })

```

在nextTick中 MutationObserver的作用就如上图所示。在监听到DOM更新后，调用回调函数。

# VV

## part 2

```js
1. var domTarget = 你想要监听的dom节点
2. mo.observe(domTarget, {
3.       characterData: true //说明监听文本内容的修改。
4. })

```



### 四、nextTick源码浅析


```js
1. var domTarget = 你想要监听的dom节点
2. mo.observe(domTarget, {
3.       characterData: true //说明监听文本内容的修改。
4. })

```

## part 3
### 五、

