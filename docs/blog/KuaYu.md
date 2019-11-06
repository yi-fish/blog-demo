---
sidebarDepth: 1
prev: true
next: true
sidebar: auto
---

# git add -A 和 git add . 的区别

- ·  git add -A  提交所有变化
- 
- ·  git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)
- 
- ·  git add .  提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件
```js
1. git init
2. echo Change me > change-me
3. echo Delete me > delete-me
4. git add change-me delete-me
5. git commit -m initial
6.  
7. echo OK >> change-me
8. rm delete-me
9. echo Add me > add-me
10.  
11. git status
12. # Changed but not updated:
13. #   modified:   change-me
14. #   deleted:    delete-me
15. # Untracked files:
16. #   add-me
17.  
18. git add .
19. git status
20.  
21. # Changes to be committed:
22. #   new file:   add-me
23. #   modified:   change-me
24. # Changed but not updated:
25. #   deleted:    delete-me
26.  
27. git reset
28.  
29. git add -u
30. git status
31.  
32. # Changes to be committed:
33. #   modified:   change-me
34. #   deleted:    delete-me
35. # Untracked files:
36. #   add-me
37.  
38. git reset
39.  
40. git add -A
41. git status
42.  
43. # Changes to be committed:
44. #   new file:   add-me
45. #   modified:   change-me
46. #   deleted:    delete-me
```


# 下面这个JS程序的输出是什么：
```js
1. function Foo() {
2.     var i = 0;
3.     return function() {
4.         console.log(i++);
5.     }
6. }
7.  
8. var f1 = Foo(),
9.     f2 = Foo();
10. f1();
11. f1();
12. f2();

```
> 首先返回的function函数赋值给全局变量f1，因此function函数就被储存在了内存中，因为foo函数是function函数
的父函数，于是foo函数和局部变量i也被存在了内存。之后f1（）被调用了两次，第一次调用时i=0，因为是i++，先输出
i的值0，然后再++；第二次调用是i=1，所以先输出1；而f2是一个新的变量，因此i的值初始化为0。

1. （1）Function是引用类型：保存在堆中，变量f1,f2是保存在栈中；
2. （2）闭包：一个函数（产生新的作用域）定义的局部变量、子函数的作用域在函数内，
         但是一旦离开了这个函数，局部变量就无法访问，所有通过返回子函数到一个变量f1的方法，让
         f1指向堆中的函数作用域，这样可以使用局部变量i.
3.  (3) 过程：
   第一次f1()  : f1=Foo()中，先执行Foo(): i = 0,return值返回给f1(f1指向子函数   f1()=function(){.....},
                 因为子函数没有 定义i，所以向上找到父函数定义的 i:  )并执行子函数 
		 输出i=0,再自加 i =1(覆盖了父函数Foo 的 i值);
   第二次f1()  : 执行的是子函数 Function(){  ..},输出的是父函数 的 i=1,再自加 i =2;
   第一次f2()  : 同第一次f1(),不同的是 f2指向堆中一个新的对象 function(){ ...},所有此i非彼i,输出i=0;如果
                如果再次f2(),那么和第二次f1(),一样输出i=1;

# 浏览器内核

1. Trident --- IE、360、猎豹、搜狗
2. Gecko --- 火狐
3. Webkit --- Safari、chrome、猎豹、搜狗
4. Blink --- 由Google和Opera Software开发的浏览器排版引擎，是开源引擎WebKit中WebCore组件的一个分支



# 浏览器中使用js跨域获取数据的几种方式


## 在读这篇文章之前，你需要了解的？
URL：统一资源定位符，是互联网上资源的网址
例如http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name

### Paste_Image.png
1.协议部分：该URL的协议部分为“http：”，这代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，HTTPS，FTP等等本例中使用的是HTTP协议。在"HTTP"后面的“//”为分隔符
2.域名部分：该URL的域名部分为“www.aspxfans.com”。一个URL中，也可以使用IP地址作为域名使用
3.端口部分：跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个URL必须的部分，如果省略端口部分，将采用默认端口
4.虚拟目录部分：从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个URL必须的部分。本例中的虚拟目录是“/news/”
5.文件名部分：从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个URL必须的部分，如果省略该部分，则使用默认的文件名
6.参数部分：从“？”开始到“#”为止之间的部分为参数部分，又称搜索部分、查询部分。本例中的参数部分为“boardID=5&ID=24618&page=1”。参数可以允许有多个参数，参数与参数之间用“&”作为分隔符。
7.锚部分：从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个URL必须的部分

### 我们是如果通过浏览器访问页面的？

当我们打开浏览器，在浏览器的地址栏中输入URL地址http://www.gacl.cn:8080/WebDemo1/1html去访问服务器上的1.html这个web资源的过程中，浏览器和服务器都做了神马操作呢，我们是怎么在浏览器里面看到1.html这个web资源里面的内容的呢？

浏览器和服务器做了以下几个操作：

