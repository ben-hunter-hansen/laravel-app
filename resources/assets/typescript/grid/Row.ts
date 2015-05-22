/**
 * Created by ben on 5/20/15.
 */
import $ = require('jquery');
import Column = require('grid/Column');

class Row {
    private Columns: Array<Column>;
    private MAX_COLUMNS = 4;
    private Element: JQuery;
    private ColumnTemplate: JQuery;

    constructor(element: JQuery, colTemplate: JQuery) {
        this.Element = element;
        this.ColumnTemplate = colTemplate
        this.Columns = new Array<Column>();


        var existingCols = $(this.Element).find(".grid-col");
        if(!existingCols.length) {
            var col = new Column(this.createColumnFullWidth(),this.Element);
            col.setResizable(50);
            this.Columns.push(col);
        }  else {
            var col = new Column(this.ColumnTemplate);
            col.setResizable(50);
            this.Columns.push(col);
        }
    }

    /**
     * Adds an arbitrary number of columns to the row
     * @param n the number of columns to add
     */
    public addColumns(n: number) {
        if(n + this.Columns.length <= this.MAX_COLUMNS) {
            for(var i = 0; i < n; i++) {
                var col = new Column(this.createColumnFromTemplate(),this.Element);
                col.setResizable(50);
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
        this.ColumnTemplate = this.Columns[0].copy(); // Change the template to reflect updated column size

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

    /**
     * Checks if the row is currently selected
     *
     * @returns true if selected, else false.
     */
    public isSelected() {
        return $(this.Element).hasClass("selected");
    }


    /**
     * Gets all columns contained in the row
     *
     * @returns {Array<JQuery>} the columns
     */
    public getColumns() {
        return this.Columns;
    }

    /**
     * Creates a new full width column
     *
     * @returns the column
     */
    private createColumnFullWidth(): JQuery {
        var col = $(this.ColumnTemplate).removeClass().addClass("col-xs-12").addClass("grid-col");
        return col;
    }

    /**
     * Creates a column from the template
     *
     * @returns the column
     */
    private createColumnFromTemplate() {
        return $(this.ColumnTemplate).clone();
    }
}

export = Row;