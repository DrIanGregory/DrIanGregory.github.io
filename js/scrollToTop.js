(function($) { 'use strict';

    $(document).ready(function($){

        // Calculate clients viewport
        function viewport() {
            var e = window, a = 'inner';
            if(!('innerWidth' in window )) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
        }

        var w=window,d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        viewportWidth=w.innerWidth||e.clientWidth||g.clientWidth, 	// Viewport Width
        viewportHeight=w.innerHeight||e.clientHeight||g.clientHeight; 			// Viewport Height

        // Global Vars
        var $window = $(window);
        var body = $('body');
        
		//------------------------------------------------------------------------------------
        // Back to top
        if(viewportWidth > 1024){
            var toTopArrow = $('a.back-to-top');

            toTopArrow.on('click touchstart', function (e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: 0}, 800, 'swing');
                return false;
            });

            $(window).scroll(function () {
                var $this = $(this);
                if($this.scrollTop() > 30) {
                    toTopArrow.fadeIn();
                }
                else{
                    toTopArrow.fadeOut();
                }
            });
        }
		//------------------------------------------------------------------------------------

    }); // End Document Ready


})(jQuery);
