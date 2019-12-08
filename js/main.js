/* HAMBURGER   */

$('.burger').on('click',function(){
    $('.side-menu').toggle();
})

$('.side-menu__btn').on('click', function(){
    $('.side-menu').hide();
})

/* HAMBURGER END  */


/* ORDER CALL   */
$('.offer__btn, .help__btn, .call-us__btn, .call').on('click',function(){
    event.preventDefault();
    $('.order-call').toggle();
    $('html, body').css({
        overflow: 'hidden',
    });
})
$('.order-call__close-btn').on('click',function(event){
    event.preventDefault();
    $('.order-call').hide();
    $('html, body').css({
        overflow: 'visible'
    });
})
/* ORDER CALL  END */


/* VALIDATION  */

$('#order-form').validate({
    rules: {
        firstName: {
            requiered: true
        },
        phoneNumber : {
            digits : true,
            minlength: 10,
            maxlength : 11
        }
    },
    messages: {
        firstName : 'Введите Ваше имя правильно',
        phoneNumber : 'Введите Ваш номер'
    },
    submitHandler: function(form) {
        form.submit();
    }
})

/* VALIDATION  END*/

/*FIXED HEADER  */
/*$(window).on('scroll resize', function(){
    var pixelTop = $(window).scrollTop();

    if(pixelTop > 0 && $(document).width() > 998){
        $('.top-bar').addClass('active');
    }
    else if(pixelTop < 1){
        $('.top-bar').removeClass('active');
    }
})*/

/*FIXED HEADER  END*/

/*  PARALLAX  */

var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene);

/*  PARALLAX  END*/



/* SLIDER  */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
    },
    breakpoints: {
        998: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
  });
/* SLIDER END */


/* Yandex Map */

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 12
    });
}
/* Yandex Map  END*/