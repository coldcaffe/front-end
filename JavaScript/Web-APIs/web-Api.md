##Web APIs
    Web Api是浏览器提供的一套操作浏览器功能和页面元素的API(BOM和DOM)
    1.是w3c组织的标准,是js所独有的部分
    2.主要使用其中的DOM和BOM,基于js实现页面交互功能

    js基础学习ECMAScript基础语法做铺垫,Web APIs是js的应用,大量使用js基础语法做交互效果

    api(application programming interface 应用程序编程接口),是一些预先定义的接口,用于给程序员更轻松实现想要完成的功能;


##DOM
    DOM(document object model)文档对象模型,是w3c组织推荐的处理可扩展标记语言(html或者xml)的标准编程接口;w3c已经定义了一些列的dom接口,通过这些dom接口可以改变网页的内容,结构和样式;

    DOM树:
        文档 - 根元素<html> - 元素<body> - 元素<h1> - 文本'我的标题'
                                        - 元素<a> - 属性'href'
                                                - 文本'我的标题'  
                        - 元素<head> - 元素<title> - 文本'文档标题' 

        文档: 一个页面就是一个文档,DOM中使用document表示
        元素: 页面中的所有标签都是元素,DOM中使用element表示
        节点: 网页中的所有内容都是节点(标签,属性,文本,注释等),DOM中使用node表示
        DOM把以上内容都看做是对象  document - element - node

    如何获取页面元素
        因为文档页面从上向下加载,所以得现有标签,所以script写到标签的下面

        1.根据ID获取
            使用getElementById()方法可以获取带有ID的元素对象(id大小写敏感),返回的是元素对象

        2.根据标签名获取
            使用getElementsByTagName()方法可以返回带有指定标签名的对象的集合,获取元素对象的集合,以伪数组形式存储的
            因为得到的是对象集合,因此想要操作其中元素需要遍历,且得到的元素对象是动态的(结果随元素内容变化而变化)

        3.通过h5新增的方法获取
            使用getElementsByClassName('类名'),根据类名返回元素对象集合
            querySelector('选择器')返回指定选择器的第一个元素对象,注意:里面的选择器需要加符号,如'.class','#id','li'
            querySelectorAll()返回指定选择器的所有元素对象集合(对querySelector只返回一个的能力的补充)

        4.特殊元素获取
            获取body元素
                document.body获取body元素

            获取html元素
                document.documentElement获取html元素


##事件基础
    js使我们有能力创建动态页面,而事件是可以被js侦测到的行为(触发---响应机制),网页中每个元素都可以产生某些触发js的事件,例如用户点击按钮,然后去执行某些操作;

    事件三要素
        事件由三部分组成: 事件源,事件类型,事件处理程序
        1.事件源    事件被触发的对象,如 按钮
        2.事件类型  如何触发,什么事件,如鼠标点击(onclick)还是鼠标经过,或者键盘按下
        3.事件处理程序  通过一个函数赋值的方式 完成

    执行事件的步骤
        1.获取事件源
        2.注册事件(绑定事件)
        3.添加事件处理程序(采取函数赋值形式)

    常见的鼠标事件
        onclick         鼠标点击左键触发
        onmouseover     鼠标经过触发
        onmouseout      鼠标离开触发
        onfocus         获得鼠标焦点触发
        onblur          失去鼠标焦点触发
        onmousemove     鼠标移动触发
        onmouseup       鼠标弹起触发
        onmousedown     鼠标按下触发


