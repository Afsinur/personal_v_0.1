$(document).ready(function () {
  $('#b_rn').addClass('rnd_body');
  $('i.fa-minus-square').click(function () {
    $('div.hd_lst').css('left','0vw');
  });
  $('i.fa-window-close').click(function () {
    $('div.hd_lst').removeAttr('style');
  });
  /**/
  var count = 0;
  var count_1 = 0;
  $(window).scroll(function () {
    /*1st*/
    if (count!='Stop') {
      $('#b_rn').removeClass('rnd_body');
      $.ajax({
        type:'get',
        url:'scr_p/intro.json',
        success:function (data) {
          $('#b_rn').addClass('rnd_body');
          if (count<data.length) {
            var d_a = data[count].a_1;
              var d_b = data[count].b_2;
              var d_c = data[count].c_3;
              var d_d = data[count].d_4;
              $('div.sc_2_dv').append(`
                <div class="">
                  <h2>${d_a}</h2>
                  <img src="${d_b}" alt="picture">
                  <p><span>${d_c}</span>${d_d}</p>
                </div>
                `);
            count++;
          }else {
            count='Stop';
          }
        }
      });
    }
    /*2nd*/
    if (count_1!='Stop') {
      $.ajax({
        type:'get',
        url:'scr_p/adrs.json',
        success:function (data) {
          if (count_1<data.length) {
            var d_a = data[count_1].a_1;
              var d_b = data[count_1].b_2;
              var d_c = data[count_1].c_3;
              var d_d = data[count_1].d_4;
              $('div.sc_4_1').append(`
                <div class="">
                  <h2>${d_a}</h2>
                  <p>${d_b}</p>
                  <a href="${d_c}" target="_blank">${d_d}</a>
                </div>
                `);
            count_1++;
          }else {
            count_1='Stop';
          }
        }
      });
    }
  });
});
