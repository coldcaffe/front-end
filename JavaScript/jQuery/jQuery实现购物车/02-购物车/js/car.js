// 这个目前还有bug,如全选后价格不对,未选中的商品也计算数量等,待后续修正补充
$(function () {
    // 1.选项框全选/全不选功能
    $(".checkall").change(function () {
        // 将全选框的选中状态赋值给其他选项框
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有的商品添加check-cart-item类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // 移除check-cart-item
            $(".cart-item").removeClass("check-cart-item");
        }
    });

    // 2.如果小复选框全部选中后,全选按钮也应被选中,否则全选按钮不选中
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        // 商品添加类名
        if ($(this).prop("checked")) {
            // 让被操作的商品添加/删除check-cart-item类名
            // parents()可以越级获取指定祖父元素
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // 移除check-cart-item
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    // 3.增删商品数量,首先声明一个变量,当点击+号时就让这个变量增加,然后赋值给文本框
    $(".increment").click(function () {
        // 得到当前兄弟文本的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 根据文本框数量和商品价格,计算当前商品价格p,以及小计模块
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // 去除¥,只留数字
        p = p.substr(1);
        // 通过tofixed只保留小数点后2位数字
        var price = (p * n).toFixed(2);
        // 小计模块
        $(this).parents(".p-num").siblings(".p-sum").html("¥" + price);
        getSum();
    });
    $(".decrement").click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        // console.log(n);
        n--;
        $(this).siblings(".itxt").val(n);
        // var p = $(this).parent().parent().siblings(".p-price").html();
        // parents(".p-num") 返回指定的祖先元素
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        console.log(p);
        // 小计模块 
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });

    //  4. 用户修改文本框的值 计算 小计模块  
    $(".itxt").change(function () {
        // 先得到文本框的里面的值 乘以 当前商品的单价 
        var n = $(this).val();
        // 当前商品的单价
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });


    // 6. 删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action a").click(function () {
        // 删除的是当前的商品 
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // (2) 删除选中的商品
    $(".remove-batch").click(function () {
        // 删除的是小的复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // (3) 清空购物车 删除全部商品
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    })


    // 抽取小计模块方法
    function getSum() {
        var count = 0; //计算总件数
        var money = 0; //计算总价格
        // 通过遍历方式获取所有选中商品数量之和
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("¥" + money.toFixed(2));
    }

})