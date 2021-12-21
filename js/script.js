$(document).ready(function(){
    $(".header__btn, .header__menu-close").click(function(){
        if ($('.header__btn').hasClass("open")) {
            $('.header__btn').removeClass('open')
            $(".header__menu").removeClass('open').fadeOut()
        } else {
            $('.header__btn').addClass('open')
            $(".header__menu").addClass('open').fadeIn()
        }
    })
})