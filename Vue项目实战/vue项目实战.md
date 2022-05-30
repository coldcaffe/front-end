##vue.js技术栈的技术点关系
    前端pc端项目: vue(语法+组件),vue-router,axios,webpack,Element-UI,Vuex
    前端移动端项目: vue(语法+组件),vue-router,axios,webpack,Vant-UI,Vuex

##Vue基本概念
    渐进式JavaScript框架: 声明式渲染->组件系统->客户端路由->集中式状态管理->项目构建
    灵活:在一个库和一套完整框架之间自如伸缩
    高效:20kb运行大小,超快虚拟DOM

    vue的基本使用步骤
        1.需要提供标签用于填充数据
        2.引入vue.js库文件
        3.使用vue的语法进行功能实现
        4.将数据填充入vue提供的标签

        实例参数分析
            el:元素的挂载位置(值可以是css选择器或者DOM元素)
            data:模型数据(值是一个对象)
        
        插值表达式用法 {{xxx}}
            1.将数据填充到HTML标签中
            2.插值表达式支持基本的运算操作
        
        vue代码运行原理分析
            概述了编译过程的概念(vue语法->原生语法)


##Vue模板语法
    前端渲染
        把数据填充到html标签中,生成静态html内容

        渲染方式:
            1.原生js拼接字符串
                不同开发人员代码风格差异大,随业务复杂,后期维护逐渐困难
            2.使用前端模板引擎
                遵循同种规则写代码,可读和维护性提高,但是没有专门提供事件机制
            3.使用vue特有的模板语法

    模板语法概览
        插值表达式
        指令        
        事件绑定
        属性绑定
        样式绑定
        分支循环结构   

    指令
        本质就是自定义属性,格式以v-开始(如v-cloak,插值表达式存在'闪动'的问题,可以使用v-cloak指令,通过先隐藏,替换好值之后再显示最终的值的方式解决)

        数据绑定指令
            将数据填充到标签中
            v-text: 填充纯文本(相比较插值表达式更加简洁)
            v-html: 填充html片段(1.存在安全问题,易导致xss攻击 2.本网站内部数据可用,第三方数据不可用)
            v-pre:  填充原始信息(显示原始信息,跳过编译过程(分析编译过程))

        数据响应式
            1.html5中的响应式(屏幕尺寸的变化导致样式的变化) 2.数据的响应式(数据的变化导致页面内容的变化)
            v-once  只编译一次(显示内容之后不再具有响应式功能,显示信息后续无需修改情况下可提高性能)

        双向数据绑定
            指令可以修改数据,数据变动又反向影响展示内容
            v-model 双向数据绑定

        mvvm设计思想
            M   model
            V   view
            VM  view-model

    事件绑定
        v-on指令用法:   <input type='button' v-on:click='num++'>
        v-on简写:       <input type='button' @click='num++'>

        事件函数的调用方式
            直接绑定函数名称: <button v-on:click='say'>hello</button>
            调用函数:   <button v-on:click='say()'>say hi</button>

        事件函数参数传递
            普通参数和事件对象: <button v-on:click='say("hi",$event)'>say hi</button>

            1.如果事件直接绑定函数名称,那么默认会传递事件对象作为事件函数的第一个参数
            2.如果事件绑定函数调用,那么事件对象必须作为最后一个参数显示传递,并且事件对象的名称必须是$event 

        事件修饰符
            .stop 阻止冒泡: <a v-on:click.stop='handle'>跳转</a>
            .prevent 阻止默认行为: <a v-on:click.prevent='handle'>跳转</a>
            ... 

        按键修饰符
            .enter 回车键:  <input v-on:keyup.enter='submit'>
            .delete 删除键: <input v-on:keyup.delete='handle'>

        自定义按键修饰符
            自定义按键修饰符名字是自定义的,但是对应的值必须是按键对应event.keyCode的值
            全局config.keyCodes对象: 
                Vue.config.keyCodes.aaa = 112
                <input type='text' v-on:keyup.aaa = 'handle'>

    属性绑定
        v-bind 指令用法: <a v-bind:href='url'>跳转</a>
                缩写: <a :href='url'>跳转</a>

        v-model底层实现原理:
            <input v-bind:value='msg' v-on:input='msg=$event.target.value'>

    样式绑定
        1.class样式处理
            对象语法: <div v-bind:class='{active: isActive}'></div>
            数组语法: <div v-bind:class='[activeClass,errorClass]'></div>

            (1)对象绑定和数组绑定可以结合使用
            (2)class绑定的值可以简化操作
            (3)默认的class如何处理？默认的class会保留

        2.style样式处理
            对象语法: <div v-bind:style='{color:activeColor,fontSize:fontSize}'></div>
            数组语法: <div v-bind:style='{baseStyles,overridingStyles}'></div>

    分支循环结构
        1.分支结构
            v-if,v-else,v-else-if,v-show

        2.v-if与v-show的区别
            v-if控制元素是否渲染到页面,而v-show控制元素是否显示(已经渲染到了页面)
            
        3.循环结构
            v-for遍历数组
                <li v-for='item in list'>{{item}}</li>
                <li v-for='(item,index) in list'>{{item+'---'+index}}</li>

                key帮助vue区分不同的元素,从而提高性能
                <li :key='item.id' v-for='(item,index) in list'>{{item}}+'---'+{{index}}</li>

            v-for遍历对象
                <div v-for='(value,key,index) in object'></div>

                v-if和v-for结合使用
                <div v-if='value==12' v-for='(value,key,index) in object'></div>
                

