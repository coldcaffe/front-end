##jQuery概述
    什么是js库
        js库即library,是一个封装好的特定的集合(方法和函数),就是封装了很多预先定义好的函数在里面比如animate,hide,show或获取元素等js文件的库,比如jQuery就是为了快速方便的操作DOM,里面基本都是函数(方法);

    常见的js库
        jQuery,Prototype,YUI,Dojo,Ext JS,移动端的zepto
        这些库都是对原生js的封装,内部都是js实现的;

    jQuery概念
        jquery是一个快速简洁的js库,倡导更少的代码,做更多的事情;把js中的DOM操作做了封装,可以快速的查询使用里面的功能,优化了DOM操作,事件处理,动画设计和Ajax交互,学习jquery本质就是学习调用这些函数,它们可以加速开发,提高开发效率;

        优点:
            1.轻量级,核心文件只有几十kb,不会影响页面加载速度
            2.跨浏览器兼容,基本兼容了现在主流的浏览器
            3.链式编程,隐式迭代
            4.对事件,样式,动画支持,大大简化了DOM操作
            5.支持插件扩展开发,有着丰富的第三方插件,如:树形菜单,日期控件,轮播图等
            6.免费开源

##jQuery的基本使用
    jQuery下载及版本
        www.jquery.com (开发时使用development版本便于查看,上线使用production版本体积小 )
        版本:
            1x:兼容ie678等版本浏览器,官网不再更新
            2x:不兼容ie678等低版本浏览器,官网不再更新
            3x:不兼容ie678等低版本浏览器,是官网主要更新维护版本

    jquery使用
        1.官网下载jquery文件
        2.将对应js文件引入工程页面
        3.使用


    jquery的入口函数(两种写法)
        1.
        $(function(){
            ... //此处是页面DOM加载完成的入口
        });

        2.等页面DOM加载完毕再去执行js代码
        $(document).ready(function(){
            ... //此处是页面DOM加载完成的入口
        });

        1.DOM结构渲染完毕即可执行内部代码,不必等到所有资源加载完成,jq已经完成了封装
        2.相当于原生js中的DOMContentLoaded
        3.不同于原生js中的load事件是等页面文档,外部的js文件,css文件,图片加载完毕才执行内部代码
        4.更推荐第一种方式

    jquery的顶级对象$
        1.$是jquery的别称,在代码中可以使用jquery代替$,但为了方便,一般都直接使用$
        2.$是jquery的顶级对象,相当于原生js中的window,把元素利用$包装成jquery对象,就可以调用jquery的方法

    jquery对象和DOM对象
        1.dom对象是通过原生js获取的对象
        2.jquery对象是通过jquery方式获取的对象
        3.jquery对象只能用jquery方法,dom对象则使用原生js属性和方法

        jquery对象和dom对象相互之间可以转换,因为原生js比jquery更大,一些原生属性和方法没有封装到jquery中,此时可以将jquery对象转换为DOm对象
            1.DOM对象转换为jqeury对象: $(DOM对象)   例如$('div')
            2.jquery对象转换为DOM对象(两种方式)
                (1)$('div')[index]      index是索引号
                (2)$('div').get(index)


##jQuery选择器
    jquery基础选择器
        原生js获取元素方式很多而杂,且兼容性情况不一致,因此jquery做了封装,使获取元素统一标准
        ID选择器        $("#id")            获取指定的ID的元素
        全选选择器      $('*')              匹配所有元素
        类选择器        $(".class")         获取同一类class的元素
        标签选择器      $("div")            获取同一类标签的元素
        并集选择器      $("div,p,li")       选取多个元素
        交集选择器      $("li.current")     交集元素

    jquery层级选择器
        子代选择器      $("ul>li")  使用>获取亲儿子层级元素(不会获取孙子层级元素)
        后代选择器      $("ul li")  使用空格,代表后代选择器,获取ul下所有li元素,包括孙子层级等
        
    jquery隐式迭代
        遍历内部DOM元素(维数组形式存储)的过程叫做隐式迭代,就是给匹配到的所有元素进行循环遍历,执行相应的方法,而不用再进行循环遍历操作,从而简化流程便于调用;

    jquery筛选选择器
        :first      $('li:first')           获取第一个li元素
        :last       $('li:last')            获取最后一个li元素
        :eq(index)  $('li:eq(2)')           获取的li元素中,选择索引为2的元素,索引号从0开始
        :odd        $('li:odd')             获取的li元素中,选择索引号为奇数的元素
        :even       $('li:even')            获取的li元素中,选择索引号为偶数的元素

    jquery筛选方法(重点)
        查找父类(重点)
        parent()                $("li").parent();
        相当于$("ul>li"),最近一级(亲儿子)(重点)
        children(selector)      $("ul").children("li");
        相当于$("ul li"),后代选择器(重点)
        find(selector)          $("ul").find("li");
        查找兄弟节点,不包括自己本身(重点)
        siblings(selector)      $(".first").siblings("li");
        查找当前元素之后所有的同辈元素
        nextAll([expr])         $(".first").nextAll();
        查找当前元素之前所有的同辈元素
        prevtAll([expr])        $(".last").prevAll();
        检查当前的元素是否含有某个特定的类,如果有则返回true
        hasClass(class)         $('div').hasCllass("protected");
        相当于$("li:eq(2)"),index从0开始(重点)
        eq(index)               $("li").eq(2);

    jquery中的排他思想
        想要多选一的效果,排他思想:当前元素设置样式,其余的兄弟元素清除样式;

    jquery链式编程
        需要注意操作的是哪个对象,以此为基础进行链条传播

    jquery样式操作
        1.操作css样式方式
            jquery可以使用css方法来修改简单元素样式,可以操作类,修改多个样式
            1.参数只写属性名,则是返回属性值
                $(this).css("color");
            2.参数是属性名,属性值,逗号分隔,是设置一组样式,属性必须加引号,值如果是数字可以不用加单位和引号
                $(this).css("color","red");
            3.参数可以是对象形式,方便设置多组样式,属性名和属性值用冒号隔开,属性可以不用加引号(复合属性必须采取驼峰命名法,如backgroundColor,如果值不是数字,需要加引号)
                $(this).css({"color":"pink","font-size":"20px"});

        2.设置类样式方法
            作用等同于以前的classlist,可以操作耒阳市,注意操作类里面的参数不要加
            1.添加类    $("div").addClass("current");
            2.移除类    $("div").removeClass("current");
            3.切换类    $("div").toggle("current"); //没有添加，有则删除

        3.类操作与className区别
            原生js中className会覆盖元素原先里面的类名,jquery里面类操作只是对指定类进行操作,不影响原先的类名;


