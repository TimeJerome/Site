
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll() {
        for (let index = 0; index <animItems.length; index++){
            const animItem =animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight /animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + screenLeft }
    }
    animOnScroll();
}




$(document).ready(function(event) {
    $('.hi__burger').click(function(event) {
        $('.hi__burger,.menu__menu,.hi__soc,.slick-arrow,.hi__langeage,.slider__title,.slider__title_min').toggleClass('active');
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
new Swiper('.slider__title',{
    loop: true,
    loopedSlides: 3,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 1500,
    effect:'fade',

    fadeEffect:{
        crossFade: true
    },
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    thumbs: {
        swiper: {
            el: '.slider__title_min',
            slidesPerView: 6,
        }
    }
});

/*$(document).ready(function(event) {
    $('.slider__title').slick({
        autoplay:true,
        arrows:false,
        slidesToShow:1,
        adaptiveHeight:false,
        fade:true,
        dots:true,
    });
});*/

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
