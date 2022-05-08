###动画
    是css3中最有颠覆性的特征之一,可通过设置多个节点来精确控制一个或一组动画,常用来实现复杂的动画效果,相比较过渡,动画可以实现更多变化,更多控制和连续自动晶播放等效果;

    1.先定义动画
        @keyframes 动画名称 {
            0% {
                width:100px;
            }
            100% {
                width:200px;
            }
        }
        0%是动画的开始,100%是动画的完成,这样的规则就是动画序列.在@keyframes中规定某项css样式,就能创建由当前样式逐渐改为新样式的动画效果,动画是使元素从一种样式转换为另一种样式的效果,可以改变任意多的次数和样式.
        需要用百分比来规定变化发生的时间,或用关键词'from'和'to',等同于0%和100%;

    2.再使用(调用)动画
        animation-name: 动画名称;
        animation-duration: 持续时间;
        

###动画常用属性
    animation: name duration timing-function delay iteration-count direction fill-mode;
    @keyframes                  规定动画
    animation                   所有动画属性的简写属性,除了animation-play-state属性
    animation-name              规定动画名称(必须)
    animation-duration          规定动画一个周期所花秒或毫秒(必须)
    animation-timing-function   规定动画速度曲线,默认'ease'
                                linear      动画从头到尾匀速执行
                                ease        默认,低速开始,然后加快,结束前变慢
                                ease-in     动画以低速开始
                                ease-out    动画以低速结束
                                ease-in-out 动画低速开始和结束  
                                steps()     指定了时间函数中的间隔数量(步长)
    animation-delay             规定动画何时开始
    animation-iteration-count   规定动画播放次数,默认1,还有infinite
    animation-direction         规定动画是否在下一周期逆向播放,默认'normal',alternate逆播放
    animation-play-state        规定动画是否正在运行或暂停,默认'running'还有'pause'
    animation-fill-mode         规定动画结束后状态,保持forwards/回到起始位置backwards


###动画简写属性
    animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态
    简写属性里不包含animation-play-state,一般animation-play-state:paused常和鼠标结合使用暂停动画
    想要动画走回来而不是直接跳回来:animation-dirtection:alternate
    盒子动画结束后,停在结束位置:animation-fill-mode:forwards;























