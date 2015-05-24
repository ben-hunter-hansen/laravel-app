import $ = require('jquery');
import ViewBase = require('ViewBase');
import EventRegister = require('interfaces/EventRegister');
import Grid = require('grid/Grid');
import Row = require('grid/Row');
import GridConfig = require('grid/GridConfig');
import Template = require('grid/Template');


class CreateView extends ViewBase implements EventRegister {
    protected ContentGrid: Grid;

	constructor() {
        var grid = $(".grid").first();
        var gridConfig: GridConfig = {
            element: grid,
            model: Template.Factory.Model(grid),
            events: {
                onClick: (e) => { this.gridItemClicked(e); }
            },
            components: {
                slider: Template.Factory.SlideConfig((e,ui) => { this.adjustColumns(e,ui); })
            }
        };

        this.ContentGrid = new Grid(gridConfig);
        this.ContentGrid.clear(".grid-row"); // We have this modeled and can remove it now.
        this.ContentGrid.addRow();
		super();
	}
	
	public registerEvents() {
        $("#addRowBtn").click((e) => {
            e.preventDefault();
            this.ContentGrid.addRow();
        });
	}

    private gridItemClicked(e: JQueryEventObject) {
        $(e.currentTarget).toggleClass("selected");
        var rowElems = $(".grid-row");
        $(rowElems).each((i) => {
            $(rowElems[i]).hasClass("selected") &&
            (rowElems[i] !== e.currentTarget) ?
                $(rowElems[i]).removeClass("selected") : 0;

        });
    }
    private adjustColumns(event: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) {
        this.ContentGrid.getRows().forEach(row => {
            if(row.isSelected()) {
                var adjMagnitude = row.adjustColumns(ui.value);
                adjMagnitude > 0 ? row.addColumns(adjMagnitude) : row.removeColumns(Math.abs(adjMagnitude));
            }
        });
    }
}

export = CreateView;