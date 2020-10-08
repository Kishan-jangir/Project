$(function() {
  $(window).scroll(function() {

    if ($(window).scrollTop() >= 80) {
      $('nav').addClass('navbar-shrink');
    }
    else {
      $('nav').removeClass('navbar-shrink');
    }

  });
});

console.log(js file is working);
