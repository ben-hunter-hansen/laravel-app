/**
 * Created by ben on 5/20/15.
 */
import $ = require('jquery');
import Template = require('grid/Template');
import Column = require('grid/Column');
import Geometry = require('utils/Geometry');
/**
 * A Row is a component of a Grid object.
 * Its structure is modeled from a template that applies to all
 * other rows contained in a grid.
 */
class Row {
    private Columns: Array<Column>;
    private MAX_COLUMNS = 4;
    private Element: JQuery;
    private Template: Template.GridRow;

    constructor(template: Template.GridRow) {

        this.Template = template;
        this.Columns = new Array<Column>();

    }

    /**
     * Attaches this row to a parent node
     *
     * @param parent    parent node
     */
    public attachTo(parent: JQuery) {
        $(parent).append(this.Element);
    }

    /**
     * Transforms the elements, configs, and components
     * from the template into a usable html structure which
     * can be appended to the root node of the row.
     *
     */
    public applyTemplate() {
        // Create a virtual html structure from the template
        var rowContents = Template.DomUtils.buildTree(this.Template.children);

        // Attach the slider configuration
        $(rowContents).find(".column-size-slider").first()
            .slider(this.Template.children.utils.slider);

        $(rowContents).find(".delete-row-btn").first().click(this.Template.events.onDelete);

        // Assign an arbitrary grid column as the template column.
        var columnTemplate = new Column($(rowContents).find(".grid-col").first());
        this.Template.children.userContent.column = columnTemplate;
        this.Columns.push(columnTemplate);

        // Apply the prepared DOM structure to the root element of the row
        $(this.Template.element).append(rowContents);
        this.Element = this.Template.element;

        // Provide focus
        this.click();
    }

    /**
     * Adds an arbitrary number of columns to the row
     * @param n the number of columns to add
     */
    public addColumns(n: number): JQueryPromise<any> {
        var deferred = $.Deferred();
        if(n + this.Columns.length <= this.MAX_COLUMNS) {
            for(var i = 0; i < n; i++) {
                var col = this.Template.children.userContent.column.copy();
                col.setDisplay("none");
                col.attachTo(this.Element.find(".user-content").first());
                this.Columns.push(col);
            }
            return deferred.resolve(this.Columns.filter((col) => {
                return !col.getVisible();
            }));
        } else {
            return deferred.reject("unable to add any more columns!");
        }
    }

    /**
     * Makes an adjustment to the rows columns, used
     * before adding or removing columns.
     *
     * @param targetCount   The desired # of columns
     * @returns {number}    Magnitude of adjustment
     */
    public adjustColumns(targetCount: number) {
        var targetClass = "col-xs-12 col-sm-" + (12 / targetCount);
        this.Columns.forEach(column => {
            column.setWidth(targetClass);
        });
        // For example, say we had 1 column, and the target count is 3 columns, so 3 - 1 = 2 column difference
        // Return this to the caller so they know how many columns to add/remove
        // negative numbers indicate removal, positive numbers indicate addition.
        var adjustmentMagnitude = targetCount - this.Columns.length;
        return adjustmentMagnitude;
    }

    /**
     * Removes and arbitrary number of columns from the row
     *
     * @param n number of columns to remove
     */
    public removeColumns(n: number) {
        for(var i = 0; i < n; i++) {
            this.Columns.pop().remove();
            this.Columns[i].getElement().hide().fadeIn("slow")
        }
    }

    /**
     * Checks if this row is selected
     * @returns {boolean}
     */
    public isSelected() {
        return this.Element.hasClass("selected");
    }

    /**
     * Triggers the rows click event
     */
    public click() {
        $(this.Element).trigger("click");
    }

    /**
     * Gets the root element of the row
     * @returns {JQuery}
     */
    public getElement() {
        return this.Element;
    }

    /**
     * Removes this row from the DOM
     */
    public remove() {
        $(this.Element).remove();
    }

    /**
     * Changes the value displayed in the column count
     * label.
     *
     * @param value new value
     */
    public updateColumnsLabel(value: any) {
        if(typeof value === "string") {
            $(this.Element).find(".col-count-label").first().text(value);
        } else if(typeof value === "number") {
            $(this.Element).find(".col-count-label").first().text(value.toString());
        }
    }

    /**
     * Returns a DOMRect composite object
     * based on the current position of the row
     *
     * @returns {Geometry.Rect}
     */
    public getRect(): Geometry.Rect {
        return Geometry.createRect(this.Element);
    }
}

export = Row;