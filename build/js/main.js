$(function() {

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('select').niceSelect();

    $('.profile').click(function(i) {
        $(this).addClass('active');
        var profileHide = $('.profile-hide');

        if (profileHide.css('display') != 'block') {
            profileHide.show(300);


            var firstClick = true;
            $(document).bind('click.Profile', function(i) {
                if (!firstClick && $(i.target).closest('.profile-hide').length == 0) {
                    profileHide.hide(300);
                    $('.profile').removeClass('active');
                    $(document).unbind('click.Profile');
                }

                firstClick = false;
            });
        }

        i.preventDefault();

    });

    $('.style-tab').click(function() {
        $('.style-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.styles-elems').find('.styles-elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });


});

$(window).on('load resize scroll', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

    if (width > '700') {

    }

    if (width < '700') {

    }

});
//# sourceMappingURL=../sourcemaps/main.js.map
