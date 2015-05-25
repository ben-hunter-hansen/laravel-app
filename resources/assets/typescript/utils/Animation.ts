/**
 * Created by ben on 5/24/15.
 */

import $ = require('jquery');

/**
 * The Animation module contains shorthand functions
 * that wrap useful jQuery animations
 */
module Animation {
    /**
     * Smoothly scroll to the target element
     * @param target
     * @param from
     */
    export function smoothScroll(target: JQuery, from = $('html,body')) {
        $(from).animate({
            scrollTop: $(target).offset().top - ($(target).height() / 2)
        });
    }
}

export = Animation;