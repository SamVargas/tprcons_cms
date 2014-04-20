jQuery(document).ready(function () {
jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() < 0.1 || jQuery(window).width() < 767) {
        jQuery('#rt-top').removeClass('rttopfixedtop');

    } else {
        jQuery('#rt-top').addClass('rttopfixedtop');

    }
});
});