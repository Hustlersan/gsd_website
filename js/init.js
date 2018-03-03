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
    }); // end of document ready
})(jQuery); // end of jQuery name space
