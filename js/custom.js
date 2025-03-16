$(function () {

    const mvs = new Swiper('.main_visual_slide', {

        loop: true,
        speed: 1500,
        effect: "fade",
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,

        },


    })


});

$(function () {

    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');

        $('.header .gnb').toggleClass('on')

    });

    $('.header .gnb>ul>li>a').on('click', function (e) {

        if ($('.header .gnb').hasClass('on')) {

            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown()

        }






    });





    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('on');
        $('.header .gnb').removeClass('on');
        $('.header .gnb>ul ul').removeAttr('style');

    });

    $('header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })


})





$(function () {


    $('.main_menu .tabcon_all_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_menu .tabcon_all_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_menu .main_menu_wrap .con').removeClass('on');
        $('.main_menu .main_menu_wrap .con').eq(idx).addClass('on');





    })




    const MMS = new Swiper('.main_menu_slide01', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 5000,
        loop: true,


        autoplay: {
            enabled: true,
            delay: 0,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.main_menu .arrows .next',
            prevEl: '.main_menu .arrows .prev',
        },


        slidesPerView: 1,
        spaceBetween: 30,





        breakpoints: {
            540: {
                slidesPerView: 3,

            }
        }




    });

    const MMS1 = new Swiper('.main_menu_slide02', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 5000,
        loop: true,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_menu .arrows .next',
            prevEl: '.main_menu .arrows .prev',
        },


        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            540: {
                slidesPerView: 3,

            }
        }


    });

    const MMS2 = new Swiper('.main_menu_slide03', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 5000,
        loop: true,


        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.main_menu .arrows .next',
            prevEl: '.main_menu .arrows .prev',
        },

        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            540: {
                slidesPerView: 3,

            }
        }





    });



    const MNS = new Swiper('.main_news_slide', {

        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            541: {
                slidesPerView: 3,

            }
        },
        navigation: {
            nextEl: '.main_news .arrows .next',
            prevEl: '.main_n .arrows .prev',
        }


    })






});

$(function () {
    const MSS = new Swiper('.main_store_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 8,
        centeredSlides: true,


        navigation: {
            nextEl: '.main_store .arrows .next',
            prevEl: '.main_store .arrows .prev',
        },

        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            540: {
                slidesPerView: 3,

            }
        }

    })
});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })

    $('#flk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) window.open(lnk)
    })
})