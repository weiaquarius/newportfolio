$(document).ready(function() {
  $('#gotop').click(function() {
    jQuery('html,body').animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  $(window).scroll(function() {
    // $('#gotop').fadeIn("fast");
    if ($(this).scrollTop() > 600) {
      $('#gotop').fadeIn('fast');
    } else {
      $('#gotop')
        .stop()
        .fadeOut('fast');
    }
  });
});
