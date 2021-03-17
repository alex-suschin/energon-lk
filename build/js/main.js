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

    $('#search').autocomplete({
        minChars: 2,
        maxHeight: 410,
        lookupLimit: 13,
        lookup: contractors
    });

    $('.btn-switch').click(function() {
        $('.elem-information__btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.elem-information__box').find('.elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.btn-more').click(function(e) {
        $(this).addClass('active');
        var btnItems = $(this).siblings('.btn-el-items');

        if (btnItems.css('opacity') != '1') {
            btnItems.css('opacity', '1');


            var firstClickBtns = true;
            $(document).bind('click.btns', function(e) {
                if (!firstClickBtns && $(e.target).closest('.btn-el-items').length == 0) {
                    btnItems.css('opacity', '0');
                    $('.btn-more').removeClass('active');
                    $(document).unbind('click.btns');
                }

                firstClickBtns = false;
            });
        }

        e.preventDefault();
    });

    $('#datepicker').datepicker({
        range: 'multiple',
        showWeek: true,
        firstDay: 1,
        dateFormat: 'mm.dd.yyyy',
        onSelect: function(fd, d, picker) {
            $(".start_one").val(fd.split("-")[0]);
            $(".end_one").val(fd.split("-")[1]);
        }
    });

    $('.end_one').click(function() {
        $('.start_one').trigger('focus');
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
