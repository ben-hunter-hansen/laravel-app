import $ = require('jquery');
import ViewBase = require('ViewBase');
import EventRegister = require('interfaces/EventRegister');
import Grid = require('grid/Grid');

class CreateView extends ViewBase implements EventRegister {
    protected ContentGrid: Grid;
    protected ColumnSlider: JQuery;
    protected ColumnSliderLabel: JQuery;
    protected CreateUtils: JQuery;

	constructor() {
        this.ColumnSlider = $("#column-size-slider");
        this.ColumnSliderLabel = $("#nColumns");

        this.CreateUtils = $(".create-utils");

        var gridElement = $(".grid");
        var rowTemplate = $(".grid-row");
        var columnTemplate = $(".grid-col");

        this.ContentGrid = new Grid(gridElement,rowTemplate,columnTemplate);
		super();
	}
	
	public registerEvents() {
		$(document).ready(() => {this.setup()});
        $("#addRowBtn").click((e) => {
            e.stopPropagation();
            e.preventDefault();
            this.ContentGrid.addRow();
            console.log('adding row');
        });
	}
	
	private setup() {

		$(".grid-col").resizable({
            grid:50,
            containment: "parent"
        });
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
	}

    private adjustColumns(event: JQueryUI.SliderEvent, ui: JQueryUI.SliderUIParams) {
        this.ContentGrid.getRows().forEach(row => {
            if(row.isSelected()) {
                var adjMagnitude = row.adjustColumns(ui.value);
                adjMagnitude > 0 ? row.addColumns(adjMagnitude) : row.removeColumns(Math.abs(adjMagnitude));
            }
        });
        $(this.ColumnSliderLabel).val(""+ui.value);

    }
}

export = CreateView;