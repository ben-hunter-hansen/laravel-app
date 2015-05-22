/**
 * Created by ben on 5/20/15.
 */
import $ = require('jquery');
import Row = require('grid/Row');
import EventRegister = require('interfaces/EventRegister');
import GridEvents = require('GridEvents');

class Grid  {
    private Element: JQuery;
    private Rows: Array<Row>;
    private RowTemplate: JQuery;
    private ColumnTemplate: JQuery;
    private Events: GridEvents;

    constructor(element: JQuery, rowTemplate: JQuery, colTemplate: JQuery,events: GridEvents) {
        this.Element = element;
        this.Rows = new Array<Row>();
        this.RowTemplate = rowTemplate;
        this.ColumnTemplate = colTemplate;
        this.Events = events;
        this.attachEvents(rowTemplate);
        this.Rows.push(new Row(rowTemplate,colTemplate));

    }

    /**
     * Attaches event listeners to the template row,
     * which will apply to all rows created from said template
     *
     * @param element the template row, or another element
     */
    private attachEvents(element: JQuery) {
        $(element).click(this.Events.onClick);
    }

    /**
     * Adds a new row to the grid
     */
    public addRow() {
        var template = this.createTemplate();
        this.attachEvents(template.row);

        var row = new Row(template.row,template.col);
        $(this.Element).append(template.row);
        this.Rows.push(row);
    }

    /**
     * Gets the rows
     *
     * @returns {Array<Row>} the rows
     */
    public getRows() {
        return this.Rows;
    }

    /**
     * Builds up a usable template row
     *
     * @returns {{row: JQuery, col: (T|JQuery)}} the template
     */
    private createTemplate() {
        var rowTemp = $(this.RowTemplate).clone().removeClass("selected");
        var colTemp = $(this.ColumnTemplate).clone();
        $(rowTemp).children().remove();
        return {
            row: rowTemp,
            col: colTemp
        }
    }
}

export = Grid;