1、浏览器根据主机名"www.gacl.cn"去操作系统的Hosts文件中查找主机名对应的IP地址。
2、浏览器如果在操作系统的Hosts文件中没有找到对应的IP地址，就去互联网上的DNS服务器上查找"www.gacl.cn"这台主机对应的IP地址。
3、浏览器查找到"www.gacl.cn"这台主机对应的IP地址后，就使用IP地址连接到Web服务器。
4、浏览器连接到web服务器后，就使用http协议向服务器发送请求，发送请求的过程中，浏览器会向Web服务器以Stream(流)的形式传输数据，告诉Web服务器要访问服务器里面的哪个Web应用下的Web资源
5、浏览器做完上面4步工作后，就开始等待，等待Web服务器把自己想要访问的1.html这个Web资源传输给它。
6、服务器接收到浏览器传输的数据后，开始解析接收到的数据，服务器解析"GET /WebDemo1/1.html "里面的内容时知道客户端浏览器要访问的是WebDemo1应用里面的1html这个Web资源，然后服务器就去读取1.html这个Web资源里面的内容，将读到的内容再以Stream(流)的形式传输给浏览器，
7、浏览器拿到服务器传输给它的数据之后，就可以把数据展现给用户看了

### 相同域？
在客户端编程语言中，同源策略是一个很重要的安全理念，它在保证数据的安全性方面有着重要的意义。同 源策略规定跨域之间的脚本是隔离的，一个域的脚本不能访问和操作另外一个域的绝大部分属性和方法。

当两个域具有相同的协议，相同的域名，同端口，说明这是相同域，其中任意一个不同，都属于跨域。

受到同源策略的影响，跨域资源共享就会受到制约。但是随着人们的实践和浏览器的进步，目前在跨域请求的技巧上，有很多宝贵经验的沉淀和积累。这里我把跨域资源共享分成两种，一种是单向的数据请求，还有一种是双向的消息通信。接下来罗列出常见的一些跨域方式.

### 单项跨域
JSONP
JSONP (JSON with Padding)是一个简单高效的跨域方式，HTML中的script标签可以加载并执行其他域的javascript，于是我们可以通过script标记来动态加载其他域的资源。

在js中，我们直接用XMLHttpRequest请求不同域上的数据时，是不可以的，但是，众所周知，script的标签有一个src属性，指向一个地址，加载成功之后就可以成功调用里面的文件。那么，我们可以以这种形式，进行跨域访问。jsonp正是利用这个特性来实现的。

举个栗子

```js
1. //script可以跨域
2. //需要跨域的时候可以创建一个script标签
3. var jsonp = document.createElement("script");
4. //指定类型
5. jsonp.type = "text/javascript";
6. //添加链接地址
7. jsonp.src = "http://10.0.154.249/text.js?callback=jsonpCallback";
8. //将这个拼接 好的script标签添加到head标签中。
9. document.getElementsByTagName("head")[0].appendChild(jsonp);
10. //回调函数
11. function jsonpCallback(ret){
12.     alert(ret)
13. }
```

在异地服务器中，有一个text.js文件，我们只要把需要传输的数据，以参数的形式，传递到我们的回调函数中就可以了。

异地服务中text.js文件内容

jsonpCallback("饭饭爱分享");
运行结果

01.jpg
当然上栗也可以直接写一个script标签或者向笔者这样动态创建script标签。

这样jsonp的原理就很清楚了，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。所以jsonp是需要服务器端的页面进行相应的配合的。

如果你的页面使用jquery，那么通过它封装的方法就能很方便的来进行jsonp操作了。
```js
1. <script>
2. $.getJSON(''http://10.0.154.249/text.js?callback=?",function(ret ){
3.     alert(ret)
4. })
5. </script>
```

原理是一样的，只不过我们不需要手动的插入script标签以及定义回掉函数。jquery会自动生成一个全局函数来替换callback=?中的问号，之后获取到数据后又会自动销毁，实际上就是起一个临时代理函数的作用。$.getJSON方法会自动判断是否跨域，不跨域的话，就调用普通的ajax方法；跨域的话，则会以异步加载js文件的形式来调用jsonp的回调函数。

JSONP易于实现，但是也会存在一些安全隐患，如果第三方的脚本随意地执行，那么它就可以篡改页面内容，截获敏感数据。但是在受信任的双方传递数据，JSONP是非常合适的选择。

### window.name
window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中。当然，如果有需要，其中的任何一个页面都可以对window.name的值进行修改。的，并不会因新页面的载入而进行重置。

注意，window.name的值只能是字符串的形式，这个字符串的大小最大能允许2M左右甚至更大的一个容量，具体取决于不同的浏览器，但一般是够用了。

举个栗子
比如有一个www.example.com/a.html页面,需要通过a.html页面里的js来获取另一个位于不同域上的页面www.cnblogs.com/data.html里的数据。
data.html页面里的代码很简单，就是给当前的window.name设置一个a.html页面想要得到的数据值。data.html里的代码:

