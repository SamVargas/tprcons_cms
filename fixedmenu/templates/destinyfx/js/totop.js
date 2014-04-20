jQuery(document).ready(function () {
jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() < 500 || jQuery(window).width() < 767) {
        jQuery('#gantry-totop').removeClass('totopfixed');

    } else {
        jQuery('#gantry-totop').addClass('totopfixed');

    }
});
});