$(document).ready(function () {
    // 메인 슬라이드
    const mb = new Swiper('.mb', {
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
    });

    // best
    const best_list = new Swiper(".best_list", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 20, // 슬라이드 사이 여백
        breakpoints: {
            768: {
                // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1400: {
                // 가로해상도가 1024px 이상일 경우
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
        },
    });

    $(".best_list li a img:nth-child(2)").hide();
    $(".best_list li").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });

    //collabo
    const collabo_list = new Swiper(".collabo_list", {
        autoplay: {
            delay: 100,

            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 2,

        spaceBetween: 5, // 슬라이드 사이 여백

        breakpoints: {
            768: {
                // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1400: {
                // 가로해상도가 1024px 이상일 경우
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },

    });

    const collabo_list2 = new Swiper(".collabo_list2", {
        autoplay: {
            delay: 100,
            reverseDirection: true,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 2,

        spaceBetween: 5, // 슬라이드 사이 여백

        breakpoints: {
            768: {
                // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1400: {
                // 가로해상도가 1024px 이상일 경우
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },

    });

    //event

    const event_list = new Swiper(".event_list", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });








    $(".event_list li a img:nth-child(2)").hide();
    $(".event_list li").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });



    //access
    $(".access_hover").hide();
    $(".access_block").mouseenter(function () {
        $(this).find(".access_hover").fadeToggle();
    });
    $(".access_block").mouseleave(function () {
        $(this).find(".access_hover").fadeToggle();
    });



    //mission


    /* $(".mission h3").hide(); */
    /* $(".mission").hover(function () {
        $(this).find(".mission h3").stop().fadeToggle();
    }); */

    // $(".mission").mouseenter(function () {
    //     $(this).find("h3, p").fadeToggle();
    // });
    // $(".mission").mouseleave(function () {
    //     $(this).find("h3, p").fadeToggle();
    // });


    /* $(".access_block").mouseleave(function () {
        $(this).find(".access_hover").fadeToggle();
    });
 */

    /*  $(".mission_hover").hide();
     $(".mission").mouseenter(function () {
         $(this).find(".mission_hover").fadeToggle();
     });
     $(".mission").mouseleave(function () {
         $(this).find(".mission_hover").fadeToggle();
     });
 
     $(".club_hover").hide();
     $(".club").mouseenter(function () {
         $(this).find(".club_hover").fadeToggle();
     });
     $(".club").mouseleave(function () {
         $(this).find(".club_hover").fadeToggle();
     }); */




});