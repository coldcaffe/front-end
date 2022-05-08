$(function () {
    // 初始加载
    load();
    // 1.按下回车后将完整数据存储到本地,数据格式为json型字符串
    $("#title").on("keydown", function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您要的操作");
            } else {
                // 读取本地缓存数据,更新后再次写入缓存存储
                var local = getData();
                local.push({ title: $(this).val(), done: false });
                saveData(local);
                // 2.将本地存储的todolist数据渲染加载到页面
                load();
                $(this).val("");
            }
        }
    });

    // 3.todolist删除操作
    $("ol, ul").on("click", "a", function () {
        // 获取本地存储,修改后重新保存
        var data = getData();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveData(data);
        // 重新渲染页面
        load();
    });

    // 4.todolist正在进行和已完成选项操作
    $("ol,ul").on("click", "input", function () {
        // 先获取本地存储修改后再存回
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        // 重新渲染
        load();
    });

    // 读取本地存储的数据
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            // 本地存储数据必须为字符串格式,因此需要将存入字符串转为对象返回
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 保存本地存储数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 渲染加载数据
    function load() {
        // 读取本地数据
        var data = getData();
        // 便利前需要先清空ol里面的元素内容,否则多次load后数据会叠加渲染展示
        $("ol, ul").empty();
        var todoCount = 0; //正在进行的个数
        var doneCount = 0; //已经完成的个数
        // 遍历数据,进行渲染处理
        $.each(data, function (i, n) {
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }
        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }



































})