$(document).ready(function () {
    //Mobile menu
    $('.menu-button').on('click', function() {
        $('.navigation-wrapper').addClass('active');
    })
    $('.close-menu').on('click', function() {
        $('.navigation-wrapper').removeClass('active');
    });

    //Reviews slider
    const reviewsSlider = new Swiper('.swiper-reviews', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
      
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
        },
      });

      // Anchor Links
      $('a').on('click', function(e) {
        if(this.hash !== '') {
          e.preventDefault();

          const hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 500, function() {
              window.location.hash = hash;
          })
      }
    })
})