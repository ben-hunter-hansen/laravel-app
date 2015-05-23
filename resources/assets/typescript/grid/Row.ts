/**
 * Created by ben on 5/20/15.
 */
import $ = require('jquery');
import Template = require('grid/Template');
import Column = require('grid/Column');

class Row  {
    private Columns: Array<Column>;
    private MAX_COLUMNS = 4;
    private Element: JQuery;
    private Template: Template.GridRow;

    constructor(template: Template.GridRow) {
        this.Template = template;
        var colContainer = this.Template.children.userContent.element.clone();
        var utils = this.Template.children.utils.element.clone();
        var slider = this.Template.children.utils.columnSlider.element.clone();
        var slideConfig = this.Template.children.utils.columnSlider.config;

        var templateCol = new Column(colContainer.children().first());
        templateCol.attachTo(colContainer);
        this.Columns = new Array<Column>();
        this.Columns.push(templateCol);
        this.Template.children.userContent.column = templateCol;

        $(slider).slider(slideConfig);
        $(utils).append(slider);

        $(this.Template.element).append(colContainer);
        $(this.Template.element).append(utils);
        this.Element = this.Template.element;
    }

    public attachTo(parent: JQuery) {
        $(parent).append(this.Element);
    }

    /**
     * Adds an arbitrary number of columns to the row
     * @param n the number of columns to add
     */
    public addColumns(n: number) {
        if(n + this.Columns.length <= this.MAX_COLUMNS) {
            for(var i = 0; i < n; i++) {
                var col = this.Template.children.userContent.column.copy();
                col.attachTo(this.Element.find(".user-content").first());
                this.Columns.push(col);
            }
        } else {
            console.warn("unable to add any more columns!");
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
        var targetClass = "col-xs-" + (12 / targetCount);
        this.Columns.forEach(column => {
            column.setWidth(targetClass);
        });
        //this.Template.children.userContent.column.remove();

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
            var removedCol = this.Columns.pop();
            removedCol.remove();
        }
    }

    public isSelected() {
        return this.Element.hasClass("selected");
    }

    public click() {
        $(this.Element).trigger("click");
    }
}

export = Row;