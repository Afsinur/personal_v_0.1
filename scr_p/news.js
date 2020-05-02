$(document).ready(function () {
  //
  var count = 0;
  var count_1 = 0;
  $(window).scroll(function () {
    //
    if (count_1 < 1) {
      $.ajax({
        type:'get',
        url:'../scr_p/afsin.json',
        success:function (data) {
          data.forEach((item, i) => {
            if (i<data.length) {
              var mo_t = data.length;var v_f = mo_t/5;var m_cl = Math.ceil(v_f);
              $('input[name="ts"]').attr('min',1);
              $('input[name="ts"]').attr('max',m_cl);
              if (i<=m_cl) {
                var o_p = i+1;
                if (i > 2 && i != m_cl) {}
                else if (i == m_cl) {
                  $('div.sc_2_pg').append(`
                    <button type="button" name="button" value="2"><i class="fas fa-arrow-right"></i></button>
                    <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
                    `);}else {if (i == 0) {
                    $('div.sc_2_pg').append(`
                      <button class="c_v" type="button" name="button" value="${o_p}">${o_p}</button>
                      `);}else {
                    $('div.sc_2_pg').append(`
                      <button type="button" name="button" value="${o_p}">${o_p}</button>
                      `);
                  }
                }
              }
            }
          });
        }
      });
      count_1++;
    }
    //
    if (count!='Stop') {
      $.ajax({
        type:'get',
        url:'../scr_p/afsin.json',
        success:function (data) {
          if (count<5) {
            var d_name = data[count].name;
              var d_topic = data[count].topic;
              var d_non = data[count].non;
              $('div.sc_2').append(`
                <div class="">
                  <h1>${d_name}</h1>
                  <p>${d_non}</p>
                  <p>${d_topic}</p>
                </div>`);
            count++;
          }else {
            count='Stop';
          }
        }
      });
    }});
  //buttons
  $('div.sc_2_pg').on('click','button',function () {
    $('#b_rn').removeClass('rnd_body');
    $('div.sc_2').html('');
    $('div.sc_2_pg').html('');
    $('html,body').animate({
      scrollTop: $(document).height
    },1);
    var t_bt = $(this).val();
    var bt_lt = t_bt*5-1;
    var mn_lt = bt_lt-4;
    $('center span').text(`Page - ${t_bt}`);
    $.ajax({
      type:'get',
      url:'../scr_p/afsin.json',
      success:function (data) {
        $('#b_rn').addClass('rnd_body');
        var t_lgt = data.length;
        data.forEach((item, i) => {
          if (i <=bt_lt && i >=mn_lt) {
            var d_name = data[i].name;
              var d_topic = data[i].topic;
              var d_non = data[i].non;
              $('div.sc_2').append(`
                <div class="">
                  <h1>${d_name}</h1>
                  <p>${d_non}</p>
                  <p>${d_topic}</p>
                </div>`);
          }
        });
        /*button*/
        /**/var mo_t = data.length; /**/var v_f = mo_t/5;
        var m_cl = Math.ceil(v_f);
        var pl_s = Number(t_bt)+1;
        var pl_s_1 = Number(t_bt)+2;
        var n_s_1 = Number(t_bt)-1;
        var n_s = Number(t_bt);
        var b_s = (mo_t)/5;
        if (n_s >1 && n_s <= 2 && n_s < m_cl) {
          $('div.sc_2_pg').append(`
            <button type="button" name="button" value="${n_s_1}">${n_s_1}</button>
            <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
            <button type="button" name="button" value="${pl_s}">${pl_s}</button>
            <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
            <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
            `);
        }else if (n_s-1 <= 1 && n_s < m_cl) {
          if (n_s+2<=m_cl) {
            $('div.sc_2_pg').append(`
              <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
              <button type="button" name="button" value="${pl_s}">${pl_s}</button>
              <button type="button" name="button" value="${pl_s_1}">${pl_s_1}</button>
              <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
              <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
              `);
          }else {
            $('div.sc_2_pg').append(`
              <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
              <button type="button" name="button" value="${pl_s}">${pl_s}</button>
              <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
              <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
              `);
          }
        }else if (n_s >= 2 && n_s < m_cl) {
          $('div.sc_2_pg').append(`
            <button type="button" name="button" value="1"><i class="fas fa-fast-backward"></i></button>
            <button type="button" name="button" value="${n_s_1}"><i class="fas fa-arrow-left"></i></button>
            <button type="button" name="button" value="${n_s_1}">${n_s_1}</button>
            <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
            <button type="button" name="button" value="${pl_s}">${pl_s}</button>
            <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
            <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
            `);
        }else if (n_s >= m_cl) {
          $('div.sc_2_pg').append(`
            <button type="button" name="button" value="1"><i class="fas fa-fast-backward"></i></button>
            <button type="button" name="button" value="${n_s_1}"><i class="fas fa-arrow-left"></i></button>
            <button type="button" name="button" value="${n_s_1}">${n_s_1}</button>
            <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
            `);
        }
      }
    });
  });
  //search
  $('form.c1_sp_fr').submit(function (e) {
    e.preventDefault();
    var t_bt = $('form input[name="ts"]').val();
    var ma_x_1 = $('form input[name="ts"]').attr('max');
    var n_ma_x_1 = Number(ma_x_1);
    if (t_bt>=!0 && t_bt>=!n_ma_x_1) {
      $('#b_rn').removeClass('rnd_body');
      $('div.sc_2').html('');
      $('div.sc_2_pg').html('');
      $('html,body').animate({
        scrollTop: $(document).height
      },1);
      var bt_lt = t_bt*5-1;
      var mn_lt = bt_lt-4;
      $.ajax({
        type:'get',
        url:'../scr_p/afsin.json',
        success:function (data) {
          $('form input[name="ts"]').val('');
          $('#b_rn').addClass('rnd_body');
          var t_lgt = data.length;
          data.forEach((item, i) => {
            if (i <=bt_lt && i >=mn_lt) {
              var d_name = data[i].name;
                var d_topic = data[i].topic;
                var d_non = data[i].non;
                $('div.sc_2').append(`
                  <div class="">
                    <h1>${d_name}</h1>
                    <p>${d_non}</p>
                    <p>${d_topic}</p>
                  </div>`);
            }
          });
          /*button*/
          /**/var mo_t = data.length; /**/var v_f = mo_t/5;
          var m_cl = Math.ceil(v_f);
          $('input[name="ts"]').attr('min',1);
          $('input[name="ts"]').attr('max',m_cl);
          var pl_s = Number(t_bt)+1;
          var pl_s_1 = Number(t_bt)+2;
          var n_s_1 = Number(t_bt)-1;
          var n_s = Number(t_bt);
          var b_s = (mo_t)/5;
          if (n_s >1 && n_s <= 2 && n_s < m_cl) {
            $('center span.c1_sp').text(`Page - ${t_bt}`);
            $('div.sc_2_pg').append(`
              <button type="button" name="button" value="${n_s_1}">${n_s_1}</button>
              <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
              <button type="button" name="button" value="${pl_s}">${pl_s}</button>
              <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
              <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
              `);
          }else if (n_s-1 <= 1 && n_s < m_cl) {
            $('center span.c1_sp').text(`Page - ${t_bt}`);
            if (n_s+2<=m_cl) {
              $('div.sc_2_pg').append(`
                <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
                <button type="button" name="button" value="${pl_s}">${pl_s}</button>
                <button type="button" name="button" value="${pl_s_1}">${pl_s_1}</button>
                <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
                <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
                `);
            }else {
              $('center span.c1_sp').text(`Page - ${t_bt}`);
              $('div.sc_2_pg').append(`
                <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
                <button type="button" name="button" value="${pl_s}">${pl_s}</button>
                <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
                <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
                `);
            }
          }else if (n_s >= 2 && n_s < m_cl) {
            $('center span.c1_sp').text(`Page - ${t_bt}`);
            $('div.sc_2_pg').append(`
              <button type="button" name="button" value="1"><i class="fas fa-fast-backward"></i></button>
              <button type="button" name="button" value="${n_s_1}"><i class="fas fa-arrow-left"></i></button>
              <button type="button" name="button" value="${n_s_1}">${n_s_1}</button>
              <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
              <button type="button" name="button" value="${pl_s}">${pl_s}</button>
              <button type="button" name="button" value="${pl_s}"><i class="fas fa-arrow-right"></i></button>
              <button type="button" name="button" value="${m_cl}"><i class="fas fa-fast-forward"></i></button>
              `);
          }else if (n_s >= m_cl) {
            $('center span.c1_sp').text(`Page - ${t_bt}`);
            $('div.sc_2_pg').append(`
              <button type="button" name="button" value="1"><i class="fas fa-fast-backward"></i></button>
              <button type="button" name="button" value="${n_s_1}"><i class="fas fa-arrow-left"></i></button>
              <button type="button" name="button" value="${n_s_1}">${n_s_1}</button>
              <button class="c_v" type="button" name="button" value="${n_s}">${n_s}</button>
              `);
          }
        }
      });
    }
  });
});
