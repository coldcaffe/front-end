###H5新增语义化标签
    以前布局基本用div做,但div对搜索引擎是没有语义的
    h5新增语义化标签:
        <header>    头部标签
        <nav>       导航标签
        <article>   内容标签
        <section>   块级标签
        <aside>     侧边栏标签
        <footer>    尾部标签

    1.以上语义化标准主要针对搜索引擎
    2.这些新标签在页面中可以多次使用
    3.在ie9中需要把这些元素转换为块级元素
    4.移动端更喜欢使用这些标签

###新增多媒体标签
    使用他们可以方便的在页面中插入音频和视频,不必再去使用落后的flash和其他浏览器插件
    <audio>     音频
        autoplay    音频在就绪后就马上播放
        controls    向用户显示控件,如播放按钮
        loop        音频结束时重新开始播放
        src         要播放音频的url
        在不用插件情况下支持音频文件播放,audio元素仅支持Ogg Vorbis,MP3,Wav这三种格式(不同浏览器有区别);


    <video>     视频
        autoplay    视频就绪自动播放
        controls    向用户显示播放控件
        width       设置播放器宽度
        height      设置播放器高度
        loop        播放完是否继续播放该视频,循环播放
        preload     是否等加载完再播放
        src         视频url地址
        poster      加载等待的画面图片
        muted       静音播放
        video视频标签支持Ogg,MPEG4,WebM三种格式(具体看浏览器及其版本)

    总结:
        1.音视频标签使用基本一致,浏览器支持情况不同
        2.谷歌浏览器把音视频的自动播放都禁止了,但视频可以通过muted禁音方式解决
        3.视频标签是重点,经常设置自动播放,循环和设置大小属性,不使用controls控件


###h5新增input表单
    type="email"    限制用户输入必须为Email类型
    type="url"      限制...URL
    type="date"     日期
    type="time"     时间
    type="month"    月
    type="week"     周
    type="number"   数字
    type="tel"      手机号码
    type="search"   搜索框
    type="color"    生成一个颜色选择表单


###H5新增input表单属性
    required        表单拥有该属性表示内容不能为空,必填
    placeholder     表单提示信息,存在用户输入项时,此值将不显示
    autofocus       自动聚焦属性,页面加载完成后自动聚焦到指定表单
    autocomplete    用户在字段键入时,浏览器基于之前键入值,显示出在字段填写中的选项(默认打开on,关闭off,off用的比较多),需要同时在表单内加上name属性,同时提交成功.
    multiple        可以多选文件提交(单独一个file只能选中一个文件进行提交)




















