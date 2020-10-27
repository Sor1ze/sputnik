$(function() {
  //slick slider init
  $('.js-topslider').slick({
    speed: 600,
    dots: true,
    arrows: false
  });

  //fancybox init
  $('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      "close"
    ],
  });

  //menu toggle
  $('.js-menu-toggle').on('click', function() {
    $(this).toggleClass('is-active').closest('.header').toggleClass('is-menu-open');
  });
});