$(function () {
    //  sticky header part start
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.navbar').addClass('sticky_header');
        } else {
            $('.navbar').removeClass('sticky_header');
        }
    });
    //  sticky header part end

    // slick slider start
    $('.slick_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });
    // slick slider end

    // venobox part start
    new VenoBox({
        selector: '.my-video-links',
    });
    // venobox part end

    // team part start
    $('.team_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },


        ]
    });
    // team part end

    // up to top part start
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.up_to_top').fadeIn(200)
        } else {
            $('.up_to_top').fadeOut(200)
        }
    });
    //==== Animate the scroll to top
    $('.up_to_top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });
    // up to top part end
});