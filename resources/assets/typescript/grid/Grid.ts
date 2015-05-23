/**
 * Created by ben on 5/20/15.
 */
import $ = require('jquery');
import Row = require('grid/Row');
import Column = require('grid/Column');
import Template = require('grid/Template');
import Slider = require('grid/Slider');
import EventRegister = require('interfaces/EventRegister');
import GridConfig = require('grid/GridConfig');

class Grid  {
    private Element: JQuery;
    private Rows: Array<Row>;
    private RowTemplate: Template.GridRow;
    private Config: GridConfig;

    constructor(config: GridConfig) {
        this.Element = config.element;
        this.Rows = new Array<Row>();
        this.Config = config;
        this.RowTemplate = this.createTemplate(this.Config.rowTemplate);
    }


    /**
     * Adds a new row to the grid
     */
    public addRow() {
        var row = new Row(this.createTemplate(this.Config.rowTemplate));
        row.attachTo(this.Element);
        row.click();
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

    public getSelected() {
        var found: Row;
        this.Rows.forEach(row => {
            if(row.isSelected()) {
                found = row;
            }
        });
        return found;
    }

    /**
     * Builds up a usable template row
     *
     * @returns {{row: JQuery, col: (T|JQuery)}} the template
     */
    private createTemplate(el: JQuery): Template.GridRow {
        var parentElement = $(el).clone();
        $(parentElement).click(this.Config.events.onClick);

        var uContent = $(parentElement).find(".user-content").first().clone();
        var utils = $(parentElement).find(".utils").first().clone();
        var colSlider = $(utils).find(".column-size-slider").first().clone();
        $(utils).children().remove();
        $(parentElement).children().remove();
        $(el).remove();

        var slider:Slider = {
            element: colSlider,
            config: {
                value: 1,
                min: 1,
                max: 4,
                step: 1,
                slide: this.Config.events.onColumnAdjustment
            }
        };

        var template:Template.GridRow = {
           element: parentElement,
            children: {
                userContent: {
                    element: uContent
                },
                utils: {
                    element: utils,
                    columnSlider: slider
                }
            }
        };
        return template;
    }
}

export = Grid;