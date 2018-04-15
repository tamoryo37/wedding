(function (d) {
    var b = d("header .wed_logo_animation").attr("data-rotate");
    if (b != "") {
        d("header .wed_logo_animation").addClass("wed_logo_rotate_" + b)
    }
    d("header .wed_logo_animation").lettering();
    d("header .wed_logo_animation span").each(function () {
        var f = 0;
        var e = 50;
        var g = Math.floor(Math.random() * (e - f + 1) + f);
        d(this).css("transition-delay", "0." + g + "s")
    });
    if (d(".wed_particles").length > 0) {
        d(".wed_particles").particleground({dotColor: "#fff", lineColor: "#fff", particleRadius: "3", lineWidth: "0.5"})
    }
    if (d(".jqueryFireFly").length > 0) {
        d(".jqueryFireFly").each(function () {
            var g = d(this).attr("data-total");
            var e = d(this).attr("data-minPixel");
            var f = d(this).attr("data-maxPixel");
            d.firefly({minPixel: e, maxPixel: f, color: "none", total: g, twinkle: 0.9, on: ".wed_firefly"})
        })
    }
    if (d("#bgndVideo").length > 0) {
        d("#bgndVideo").YTPlayer()
    }
    d(".wed_timer").appear(function () {
        var f = d(this);
        f.countTo({from: 0, to: f.html(), speed: 1300, refreshInterval: 60})
    });
    d(".date_picker").datepicker();
    d(".lightbox").magnificPopup({type: "image", gallery: {enabled: true}});
    d(".video").magnificPopup({
        type: "iframe",
        iframe: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
            patterns: {
                youtube: {index: "youtube.com/", id: "v=", src: "http://www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "http://player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            },
            srcAction: "iframe_src"
        }
    });
    d(".wed_slider_carousel").owlCarousel({
        navigation: true,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        slideSpeed: 200,
        addClassActive: true,
        paginationSpeed: 200,
        rewindSpeed: 200,
        items: 1,
        autoPlay: false,
        touchDrag: false,
        singleItem: true,
        transitionStyle: "fade",
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    });
    d(".wed_team_slider").owlCarousel({
        navigation: true,
        responsive: true,
        responsiveRefreshRate: 600,
        responsiveBaseElement: window,
        slideSpeed: 1500,
        addClassActive: true,
        paginationSpeed: 700,
        rewindSpeed: 3000,
        items: 3,
        itemsTablet: [1000, 2],
        itemsMobile: [569, 1],
        itemsDesktop: 3,
        autoPlay: true,
        touchDrag: false,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    });
    d(".wed_services_slider").owlCarousel({
        navigation: true,
        responsive: true,
        responsiveRefreshRate: 400,
        responsiveBaseElement: window,
        slideSpeed: 400,
        addClassActive: true,
        paginationSpeed: 900,
        rewindSpeed: 400,
        transitionStyle: "goDown",
        items: 1,
        autoPlay: true,
        singleItem: true,
        autoHeight: true,
        touchDrag: false,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    });
    d(".wed_team_slider_single").owlCarousel({
        navigation: true,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        slideSpeed: 200,
        addClassActive: true,
        paginationSpeed: 200,
        rewindSpeed: 200,
        items: 1,
        autoPlay: true,
        singleItem: true,
        autoHeight: true,
        touchDrag: false,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    });
    d(".wed_shop_item_slider").owlCarousel({
        navigation: true,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        slideSpeed: 200,
        addClassActive: true,
        paginationSpeed: 200,
        rewindSpeed: 200,
        singleItem: true,
        autoPlay: false,
        touchDrag: false,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    });
    d(".wed_slide_gallery").owlCarousel({
        navigation: true,
        responsive: true,
        responsiveRefreshRate: 600,
        responsiveBaseElement: window,
        slideSpeed: 1500,
        addClassActive: true,
        paginationSpeed: 700,
        rewindSpeed: 3000,
        items: 3,
        itemsTablet: [1000, 2],
        itemsMobile: [569, 1],
        itemsDesktop: 3,
        autoPlay: true,
        touchDrag: false,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    });
    d(".tweets-feed").each(function (e) {
        jQuery(this).attr("id", "tweets-" + e)
    }).each(function (f) {
        var g = {
            id: jQuery("#tweets-" + f).attr("data-widget-id"),
            domId: "",
            maxTweets: 1,
            enableLinks: true,
            showUser: true,
            showTime: true,
            dateFunction: "",
            showRetweet: false,
            customCallback: e
        };

        function e(k) {
            var h = k.length;
            var l = 0;
            var j = document.getElementById("tweets-" + f);
            var i = '<ul class="slides">';
            while (l < h) {
                i += "<li>" + k[l] + "</li>";
                l++
            }
            i += "</ul>";
            j.innerHTML = i;
            return i
        }

        twitterFetcher.fetch(g)
    });
    d(".wed_image_bck").each(function () {
        var e = d(this).attr("data-image");
        var k = d(this).attr("data-gradient");
        var m = d(this).attr("data-txt-color");
        var g = d(this).attr("data-color");
        var f = d(this).attr("data-border");
        var j = d(this).attr("data-blend");
        var i = d(this).attr("data-opacity");
        var h = d(this).attr("data-position");
        var l = d(this).attr("data-height");
        if (e) {
            d(this).css("background-image", "url(" + e + ")")
        }
        if (k) {
            d(this).css("background-image", k)
        }
        if (m) {
            d(this).css("color", m)
        }
        if (g) {
            d(this).css("background-color", g)
        }
        if (f) {
            d(this).css("border-color", f)
        }
        if (j) {
            d(this).css("background-blend-mode", j)
        }
        if (h) {
            d(this).css("background-position", h)
        }
        if (i) {
            d(this).css("opacity", i)
        }
        if (l) {
            d(this).css("height", l)
        }
    });
    d(".wed_over, .wed_head_bck").each(function () {
        var f = d(this).attr("data-color");
        var h = d(this).attr("data-image");
        var g = d(this).attr("data-opacity");
        var e = d(this).attr("data-blend");
        if (f) {
            d(this).css("background-color", f)
        }
        if (h) {
            d(this).css("background-image", "url(" + h + ")")
        }
        if (g) {
            d(this).css("opacity", g)
        }
        if (e) {
            d(this).css("mix-blend-mode", e)
        }
    });
    d(".wed_map_over").on("click", function (f) {
        d(this).parents(".wed_section_outter, .wed_inside_map").addClass("active_map");
        d(this).find('.wed_icon_box_content').remove();
        d(this).find('.wed_map_txt').remove();
    });
    d(".wed_top_menu_mobile_link").on("click", function (f) {
        d(this).next(".wed_top_menu_cont").fadeToggle();
        d(this).parents(".wed_light_nav").toggleClass("active")
    });
    d(".wed_header_search").on({
        mouseenter: function () {
            d(this).find(".wed_header_search_cont, .wed_header_basket_cont").stop().fadeToggle()
        }, mouseleave: function () {
            d(this).find(".wed_header_search_cont, .wed_header_basket_cont").stop().fadeToggle()
        }
    });
    d(".wed_music_content").on("click", function (f) {
        f.preventDefault();
        d(this).next(".wed_iframe").toggleClass("active")
    });
    d(".wed_go, .wed_top_menu_cont a").on("click", function (g) {
        var f = d(this);
        d("html, body").stop().animate({scrollTop: d(f.attr("href")).offset().top}, 2300);
        g.preventDefault()
    });
    d("div[data-animation=animation_blocks]").each(function () {
        var e = 0;
        d(this).find(".wed_icon_box, .skill-bar-content, .wed_anim_box, .wed_bd, .wed_story_txt, .wed_portfolio_item_cont").each(function () {
            d(this).css("transition-delay", "0." + e + "s");
            e++
        })
    });
    d(".increase-qty").on("click", function (h) {
        var g = d(this).parents(".add-to-cart").find(".qty").val();
        var f = g * 1 + 1;
        d(this).parents(".add-to-cart").find(".qty").val(f);
        h.preventDefault()
    });
    d(".decrease-qty").on("click", function (h) {
        var g = d(this).parents(".add-to-cart").find(".qty").val();
        var f = g * 1 - 1;
        if (f < 1) {
            f = 1
        }
        d(this).parents(".add-to-cart").find(".qty").val(f);
        h.preventDefault()
    });
    var a = d("header").height() - 1;
    d("#nav-sidebar, .wed_top_menu_cont").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 700,
        scrollOffset: a,
        scrollThreshold: 0.5,
        filter: "",
        easing: "swing"
    });
    d('[data-toggle="tooltip"]').tooltip();
    d('[data-toggle="popover"]').popover();
    d(window).scroll(function () {
        if (d(window).scrollTop() > 100) {
            d(".wed_logo").addClass("active");
            d("body").addClass("wed_first_step")
        } else {
            d("body").removeClass("wed_first_step");
            d(".wed_logo").removeClass("active")
        }
        if (d(window).scrollTop() > 500) {
            d("body").addClass("wed_second_step")
        } else {
            d("body").removeClass("wed_second_step")
        }
        if (d(window).scrollTop() > 800) {
            d("body").addClass("wed_third_step")
        } else {
            d("body").removeClass("wed_third_step")
        }
    });
    d(".wed_fixed").css("background-attachment", "fixed");
    d(".wed_parent").on({
        mouseenter: function () {
            d(this).find("ul").stop().fadeIn(300)
        }, mouseleave: function () {
            d(this).find("ul").stop().fadeOut(300)
        }
    });
    d(".wed_mobile_menu_content .wed_parent").on("click", function (f) {
        d(this).find("ul").slideToggle(300)
    });
    d(".wed_mobile_menu").on("click", function (f) {
        d(this).toggleClass("active");
        d(".wed_mobile_menu_hor").toggleClass("active")
    });
    d(".wed_header_search span").on("click", function (f) {
        d(this).next(".wed_header_search_cont").fadeToggle()
    });
    if (!device.tablet() && !device.mobile()) {
        d(".wed_auto_height").each(function () {
            c(d(this).find('div[class^="col"]'))
        })
    }
    if (device.tablet() && device.landscape()) {
        d(".wed_auto_height").each(function () {
            c(d(this).find('div[class^="col"]'))
        })
    }
    d(window).resize(function () {
        if (!device.tablet() && !device.mobile()) {
            d(".wed_auto_height").each(function () {
                c(d(this).find('div[class^="col"]'))
            })
        }
        if (device.tablet() && device.landscape()) {
            d(".wed_auto_height").each(function () {
                c(d(this).find('div[class^="col"]'))
            })
        }
    });

    function c(f) {
        var e = 0;
        f.each(function () {
            d(this).css("height", "auto");
            var g = d(this).height();
            if (g > e) {
                e = g
            }
        });
        f.height(e)
    }

    d(window).load(function () {
        d("body").imagesLoaded(function () {
            d(".wed_page_loader div").fadeOut();
            d(".wed_page_loader").delay(200).fadeOut("slow")
        });
        if (!device.tablet() && !device.mobile()) {
            var f = skrollr.init({forceHeight: false});
            d(window).stellar({horizontalScrolling: false, responsive: true})
        }
        d(".wed_countdown").each(function () {
            var h = d(this).attr("data-year");
            var i = d(this).attr("data-month");
            var g = d(this).attr("data-day");
            d(this).countdown({until: new Date(h, i - 1, g)})
        });
        var e = d(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {columnWidth: ".grid-item"}
        });
        e.imagesLoaded().progress(function () {
            e.isotope("layout")
        });
        d(window).resize(function () {
            e.isotope("layout")
        });
        d(".masonry").masonry({itemSelector: ".masonry-item"});
        d(".filter-button-group").on("click", "a", function () {
            d(this).parents(".filter-button-group").find("a").removeClass("active");
            d(this).addClass("active");
            var g = d(this).attr("data-filter");
            e.isotope({filter: g})
        })
    })
})(jQuery);
$("ul.wed_top_menu").click(function () {
    var a = window.innerWidth;
    if (a < 768) {
        $(".wed_top_menu_cont").css("display", "none")
    }
});
$("#allergies").click(function () {
    if ($(this).is(":checked")) {
        $("#allergies-text").removeClass("hidden")
    } else {
        $("#allergies-text").addClass("hidden")
    }
});
$("#children").click(function () {
    if ($(this).is(":checked")) {
        $("#children-text").removeClass("hidden")
    } else {
        $("#children-text").addClass("hidden")
    }
});
$(document).bind("mobileinit", function () {
    $.extend($.mobile, {ajaxFormsEnabled: false})
});