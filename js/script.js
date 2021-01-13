$(document).ready(function(event) {
    $('.hi__burger').click(function(event) {
        $('.hi__burger,.menu__menu,.hi__soc,.slick-arrow,.hi__langeage,.slider__title').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function(event) {
    $('.menu__element._el').click(function(event) {
        $('.menu__list').toggleClass('active');
    });
});
$(document).ready(function(event) {
    $('.textBack').click(function(event) {
        $('.textFront,.textBack,.body__eng,.body__fr,.original').toggleClass('active');
    });
});
$(document).ready(function(event) {
    $('.textFront').click(function(event) {
        $('.textFront,.textBack,.body__eng,.body__fr,.original').removeClass('active');
    });
});
$(document).ready(function(event) {
    $('.slider__body').slick({
        autoplay:false,
    });

});

$(document).ready(function(event) {
    $('.slider__title').slick({
        autoplay:true,
        arrows:false,
        slidesToShow:1,
        adaptiveHeight:false,
        fade:true,
        dots:true,
    });
});

$(document).ready(function(event) {
    $('.geo__title1').click(function(event) {
        $('.geo__title1,.geo__spoil1').toggleClass('active').next().slideToggle(300);
    });
});
$(document).ready(function(event) {
    $('.geo__title2').click(function(event) {
        $('.geo__title2,.geo__spoil2').toggleClass('active').next().slideToggle(300);
    });
});
$(document).ready(function(event) {
    $('.geo__title3').click(function(event) {
        $('.geo__title3,.geo__spoil3').toggleClass('active').next().slideToggle(300);
    });
});
$(document).ready(function(event) {
    $('.geo__title4').click(function(event) {
        $('.geo__title4,.geo__spoil4').toggleClass('active').next().slideToggle(300);
    });
});
