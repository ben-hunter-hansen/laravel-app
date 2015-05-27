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
     * Smooth scroll to the target element
     *
     * @param target    Target element
     */
    export function smoothScroll(target: JQuery) {
        var targetOffset = target.offset(),
            children = target.children(),
            paddingDiff = parseInt($('body').css("padding-top")),
            hiddenDiff = 0;

        // Compute the difference for any display:none child elements
        // on the target that may become visible
        children.each((i) => {
            if(!$(children[i]).is(":visible")) {
                hiddenDiff += $(children[i]).show().height();
                $(children[i]).hide();
            }
        });

        $('html,body').animate({
            scrollTop: targetOffset.top - (paddingDiff + hiddenDiff)
        },250);
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