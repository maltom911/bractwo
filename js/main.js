$(document).ready(function () {
    $('.slider-images').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
});

$(document).ready(function () {
    $('.header').hide();
    $('.header').slideDown(3500);
});



