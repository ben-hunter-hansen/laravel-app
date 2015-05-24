/**
 * Created by ben on 5/20/15.
 */
import $ = require('jquery');
import Row = require('grid/Row');
import Column = require('grid/Column');
import Template = require('grid/Template');
import EventRegister = require('interfaces/EventRegister');
import GridConfig = require('grid/GridConfig');

/**
 * A Grid is a configurable virtual DOM structure that
 * simulates a grid using Bootstrap css classes.
 *
 * The grid is configured through a GridConfig object
 * which contains:
 *  1. Root element
 *  2. A model that describes how the dynamically generated
 *  child nodes should relate to each other.
 *  3. Event handlers associated with the grid items
 *  4. Configurations for various components, such as sliders.
 */
class Grid  {
    private Element: JQuery;
    private Rows: Array<Row>;
    private Config: GridConfig;

    constructor(config: GridConfig) {
        this.Element = config.element;
        this.Rows = new Array<Row>();
        this.Config = config;
    }

    /**
     * Adds a new row to the grid
     */
    public addRow() {
        var row = new Row(this.createTemplate());
        row.applyTemplate();
        row.attachTo(this.Element);
        this.Rows.push(row);
    }

    /**
     * Gets the rows
     *
     * @returns {Array<Row>}
     */
    public getRows() {
        return this.Rows;
    }

    /**
     * Checks each row and returns a reference to the
     * one that is currently selected
     * @returns {Row}
     */
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
     * Clears the grid of all elements matching
     * the selectors described in the argument list
     *
     * @param selectors an arbitrary list of css selectors.
     */
    public clear(...selectors: string[]) {
        selectors.forEach(selector => {
            $(this.Element).find(selector).remove();
        });
    }

    /**
     * Builds a template row out of the elements described
     * in the grids configuration model.  The resulting
     * template will have all additional components
     * and event listeners attached to it.
     *
     * @returns {Template.GridRow}
     */
    private createTemplate(): Template.GridRow {
        // Grab a clone of the row model and attach events to it.
        var rowCopy = this.Config.model.row.clone();
        $(rowCopy).click(this.Config.events.onClick);

        // The rest of the model
        var uContent = this.Config.model.content;
        var utils = this.Config.model.utils;

        // Clear out the child elements, so the resulting Row object
        // will have a clean slate.
        Template.DomUtils.removeChildren(rowCopy);

        // Create usable components from our configuration, pass them into the new template
        // and return.
        var template:Template.GridRow = {
           element: rowCopy,
            children: {
                userContent: {
                    element: uContent
                },
                utils: {
                    element: utils,
                    slider: this.Config.components.slider
                }
            }
        };
        return template;
    }
}

export = Grid;