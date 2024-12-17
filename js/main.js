(function ($) {
    "use strict";
    
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


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
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

//function toggleReadMore() {
    //let testimonialContent = document.getElementById("testimonialContent");
    //let readMoreContent = document.getElementById("readMoreContent");
    //let readMoreLink = document.querySelector("a[href='javascript:void(0);']");

    //if (readMoreContent.style.display === "none") {
        //readMoreContent.style.display = "inline";
        //readMoreLink.textContent = "Leer menos";
    //} else {
        //readMoreContent.style.display = "none";
        //readMoreLink.textContent = "Leer más";
    //}
//}

function toggleReadMore(link) {
    let parentElement = link.parentElement;
    let readMoreContent = parentElement.querySelector(".read-more-content");
    let linkText = link.textContent;

    if (readMoreContent.style.display === "none") {
        readMoreContent.style.display = "inline";
        link.textContent = "Leer menos";
    } else {
        readMoreContent.style.display = "none";
        link.textContent = "Leer más";
    }
}
