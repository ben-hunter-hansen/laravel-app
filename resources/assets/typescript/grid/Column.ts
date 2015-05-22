/**
 * Created by ben on 5/21/15.
 */
import $ = require('jquery');

class Column {
    private Element: JQuery;

    constructor(element: JQuery, parent?: JQuery) {
        this.Element = element;

        if(parent) {
            $(parent).append(this.Element)
        }
    }

    public setWidth(className: string) {
        if($(this.Element).hasClass("ui-resizable")) {
            $(this.Element).removeClass().addClass(className).addClass("grid-col").addClass("ui-resizable");
        } else {
            (this.Element).removeClass().addClass(className).addClass("grid-col");
        }
    }
    public setResizable(grid: number) {
        $(this.Element).resizable({grid:50,containment:"parent"});
    }

    public clearResizable() {
        $(this.Element).resizable("destroy");
    }

    public remove() {
        $(this.Element).remove();
    }

    public copy() {
        var el = $(this.Element).clone();
        return el;
    }
}

export = Column;