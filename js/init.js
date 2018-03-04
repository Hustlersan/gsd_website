(function ($) {
    $(function () {
        var canvasDiv = document.getElementById('dots-canvas');
        var options = {
            particleColor: '#fff',
            interactive: false,
            speed: 'slow',
            density: 'medium'
        };
        var particleCanvas = new ParticleNetwork(canvasDiv, options);

        $('.button-collapse').sideNav();

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        function pass() {
            $('html,body').animate({scrollTop: $(this).parent().next().offset().top}, 'slow');
            console.log(1);
        }


        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });

        $('#fullpage').fullpage({
            navigation: true,
            verticalCentered: false,
            controlArrows: false,
            sectionSelector: '.fp-section'
        });
        $(document).on('click', '#my-arrow-right', function(){
            $.fn.fullpage.moveSlideRight();
        });
        $(document).on('click', '#my-arrow-left', function(){
            $.fn.fullpage.moveSlideLeft();
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space
