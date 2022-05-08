###css3属性选择器
    css3在css2的基础上拓展样式,对于移动端的支持优于pc端,应用相对广泛
    E[att]          选择具有att属性的E元素
    E[att="val"]    选择具有att属性且属性值等于val的E元素
    E[att^="val"]   匹配具有att属性,且值以val开头的E元素
    E[att$="val"]   匹配具有att属性,且值以val结尾的E元素
    E[att*="val"]   匹配具有att属性,且值中含有val的E元素

    类选择器,属性选择器,伪类选择器,权重为10


###结构伪类选择器
    E:first-child   匹配父元素中的第一个子元素E
    E:last-child    匹配父元素中最后一个E元素
    E:nth-child(n)  匹配父元素中的第n个子元素E
        1.n可以是数字/关键字/公式,如果是数字,就代表选第几个
        2.常见的关键字有even-偶数,odd奇数
        3.常见的公式如下(如果n是公式,则从0开始计算)
            2n      偶数(even)
            2n+1    奇数(odd)
            5n      5 10 15...
            n+5     从第5个开始(包含第5个)到最后
            -n+5    前5个(包含第5个)
        4.第0个元素或者超出了元素的个数会被忽略

    E:first-of-type 指定类型E的第一个
    E:last-of-type  指定类型E的最后一个
    E:nth-of-type   指定类型E的第n个


    nth-child和nth-of-type的区别:
        nth-child(n)    选择父元素里的第n个孩子,不管里面的孩子是否为同一类型   
        nth-of-type     先确定类型,再做选择


###伪元素选择器
    ::before    在元素内部的前面插入内容
    ::after     在元素内部的后面插入内容

    1.before和after必须要有content属性
    2.before在内容前面,after在内容后面
    3.before和after创建一个元素,但是属于行内元素
    4.因为在dom里看不见刚才创建的元素,所以称为伪元素,伪元素和标签选择器权重一样为1;










































