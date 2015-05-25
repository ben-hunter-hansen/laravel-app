import $ = require('jquery');
import ViewBase = require('ViewBase');
import EventRegister = require('interfaces/EventRegister');
import Grid = require('grid/Grid');
import Row = require('grid/Row');
import GridConfig = require('grid/GridConfig');
import Template = require('grid/Template');
import Animation = require('utils/Animation');

class CreateView extends ViewBase implements EventRegister {
    protected ContentGrid: Grid;

	constructor() {
        var grid = $(".grid").first();
        var gridConfig: GridConfig = {
            element: grid,
            model: Template.Factory.Model(grid),
            events: {
                onClick: (e) => { this.gridItemClicked(e); },
                onDelete: (e) => {this.removeGridRow(e); }
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
            var newRow = this.ContentGrid.addRow();
            Animation.smoothScroll(newRow.getElement());
        });

        $(document).ready(() => {
            // todo
        })
	}

    private gridItemClicked(e: JQueryEventObject) {
        if(!$(e.currentTarget).hasClass("selected"))  {
            $(e.currentTarget).addClass("selected");
            $(e.currentTarget).find(".user-content").animate({
                opacity: '1.0'
            },"slow");
        }

        Animation.smoothScroll($(e.currentTarget));

        $(e.currentTarget).find(".utils").fadeIn("slow");
        var rowElems = $(".grid-row");
        $(rowElems).each((i) => {
            var isSelected = $(rowElems[i]).hasClass("selected");
            var notSelf = rowElems[i] !== e.currentTarget;
            if(isSelected && notSelf) {
                $(rowElems[i]).removeClass("selected");
                $(rowElems[i]).find(".utils").hide();
                $(rowElems[i]).find(".user-content").animate({
                    opacity: '0.5'
                },"slow");
            }
        });
    }
    private adjustColumns(event: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) {
        this.ContentGrid.getRows().forEach(row => {
            if(row.isSelected()) {
                var adjMagnitude = row.adjustColumns(ui.value);
                adjMagnitude > 0 ? row.addColumns(adjMagnitude) : row.removeColumns(Math.abs(adjMagnitude));
                row.updateColumnsLabel(ui.value);
            }
        });
    }

    private removeGridRow(e: JQueryEventObject) {
        var prev: Row;
        this.ContentGrid.getRows().forEach(row => {
            if(row.isSelected()) {
                this.ContentGrid.deleteRow(row);
                prev ? prev.click() : 0;
            }
            prev = row;
        });
    }
}

export = CreateView;