##操作元素
    js的DOM操作可以改变网页内容,结构和样式,可以利用DOM操作元素来改变元素里面的内容,属性等

    改变元素内容
        innerText和innerHTML都可读写,能够获取元素里面的内容,区别是innerText不保留空格和换行,而innerHTML保留;
        element.innerText; 从起始位置到终止位置的内容,但它会去除html标签,同时空格和换行也会去掉,不识别html标签;

        element.innerHTML; 起始位置到终止位置的全部内容,包括html标签,同时包括留空格和换行,识别html标签;

        src,href
            img.src = 'xxx';通过对指定元素中属性更换内容方式进行点击切换内容操作

        id,alt,title
        
        表单元素属性操作
            利用DOM可以操作如下表单元素属性: type,value,checked,selected,disable

        样式属性操作
            可以通过js修改元素的大小，颜色和位置等样式
                1.element.style     行内样式操作(样式较少或功能简单情况下使用)
                    (1).js里样式采用驼峰命名法
                    (2).js修改style样式操作，产生的是行内样式，css权重比较高
                2.element.className 类名样式操作
                    (1)如果样式修改较多,可以采取操作类名方式更改元素样式                
                    (2)class因为是个保留字,因此使用className来操作元素类名属性
                    (3)className会直接修改元素的类名,会覆盖原先的类名


    操作元素是DOM的核心内容,总结如下:
        操作元素内容
            innerText
            innerHTML(重点)
        
        操作常见元素属性
            src,href,title,alt等

        操作表单元素属性
            type,value,disabled等

        操作元素样式属性
            element.style
            className(重点)


##表单
    排他思想
        如果有一组元素,我们想要其中一个元素实现某种样式,需要用到循环的排他思想算法
        1.所有元素全部清除样式(干掉其他人)
        2.给当前元素设置样式(留下我自己)
        3.注意顺序不能颠倒,首先干掉其他人,再设置自己

    获取及移除自定义属性
        element.setAttribute('属性')
        element.getAttribute('属性')
        element.removeAttribute('属性')

    H5自定义属性
        目的是为了保存并使用数据,有些数据可以保存到页面中,而不用保存到数据库中;自定义属性必须通过getAttribute('属性')方式获取,但由于有些自定义属性容易引起歧义,不容易判断是元素内置属性还是自定义属性,H5新增了自定义属性:
            1.设置H5自定义属性,需以'data-'作为开头作为属性名并赋值,如<div data-index='1'>或者使用js设置element.setAttribute('data-index',2) -> div.setAttribute...

            2.获取h5自定义属性值,有以下两种方案
                (1)兼容性获取elememt.getAttribute('data-index')
                (2)H5新增element.dataset.index或者element.dataset['index'],但是ie11才开始支持


