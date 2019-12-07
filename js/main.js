/* HAMBURGER   */

$('.burger').on('click',function(){
    $('.side-menu').toggle();
})

$('.side-menu__btn').on('click', function(){
    $('.side-menu').hide();
})

/* HAMBURGER END  */


/* ORDER CALL   */
$('.offer__btn, .help__btn, .call-us__btn').on('click',function(){
    $('.order-call').toggle();
})
$('.order-call__btn').on('click',function(){
    $('.order-call').hide();
})
/* ORDER CALL  END */


/* VALIDATION  */
$("#order-form").validate({
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

console.log(scene)
var parallaxInstance = new Parallax(scene);
console.log(parallaxInstance)
/*  PARALLAX  END*/
