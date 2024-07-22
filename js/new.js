$(document).ready(function () {

    const brand_txt = new Swiper('.brand_txt', {

        effect: "fade",//이펙트에 효과를주면 자동으로 겹쳐서보임
        fadeEffect: {
            crossFade: true//fade끼리 만났을때 자연스럽게 겹치지 않게끔
        },

    }); //brand_txt


    const brand_img = new Swiper(".brand_img", {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        speed: 1000, //슬라이드 넘어가는 속도ms
        pagination: {
            el: ".swiper-pagination",
            type: "bullets", //버튼종류 설정 'bullets', 'fraction', 'processbar'
            clickable: true, //버튼클릭여부
        },



    });

    brand_txt.controller.control = brand_img;//autoplay랑 speed는 엮인swpier중 하나만
    brand_img.controller.control = brand_txt;

});

