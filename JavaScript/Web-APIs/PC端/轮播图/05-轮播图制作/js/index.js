window.addEventListener('load', function () {
    // 1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //2.鼠标经过focuns就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    });
    //3.动态生成小圆圈,有几张图片就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    //这里最开始使用的ul.length,结果没有创建小圆圈,而且下面给ol中第一个li设置类名为current时失败
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个小li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号,通过自定义属性来做
        li.setAttribute('index', i);
        //把小li插入ol中
        ol.appendChild(li);
        //4.小圆圈的排他思想,可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            //干掉所有人,把所有的li清除current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //留下自己 将当前的小li设置current类名
            this.className = 'current';
            //5.点击小圆圈 移动图片(移动的是ul)
            //ul的移动距离 = 小圆圈的索引号*图片的宽度(注意是负值)
            //当点击了某个li后 就拿到了当前li的索引号
            var index = this.getAttribute('index');
            //当我们点击了某个小li,就要把这个li的索引号给num
            num = index;
            //当点击了某个小li,就要把这个li的索引号给circle
            circle = index;
            //num = circle = index;
            console.log(focusWidth);
            console.log(index);
            animate(ul, -index * focusWidth);
        });
    }
    //把ol里的第一个小li设置类名为current
    ol.children[0].className = 'current';
    //6.克隆第一张图片(li)放到ul最后面(实现图片无痕切换)
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮,图片滚动一张
    var num = 0;
    //circle控制小圆圈的播放
    var circle = 0;
    //flag节流阀
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false; // 关闭节流阀
            //如果走到了最后复制的一张图片,此时ul要快速复原 left改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;//打开节流阀
            });

            //8.点击右侧按钮,小圆圈跟随一起变化,可以再声明一个变量控制小圆圈的播放
            circle++;
            //如果circle == 4 说明走到最后克隆的这张图片了,我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            //调用函数
            circleChange();
        }
    });

    //9.左侧按钮做法
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //点击左侧按钮,小圆圈跟随一起变化,可以再声明一个变量控制小圆圈的播放
            circle--;
            //如果circle<0,说明第一张图片,则小圆圈要改为第4个小圆圈(3)
            circle = circle < 0 ? ol.children.length - 1 : circle;
            //调用函数
            circleChange();
        }
    });
    //抽取小圆圈变化函数
    function circleChange() {
        //先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    //10.自动播放轮播图
    var timer = setInterval(function () {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);
})