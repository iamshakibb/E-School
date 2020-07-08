
$(document).ready(function(){

    //testimonial slider
    $('.slider').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows:false,
    });

    
    //scroll animation
    AOS.init({
        delay: 0,
        duration: 900,
        mirror: true,
    });
  });