##Vue常用特性
    表单操作
        1.基于vue操作表单
            input单行文本,txtarea多行文本,select下拉多选,radio单选框,checkbox多选框
        2.表单域修饰符
            number 转化为数值,trim 去掉开始和结尾的空格,lazy 将input事件切换为change事件;
            <input v-model.number='age' type='number'>

    自定义指令
        1.内置指令不满足需求
        2.自定义指令的语法规则(获取元素焦点)
            Vue.directive('focus' {
                inserted: function(el){
                    //获取元素焦点
                    el.focus(); //el表示指令所绑定的元素
                }
            })
        3.自定义指令用法
            <input type='text' v-focus>
    
        4. 带参数的自定义指令(改变元素背景色)
            Vue.directive('color' {
                inserted: function(el,binding){
                    el.style.backgroundColor = binding,value.color;
                }
            })
            指令用法
                <input type='text' v-color='{color:"orange"}'>

        5.局部指令
            directives: { //注册局部指令,需要接受directives这个选项
                focus: {
                    //指令定义
                    inserted: function(el) {
                        el.focus()
                    }
                }
            }
    
    计算属性
        表达式的计算逻辑可能会比较复杂,使用计算属性可以使模板内容更加简洁
    
        计算属性的用法
            computed:{
                reversedMessage: function(){
                    return this.msg.split('').reverse().join(''); //字符串反转
                }
            }
    
        计算属性与方法的区别
            计算属性是基于它们的依赖进行缓存的,而方法不存在缓存;
     
    侦听器
        对数据进行侦听,当数据一旦发生变化就通知侦听器所绑定的方法,一般用于数据变化时执行异步或开销较大的操作;

        侦听器的用法
            watch: {
                firstName: function(val) {
                    //val表示变化后的值
                    this.fullName = val + this.lastName;
                },
                lastName: function(val) {
                    this.fullName = this.firstName + val;
                }
            }

    过滤器
        格式化数据,如将字符串格式转化为首字母大写,或将日期格式化为指定的格式等;
    
        自定义过滤器
            Vue.filter('过滤器名称' , function(value){
                //过滤器业务逻辑
            })
    
        过滤器的使用
            <div>{{msg | upper}}</div>
            <div>{{msg | upper | lower}}</div>
            <div v-bind:id='id | formatId'></div>

        局部过滤器(只能在本组件中使用)
            filters: {
                capitalize: function(){}
            }

        带参数的过滤器及其使用
            Vue.filter('format', function(value,arg1){
                //value是过滤器传递过来的参数
            })

            <div>{{date | format('yyyy-MM-dd')}}</div>
    
    生命周期
        主要阶段
            挂载(初始化相关属性)
                (1)beforeCreate
                (2)created
                (3)beforeMount
                (4)mounted

            更新(元素或组件的变更操作)
                (1)beforeUpdate
                (2)updated

            销毁(销毁相关属性)
                (1)beforeDestroy
                (2)destroyed

        Vue实例的产生过程
            1.beforeCreate在实例初始化之后,数据观测和事件配置之前调用
            2.created在实例创建完成后被立即调用
            3.beforeMount在挂载开始之前被调用
            4.mounted el被新创建的vm.$el替换,并挂载到实例上去之后调用该钩子
            5.beforeUpdate数据更新时调用,发生在虚拟DOM打补丁之前
            6.updated由于数据更改导致的虚拟DOM重新渲染和打补丁,在这之后会调用该钩子
            7.beforeDestroy实例销毁之前调用
            8.destroyed实例销毁后调用


