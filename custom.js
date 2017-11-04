$(function() {
    $('.pacient-data').fadeOut();
    var name = $('.pacient-name');
    var code = $('.pacient-code');
    var inputCode = $('.input-code');

    $('.form-code').on('submit', function(e) {
        $('.pacient-data').fadeIn();
        name.text('João Cézar');
        code.text(inputCode.val());
    });    

});