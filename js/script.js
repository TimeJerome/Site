
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
        $('.hi__burger,.slider__title_min,.hi__burger__wra,.hi__soc').toggleClass('active');
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
new Swiper('.slider__title',{
    loop: true,
    loopedSlides: 1,
   autoHeight: true,
    simulateTouch: false,
    touchRatio:0,
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
            slidesPerView: 5,
        }
    },
    initialSlide:2,
});

new Swiper('.window__howimg',{
    loop: true,
    sloop: true,
    loopedSlides: 3,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    speed: 1500,
    thumbs: {
    swiper: {
        el: '.window__how',
        slidesPerView: 5,
    }
},
initialSlide:1,
});
new Swiper('.window__class',{
    loop: true,
    sloop: true,
    loopedSlides: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: 1500,
    thumbs: {
    /*swiper: {
        el: '.window__how',
        slidesPerView: 5,
    }*/
},
 breakpoints: {
     768: {
         slidesPerView: 3 
     },
    480: {
        slidesPerView: 1 ,
    },
    240: {
        slidesPerView: 1 ,
    },
},
initialSlide:3,
slidesPerView:3,
centeredSlides: true,
slideToClickedSlide: true,

});
new Swiper('.window__class__max',{
    loop: true,
    sloop: true,
    loopedSlides: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1500,
 breakpoints: {
     768: {
         slidesPerView: 1 
     },
    480: {
        slidesPerView: 1 ,
    },
    240: {
        slidesPerView: 1 ,
    },
},
initialSlide:1,
slidesPerView:1,
centeredSlides: true,
slideToClickedSlide: true,

});

function range1 () {
	var rng1=document.getElementById('myRange1');
	var i1=document.getElementById('n1'); 
	i1.value=rng1.value;
  };
  function range2 () {
	var rng2=document.getElementById('myRange2');
	var i2=document.getElementById('n2'); 
	i2.value=rng2.value;
  };
  function Kalk() 
	{var  result;
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	result = (num1 * num2 );
	document.getElementById('out1').innerHTML= result }
	setInterval(Kalk,10,1>0);

	let num3;
function Gla(){
	var text1;
	text1 = "Глянцевые натяжные потолки - это гладкое полотно с зеркальной поверхностью и сильными светоотражающими свойствами. Именно этот вид потолков обладает самым большим выбором оттенков.";
	document.getElementById('Description').innerHTML=text1;
	result = 7 +'$';
	document.getElementById('out2').value=result;}
	
function Mat(){
	var text2;
	text2 = "Матовые потолки - классический вариант с идеально ровной поверхностью без бликов и эффекта отражения от любого типа освещения. Такие потолки добавляют строгости интерьера.";
	document.getElementById('Description').innerHTML=text2;
	result = 7 +'$' ;
	document.getElementById('out2').value=result;}
function Sat(){
	var text;
	text = "Сатиновые потолки имеют уникальную фактуру, напоминающую натуральную ткань, мягко рассеивает свет с перламутровыми бликами, наполняя пространство элегантностью и изысканностью.";
	document.getElementById('Description').innerHTML=text;
	result = 7 +'$';
	document.getElementById('out2').value=result;}
function Lvl(){
	var text;
	text = "Благодаря возможности комбинировать различные цвета и фактуры можно воплощать любые дизайнерские решения. Такие варианты потолков идеальные для зонирования помещения.";
	document.getElementById('Description').innerHTML=text;
	result = 10 +'$';
	document.getElementById('out2').value=result;}
function Foto(){
	var text;
	text = "Современные технологии печати позволяют нанести на полотно натяжного потолка любое изображение или фотографию, что позволяет создать неповторимый и эксклюзивный проект.";
	document.getElementById('Description').innerHTML=text;
	result = 18 +'$';
	document.getElementById('out2').value=result;}




 
function Kalkulate(){
	var resul1; 
	
	num4 = document.getElementById('out1').innerHTML;
	num4 = parseInt(num4);

	num3 = document.getElementById('out2').value;
	num3 = parseInt(num3);

	result1 = num4*num3;
	
document.getElementById('out').value=result1 +'$';
}
setInterval(Kalkulate,10,1>0);
