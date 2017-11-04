$(function() {
    $('.pacient-data').fadeOut();
    var name = $('.pacient-name');
    var code = $('.pacient-code');
    var inputCode = $('.input-code');

    $('.form-code').on('submit', function(e) {
        $('.pacient-data').fadeIn();
        name.text('João Cézar de Oliveira');
        code.text(inputCode.val());
        $('html, body').animate({ scrollTop: $('footer').offset().top }, 'slow');
    });    

});