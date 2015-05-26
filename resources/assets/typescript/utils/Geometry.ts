/**
 * Created by ben on 5/25/15.
 *
 * The Geometry module contains utilities for
 * interacting with the various geometric properties
 * of the DOM.
 */
module Geometry {
    /**
     * A Rect is a ClientRect composite. It wraps
     * existing ClientRect functionality and provides
     * some useful methods that extend the ClientRect
     */
    export class Rect {
        private clientRect: ClientRect;

        constructor(element: HTMLElement) {
            this.clientRect = element.getBoundingClientRect();
        }

        /**
         * Gets the ClientRect object
         *
         * @returns {ClientRect}
         */
        public getRect() {
            return this.clientRect;
        }

        /**
         * Gets the ClientRect width
         * @returns {number}
         */
        public getWidth() {
            return this.clientRect.width;
        }

        /**
         * Gets the ClientRect height
         * @returns {number}
         */
        public getHeight() {
            return this.clientRect.height;
        }

        /**
         * Gets the ClientRect top y coordinate
         * @returns {number}
         */
        public getTop() {
            return this.clientRect.top;
        }

        /**
         * Gets the ClientRect bottom y coordinate
         * @returns {number}
         */
        public getBottom() {
            return this.clientRect.bottom;
        }

        /**
         * Gets this Rects center Y coordinate
         * @returns {number}
         */
        public getCenterY() {
            return this.getBottom() - (this.getHeight() / 2);
        }

        /**
         * Checks if this Rect is within the vertical bounds of another
         * Rect, meaning that they share some of the same space on
         * the Y axis.
         *
         * @param r The rect to compare
         * @returns {boolean}
         */
        public withinVerticalBoundsOf(r: Rect) {
            return (this.getCenterY() <= r.getBottom()) &&
                (this.getCenterY() >= r.getTop());
        }
    }

    /**
     * Factory for creating Rect objects from jQuery elements
     *
     * @param element
     * @returns {Geometry.Rect}
     */
    export function createRect(element: JQuery) {
        return new Rect(element[0]);
    }
}

export = Geometry