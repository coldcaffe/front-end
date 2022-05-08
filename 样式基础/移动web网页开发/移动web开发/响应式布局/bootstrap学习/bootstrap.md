###Bootstrap简介
    来自于twitter,基于html,css和js构成的框架,有一套比较完整的网页功能解决方案,而且控制权在框架本身,有预制样式库,组件和插件,使用者按框架所规定的某种规范进行开发,简洁灵活,使web开发更快捷;

    优点:
        1.标准化的html + css编码规范
        2.提供了一套简洁,直观,强悍的组件
        3.有自己的生态圈,不断的更新迭代
        4.让开发更简单,提高了开发的效率

    版本:
        2.xx:停止维护,兼容性好,代码不够整洁,功能不够完善
        3.xx:目前使用较多,但是放弃了ie6/7,对ie8支持不过界面效果不好,偏向用于响应式布局,移动设备优先的web项目;
        4.xx:最新版,目前不是很流行;


###bootstrap使用
    1.创建文件夹结构
        常见的网页文件包结构外,再新增bootstrap包结构,将对应版本的bootstrap解析出的css/fonts/js文件直接拷入bootstrap文件夹(无法直接拖入工程)

    2.创建html骨架结构
        将bootstrap官网中的basic template基础模板中html代码粘贴入index.html

    3.引入相关样式文件
        在index中引入bootstrap样式
        <link href="css/bootstrap.min.css" rel="stylesheet">

    4.书写内容
        直接用bootstrap预先定义好的样式来使用,可以通过自定义样式的方式修改bootstrap原有的样式,注意处理好权重问题即可;


###布局容器
    bootstrap需要为页面内容和栅格系统包裹一个.container容器,bootstrap预先定义好了这个类,叫.container,它提供了两个做此作用的类:

    1.container类
        响应式布局容器          固定宽度
        大屏(大于等于1200px)    宽度定位1170px
        中屏(大于等于992px)     970px
        小屏(大于等于768px)     750px
        超小屏(100%)

    2.container-fluid类
        流式布局容器    百分百宽度
        占据全部视口(viewport)的宽度
        适合于单独做移动端开发


###bootstrap栅格系统
    grid systems也有人译为网格系统,是指将页面布局划分为等宽的列,然后通过列数定义来模块化页面布局,bs提供了一套响应式,移动设备有限的流式栅格系统,随着屏幕或视口尺寸的增加,系统会自动分为12列,bs里container宽度固定,但不同屏幕下,container的宽度不同,我们再把container划分为12等份;

    .container最大宽度  自动(100%)  750px       950px       1170px
    类前缀              .col-xs-    .col-sm-    .col-md-    .col-lg-
    列数                                12

    1.行(row)必须放到container布局容器里面
    2.实现列的平均划分,需要给列添加类前缀
    3.xs-extra small: 超小  sm-small:小 md-medium:中等  lg-large:大
    4.列(column)大于12,多余12的列所在的元素将被作为一个整体另起一行排列
    5.每一列默认有左右15像素的padding
    6.可以同时为一列指定多个设备的类名,以便划分不同份数,例如class='col-md-4 col-sm-6'

    列嵌套:
        栅格系统内置的栅格系统将内容再次嵌套,即一个列内再分成若干份小列,可以通过添加一个新的.row元素和一系列.col-sm-*元素到已经存在的.col-sm-*元素内

    列偏移:
        使用.col-md-offset-*类可以将列想右侧偏移,这些类实际是通过使用*选择器为当前元素增加了左侧的边距(margin)

    列排序:
        通过使用.col-md-push-*和.col-md-pull-*类就可以很容易的改变列的顺序

    响应式工具:
        通过hidden在页面变化时进行隐藏操作(参考淘宝在页面变化时隐藏部分页面内容)
        类名            超小屏      小屏        中屏        大屏
        .hidden-xs      隐藏        可见        可见        可见
        .hidden-sm      可见        隐藏        可见        可见
        .hidden-md      可见        可见        隐藏        可见
        .hidden-lg      可见        可见        可见        隐藏

        与之相反的是,visible可以进行展示操作




















































