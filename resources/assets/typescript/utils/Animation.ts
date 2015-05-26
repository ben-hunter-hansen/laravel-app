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
     * scrolling behavior.  Returns a promise to the caller
     * that indicates all the animation effects have completed.
     *
     * @param element   The element to scroll
     * @param containerHeight   height of container element (optional)
     * @returns {JQueryPromise<T>}
     */
    export function stickyScroll(element: JQuery, containerHeight = $(window).height()): JQueryPromise<any> {
        var deferred = $.Deferred();
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
                    $(element).stop().animate({
                        "opacity":"1"
                    },"fast", () => {
                        deferred.resolve("scroll complete")
                    });
                });
            });
        } else {
            deferred.reject("Animation.stickyScroll: Element is not within the bounds of its container");
        }
        return deferred.promise();
    }
}

export = Animation;