##jquery效果(具体详见api)
    jquery提供了很多动画效果,常见的如下(具体参数配置去jquery api文档查看):
        显示隐藏: show,hide,toggle
        滑动:slideDown,slideUp,slideToggle
        淡入淡出:fadeIn,fadeOut,fadeToggle,fadeTo
        自定义动画:animate

    事件切换
        hover([over,]out)
        (1)over:鼠标移到元素上要触发的函数(相当于mouseenter)
        (2)out:鼠标移出元素要触发的函数(相当于mouseleave)
        (3)如果只写一个函数,那么鼠标经过和鼠标离开都会触发这个函数
            hover(function(){},function(){})

    动画队列及其停止排队方法
        1.动画或效果队列
            动画或者效果一旦触发就会执行,如果多次触发,就造成多个动画或者效果排队执行;

        2.停止排队  stop()
            (1)该方法用于停止动画或效果
            (2)注意:stop()写到动画或者效果的前面,相当于停止结束上一次的动画;


##jquery属性操作
    1.设置或获取元素固有属性值prop()
        所谓元素固有属性就是元素本身自带的属性,比如<a>元素里的href,比如<input>元素中的type;
        1.获取属性语法: prop("属性")
        2.设置属性语法: prop("属性","属性值")

    2.设置或获取元素自定义属性值attr()
        用户自己给元素添加的属性,我们称为自定义属性,比如给div添加index='1';
        1.获取属性语法: attr("属性")    //类似原生的getAttribute(),也可获取h5自定义属性
        2.设置属性语法: attr("属性","属性值")   //类似原生setAttribute()

    3.数据缓存 data()
        data()可以在指定的元素(内存)上存取数据,并不会修改DOM元素结构,一旦页面刷新则之前存放的数据都将被移除;
        1.附加数据语法: data("name","value")    //向被选元素附加数据
        2.获取数据语法: data("name")    //向被选元素获取数据,同时可以读取h5自定义属性data-index,得到的是数字型



##jquery内容文本值
    主要针对元素的内容还有表单的值操作
    1.普通元素内容html()  -- 相当于原生的innerHTML
        html()          //获取元素内容
        html("内容")    //设置元素的内容

    2.获取设置元素文本内容text()
        text()          //获取元素文本内容
        text("内容")    //设置元素文本内容

    3.获取设置表单值val()
        val()
        val("内容")


##jquery元素操作
    主要是遍历,创建,添加,删除元素操作

    1.遍历元素
        jquery隐式迭代是对同一类元素做了同样的操作,如果要给同一类元素做不同操作,就需要用到遍历;
        语法1:  $("div").each(function(index,domEle){ xxx; })
            1.each()方法遍历匹配的每一个元素,主要用DOM处理,each每一个
            2.里面的回调函数有2个参数:index是每个元素的索引号;demEle是每个DOM元素对象,不是jquery对象;
            3.所以要想使用jquery方法,需要给这个dom元素转换为jquery对象$(domEle)

        语法2:  $.each(object,function(index,element){ xxx; }})
            1.$each()方法可以用于遍历任何对象,主要用于数据处理,比如数组,对象
            2.里面的函数有2个参数:index是每个元素的索引号;element遍历内容;

    2.创建元素
        语法:   $("<li></li>")  //动态的创建了一个<li>

    3.添加元素
        1.内部添加  
            element.append("内容") 把内容放入匹配元素内部最后面,类似原生的appendChild
            element.prepend("内容") 把内容放入匹配元素内部最前面

        2.外部添加
            element.after("内容")   把内容放入目标元素后面
            element.before("内容")  把内容放入目标元素前面

        内部添加元素,生成后是父子关系,外部添加元素,生成后是兄弟关系

    4.删除元素
        element.remove()    删除匹配的元素(本身)--自杀
        element.empty()     删除匹配的元素集合中的所有子节点
        element.html("")    清空匹配的元素内容


