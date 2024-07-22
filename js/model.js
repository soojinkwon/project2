$(document).ready(function () {


    // $(".model_depth2, .m_depth2_bg").hide();
    // $(".gnb > li").mouseenter(function () {
    //     $(this).find(".model_depth2").stop().fadeIn();
    //     $(".m_depth2_bg").stop().fadeIn();
    // });
    // $(".gnb > li").mouseleave(function () {
    //     $(this).find(".model_depth2").stop().fadeOut();
    //     $(".m_depth2_bg").stop().fadeOut();
    // });

    $(".depth2_wrap,.depth2_bgg").hide();
    $(".bg1").show();

    $(".model_gnb > li").mouseenter(function () {
        $(".depth2_bgg").stop().slideDown();
        $(this).find(".depth2_wrap").stop().fadeIn(500);
    });
    $(".model_gnb > li").mouseleave(function () {
        $(".depth2_bgg").stop().slideUp();
        $(this).find(".depth2_wrap").stop().fadeOut(300);
    });

    /* $(".model_gnb > li:not(:first-child)").mouseleave(function () {
        $(".depth2_bgg").stop().slideUp();
        $(this).find(".depth2_wrap").stop().fadeOut(300);
    }); */


});