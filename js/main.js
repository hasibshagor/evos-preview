(function($) {
    "use strict";

    // stycky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('header').addClass('neel');
        } else {
            $('header').removeClass('neel');
        }

    })

    // offcanvas menu
    $('.humburg-icon a img').on('click', function() {
        $('.offcanvas-menu').addClass('active');
        $('.offcanvas-menu-overlay').addClass('active');
    })

    $('.menu-close').on('click', function() {
        $('.offcanvas-menu').removeClass('active');
        $('.offcanvas-menu-overlay').removeClass('active');
    })

    // typed JS
    var typed = new Typed(".type", {
        strings: [
            "Designer.",
            "Artist."
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        cursorChar: '',
    });

    // parallax JS
    var scene = document.getElementById('layer1');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer2');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer3');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer4');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer5');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer6');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer7');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer8');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer9');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer10');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer11');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer12');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer13');
    var parallaxInstance = new Parallax(scene);
    var scene = document.getElementById('layer14');
    var parallaxInstance = new Parallax(scene);

    // circle-progress-1
    $('#uiux-progress').circleProgress({
        value: 0.73,
        size: 185,
        fill: "#6928d9",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(73 * progress) + '<i>%</i>');
    });

    // circle-progress-2
    $('#development-progress').circleProgress({
        value: 0.85,
        size: 185,
        fill: "#1573ff",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(85 * progress) + '<i>%</i>');
    });

    // circle-progress-3
    $('#branding-progress').circleProgress({
        value: 0.48,
        size: 185,
        fill: "#16ffdb",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(48 * progress) + '<i>%</i>');
    });

    // circle-progress-4
    $('#design-progress').circleProgress({
        value: 0.69,
        size: 185,
        fill: "#baff26",
        thickness: 10,
        emptyFill: "#15154c",
        startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percentage').html(Math.round(69 * progress) + '<i>%</i>');
    });

    // Isotope-Filtering
    // init Isotope
    var $grid = $('.portfolio-grid').isotope({
        itemSelector: '.portfolio-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    });
    // filter items on button click
    $('.portfolio-menu').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // active JS
    $('.portfolio-menu li').on('click', function() {
        $('li').removeClass('active');
        $(this).addClass('active')
    });

    //wow js
    new WOW().init();


    //sponsor-slider
    $('.sponsor-brand').slick({
        slidesToShow: 5,
        arrows: false,
    });



})(jQuery);