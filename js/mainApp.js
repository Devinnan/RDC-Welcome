//关于加载页面的设置
document.onreadystatechange = loading;

$(document).ready(function() {



    //arrowToSecond
    $(".to-second").on("click", function(e) {
        e.preventDefault();
        var offset = $(".screen-2").offset().top;
        $("html, body").animate({
            scrollTop:offset - 50
        }, 1000);
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
