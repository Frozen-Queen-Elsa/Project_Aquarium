$('.readmore').click(function() {
    $('.content').toggleClass('full');
    $('.card-header').toggleClass('collapse');
    $('.readmore').toggle();
});
$('.closebttn').click(function() {
    $('.content').removeClass('full');
    $('.card-header').removeClass('collapse');
    $('.readmore').toggle();
});