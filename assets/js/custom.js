/*
 *   Template Name: Euforia - Responsive Vcard Template
 *   Version: 1.0
 *   Author:  Lukasz Lelek
 *   Website: www.ht2.pl
*/

/*
	TABLE CONTENTS
	-------------------------------
           
           01. PRELOADER & PAGE TRANSITIONS  (requires: functions.js)
           02. MASONRY (requires: masonry.pkgd.min.js)
           03. LOAD FULL SCREEN BG (requires: backstretch.min.js)
           04. TEXT ROTATOR (requires: owl.carousel.min.js)
           05. CONTACT FORM VALID (requires: functions.js)
           06. TOOLTIP (requires: bootstrap.min.js)

	------------------------------- 
*/
(function($) {
 "use strict";

 $(window).load(function() {
             
    /*==========================================
       PRELOADER & PAGE TRANSITIONS (requires: functions.js)
    =====================================================*/

        // active navigation
        $("nav").addClass('activ');
        
        // delete preloader
        $(".preloader").delay("500").fadeOut(500);
         
        // page transitions
        var myTimer = setTimeout(function () {

                PageTransitions.init({
                    pages: $('.page-wrapper'),
                    menu: 'ul.dl-menu',
                    animcursor: 55, // 1 - 60
                    nextAnimcursor: true  // true, false
                });
                clearTimeout(myTimer);

        }, 1500); 
        
        
    /*==========================================
       MASONRY (requires: masonry.pkgd.min.js)
    =====================================================*/

    var containerBlog = document.querySelector('.blog-masonry');
    if (containerBlog) {

        var blogMasonry = new Masonry(containerBlog, {
            itemSelector: '.item',
            columnWidth: containerBlog.querySelector('.item-sizer')
        });

    }
    
           
}); // end window load    

$(document).ready(function() {


    /*==========================================
       ADD NEW STYLE "max-height" (requires: functions.js)
    =====================================================*/
    
    addMenuHeight();
    
    
    /*==========================================
       DL-MENU (requires: functions.js)
    =====================================================*/  
    
    $('#dl-menu').dlmenu();
    
    
    /*==========================================
       LOAD FULL SCREEN BG (requires: backstretch.min.js)
    =====================================================*/

    $(".home-bg").backstretch("assets/img/bg/1.jpg");


    /*==========================================
       TEXT ROTATOR (requires: owl-carousel.min.js)
     =====================================================*/

    $('.rotate-text').owlCarousel({
        loop:true,
        dots: false,
        nav: false,
        margin: 0,
        items:1,
        autoplay: true,
        autoplayHoverPause: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
    });
      
 
    /*==========================================
       PORTFOLIO HOVERDIR (requires: jquery.hoverdir.js)
     =====================================================*/

    $('.portfolio-colum > figure').each(function () {
        $(this).hoverdir({
            hoverDelay: 75
        });
    });
   
    
    /*==========================================
       CONTACT FORM VALID (requires: functions.js)
     =====================================================*/
    contact_form_validate();
    
    
    /*==========================================
       TOOLTIP (requires: bootstrap.min.js)
    =====================================================*/
    $("body").tooltip({selector: '[data-toggle=tooltip]'});
    

});


$(window).resize(function() {
    
        
    /*==========================================
       ADD NEW STYLE "max-height" (requires: functions.js)
    =====================================================*/
    addMenuHeight();
    

});


})(jQuery);
