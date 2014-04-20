jQuery(document).ready(function () {
jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() < 35 || jQuery(window).width() < 767) {
        jQuery('#rt-header').removeClass('rtheaderfixedtop');

    } else {
        jQuery('#rt-header').addClass('rtheaderfixedtop');

    }
});
});