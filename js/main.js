$(".menu").click(function (e) {
    e.preventDefault(), $(this).toggleClass("is-active"),
        $(".nav").toggleClass("opened"), $("html").toggleClass("overflow");
    $(".nav__link").click(function (e) {
        e.preventDefault();
        if ($(window).width() <= 768) {
            $(".header__nav").removeClass("opened");
            $("html").removeClass("overflow");
            $(".menu").removeClass("is-active");
        }
    })
})

$('.system__slider').slick({
    dots: false,
    loop: true,
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
})

$('.feedback__slider').slick({
    dots: false,
    loop: true,
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slick-prev-black'),
    nextArrow: $('.slick-next-black'),
});

jQuery(document).ready(($) => {
    $('.accordion__block').click(function () {
        $(this).find('.accordion__close').toggleClass('open');
        $(this)
            .next('.accordion__open')
            .slideToggle('fast', () => {
                // Do something maybe ..
            });
    });

    $('.question__block').click(function () {
        let container = $(this).parents('.question');
        let answer = container.find('.question__answer');
        let trigger = container.find('.question__arrow');

        answer.slideToggle(200);

        if (trigger.hasClass('question__rotated')) {
            trigger.removeClass('question__rotated');
        } else {
            trigger.addClass('question__rotated');
        }

        if (container.hasClass('expanded')) {
            container.removeClass('expanded');
        } else {
            container.addClass('expanded');
        }
    })
})
