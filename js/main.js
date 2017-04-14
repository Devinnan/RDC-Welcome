//关于加载页面的设置
document.onreadystatechange = loading;

$(document).ready(function() {

    if (!isMobile) moveLightRay();

    IE_check();

    //arrowToSecond
    $(".to-second").on("click", function(e) {
        e.preventDefault();
        var offset = $(".screen-2").offset().top;
        $("html, body").animate({
            scrollTop:offset - 50
        }, 1000);
    });
    //toTop
    $('#totop').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 2000);   
    });


    $(window).scroll(function() {
        if (!isMobile) moveLightRay();
        totop();
    });

    //调整bgStar
    setTimeout((function(){
        $(window).resize(function() {
        $("#bg-stars").css("width", $(window).width());
        $("#bg-stars").css("height", $(window).height());
    });
    }),1000);
    
    //app二维码
    $('#app').hover(function() {
        $("#downLoad").stop().fadeIn();
    }, function() {
        $("#downLoad").stop().fadeOut();
    });


});


function totop() {
    var _scrollTop = $(".screen-1").height() + $('.screen-2').height();
    var bodyToTop;
    //兼容性
    if(document.documentElement&&document.documentElement.scrollTop){   
        bodyToTop=document.documentElement.scrollTop;   
    }else if(document.body){   
        bodyToTop=document.body.scrollTop;   
    }
    if(bodyToTop >= _scrollTop) {
        $('#totop').show();
    } else {
        $('#totop').fadeOut();
    }
}


//开始进入页面的动画
function loading() { 
    setTimeout((function(){
        if(document.readyState === 'complete') {
            $('.tossing').animate({"top": "-300px"});
            $('.cow').animate({"margin-top": "300px"});
            $('#loader').fadeOut();
            $('html,body').css('overflow', 'visible');
        }
    }),1000);
}

//兼容ie的效果
function IE_check() {
    if(!!window.ActiveXObject || "ActiveXObject" in window) {
        $(".group-wrapper").removeClass('flip-container');
        $(".front").removeClass('group-special');
        $(".group").hover(function() {
            $(this).find(".front").stop().fadeOut();
            $(this).find(".back-special").stop().fadeIn();
        }, function() {
            $(this).find(".front").stop().fadeIn();
            $(this).find(".back-special").stop().fadeOut();
        });
    }
}
