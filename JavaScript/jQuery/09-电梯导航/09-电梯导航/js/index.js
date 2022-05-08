$(function () {
    // 通过添加节流阀(互斥锁))解决滚动的卡顿问题
    var flag = true;
    // 当点击了小li后 此时不需要执行,页面滚动事件里的li的背景选择 添加current
    // 1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    // 3.页面滚动到某个内容区域,左侧电梯导航小li相应删除或添加current类名
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });

    // 2.点击电梯导航页面可以滚动到形影内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        // 每次点击小li就需要计算出页面要去的位置,然后选出对应索引号的内容区盒子,计算它的offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            // 滚动时将节流阀打开
            flag = true;
        });
        // 点击之后让当前的小li添加current类名,姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })


})