﻿!function(e){var t=e("header .wed_logo_animation").attr("data-rotate");""!=t&&e("header .wed_logo_animation").addClass("wed_logo_rotate_"+t),e("header .wed_logo_animation").lettering(),e("header .wed_logo_animation span").each(function(){var t=Math.floor(51*Math.random()+0);e(this).css("transition-delay","0."+t+"s")}),e(".wed_particles").length>0&&e(".wed_particles").particleground({dotColor:"#fff",lineColor:"#fff",particleRadius:"3",lineWidth:"0.5"}),e(".jqueryFireFly").length>0&&e(".jqueryFireFly").each(function(){var t=e(this).attr("data-total"),i=e(this).attr("data-minPixel"),a=e(this).attr("data-maxPixel");e.firefly({minPixel:i,maxPixel:a,color:"none",total:t,twinkle:.9,on:".wed_firefly"})}),e("#bgndVideo").length>0&&e("#bgndVideo").YTPlayer(),e(".wed_timer").appear(function(){var t=e(this);t.countTo({from:0,to:t.html(),speed:1300,refreshInterval:60})}),e(".date_picker").datepicker(),e(".lightbox").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".video").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"http://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"http://player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}}),e(".wed_slider_carousel").owlCarousel({navigation:!0,responsive:!0,responsiveRefreshRate:200,responsiveBaseElement:window,slideSpeed:200,addClassActive:!0,paginationSpeed:200,rewindSpeed:200,items:1,autoPlay:!1,touchDrag:!1,singleItem:!0,transitionStyle:"fade",navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']}),e(".wed_team_slider").owlCarousel({navigation:!0,responsive:!0,responsiveRefreshRate:600,responsiveBaseElement:window,slideSpeed:1500,addClassActive:!0,paginationSpeed:700,rewindSpeed:3e3,items:3,itemsTablet:[1e3,2],itemsMobile:[569,1],itemsDesktop:3,autoPlay:!0,touchDrag:!1,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']}),e(".wed_services_slider").owlCarousel({navigation:!0,responsive:!0,responsiveRefreshRate:400,responsiveBaseElement:window,slideSpeed:400,addClassActive:!0,paginationSpeed:900,rewindSpeed:400,transitionStyle:"goDown",items:1,autoPlay:!0,singleItem:!0,autoHeight:!0,touchDrag:!1,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']}),e(".wed_team_slider_single").owlCarousel({navigation:!0,responsive:!0,responsiveRefreshRate:200,responsiveBaseElement:window,slideSpeed:200,addClassActive:!0,paginationSpeed:200,rewindSpeed:200,items:1,autoPlay:!0,singleItem:!0,autoHeight:!0,touchDrag:!1,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']}),e(".wed_shop_item_slider").owlCarousel({navigation:!0,responsive:!0,responsiveRefreshRate:200,responsiveBaseElement:window,slideSpeed:200,addClassActive:!0,paginationSpeed:200,rewindSpeed:200,singleItem:!0,autoPlay:!1,touchDrag:!1,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']}),e(".wed_slide_gallery").owlCarousel({navigation:!0,responsive:!0,responsiveRefreshRate:600,responsiveBaseElement:window,slideSpeed:1500,addClassActive:!0,paginationSpeed:700,rewindSpeed:3e3,items:3,itemsTablet:[1e3,2],itemsMobile:[569,1],itemsDesktop:3,autoPlay:!0,touchDrag:!1,navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']}),e(".tweets-feed").each(function(e){jQuery(this).attr("id","tweets-"+e)}).each(function(e){var t={id:jQuery("#tweets-"+e).attr("data-widget-id"),domId:"",maxTweets:1,enableLinks:!0,showUser:!0,showTime:!0,dateFunction:"",showRetweet:!1,customCallback:function(t){var i=t.length,a=0,o=document.getElementById("tweets-"+e),s='<ul class="slides">';for(;a<i;)s+="<li>"+t[a]+"</li>",a++;return s+="</ul>",o.innerHTML=s,s}};twitterFetcher.fetch(t)}),e(".wed_image_bck").each(function(){var t=e(this).attr("data-image"),i=e(this).attr("data-gradient"),a=e(this).attr("data-txt-color"),o=e(this).attr("data-color"),s=e(this).attr("data-border"),n=e(this).attr("data-blend"),d=e(this).attr("data-opacity"),l=e(this).attr("data-position"),r=e(this).attr("data-height");t&&e(this).css("background-image","url("+t+")"),i&&e(this).css("background-image",i),a&&e(this).css("color",a),o&&e(this).css("background-color",o),s&&e(this).css("border-color",s),n&&e(this).css("background-blend-mode",n),l&&e(this).css("background-position",l),d&&e(this).css("opacity",d),r&&e(this).css("height",r)}),e(".wed_over, .wed_head_bck").each(function(){var t=e(this).attr("data-color"),i=e(this).attr("data-image"),a=e(this).attr("data-opacity"),o=e(this).attr("data-blend");t&&e(this).css("background-color",t),i&&e(this).css("background-image","url("+i+")"),a&&e(this).css("opacity",a),o&&e(this).css("mix-blend-mode",o)}),e(".wed_map_over").on("click",function(t){e(this).parents(".wed_section_outter, .wed_inside_map").addClass("active_map"),e(this).find(".wed_icon_box_content").remove(),e(this).find(".wed_map_txt").remove()}),e(".wed_top_menu_mobile_link").on("click",function(t){e(this).next(".wed_top_menu_cont").fadeToggle(),e(this).parents(".wed_light_nav").toggleClass("active")}),e(".wed_header_search").on({mouseenter:function(){e(this).find(".wed_header_search_cont, .wed_header_basket_cont").stop().fadeToggle()},mouseleave:function(){e(this).find(".wed_header_search_cont, .wed_header_basket_cont").stop().fadeToggle()}}),e(".wed_go, .wed_top_menu_cont a").on("click",function(t){var i=e(this);e("html, body").stop().animate({scrollTop:e(i.attr("href")).offset().top},2300),t.preventDefault()}),e("div[data-animation=animation_blocks]").each(function(){var t=0;e(this).find(".wed_icon_box, .skill-bar-content, .wed_anim_box, .wed_bd, .wed_story_txt, .wed_portfolio_item_cont").each(function(){e(this).css("transition-delay","0."+t+"s"),t++})}),e(".increase-qty").on("click",function(t){var i=1*e(this).parents(".add-to-cart").find(".qty").val()+1;e(this).parents(".add-to-cart").find(".qty").val(i),t.preventDefault()}),e(".decrease-qty").on("click",function(t){var i=1*e(this).parents(".add-to-cart").find(".qty").val()-1;i<1&&(i=1),e(this).parents(".add-to-cart").find(".qty").val(i),t.preventDefault()});var i=e("header").height()-1;function a(t){var i=0;t.each(function(){e(this).css("height","auto");var t=e(this).height();t>i&&(i=t)}),t.height(i)}e("#nav-sidebar, .wed_top_menu_cont").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:700,scrollOffset:i,scrollThreshold:.5,filter:"",easing:"swing"}),e('[data-toggle="tooltip"]').tooltip(),e('[data-toggle="popover"]').popover(),e(window).scroll(function(){e(window).scrollTop()>100?(e(".wed_logo").addClass("active"),e("body").addClass("wed_first_step")):(e("body").removeClass("wed_first_step"),e(".wed_logo").removeClass("active")),e(window).scrollTop()>500?e("body").addClass("wed_second_step"):e("body").removeClass("wed_second_step"),e(window).scrollTop()>800?e("body").addClass("wed_third_step"):e("body").removeClass("wed_third_step")}),e(".wed_fixed").css("background-attachment","fixed"),e(".wed_parent").on({mouseenter:function(){e(this).find("ul").stop().fadeIn(300)},mouseleave:function(){e(this).find("ul").stop().fadeOut(300)}}),e(".wed_mobile_menu_content .wed_parent").on("click",function(t){e(this).find("ul").slideToggle(300)}),e(".wed_mobile_menu").on("click",function(t){e(this).toggleClass("active"),e(".wed_mobile_menu_hor").toggleClass("active")}),e(".wed_header_search span").on("click",function(t){e(this).next(".wed_header_search_cont").fadeToggle()}),device.tablet()||device.mobile()||e(".wed_auto_height").each(function(){a(e(this).find('div[class^="col"]'))}),device.tablet()&&device.landscape()&&e(".wed_auto_height").each(function(){a(e(this).find('div[class^="col"]'))}),e(window).resize(function(){device.tablet()||device.mobile()||e(".wed_auto_height").each(function(){a(e(this).find('div[class^="col"]'))}),device.tablet()&&device.landscape()&&e(".wed_auto_height").each(function(){a(e(this).find('div[class^="col"]'))})}),e(window).load(function(){if(e("body").imagesLoaded(function(){e(".wed_page_loader div").fadeOut(),e(".wed_page_loader").delay(200).fadeOut("slow")}),!device.tablet()&&!device.mobile()){skrollr.init({forceHeight:!1});e(window).stellar({horizontalScrolling:!1,responsive:!0})}e(".wed_countdown").each(function(){var t=e(this).attr("data-year"),i=e(this).attr("data-month"),a=e(this).attr("data-day");e(this).countdown({until:new Date(t,i-1,a)})});var t=e(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-item"}});t.imagesLoaded().progress(function(){t.isotope("layout")}),e(window).resize(function(){t.isotope("layout")}),e(".masonry").masonry({itemSelector:".masonry-item"}),e(".filter-button-group").on("click","a",function(){e(this).parents(".filter-button-group").find("a").removeClass("active"),e(this).addClass("active");var i=e(this).attr("data-filter");t.isotope({filter:i})})})}(jQuery),$("ul.wed_top_menu").click(function(){window.innerWidth<768&&$(".wed_top_menu_cont").css("display","none")}),$("#allergies").click(function(){$(this).is(":checked")?$("#allergies-text").removeClass("hidden"):$("#allergies-text").addClass("hidden")}),$("#children").click(function(){$(this).is(":checked")?$("#children-text").removeClass("hidden"):$("#children-text").addClass("hidden")}),$(document).bind("mobileinit",function(){$.extend($.mobile,{ajaxFormsEnabled:!1})});