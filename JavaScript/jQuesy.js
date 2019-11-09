$(document).ready(function () {
  $('.chat-page-button').on('click', function () {
    $(this).css({display: 'none', visibility : 'hidden'});
    $('.chat-page').css({display : 'block', visibility : 'visible'});
  })

  $('.close-icon').on('click', function () {
    $('.chat-page').css({display: 'none', visibility : 'hidden'});
    $('.chat-page-button').css({display : 'block', visibility : 'visible'});
  })
});