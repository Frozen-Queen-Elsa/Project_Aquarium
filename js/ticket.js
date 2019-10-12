$('.readmore').click(function() {
    $('.content').toggleClass('full');
    $('.header').toggleClass('collapse');
    $('.readmore').toggle();
});
$('.closebttn').click(function() {
    $('.content').removeClass('full');
    $('.header').removeClass('collapse');
    $('.readmore').toggle();
});