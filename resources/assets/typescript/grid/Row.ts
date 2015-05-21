/**
 * Created by ben on 5/20/15.
 */
import $ = require('jquery');

class Row {
    private Columns: Array<JQuery>;
    private MAX_COLUMNS = 4;
    private Element: JQuery;
    private ColumnTemplate: JQuery;

    constructor(element: JQuery, colTemplate: JQuery) {
        this.Element = element;
        this.ColumnTemplate = colTemplate;
        this.Columns = new Array<JQuery>();
        this.Columns.push(colTemplate);
    }

    public addColumns(n: number) {
        if(n + this.Columns.length <= this.MAX_COLUMNS) {
            for(var i = 0; i < n; i++) {
                var col = this.createColumnElement();
                $(this.Element).append(col);
                this.Columns.push(col);
            }
        } else {
            console.warn("unable to add any more columns!");
        }
    }


    public adjustColumns(targetCount: number) {
        var targetClass = "col-xs-" + (12 / targetCount);
        this.Columns.forEach(column => {
            $(column).removeClass().addClass(targetClass).addClass("grid-col").addClass("ui-resizable");
        });
        this.ColumnTemplate = $(this.Columns[0]).clone(); // Change the template to reflect updated column size
        return targetCount - this.Columns.length; // return the adjustment magnitude
    }

    public removeColumns(n: number) {
        for(var i = 0; i < n; i++) {
            var removedCol = this.Columns.pop();
            $(removedCol).remove();
        }
    }

    public isSelected() {
        return $(this.Element).hasClass("selected");
    }

    public getColumns() {
        return this.Columns;
    }

    private createColumnElement() {
        return $(this.ColumnTemplate).clone();
    }
}

export = Row;