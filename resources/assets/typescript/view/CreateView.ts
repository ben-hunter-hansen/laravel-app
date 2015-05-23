import $ = require('jquery');
import ViewBase = require('ViewBase');
import EventRegister = require('interfaces/EventRegister');
import Grid = require('grid/Grid');
import Row = require('grid/Row');
import GridConfig = require('../grid/GridConfig');

class CreateView extends ViewBase implements EventRegister {
    protected ContentGrid: Grid;
    protected ColumnSlider: JQuery;
    protected ColumnSliderLabel: JQuery;
    protected CreateUtils: JQuery;

	constructor() {
        this.ColumnSlider = $("#column-size-slider");
        this.ColumnSliderLabel = $("#nColumns");

        var grid = $(".grid").first();
        var rowTemplate = $(grid).find(".grid-row").first();
        var gridConfig: GridConfig = {
            element: grid,
            rowTemplate: rowTemplate,
            events: {
                onClick: (e) => {
                    $(e.currentTarget).toggleClass("selected");
                    var rowElems = $(".grid-row");

                    $(rowElems).each((i) => {
                        $(rowElems[i]).hasClass("selected") &&
                        (rowElems[i] !== e.currentTarget) ?
                            $(rowElems[i]).removeClass("selected") : 0;

                    });
                },
                onColumnAdjustment: (e,ui) => { this.adjustColumns(e,ui); }
            }
        };

        this.ContentGrid = new Grid(gridConfig);
        this.ContentGrid.addRow();
		super();
	}
	
	public registerEvents() {
		//$(document).ready(() => {this.setup()});

        $("#addRowBtn").click((e) => {
            //e.stopPropagation();
            e.preventDefault();
            this.ContentGrid.addRow();
        });
	}
    /*
	private setup() {
        $(this.ColumnSlider).slider({
            value: 1,
            min: 1,
            max: 4,
            step: 1,
            slide: (event,ui) => {
                this.adjustColumns(event,ui)
            },
            animate: "fast"
        });
        $(this.ColumnSliderLabel).val(""+$(this.ColumnSlider).slider("value"));
	}*/
    /*
    private gridEvents(): GridConfig {
        return {
            onClick: (e) => {
                $(e.currentTarget).parent().toggleClass("selected");
                var rowElems = $(".grid-row-container");

                $(rowElems).each((i) => {
                    $(rowElems[i]).hasClass("selected") &&
                    (rowElems[i] !== e.currentTarget) ?
                        $(rowElems[i]).removeClass("selected") : 0;

                });

                var thisRow = this.ContentGrid.getSelected();
                if(thisRow) {
                    $(this.ColumnSlider).slider("value",thisRow.getColumns().length);
                    $(this.ColumnSliderLabel).val(""+thisRow.getColumns().length);
                }
            },
            onColumnAdjustment: (ev,ui) => {
                console.log('adjustment!');
            }
        }
    }
    */
    public adjustColumns(event: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) {
        this.ContentGrid.getRows().forEach(row => {
            if(row.isSelected()) {

                var adjMagnitude = row.adjustColumns(ui.value);
                adjMagnitude > 0 ? row.addColumns(adjMagnitude) : row.removeColumns(Math.abs(adjMagnitude));
            }
        });

    }
}

export = CreateView;