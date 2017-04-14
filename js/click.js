/*
此js文件的功能：实现点击切换介绍的交互功能
*/
var flag = "web";
$(document).ready(function() {
    $(".group").click(function() {
        var myClass = $(this).attr("data-class");
        if(myClass === "web") {
            if(flag === "web") {
                return;
            }
            $("." + flag).hide();
            $("." + flag + "-title").hide();
            $(".web").show().addClass('animated swing');
            $(".web-title").show().addClass('animated swing');
            if($(window).width() > 600) {
                 $(".group-hover").removeClass('group-hover');
                 $(this).parent().addClass('group-hover');
            } else {
                $(".group-wrapper-special").removeClass('group-wrapper-special');
                $(this).parent().addClass('group-wrapper-special');
            }
            flag = "web";
        } else if(myClass === "android") {
            if(flag === "android") {
                return;
            }
            $("." + flag).hide();
            $("." + flag + "-title").hide();
            $(".android").show().addClass('animated swing');
            $(".android-title").show().addClass('animated swing');
            if($(window).width() > 600) {
                 $(".group-hover").removeClass('group-hover');
                 $(this).parent().addClass('group-hover');
            } else {
                $(".group-wrapper-special").removeClass('group-wrapper-special');
                $(this).parent().addClass('group-wrapper-special');
            }
            flag = "android";
        } else if(myClass === "java") {
            if(flag === "java") {
                return;
            }
            $("." + flag).hide();
            $("." + flag + "-title").hide();
            $(".java").show().addClass('animated swing');
            $(".java-title").show().addClass('animated swing');
            if($(window).width() > 600) {
                 $(".group-hover").removeClass('group-hover');
                 $(this).parent().addClass('group-hover');
            } else {
                $(".group-wrapper-special").removeClass('group-wrapper-special');
                $(this).parent().addClass('group-wrapper-special');
            }
            flag = "java";
        }
    });
});