##节点操作
    获取元素通常有2种方式:
        1.利用DOM提供的方法获取元素
            document.getELementById()
            document.getELementByTagName()
            document.querySelector()等
        逻辑不强且繁琐

        2.利用节点层级关系获取元素
            利用父子兄节点关系获取元素
        逻辑性强,但是兼容性稍差

        这两种方式都可以获取元素节点,后面都会使用,但是节点操作更简单

    节点
        网页中所有内容都是节点(标签,属性,文本,注释等),在DOM中节点用node表示.html dom树中所有节点均可通过js进行访问,所有html元素(节点)均可被修改,也可被创建或删除;

        一般节点至少拥有nodeType(节点类型),nodeName(节点名称)和nodeValue(节点值)这三个基本属性;
        可以用console.dir('xxx')去查看指定节点的详情,实际开发中,节点操作主要操作的是元素节点
            元素节点 nodeType为1
            属性节点 nodeType为2
            文本节点 nodeType为3(文本节点包含文字,空格和换行等)

    节点层级
        利用dom树可以把节点划分为不同的层级关系,常见的是父子兄层级关系
        1.父级节点  node.parentNode
            parentNode属性可返回某节点的父节点,注意是最近的一个父节点,如果指定的节点无父节点则返回null

        2.子节点    
            (1)parentNode.childNodes(标准)
                返回包含指定节点的子节点的集合,该集合为及时更新的集合,返回值里包含了所有的子节点,包括元素节点和文本节点等,如果想要获得里面的元素节点,需要专门处理,因此一般不提倡使用chileNodes;

            (2)parentNode.childen(非标准)
                是一个只读属性,只返回所有的子元素节点,其他节点不返回(重点掌握),虽然非标准,但是得到了各个浏览器的支持,因此可以放心使用

            (3)parentNode.firstChild
                返回第一个子节点,找不到返回null,同样也是包含所有的节点

            (4)parentNode.lastChild
                返回最后一个子节点,找不到返回null,,同样也是包含所有的节点

            以下这两个api有兼容性问题,ie9以上才支持
            (5)parentNode.firstElementChild  返回第一个子元素节点

            (6)parentNode.firstElementChild  返回最后一个子元素节点

        实际开发中first/lastChild包含其他节点,不方便操作,而first/lastElementChild又有兼容性问题,获取第一个/最后一个子元素节点可通过如下方案解决(实际开发方案):
            基于children去处理,按索引位获取值即可
            console.log(ol.children[0]);
            console.log(ol.children[ol.children.length-1]);

        3.兄弟节点  
            (1)node.nextSibling 下一个兄弟节点，找不到返回null，包含所有的节点
            (2)node.previousSibling 返回上一个兄弟节点，找不到返回null，同样包含所有节点

            以下两个api有兼容性问题,ie9+支持
            (3)node.nextElementSibling  返回当前元素下一个兄弟元素节点，找不到返回null
            (4)node.previousElementSibling  返回当前元素前一个兄弟元素节点，找不到返回null
            解决方法,自行封装一个兼容性函数:
                function getNextElemementSibling(element){
                    var el = element;
                    while (el = el.nextsibling){
                        if(el.nodeType === 1){
                            return el;
                        }
                    }
                    return null;
                }

        4.创建节点
            document.createElement('tagName'); 创建由tagname指定的HTML元素,因为这些元素原先不存在,是根据需求动态生成的,因此也成为动态创建元素节点;

            添加节点
                (1)node.appendChild(child); 将一个节点添加到指定的子节点列表末尾,类似于css里的::after伪元素,和数组里的push
                (2)node.insertBefore();将一个节点添加到父节点的指定子节点前面,类似于css中的::before伪元素

        5.删除节点
            node.removeChild(child),从DOM中删除一个子节点,返回删除的节点

        6.复制节点
            node.cloneNode()    方法返回调用该方法的节点的一个副本,也被称为克隆节点/拷贝节点;
                (1)如果括号参数为空或false,则是浅拷贝,即只克隆复制节点本身,不克隆里面的子节点
                (2)括号里参数为true,即为深拷贝,复制标签和里面的所有的子节点

            <a href='JavaScript:;'>或<a href='JavaScript:void(0);'> 可以阻止超链接跳转

        8.三种动态创建元素的区别
            document.write()
                直接将内容写入页面的内容流,但是文档流执行完毕,则它会导致页面全部重绘

            element.innerHTML
                innerHTML将内容写入某个DOM节点,不会导致页面全部重绘,innerHTML创建多个元素效率更高(不要拼接字符串,采取数组形式拼接),结构稍微复杂

            document.createElement()
                创建多个元素时效率稍微低一点点,但是结构更清晰;

            总结:不同浏览器下,innerHTML(不要用字符串拼接方式,应使用数组方式)比createElement高


