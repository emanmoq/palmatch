jQuery(function ($) {

    $('.successSlider').owlCarousel({
        autoplay: true,
        loop: false,
        margin: 15,
        responsive: {
          0: {
            items: 1,
           margin:0
  
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          }
        }
      });

});

