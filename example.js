$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 800) {
            $('.nav').addClass('active');
        }
        else{
            $('.nav').removeClass('active');
        }
    })
})