##综合案例
    变异方法(修改原有数据)
        push(),pop(),shift(),unshift(),splice(),sort(),reverse();

    替换数组(生成新的数组)
        filter(),concat(),slice();

    数组响应式变化-修改响应式数据
        1.Vue.set(vm.items,indexOfItem,newValue)

        2.vm.set(vm.items,indexOfItem,newValue)
            (1)参数一表示要处理的数组名称
            (2)参数二表示要处理的数组的索引
            (3)参数三表示要处理的数组的值


##Vue调试工具
    Devtools安装
        1.克隆仓库(官网有路径)
        2.安装依赖包
        3.构建
        4.打开Chrome扩展页面
        5.选中开发者模式
        6.加载已解压的扩展,选择shells/chrome

    用法
        浏览器F12监控页面下,vue选项下调试


##组件化开发
    组件化规范:Web Components
        web components通过创建封装好功能的定制元素解决以下问题:
            1.尽可能多的重用代码
            2.自定义组件的方式不太容易(html,css和js)
            3.多次使用组件可能导致冲突

            vue部分实现了上述规范

    组件注册
        Vue.component(组件名称,{
            data:组件数据,
            template:组件模板内容
        })

        用法
            <div id='app'>
                <组件名称></组件名称>
            </div>

        组件注册注意事项
            1.data必须是一个函数
            2.组件模板内容必须是单个根元素
            3.组件模板内容可以是模板字符串(需要浏览器提供支持,es6语法)
            4.组件命名方式: (1)短横线方式 (2)驼峰方式 (普通标签模板中必须使用短横线方式使用组件,驼峰模式只能在字符串模板中使用组件)

        局部组件注册
            var ComponentA = {/* ... */} ...
            new Vue({
                el:'#app'
                components:{
                    'component-a': ComponentA,
                    ...
                }
            })

    组件间数据交互
        父组件向子组件传值
            1.组件内部通过props接受传递过来的值
                Vue.component('munu-item',{
                    props:['title'],
                    template:'<div>{{title}}</div>'
                })

            2.父组件通过属性将值传递给子组件
                <menu-item title='来自父组件的数据'></menu-item>
                <menu-item :title='title'></menu-item>

            3.props属性名规则
                在props中使用驼峰形式,模板中需要使用短横线的形式,字符串形式的模板中没有这个限制;

                Vue.component('menu-item',{
                    //在js中是驼峰式的
                    props:['menutitle'],
                    template:'<div>{{menuTitle}}</div>'
                })

                <!-- 在html中是短横线方式的 -->
                <menu-item menu-title='nihao'></menu-item>

            4.props属性值类型
                字符串 String,数值 Number,布尔值 Boolean,数组 Array,对象 Object

        子组件向父组件传值
            1.子组件通过自定义事件向父组件传递信息
                <button v-on:click='$emit("enlarge-text")'>扩大字体</button>

            2.父组件监听子组件的事件
                <menu-item v-on:enlarge-text='fontSize += 0.1'></menu-item>

            3.子组件通过自定义事件向父组件传递信息(带参)
                <button v-on:click='$emit("enlarge-text",0.1)'>扩大字体</button>

            4.父组件监听子组件的事件
                <menu-item v-on:enlarge-text='fontSize += $event'></menu-item>

        非父子(兄弟)组件间传值
            1.单独的事件中心管理组件间的通信
                var eventHub = new Vue();
            
            2.监听事件与销毁事件
                eventHub.$on('add-todo',addTodo)
                eventHub.$off('add-todo')

            3.触发事件
                eventHub.$emit('add-todo',id)

        组件插槽
            父组件向子组件传递内容

            组件插槽用法
                1.插槽位置
                    Vue.component('alert-box',{
                        template:'
                            <div class="demo-alert-box">
                                <strong>Error!</strong>
                                <slot></slot>
                            </div>
                        '
                    })

                2.插槽内容
                    <alert-box>Something bad happend.</alert-box>

            具名插槽用法

            作用域插槽
                应用场景: 父组件对子组件的内容进行加工处理    

                1.插槽定义
                    <ul>
                        <li v-for="item in list" v-bind:key="item.id">
                            <slot v-bind:item="item">
                                {{item.name}}
                            </slot>
                        </li>
                    </ul>

                2.插槽内容
                    ...


