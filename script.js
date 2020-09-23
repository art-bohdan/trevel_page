$(function(){
$('a.btn').click(function(){
    var el = $(this).attr('href');
    el = el.replace(/[^\#]*/, ''); //вытаскиваем id из ссылки
    $('body,html').animate({
    scrollTop: $(el).offset().top}, 1000);
    return false;
});

$('a.call-btn').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
        $('.myModal').addClass('modal-update').animate({opacity: 1}, 198);
    });
});

$('#myModal__close, #myOverlay').click( function(){
    $('.myModal').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#myOverlay').fadeOut(297);
    });
});

$('.btn-routes').click(function(e){
        e.preventDefault();
        $('.destinations-new-line').toggleClass('destinations-new-visible')
})

var btn = $('#button');  
$(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });
btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});

// $('#go, #about, #contacts').click(function(){
//     var el = $(this).attr('href');
//     el = el.replace(/[^\#]*/, '');
//     $('body,html').animate({
//     scrollTop: $(el).offset().top}, 1000);
//     return false;
// });

$('#go, #about, #contacts').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
    e.preventDefault();
  });
     
});

e.preventDefault();//чтобы кнопка не переносила вверхчц
