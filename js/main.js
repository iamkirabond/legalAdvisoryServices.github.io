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
    $('.order-call').toggle();
})
/* ORDER CALL  END */