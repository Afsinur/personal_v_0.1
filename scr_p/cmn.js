$(document).ready(function () {
  $('#b_rn').addClass('rnd_body');
  $('i.fa-minus-square').click(function () {
    $('div.hd_lst').css('left','0vw');
  });
  $('i.fa-window-close').click(function () {
    $('div.hd_lst').removeAttr('style');
  });
});