##前后端交互模式
    接口调用模式
        原生ajax，基于jQuery的ajax，fetch，axios

    URL地址格式
        1.传统形式的 URL
            格式: schema://host:port/path?query#fragment
                (1)schema:协议,如 http,https,ftp 等
                (2)host:域名或 IP 地址
                (3)port:端口,http 默认端口 80,可以省略
                (4)path:路径,例如/abc/a...
                (5)query:查询参数,例如 uname=lisi&age=12
                (6)fragment:锚点(哈希 hash),用于定位页面的某个位置  

        2.Restful 形式的 url
            http 请求方式
                (1)GET          查询
                (2)POST         添加
                (3)PUT          修改
                (4)DELETE       删除
                例如: http://www.hello.com/books/123

##Promise 用法
    异步调用
        1.定时任务
        2.ajax
        3.事件函数

    多次异步调用的依赖分析
        1.多次异步调用的结果顺序不确定(可手动添加延时模拟 /myapi/index.js 路由)
        2.异步调用结果如果存在依赖需要嵌套(通过嵌套保证顺序)

    Promise 是一步编程的一种解决方案,从语法上讲 Promise 是一个对象,从它可以获取异步操作的消息,使用 promise 的好处如下:
        1.可以避免多层异步调用导致的嵌套问题(回调地狱)
        2.promise 对象提供了简洁的 api,使得控制异步操作更加容易

    promise 基本用法
        1.实例化 promise 对象,构造函数中传递函数,该函数中处理异步任务
        2.resolve 和 reject 两个参数用于处理成功和失败两种情况,并通过 p.then 获取处理结果;

        基于 promise 处理 ajax 请求
            1.处理原生 ajax(看图)
            2.发送多个 ajax 请求并保证顺序(基于 then)

        then 参数中的函数返回值
            1.返回 promise 实例对象
                返回的该实例对象会调用下一个 then
            2.返回普通值
                返回的普通值会直接传递给下一个 then,通过 then 参数中函数的参数接收该值;

        promise 常用 api
            1.实例方法
                p.then()    得到异步任务的正确结果
                p.catch()   获取异常信息
                p.finally() 成功与否都会执行(尚且不是正式标准)

            2.对象方法
                promise.all() 并发处理多个异步任务,所有任务都执行完成才能得到结果;
                promise.race()  并发处理多个异步任务,只要有一个任务完成就能得到结果;


