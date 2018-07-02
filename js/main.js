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

function showImages(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function () {
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos) {
            $(this).addClass("fadeIn");
        }
    });
}
// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function () {
    showImages('.history-photo');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function () {
    showImages('.history-photo');
});

$(document).ready(function () {
    $('.welcome-caption').fadeIn(3500, function () {
        $('.welcome-background').fadeOut(1500);
    });
});

$(document).ready(function () {
    $('.header-wrapper').fadeIn(2000);
    $('.header').hide();
    $('.header').slideDown(3500);
});

$(document).ready(function () {
     $('.do-you-know').hide(5000);
});

$(document).ready(function(){
	var time = 0;
	$('.animate').each(function() {
	    $(this).delay(time).fadeIn(1000);
	    time += 500;
	});
});