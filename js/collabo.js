$(document).ready(function () {

    const collabo_list = new Swiper(".collabo_list", {
        autoplay: {
            delay: 100,
            reverseDirection: true,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20, // 슬라이드 사이 여백

        breakpoints: {
            768: {
                // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                // 가로해상도가 1024px 이상일 경우
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },

    });

});