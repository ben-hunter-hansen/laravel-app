/**
 * Created by ben on 5/22/15.
 */

import $ = require('jquery');
import Column = require('grid/Column');

/**
 * The template module contains interfaces which
 * describe all aspects of a grid template, as well
 * as a factory class for creating objects based on these
 * interfaces.
 */
module Template {

    /**
     * Describes a set of grid items/components
     */
    export interface GridModel {
        row: JQuery;
        content: JQuery;
        utils: JQuery;
        slider: JQuery;
    }

    /**
     * Describes a configuration for the Slider component
     */
    export interface SlideConfig {
        value?: number;
        min?: number;
        max?: number;
        step?: number;
        slide: (event: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) => void;
        animate?: string;
    }

    /**
     * Describes a Slider component
     */
    export interface Slider {
        element: JQuery;
        config: SlideConfig;
    }

    /**
     * Describes a grid row
     */
    export interface GridRow {
        element: JQuery;
        children: {
            userContent: {
                element: JQuery;
                column?: Column;
            }
            utils: {
                element: JQuery;
                slider: SlideConfig;
            }
        }
    }

    /**
     * Helper class for manipulating a templates DOM structure
     */
    export class DomUtils {
        /**
         * Recursively traverses a template object and builds an html structure
         * of all the jQuery wrapped elements found in the template.
         *
         * @param templateObj   The template
         * @param tree  The running tree
         * @returns {*} The tree
         */
        static buildTree(templateObj: Object, tree?: JQuery): JQuery {
            if(!tree) { // dummy container
                tree = $('<div></div>');
            }

            for(var prop in templateObj) {
                if(templateObj[prop] instanceof Object) {
                    // Recursive case
                    this.buildTree(templateObj[prop], tree);
                } else {
                    if(templateObj instanceof jQuery) {
                        // Base case
                        tree = $(tree).append($(templateObj));
                    }
                    return tree;
                }
            }
            // Return a copy of the tree, disregarding the dummy container
            return $(tree).children().clone();
        }

        static removeChildren(...elements: JQuery[]) {
            elements.forEach(el => {
                $(el).children().remove();
            })
        }
    }

    /**
     * Factory class for creating various objects
     */
    export class Factory {

        /**
         * Creates a fully initialized GridModel
         *
         * @param gridContainer The root element of the grid
         * @returns {GridModel}
         * @constructor
         */
        static Model(gridContainer: JQuery): GridModel {
            var model:GridModel = {
                row: $(gridContainer).find(".grid-row").first().clone(),
                content: $(gridContainer).find(".user-content").first().clone(),
                utils: $(gridContainer).find(".utils").first().clone(),
                slider: $(gridContainer).find(".column-size-slider").first().clone()
            }
            return model;
        }

        /**
         * Creates a fully initialized Slider configuration object
         *
         * @param slideFn   slide event callback
         * @param value initial value of slider (default = 1)
         * @param min   minimum value of slider (default = 1)
         * @param max   maximum value of slider (default = 4)
         * @param step  distance to move per slide event (default = 1)
         * @param animate   animation property of the slider (default = "fast")
         * @returns {{value: number, min: number, max: number, step: number, slide: (function(JQueryUI.SliderEvent, JQueryUI.SliderUIParams): void), animate: string}}
         * @constructor
         */
        static SlideConfig
        (slideFn: (event: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) => void,
        value = 1, min = 1, max = 4, step = 1, animate = "fast"): SlideConfig {
            return {
                value: value,
                min: min,
                max: max,
                step: step,
                slide: slideFn,
                animate: animate
            }
        }

    }
}

export = Template;