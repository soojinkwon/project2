$(document).ready(function () {


    const sign2_list = new Swiper(".sign2_list", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20, // 슬라이드 사이 여백

        breakpoints: {
            768: {
                // 가로해상도가 768px 이상일 경우
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1400: {
                // 가로해상도가 1024px 이상일 경우
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },


        // breakpoints: {
        //     768: {
        //         // 가로해상도가 768px 이상일 경우
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        //     1400: {
        //         // 가로해상도가 1024px 이상일 경우
        //         slidesPerView: 5,
        //         spaceBetween: 50,
        //     },
        // },

    });

    const sign3_list = new Swiper(".sign3_list", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 5, // 슬라이드 사이 여백
        breakpoints: {
            768: {
                // 가로해상도가 768px 이상일 경우
                slidesPerView: 1,
                spaceBetween: 5,
            },
            1400: {
                // 가로해상도가 1024px 이상일 경우
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },

    });
});