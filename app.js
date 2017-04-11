$(document).ready(function () {

    /* Hover */
    $('.key-colour:not(.cross, .about), a:not(.projects a), .down, .top').hover(function () {
        $(this).fadeTo(300, 0.5);
    }, function () {
        $(this).fadeTo(300, 1);
    });
    $('.cross').hover(function () {
        $('.nav').fadeTo(300, 0.8);
    }, function () {
        $('.nav').fadeTo(300, 1);
    });

    /* About drop-down */
    $('.nav').click(function () {
        if (!$(this).hasClass('fullscreen')) {
            $('.nav').addClass('fullscreen');
            $('.about').fadeOut(500);
            $('.home').fadeOut(500);
            $('.description').delay(500).fadeIn(1000);
            $('.cross').delay(500).fadeIn(1000);
        }
    });
    $('.cross').click(function () {
        $('.about').delay(500).fadeIn(1000);
        $('.home').delay(500).fadeIn(1000);
        $('.description').fadeOut(500);
        $('.cross').fadeOut(500);
        $('.nav').delay(500).removeClass('fullscreen');
    });

    /* Slideshow & change colours */
    var timer;
    var slideShow = function () {
        timer = setInterval(function () {
            var currentProject = $('.active');
            currentProject.fadeOut(700).removeClass('active');
            var nextProject = currentProject.next();
            nextProject.fadeIn(700).addClass('active');
            if (nextProject.length == 0) {
                nextProject = $('.slideshowlink').first().fadeIn(700).addClass('active');
                $('.slideshowimage').first().fadeIn(700).addClass('active');
            }
            if ($('.image1').hasClass('active')) {
                $('.key-colour').animate({
                    color: '#3116a2'
                }, 700);
                $('.key-background').animate({
                    backgroundColor: '#3116a2'
                }, 700);
            }
            if ($('.image2').hasClass('active')) {
                $('.key-colour').animate({
                    color: 'yellow'
                }, 700);
                $('.key-background').animate({
                    backgroundColor: 'yellow'
                }, 700);
            }
            if ($('.image3').hasClass('active')) {
                $('.key-colour').animate({
                    color: '#290196'
                }, 700);
                $('.key-background').animate({
                    backgroundColor: '#290196'
                }, 700);
            }
            if ($('.image4').hasClass('active')) {
                $('.key-colour').animate({
                    color: '#ff150a'
                }, 700);
                $('.key-background').animate({
                    backgroundColor: '#ff150a'
                }, 700);
            }
            if ($('.image5').hasClass('active')) {
                $('.key-colour').animate({
                    color: '#3c96d4'
                }, 700);
                $('.key-background').animate({
                    backgroundColor: '#3c96d4'
                }, 700);
            }
            if ($('.image1').hasClass('active')) {
                $('.complimentary-colour').animate({
                    color: '#00d3db'
                }, 700);
                $('.complimentary-background').animate({
                    backgroundColor: '#00d3db'
                }, 700);
            }
            if ($('.image2').hasClass('active')) {
                $('.complimentary-colour').animate({
                    color: '#ff3bae'
                }, 700);
                $('.complimentary-background').animate({
                    backgroundColor: '#c42140'
                }, 700);
            }
            if ($('.image3').hasClass('active')) {
                $('.complimentary-colour').animate({
                    color: '#ed4a2b'
                }, 700);
                $('.complimentary-background').animate({
                    backgroundColor: '#ed4a2b'
                }, 700);
            }
            if ($('.image4').hasClass('active')) {
                $('.complimentary-colour').animate({
                    color: '#2f298d'
                }, 700);
                $('.complimentary-background').animate({
                    backgroundColor: '#2f298d'
                }, 700);
            }
            if ($('.image5').hasClass('active')) {
                $('.complimentary-colour').animate({
                    color: '#fff'
                }, 700);
                $('.complimentary-background').animate({
                    backgroundColor: '#fff'
                }, 700);
            }
        }, 5000);
    };
    slideShow();
    $('#index .down').click(function () {
        $('html, body').animate({
            scrollTop: $('.projects').offset().top
        }, 1000);
    });

    /* Down Button */
    $('.down-to-description').click(function () {
        $('html, body').animate({
            scrollTop: $('.project-description').offset().top
        }, 1000);
    });
    $('.down-to-gallery').click(function () {
        $('html, body').animate({
            scrollTop: $('.project-gallery').offset().top
        }, 1000);
    });

    /* Top Button */
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 1000);
    });
    $('.projects a').hover(function () {
        $('.projects a').not(this).fadeTo(300, 0.5);
        $(this).children('h3').fadeIn(300);
    }, function () {
        $('.projects a').fadeTo(50, 1);
        $('.projects a h3').fadeOut(300);
    });
});