##接口调用-fetch 用法
    fetch 基于 promise 实现,拥有更加简单的数据获取方式,功能更强大,更灵活,可以看做是 xhr 的升级版

    语法结构:
        fetch(url).then(fn2)
                    .then(fn3)
                    ...
                    .catch(fn)

    基本语法
        fetch('/abc').then(data=>{
            return data.text();
        }).then(ret=>{
            //注意这里得到的才是最终的数据
            console.log(ret);
        }));

    fetch 请求参数
        常用配置选项
            method(String):http 请求方法,默认为 get(get,post,put,delete)
            body(String):http 的请求参数
            headers(Object):http 的请求头,默认为{}

            fetch('/abc',{
                method:'get'
            }).then(data=>{
                return data.text();
            }).then(ret=>{
                //注意这里得到的才是最终的数据
                console.log(ret);
            }));

    fetch 响应结果
        响应数据格式
            text():将返回体处理成字符串类型
            json():返回结果和 JSON.parse(responseText)一样


 ##axios
    axios 是一个基于 promise 用于浏览器和 node.js 的 http 客户端,具有以下特性:
        1.支持浏览器和 node.js
        2.支持 promise
        3.能拦截请求和响应
        4.自动转换 JSON 数据

    基本用法
        axios.get('/adata')
            .then(ret=>{
                //data 属性名称是固定的,用于获取后台响应的数据
                console.log(ret.data)
            })

    axios 的常用 api
        get-查询,post-添加,put-修改,delete-删除

        1.get 传递参数
            通过 url 传递参数,通过 params 选项传递参数

        2.delete 传递参数
            传参方式与 get 类似 

        3.post 传递参数
            通过选项传递参数(默认传递的是 json 格式的数据),或者通过 URLSearchParams 传递参数(application/x-www-form-urlencoded)

        4.put 传递参数
            与 post 类似

    axios 的响应结果
        响应结果的主要属性
            data:       实际响应回来的数据
            headers:    
            status:
            statusText:

    axios 的全局配置
        //超时时间
        axios.defaults.timeout = 3000;
        //默认地址
        axios.defaults.baseURL = 'http://localhost:3000/';
        //设置请求头信息
        axios.defaults.headers['mytoken'] = 'hello';

    axios 的拦截器
        1.请求拦截器
            在请求发出之前设置一些信息

        2.响应拦截器
            在获取数据之前对数据进行一些加工处理

    接口调用-async/awa用法
        1.async/await 是 ES7 引入的新语法,可以更加方便进行异步操作
        2.async 关键字用于函数上(async 函数的返回值是 promise 实例对象)
        3. await 关键字用于 async 函数当中(await 可以得到异步的结果)


        async function queryData(id){
            const ret = await axios.get('/data');
            return ret;
        }

        queryData.then(ret=>{
            console.log(ret)
        })

    async/await 处理多个异步请求
        async function queryData() {
            var info = await axios.get('async1');
            var ret = await axios.get('async2?info=' + info.data);
            return ret.data;
        }

        queryData().then(function(data){
            console.log(data)
        })

 
##路由(代码不完整,待补充)
    后端路由
        概念:根据不同的用户 url 请求,返回不同的内容
        本质:url 请求地址与服务器资源之间的对应关系

    SPA(single page application)
        后端渲染(存在性能问题),ajax前端渲染(可提高性能,但是不支持浏览器的前进后退操作)
        
        spa单页面应用程序:整个网站只有一个页面,内容的变化通过ajax局部更新实现,同时支持浏览器地址栏的前进和后退操作;

        spa实现原理之一:基于url的hash(hash变化会导致浏览器记录访问历史的变化,但是hash的变化不会触发新的url请求),在实现spa过程中,最核心的技术点就是前端路由;

    前端路由
        概念: 根据不同的用户事件,显示不同的页面内容
        本质: 用户事件与事件处理函数之间的对应关系;

    vue router
        vue router是vue.js官方的路由管理器,它和vue.js的核心深度集成,可以非常方便用于spa应用开发;功能:
            1.支持html5历史模式或hash模式
            2.支持嵌套路由
            3.支持路由参数
            4.支持编程式路由
            5.支持命名路由

        vue router基本使用
            1.引入相关库文件
            2.添加路由链接
            3.添加路由填充位
            4.定义路由组件
            5.定义路由规则并创建路由实例
            6.把路由挂载到vue根实例中

        路由重定向
            用户在访问地址A时,强制用户跳转到地址C,从而展示特定的组件页面,通过路由规则的redirect属性,指定一个新的路由地址,可以很方便的设置路由的重定向:
                var router = new VueRouter({
                    routes:[
                        //path表示需要重定向的原地址,redirect表示将要重定向到的新地址
                        {path:'/',redirect:'/user'},
                        {path:'/user',component:User},
                        {path:'/register',component:Register}
                    ]
                })

        嵌套路由


        动态路由匹配
            1.路由中部分一致,部分可变动,通过动态路由参数的模式进行路由匹配,基于$route实现
            2.$route与对应路由形成高度耦合,不够灵活,所以可以使用props将组件和路由解耦;
                (1)props的值为布尔类型
                (2)props的值为对象类型
                (3)props的值为函数类型

        命名路由
            为了更方便的表示路由的路径,可以给路由规则起一个别名,即为'命名路由'

        vue-router编程式导航
            声明式导航:通过点击链接实现导航方式,例如<a>标签或vue中<route-link>
            编程式导航:通过调用js形式api的方式实现,如普通网页中的location.href

            编程式导航基本用法
                常见编程式导航api:
                    this.$router.push('hash地址')
                    this.$router.go(n)
                

























