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



