11.png
那么在a.html页面中，我们怎么把data.html页面载入进来呢？显然我们不能直接在a.html页面中通过改变window.location来载入data.html页面，因为我们想要即使a.html页面不跳转也能得到data.html里的数据。答案就是在a.html页面中使用一个隐藏的iframe来充当一个中间人角色，由iframe去获取data.html的数据，然后a.html再去得到iframe获取到的数据。

充当中间人的iframe想要获取到data.html的通过window.name设置的数据，只需要把这个iframe的src设为www.cnblogs.com/data.html就行了。然后a.html想要得到iframe所获取到的数据，也就是想要得到iframe的window.name的值，还必须把这个iframe的src设成跟a.html页面同一个域才行，不然根据前面讲的同源策略，a.html是不能访问到iframe里的window.name属性的。这就是整个跨域过程。
看下a.html页面的代码：

12.png

上面的代码只是最简单的原理演示代码，你可以对使用js封装上面的过程，比如动态的创建iframe,动态的注册各种事件等等，当然为了安全，获取完数据后，还可以销毁作为代理的iframe。

### 双向跨域
document.domain
浏览器都有一个同源策略，其限制之一就是第一种方法中我们说的不能通过ajax的方法去请求不同源中的文档。 它的第二个限制是浏览器中不同域的框架之间是不能进行js的交互操作的。有一点需要说明，不同的框架之间（父子或同辈），是能够获取到彼此的window对象的，但是你却不能使用获取到的window对象的属性和方法(html5中的postMessage方法是一个例外)，

比如有一个页[http://www.example.com/a.html](http://www.example.com/a.html)，这个页面里面有一个iframe，它的src是http://example.com/b.html 很显然，这个页面与它里面的iframe框架是不同域的，所以我们是无法通过在页面中书写js代码来获取iframe中的东西的。

02.png
但是我们可以使用document.domain，我们只要把http://example.com/a.html和http://example.com/b.html这两个页面的document.domain都设成相同的域名就可以了。但要注意的是，document.domain的设置是有限制的，我们只能把document.domain设置成自身或更高一级的父域，且主域必须相同。例如：a.b.example.com 中某个文档的document.domain 可以设成a.b.example.com、b.example.com 、example.com中的任意一个，但是不可以设成 c.a.b.example.com,因为这是当前域的子域，也不可以设成baidu.com,因为主域已经不相同了。
在http://example.com/a.html中设置document.domain
03.png

在页面 http://example.com/b.html中也设置document.domain，而且这也是必须的，虽然这个文档的domain就是example.com,但是还是必须显示的设置document.domain的值.
04.png

这样我们就可以通过js访问到iframe中的各种属性和对象了。
不过如果你想在http://www.example.com/a.html页面中通过ajax直接请求http://example.com/b.html页面，即使你设置了相同的document.domain也还是不行的，所以修改document.domain的方法只适用于不同子域的框架间的交互。
如果你想通过ajax的方法去与不同子域的页面交互，除了使用jsonp的方法外，还可以用一个隐藏的iframe来做一个代理。原理就是让这个iframe载入一个与你想要通过ajax获取数据的目标页面处在相同的域的页面，所以这个iframe中的页面是可以正常使用ajax去获取你要的数据的，然后就是通过我们刚刚讲得修改document.domain的方法，让我们能通过js完全控制这个iframe，这样我们就可以让iframe去发送ajax请求，然后收到的数据我们也可以获得了。

### window.postMessage
window.postMessage(message,targetOrigin) 方法是html5新引进的特性，可以使用它来向其它的window对象发送消息，无论这个window对象是属于同源或不同源，目前IE8+、FireFox、Chrome、Opera等浏览器都已经支持window.postMessage方法。

调用postMessage方法的window对象是指要接收消息的那一个window对象，该方法的第一个参数message为要发送的消息，类型只能为字符串；第二个参数targetOrigin用来限定接收消息的那个window对象所在的域，如果不想限定域，可以使用通配符 * 。

需要接收消息的window对象，可是通过监听自身的message事件来获取传过来的消息，消息内容储存在该事件对象的data属性中。

上面所说的向其他window对象发送消息，其实就是指一个页面有几个框架的那种情况，因为每一个框架都有一个window对象。在讨论第二种方法的时候，我们说过，不同域的框架间是可以获取到对方的window对象的，而且也可以使用window.postMessage这个方法。下面看一个简单的示例，有两个页面

20.png
21.png

我们运行a页面后得到的结果:

22.png

我们看到b页面成功的收到了消息。

使用postMessage来跨域传送数据还是比较直观和方便的，但是缺点是IE6、IE7不支持，所以用不用还得根据实际需要来决定。

本文参考1：http://web.jobbole.com/88525/
本文参考2：http://www.educity.cn/wenda/53094.html
```