##事件
    1.注册事件(绑定事件)
        给元素添加事件,称为注册事件或绑定事件,注册事件有两种方式:
        传统方式:
            利用on开头的事件onclick / <button onclick='alert("hi")'></button> / btn.onclick = function(){}

            特点: 注册事件的唯一性,对于同一个元素同一事件只能设置一个处理函数,最后注册的处理函数将会覆盖前面注册的处理函数;

        方法监听注册方式:
            特点: 同一元素同一事件可以注册多个监听器,按注册顺序依次执行

            eventTarget.addEventListener(type,listener[,useCapture])
                eventTarget:目标对象
                type:       事件类型,如click,mouseover...这里不要带on前缀
                listener:   事件处理函数,事件发生时会调用该监听函数
                useCapture: 可选参数,是一个默认为false的布尔值
            addEventListener()方法(w3c标准推荐方式),ie9之前不支持,可使用attachEvent()代替

            eventTarget.attachEvent(eventNameWithOn,callback)(非标准,避免在生产环境使用)
                eventNameWithOn :事件类型,如onclick,onmouseover,需要带on
                callback        :事件处理函数,当目标触发事件时回调函数被调用


    2.删除事件
        1.传统注册方式  eventTarget.onclick = null;
        2.方法监听注册方式: 
            (1)eventTarget.removeEventListener(type,listener[,useCapture]);
            (2)eventTarget.datachEvent(eventNameWithOn,callback);


    3.DOM事件流
        事件流描述的是从页面中接收事件的顺序,事件发生时会在元素节点之间按照特定的顺序传播,这个传播过程即DOM事件流
                1 Document7             ^
                    |                   |
            捕获阶段 |
                    2 Element html 6        ^
                            |               |
                            |                     冒泡阶段
                            3 Element boby 5
                                    |          ^
                     DOM事件流       |          |
                                    Element div 4
        事件冒泡:ie最早提出,事件开始时由最具体元素接收,然后逐级向上传播到DOM最顶层节点的过程;
        事件捕获:网景最早提出,由DOM最顶层节点开始,然后逐级向下传播到最具体的元素接收的过程;

        注意:
            1.js代码中只能执行捕获或者冒泡其中的一个阶段
            2.onclick和attachEvent只能得到冒泡阶段
            3.addEventListener(type,listener[,useCaoture])第三个参数如果是true,表示在事件捕获阶段调用事件处理程序;如果是false(不写默认false),表示在事件冒泡阶段调用事件处理程序
            4.实际开发中很少使用事件捕获,我们更关注事件冒泡
            5.有些事件是没有冒泡的,比如onblur,onfocus,onmouseenter,onmouseleave
            6.事件冒泡有事会带来麻烦,有时优惠帮助很巧妙的做某些事件


##事件对象
    事件发生后,跟事件相关的一系列信息数据的结合都放到这个对象里面,这个对象就是事件对象event,它有很多属性和方法(event对象代表事件的状态,比如键盘案件的状态,鼠标的位置,鼠标按钮位置等...)

    eventTarget.onclick = function(event){}
    eventTarget.addEventListener('click',function(event){})
    这个event就是事件对象,还常被写作e或者evt,写到侦听函数小括号里当形参来看
    事件对象也有兼容性问题,ie678通过window.event(通过event = event || window.event;兼容处理)

    4.事件对象常见属性和方法
        e.target            返回触发事件的对象(标准)
        e.srcElement        返回触发事件的对象(非标准,ie6~8使用)
        e.type              返回事件类型,如click,mouseover等,不带on
        e.returnValue       该属性阻止默认事件,ie6~8使用(非标准),比如不让链接跳转
        e.preventDefault()  该方法阻止默认事件(标准),比如不让链接跳转
        e.stopPropagation() 阻止冒泡(标准)
        e.cancelBubble      该属性阻止冒泡,ie6~8使用(非标准)

    事件委托(代理,委派)
        事件冒泡本身的特性,会带来坏处,也会带来好处,需要灵活掌握;事件委托也被称为事件代理,在jQuery里面称为事件委派

        原理: 不是每个子节点单独设置事件监听器,而是事件监听器设置在其父节点上,然后利用冒泡原理影响设置每个子节点;

        作用: 对存在多个子节点的操作事件中,利用委派方式只操作了一次DOM,提高了程序的性能;


    鼠标事件对象
        event对象代表事件的状态,跟事件相关的一系列信息的集合,现阶段主要是用鼠标事件对象中的mouseEvent和键盘事件keyboardEvent;

        e.clientX   返回鼠标相对于浏览器窗口可视区的x坐标
        e.clientY   返回鼠标相对于浏览器窗口可视区的y坐标
        e.pageX     返回鼠标相对于文档页面的x坐标 ie9+支持(重点)
        e.pageY     返回鼠标相对于文档页面的y坐标 ie9+支持(重点)
        e.screenX   返回鼠标相对于电脑屏幕的x坐标
        e.screenY   返回鼠标相对于电脑屏幕的y坐标


    键盘事件
        onkeyup     某个键盘按键被松开时触发
        onkeydown   某个键盘按键被按下时触发
        onkeypress  某个键盘按键按下时触发,但是不识别功能键,如ctrl,shift,箭头等...
        如果使用addEventListener前面不需on前缀,三个事件的执行顺序 keydown->keypress->keyup

    键盘事件对象
        keyCode 返回该按键的ASCII值
        onkeydown和onkeyup不区分字母大小写,onkeypress区分字母大小写.在实际开发中更多使用keydown和keyup,它能识别所有的键(包括功能键),keypress不识别功能键,但是keyCode属性能区分大小写,返回不同的ASCII值;



