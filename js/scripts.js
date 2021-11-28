$(document).ready(function () {
    $('.menu-button').on('click', function() {
        $('.navigation-wrapper').addClass('active');
    })
    $('.close-menu').on('click', function() {
        $('.navigation-wrapper').removeClass('active');
    })
})