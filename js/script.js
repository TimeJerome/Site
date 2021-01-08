$(document).ready(function(event) {
    $('.hi__burger').click(function(event) {
        $('.hi__burger,.menu__menu,.hi__soc,.slick-arrow').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function(event) {
    $('.menu__element._el').click(function(event) {
        $('.menu__list').toggleClass('active');
    });
});
$(document).ready(function(event) {
    $('.slider__body').slick({
        autoplay:false,
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