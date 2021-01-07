$(document).ready(function(event) {
    $('.hi__burger').click(function(event) {
        $('.hi__burger,.menu__menu,.hi__soc').toggleClass('active');
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
        autoplay:true,
    });

});