##BOM
    浏览器对象模型(Browser Object Model),提供了独立于内容而与浏览器窗口进行交互的对象,其核心对象是window,BOM由一系列相关的对象构成,并且每个对象都提供了很多方法与属性,BOM缺乏标准,js语法标准化组织是ECMA,DOM标准化组织是W3C,BOM最初是Netscape浏览器标准的一部分;

    DOM
        1.文档对象模型,把文档当做一个对象看待
        2.w3c标准,顶级对象是document,主要用于操作页面元素

    BOM构成
        1.浏览器对象模型,把浏览器当做一个对象来看待
        2.浏览器厂商在各自浏览器上定义的,兼容性较差,BOM顶级对象是window,主要用以浏览器窗口交互
        3.BOM比DOM更大,包含DOM
            window组成:document,location,navigation,screen,history
            window对象是浏览器的顶级对象,具有双重角色:
                (1)是js访问浏览器窗口的一个接口
                (2)是一个全局对象,定义在全局作用域中的变量,函数都会变成window对象的属性和方法.在调用时可以忽略window,alert(),prompt()等都是window方法;(window下有一个特殊属性window.name,因此自定义变量时不应该命名name)


    window对象的常见事件
        1.窗口加载事件,window.onload是窗口(页面)加载事件,当文档内容完全加载完成会触发该事件(包括图像,脚本文件,css文件等),就调用的处理函数;
            window.onload = function(){}
            或者 window.addEventListener('load',function(){})

            注意:有了window.onload就可以把js代码写到页面元素上方,因为onload是等页面内容全部加载完毕再去执行处理函数;window.onload传统注册事件方式只能写一次,如有多个则会以最后一个window.onload为准;但是使用addEventListener则没有限制;

            document.addEventListener('DOMContentLoaded',function(){}),DOMContentLoaded事件触发时仅当DOM加载完成,不包括样式表,图片和flash等,ie9+支持;如果页面图片很多,从用户访问到onload触发可能需要较长时间,交互效果就不能实现,此时用这个比较合适;

        2.调整窗口大小事件
            只要窗口大小发生像素变化就会触发,常用于响应式布局,window.innerWidth当前屏幕宽度
            window.onresize = function(){};
            window.addEventListener('resize',function(){})


        3.定时器
            setTimeout()    用于设置一个到期后执行调用函数的定时器,只调用一次(这个函数需要等待时间,时间到了才去调用,因此称为回调函数);
                window.setTimeout(调用函数,[延迟毫秒数]);
                调用方式可以 直接写函数/函数名调用/字符串函数名调用三种方式,第三种不推荐,延时值默认为0,如果写则必须是毫秒,因为定时器很多,因此经常会给其赋值一个标识符;

                window.clearTimeout(timeoutID)  停止定时器
                可用于取消之前建立的定时器,window可省略,里面的参数就是待取消定时器的标识符;

            setInterval() 重复调用一个函数(与setTimeout的区别),用法与上述大体相同
                window.clearInterval(intevalID) 停止轮询定时器

            this    this的指向在函数定义时是确定不了的,只有函数执行时才能确定this到底指向谁,一般情况下this最终指向的是那个调用它的对象;
                (1)全局作用域或者普通函数中this指向全局对象window(定时器里this指向window)
                (2)方法调用中谁调用this指向谁
                (3)构造函数中this指向构造函数的实例


