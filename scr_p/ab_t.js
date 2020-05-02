$(document).ready(function () {
  var count = 0;
  $(window).scroll(function () {
    if (count!='Stop') {
      $('#b_rn').removeClass('rnd_body');
      $.ajax({
        type:'get',
        url:'../scr_p/ab_t.json',
        success:function (data) {
          $('#b_rn').addClass('rnd_body');
          if (count<data.length) {
            var d_picture, d_name, d_from, d_info;
            d_picture = data[count].picture;
            d_name = data[count].name;
            d_from = data[count].from;
            d_info = data[count].info;
            /*2nd*/
            d_info.forEach((item, i) => {
              $('div.sc_2_2_2 table').append(`
                <tr>
                  <td>
                    <a href="${d_info[i].hpl}" target="_blank">
                      <i class="${d_info[i].png}"></i>
                    </a>
                  </td><td>${d_info[i].id}</td>
                </tr>
                `);
            });
            /*1st*/
            $('div.sc_2_1').append(`
              <div class="sc_2_1_1">
                <img src="${d_picture}" alt="picture">
              </div>
              <div class="sc_2_1_2">
                <h2>${d_name}</h2>
                <p>${d_from}</p>
              </div>
              `);
            count++;
          }else {
            count='Stop';
          }
        }
      });
    }
  });
});
