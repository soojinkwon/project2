$(document).ready(function () {

    //header에 마우스를 올렸을때
    //h1 img 에 src 속성 값이 바꿔라
    //샘안되여
    /* $("#header").mouseenter(function () {
        $("h1 img").attr("src", "images/common/logo_b.png");
    });
    $("#header").mouseleave(function () {
        $("h1 img").attr("src", "images/common/logo_w.png");
    }); */
    /* attr : attribute(태그자체) 속성 & property()  */


    //depth2
    $(".depth2, .depth2_bg").hide();
    $(".gnb").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".depth2_bg").stop().fadeIn();
    });
    $(".gnb").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".depth2_bg").stop().fadeOut();
    });

    /* $(".depth2, .depth2_bg").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".depth2_bg").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".depth2_bg").stop().fadeOut();
    }); */


    //mgnb
    /* $(".mgnb_wrap").hide();
    $(".btn_mgnb").click(function () {
        $(".mgnb_wrap").fadeIn();
    });
    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });

    $(".mdepth2").hide();
    $(".mgnb > li").click(function (e) {
        //e.preventDefault(); //클릭이벤트 방지
        $(this).find(".mdepth2").slideToggle();
    });
 */

    // 언어설정메뉴
    $('.language ul').hide();
    $('.language').click(function () {
        $('.arrow').toggleClass('active');
        $(this).children('ul').slideToggle();
    });


    // 검색영역
    $(".search").hide();

    $(".btn_search").click(function () {
        $(".search").fadeIn();
    });
    $(".search_close").click(function () {
        $(".search").fadeOut();
    });

    // 모바일 메뉴    
    $(".ham").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });



    //모바일 2차메뉴
    $(".mdepth2").hide();

    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });
});