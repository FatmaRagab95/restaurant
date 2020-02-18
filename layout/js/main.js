$(document).ready(function () {
  let opining = $('.opining'),
      nav     = $('.nav'),
      navBtn  = $('.nav-toggle-btn .toggle-btn'),
      divider = $('.divider');

      var timer = setTimeout(function () {
        $(opining).removeClass('active');
        $(divider).removeClass('animated');
      }, 0);

  // opening
  setTimeout(function () {
    $(opining).addClass('active');
    $(divider).addClass('animated');
  }, 1300);

  $(window).mousemove(function () {
    opiningTimer();
  });
  $(window).scroll(function () {
    opiningTimer();
  });

  function opiningTimer () {
    clearTimeout(timer);
    $(opining).addClass('active');
    $(divider).addClass('animated');
    timer = setTimeout(function () {
      $(opining).removeClass('active');
      $(divider).removeClass('animated');
    }, 30000);
  }


  // nav
  $('.nav a, .header a').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).data('link')).offset().top
    },1000);
  });

  $(navBtn).click(function () {
    $(navBtn).toggleClass('active');
    $(nav).toggleClass('active')
  });

  // footer 
  $('.footer .right span').text((new Date()).getFullYear());
});
