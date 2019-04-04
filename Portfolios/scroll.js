$(window).scroll(function(){
    $(".bio").css("opacity", 1 - $(window).scrollTop() / 250);
});