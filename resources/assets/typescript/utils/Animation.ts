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

    /**
     * Sticky scrolls an element with the page.  Optionally,
     * pass in the height of a container element to restrict
     * scrolling behavior.
     *
     * @param element   The element to scroll
     * @param containerHeight   (optional) height of container element
     */
    export function stickyScroll(element: JQuery, containerHeight = $(window).height()) {
        var elemHeight = element.height(),
            scrollPos = $(window).scrollTop();
        var withinBounds = (containerHeight > scrollPos + elemHeight);
        if(withinBounds) {
            $(element).stop().animate({
                "opacity":".2"
            },"fast",() => {
                $(element).stop().animate({
                    marginTop: $(window).scrollTop()
                },"fast",()=> {
                    $(element).stop().animate({"opacity":"1"});

                });
            });
        }
    }
}

export = Animation;