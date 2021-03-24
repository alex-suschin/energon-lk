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

    $('.elem-item-list').each(function() {
        if ($(this).closest('.elem-item').attr('style') != 'display: none;') {
            var Len = $(this).find('.elem-item-box').length;
            if (Len == 2) {
                $(this).children('.add-card').addClass('add-card-2');
            } else if (Len == 1) {
                $(this).children('.add-card').addClass('add-card-1');
            }
        }

    });

    $('.btn-switch').click(function() {
        $('.elem-information__btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.elem-information__box').find('.elem-item').hide();
        $('#' + $(this).data('switch')).show();
        if ($(this).hasClass('active')) {
            $('.elem-item-list').each(function() {
                if ($(this).closest('.elem-item').attr('style') != 'display: none;') {
                    var Len = $(this).find('.elem-item-box').length;
                    if (Len == 2) {
                        $(this).children('.add-card').addClass('add-card-2');
                    } else if (Len == 1) {
                        $(this).children('.add-card').addClass('add-card-1');
                    }
                }
            });
        }
    });

    $('.btn-more').click(function(e) {
        e.preventDefault();
        $('.btn-el-items').css('opacity', '0');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.btn-el-items').css('opacity', '0');
        } else {
            $(this).addClass('active');
            var btnItems = $(this).siblings('.btn-el-items');
            if (btnItems.css('opacity') != '1') {
                btnItems.css('opacity', '1');
            }
        }
    });

    $(document).mouseup(function(e) {
        var div2 = $(".btn-el-items");
        if (!div2.is(e.target) &&
            div2.has(e.target).length === 0) {
            $('.btn-more').removeClass('active');
            $('.btn-el-items').css('opacity', '0');
        }
    });

    // $('.btn-more').click(function(e) {
    //     $(this).addClass('active');
    //     var btnItems = $(this).siblings('.btn-el-items');

    //     if (btnItems.css('opacity') != '1') {
    //         btnItems.css('opacity', '1');


    //         var firstClickBtns = true;
    //         $(document).bind('click.btns', function(e) {
    //             if (!firstClickBtns && $(e.target).closest('.btn-el-items').length == 0) {
    //                 btnItems.css('opacity', '0');
    //                 $('.btn-more').removeClass('active');
    //                 $(document).unbind('click.btns');
    //             }

    //             firstClickBtns = false;
    //         });
    //     }

    //     e.preventDefault();
    // });

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

    $('.dates-plans').scrollbar({
        ignoreOverlay: false,
        autoScrollSize: true,
        autoUpdate: true
    });

    $('.btn-abc').click(function() {
        $(this).toggleClass('active');
        $('.alfavite').slideToggle(200);
    });

    $('.plans-calendar').datepicker({});

    $('.end_one').click(function() {
        $('.start_one').trigger('focus');
    });

    $('.table-tr-btn').click(function() {
        $(this).closest('.table-tr').toggleClass('active');
    });

    $('.btn-filter').click(function() {
        $('.events-dates').toggleClass('active');
        $('body').toggleClass('overlay');
    });

});

if (/|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $('#alfavite-sel').niceSelect('destroy');
}

$(window).on('load', function() {

    var widthLoad = $(window).width();

    if (widthLoad < '992') {
        $(".events-dates").prepend("<a href='javascript:void(0);' class='filter-btn'></a>");
        $(".events-dates").prepend("<a href='javascript:void(0);' class='filter-remove'>Сбросить</a>");
        $(".events-dates").append("<a href='javascript:void(0);' class='filter-enter'>Применить</a>");
    }

    $('.filter-btn').click(function() {
        $('.events-dates').removeClass('active');
        $('body').removeClass('overlay');
    });

});

$(window).on('load resize', function() {
    var width = $(window).width();


    if (width < '801') {
        $('.menu').insertAfter($('.header-box'));
        $('.header').addClass('load');
    }

    if (width > '800') {
        $('.menu').insertAfter($('.logo'));
    }

    if (width < '516') {
        $('.menu').not('.slick-initialized').slick({
            slidesToShow: 1,
            infinite: false,
            arrows: false,
            variableWidth: true,
            dots: false,
            swipeToSlide: true,
            slidesToScroll: 1
        });
    } else {
        $('.menu').filter('.slick-initialized').slick('unslick');
    }


});
//# sourceMappingURL=../sourcemaps/main.js.map
