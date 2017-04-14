var second, third, fourth, fifth, height, width;
$(window).resize(function() {
    getSomeNum();
});
$(document).ready(function() {
    getSomeNum();
}); 
function getSomeNum() {
    height = parseInt($(window).height());
    width = parseInt($(window).width()) + 20;
    second = height * 2;
    third = height * 4;
    fourth = height * 6;
    fifth = height * 8;
}
function moveLightRay() {
    var top = $(window).scrollTop();
    var a_width = 664;
    var a_height = 751;
    var from, to, start, end;
    if (top < second) {
        from = -400;
        to = second;
        start = 0;
        end = second;
        $(".a-left").css({
            "left": getPos( - a_width, width, start, end, top),
            "top": getPos(from, to, start, end, top)
        });
    }
    if (top > second && top < third) {
        from = second;
        to = third + height / 2;
        start = second;
        end = third;
        $(".a-right").css({
            "left": getPos(width, -a_width, start, end, top),
            "top": getPos(from, to, start, end, top)
        });
    }
    if (top > third && top < fourth) {
        from = third;
        to = fourth + height / 2;
        start = third;
        end = fourth;
        $(".b-left").css({
            "left": getPos( - a_width, width, start, end, top),
            "top": getPos(from, to, start, end, top)
        });
    }
    if (top > fourth && top < fifth) {
        from = fourth;
        to = fifth;
        start = fourth;
        end = fifth;
        $(".b-right").css({
            "left": getPos(width, -a_width / 3, start, end, top),
            "top": getPos(from, to, start, end, top)
        });
    }
}
function getPos(valFrom, valTo, start, end, cur, inert) {
    if (typeof(inert) === "undefined") inert = 1;
    if (cur > start) {
        if (cur > end) return valTo;
        else {
            var diff = end - start;
            var pos = valFrom + inert * (valTo - valFrom) * (cur - start) / diff;
            return pos;
        }
    } else return valFrom;
}