##前端工程化
    模块化
        传统开发模式的主要问题: 命名冲突,文件冲突;可通过模块化解决上述问题:
            1.模块化就是把单独的一个功能封装到一个模块(文件)中,模块间相互隔离,但可以通过特定的接口公开内部成员,也可以依赖别的模块;
            2.模块化开发的好处: 方便代码的重用,从而提升开发效率,并且方便后期的维护;

        浏览器端模块化规范
            1.AMD       require.js
            2.CMD       sea.js

        服务器端模块化规范
            1.commonjs
                (1)模块分为单文件模块与包
                (2)模块成员导出:module.exports和exports
                (3),模块成员导入:require('模块标识符')

        ES6模块化-大一统的模块化规范
            es6模块化诞生之前出现了amd,cmd和commonjs等模块化规范,但是这些规范存在一定的差异性与局限性,并不是浏览器与服务器通用的模块化标准,如amd和cmd适用于浏览器端js模块化,而commonjs使用于服务器端的js模块化,因此es6语法规范中,在语言层面定义了es6模块化规范,是浏览器端与服务器端通用的模块化开发规范:
                1.每个js文件都是一个独立的模块
                2.导入模块成员使用import关键字
                3.暴露模块成员使用export关键字


##webpack
    webpack是一个流行的前端项目构建工具(打包工具),提供了友好的模块化支持,以及代码压缩混淆,处理js兼容问题,性能优化等强大功能,使程序员可以将工作中心放到具体功能实现上,提高了开发效率和项目的可维护性,目前绝大多数企业前端项目,都是基于webpack进行打包构建的;

    webpack中的加载器
        1.通过loader打包非js模块
            实际开发中webpack默认只能打包处理以.js后缀名结尾的模块,其他非.js后缀名结尾的模块,webpack默认处理不了,需要调用loader加载器才能正常打包,否则会报错!loader可协助webpack加载特定文件模块:
                1.less-loader:  可打包处理.less相关的文件
                2.sass-loader:  可打包处理.scss相关文件
                3.url-loader:   可打包处理css中与url路径相关的文件
 

##Vue单文件组件
    传统组件的问题和解决方案
        1.问题
            1.全局定义的组件必须保证组件的名称不重复
            2.字符串模板缺乏语法高亮,在HTML有多行时,需要用到'\'
            3.不支持css意味着当html和js组件化时,css明显被遗漏
            4.没有构建步骤限制,只能使用html和es5 js,而不能使用预处理器(如 babel)

        2.解决方案
            针对传统组件问题,vue提供了一个解决方案-使用vue单文件组件

    vue单文件组件的基本用法
        单文件组件的组成结构
            template:   组件模板区域
            script:     业务逻辑区域
            style:      样式区域

    webpack中配置vue组件的加载器
        1.运行npm i vue-loader vue-template-compiler -D命令
        2.在webpack.config.js配置文件中,添加vue-loader的配置项:










































