$(function() {

  $('a').click(function(e) {
    e.preventDefault();
    var $thisItem = $(this).closest('li');

    $thisItem.siblings().removeClass('active');
    $thisItem.addClass('active');
    $('.content').html('<img src="'+$(this).data('photo')+'">');

  });

  $('.content').on('mouseover', 'img', function () {
    $('audio').trigger('play');
  });
  $('.content').on('mouseout', 'img', function () {
    $('audio').trigger('pause');
  });
    
});