##js执行机制
    js是单线程语言
        js一大特点就是单线程,同一时间只能做一件事情,js是为处理页面中用户的交互,以及操作DOM而诞生的,比如对某个DOM元素进行添加和删除,不能同时操作,应该先添加,之后再删除;单线程意味着所有任务需要排队依次执行,导致如果js执行时间过长,则页面渲染不连贯,加载阻塞;

    同步和异步 
        为了解决单线程的性能问题,利用多核cpu的运算力,HTML5提出Web Worker标准,允许js脚本创建多个线程,于是js出现了同步和异步,区别在于流水线上各个流程的执行顺序不同;
            同步    前一任务结束再执行后续任务,任务执行有序
            异步    做某件较耗时任务期间处理其他事情,最后取个结果;

        同步任务    同步任务都在主线程上执行,形成一个执行栈
        异步任务    js的异步任务是通过回调函数实现的,相关回调函数放入任务队列中(也称消息队列)
            (1)普通事件 如click resize等
            (2)资源加载 如果load,error等
            (3)定时器 包括setInterval,setTimeout等

    js执行机制
        1.先执行执行栈中的同步任务
        2.异步任务(回调函数)放入任务队列中
        3.一旦执行栈中所有同步任务执行完毕,系统按次序读取任务队列中的异步任务,被读取的异步任务结束等待状态,进入执行栈,开始执行; 

        由于主线程不断重复的获得任务,执行任务...,所以此种机制被称为'事件循环'(event loop);



##Location对象
    location是window对象下用于获取或设置窗体的URL的属性,并且可以用于解析URL,因为此属性返回的是一个对象,所以将这个属性称为location对象;

    URL 统一资源定位符(Uniform Resource Locator)是互联网上标准资源的地址,互联网上每个文件都有一个唯一的URL,它包含的信息支出文件的位置以及浏览器应该怎么处理它,语法:
        protocol://host[:port]/path/[?query]#fragment
        http://www.itcast.cn/index.html?name=andy&age=18#link

        protocol    通信协议,常用http,ftp,maito等
        host        主机(域名) www.baidu.com...
        port        端口号(可选),省略时使用方案的默认端口 如http的默认端口为80
        path        路径,由 0 或多个'/'隔开的字符串,一般用来表示主机上的一个目录或文件地址
        query       参数,以键值对的形式,通过'&'符号分隔
        fragment    片段,'#'后面内容,常见于链接 锚点

    location对象属性
        location.href       获取或者设置整个URL(重点)
        location.host       返回主机(域名)
        location.port       返回端口号,如果未写则返回字符串
        location.pathname   返回路径
        location.search     返回参数(重点)    
        location.hash       返回片段

    location对象的方法
        location.assign()   跟href一样,可以跳转页面(也称为重定向页面),可以后退页面
        location.replace()  替换当前页面,因为不记录历史,所以不能后退页面
        location.reload()   重新加载页面,相当于刷新按钮或者f5,如果参数为true则强制刷新ctrl+f5


##Navigator对象
    包含有关浏览器的信息,有很多属性,其中最常用的是userAgent,该属性可以返回由客户机发送服务器的user-agent头部的值

    <script>
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location.href = "../H5/index.html"; //手机
        }
    </script>


##history对象
    可与浏览器历史记录进行交互,该对象包含用户(在浏览器窗口中)访问过的URL,实际开发中比较少用到,一般只在OA系统等特殊场景用到;
    back()      可以后退功能
    forward()   前进功能
    go(参数)    前进后退功能 参数如果是1 前进一个页面,如果是-1则后退1个页面













































