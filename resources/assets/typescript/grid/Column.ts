/**
 * Created by ben on 5/21/15.
 */
import $ = require('jquery');

/**
 * A Column is a responsive child of a Row,
 * and it's width can be adjusted through it's public interface
 */
class Column {
    private Element: JQuery;

    constructor(element: JQuery) {
        this.Element = element;
    }

    /**
     * Attaches the column to a parent element
     *
     * @param parent The parent
     */
    public attachTo(parent: JQuery) {
        $(parent).prepend(this.Element);
    }

    /**
     * Changes the width of the column by applying css
     *
     * @param className
     */
    public setWidth(className: string) {
        if($(this.Element).hasClass("ui-resizable")) {
            $(this.Element).removeClass().addClass(className).addClass("grid-col").addClass("ui-resizable");
        } else {
            (this.Element).removeClass().addClass(className).addClass("grid-col");
        }
    }

    /**
     * @NotImplemented
     * @param grid
     */
    public setResizable(grid: number) {
        $(this.Element).resizable({grid:50,containment:"parent"});
    }

    /**
     * @NotImplemented
     */
    public clearResizable() {
        $(this.Element).resizable("destroy");
    }

    /**
     * Removes the column from the DOM
     */
    public remove() {
        $(this.Element).remove();
    }

    /**
     * Creates a copy of this Column
     * @returns {Column}
     */
    public copy() {
        return new Column(this.Element.clone());
    }
}

export = Column;