##jquery尺寸,位置操作
    jquery尺寸
        width()/height()                    取得匹配元素宽度和高度值 只算width/height
        innerWidth()/innerHeight()          ... 包含padding
        outerWidth()/outerHeight()          ... 包含padding,border
        outerWidth(true)/outerHeight(true)  ... 包含padding,border,margin

        以上参数为空,则是获取相应值,返回的是数字型;如果参数是数字,则是修改相应值,参数可以不必写单位;

    jquery位置
        位置主要有三个: offset(),position(),scrollTop()/scrollLeft()

        1.offset()设置或获取元素偏移
            (1)offset()方法设置或返回被选元素相对于文档的偏移坐标,跟父级没有关系
            (2)该方法有2个属性left,top.top用于获取距离文档顶部距离,left获取距离文档左侧距离
            (3)可以设置 元素的偏移: offset({top:10,left:30})
        
        2.position()获取元素偏移
            用于返回被选元素相对于带有定位的父级偏移坐标,如果父级没有定位则以文档为准


##jquery事件
    单个事件注册
        语法: element.事件(function(){}) 
                    等同于DOM中操作-> $("div").click(function(){事件处理})
            其他事件和原生基本一致,比如mouseover,mouseout,blur,focus,change,keydown,keyup,resize,scroll等

    事件处理on()绑定事件
        on()方法在匹配元素上绑定一个或多个事件的事件处理函数,语法:  element.on(events,[selector],fn)
        1.events:一个或多个用空格分隔的事件类型,如'click'或'keydown'
        2.selector:元素的子元素选择器
        3.fn:回调函数,即绑定在元素身上的侦听函数

        优点:
            1.可以绑定一个或多个事件
            2.可以事件委派操作,即把原来子元素上的事件绑定到父元素上,就是事件委托给父元素;(在此之前有bind(),live(),delegate()等方法处理事件绑定或者事件委派,最新版本使用on替代他们)
            3.可以给动态创建的元素绑定事件(最重要,参考02-微博发布效果)

    事件处理off()解绑事件
        off()可以移除通过on()方法添加的事件处理程序;
            $("p").off()                //解绑p元素所有事件处理程序
            $("p").off("click")         //解绑p元素上的点击事件,后面的foo是侦听函数名
            $("ul").off("click","li")   //解绑事件委托

        如果有的事件只想触发一次,可以使用one()来绑定事件

    自动触发事件trigger()
        有些事件希望能自动触发,如轮播图自动播放功能跟点击右侧按钮一致,可以利用定时器自动触发右侧按钮点击事件,不必用鼠标点击触发,一般有如下三种方案:
            1.element.click()               //第一种简写形式
            2.element.trigger("type")       //第二种自动触发模式,不需鼠标点击
            3.element.triggerHandler(type)  //第三种自动触发模式


##jquery事件对象
    事件被触发,就会有事件对象的产生
    element.on(events,[selector],function(event){})
        阻止默认行为:event.preventDefault()或者return false
        阻止冒泡:event.stopPropagation


##jquery其他方法
    1.jquery对象拷贝
        如果想把某个对象拷贝(合并)给另外一个对象使用,可以使用$.extend()方法
        $.extend([deep].target,object,[objectN])

        1.deep:     如果设为true为深拷贝,默认为false浅拷贝
        2.target:   要拷贝的目标对象
        3.object1:  待拷贝到第一个对象的对象
        4.objectN:  待拷贝到第N个对象的对象
        5.浅拷贝是吧被拷贝对象的复杂数据类型中的地址拷贝给目标对象,修改目标对象会影响被拷贝对象
        6.深拷贝,前面加true,完全克隆(拷贝对象而不是地址),修改目标对象不会影响被拷贝对象


    2.jquery多库共存
        jquery使用$作为标识符,随着jquery流行,其他js库也会用$作为标识符,此时一起使用会引起冲突,因此需要一个解决方案,让jquery和其他的js库不存在冲突,可以同时存在,这就叫做多库共存;jquery解决方案:
            1.把里面的$符号统一改为jQuery,比如jQuery("div")
            2.jQuery变量规定新的名称: $.noConflict()/jQuery.noConflict()  var xx = $.noConflict() 

    3.jquery插件
        jquery功能有限,若要实现复杂特效效果,可以借助于jquery插件完成,这些插件也是依赖于jquery完成,所以必须先引入jquery文件,因此也称为jquery插件;

        常用插件网站: jquery插件库,jquery之家

        jquery插件使用步骤:
            1.引入相关文件(jquery文件和插件文件)
            2.复制相关html,css,js(调用插件)
            
        全屏滚动插件: fullPage.js





















































