(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const navbar = document.querySelector("nav.navbar");
    const messageBubble = document.querySelector('.fixed-message-bubble');

    // Initially hide the navbar
    navbar.style.display = "none";
    messageBubble.style.display = 'none';


    if (preloader) {
        document.body.classList.add("no-scroll");
        setTimeout(() => {
            preloader.style.display = "none"; // Hide preloader
             document.body.classList.remove("no-scroll"); // Enable scrolling again
            navbar.style.display = "flex"; // Show navbar
            messageBubble.style.display = 'block';

        }, 3000); // Adjust the delay as needed
    }
});




    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

let slideIndex = 0;
autoSlide();

function autoSlide() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset to first slide
  }
  slides[slideIndex - 1].style.display = "block"; // Show current slide
  setTimeout(autoSlide, 3000); // Change slide every 4 seconds
}
