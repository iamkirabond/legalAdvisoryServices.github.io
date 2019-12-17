/* HAMBURGER   */

$('.burger').on('click',function(){
    $('.side-menu').addClass('d-flex');
    $('html, body').css({
        overflow: 'hidden',
    });
})

$('.side-menu__btn, .side-menu__background, .side-menu__item').on('click', function(){
    $('.side-menu').removeClass('d-flex');
    $('html, body').css({
        overflow: 'visible'
    });
})

/* HAMBURGER END  */


/* ORDER CALL   */
$('.offer__btn, .help__btn, .call-us__btn, .call__icon').on('click',function(){
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
            minlength: 11,
        }
    },
    messages: {
        firstName : 'Введите Ваше имя правильно',
        phoneNumber : 'Номер должен состоять минимум из 11 символов'
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

if ($("section").is(".call-us")){
    var scene = $('#scene').get(0);
    var parallaxInstance = new Parallax(scene);
}

/*  PARALLAX  END*/



/* SLIDER  */
if ($("section").is(".call-us")){
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
}
/* SLIDER END */


/* Yandex Map */
if ($("div").is("#map")){
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center:[55.80285820428499,37.5843422637293],
            zoom: 18,
            controls: ['zoomControl']
        });
        var myPlacemark = new ymaps.Placemark([55.802797775283615,37.583765468365584],{} , {
            iconImageSize : [32, 40]
        })

       myMap.geoObjects.add(myPlacemark);
    }
}
/* Yandex Map  END*/