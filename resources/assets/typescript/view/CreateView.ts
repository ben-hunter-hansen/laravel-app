import $ = require('jquery');
import ViewBase = require('ViewBase');
import EventRegister = require('interfaces/EventRegister');
import Grid = require('grid/Grid');
import Row = require('grid/Row');
import GridConfig = require('grid/GridConfig');
import Template = require('grid/Template');
import Animation = require('utils/Animation');
import Geometry = require('utils/Geometry');

class CreateView extends ViewBase implements EventRegister {
    protected ContentGrid: Grid;
    protected GridMenu: JQuery;

	constructor() {
        var grid = $(".grid").first();
        this.GridMenu = $(".grid-menu");

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
        $("#addRowBtn").click((e) => { this.addGridRow(e) });
        $(window).scroll((e) => { this.scrollGrid(e) });
        $("#gridScrollTopBtn").click((e) => {
            if(this.ContentGrid.getRows()[0]) {
                Animation.smoothScroll(this.ContentGrid.getRows()[0].getElement());
            }
        });
        $("#gridScrollBottomBtn").click((e) => {
            var n = this.ContentGrid.getRows().length;
            if(n) {
                Animation.smoothScroll(this.ContentGrid.getRows()[n-1].getElement());
            }
        });

        $("#gridScrollUpBtn").click((e) => {
            var currentRow = this.ContentGrid.getSelected(),
                index = this.ContentGrid.getRows().indexOf(currentRow);
            if(index > 0) {
                Animation.smoothScroll(this.ContentGrid.getRows()[index - 1].getElement());
            }
        });
        $("#gridScrollDownBtn").click((e) => {
            var currentRow = this.ContentGrid.getSelected(),
                index = this.ContentGrid.getRows().indexOf(currentRow);
            if(index > -1 && index < this.ContentGrid.getRows().length-1) {
                Animation.smoothScroll(this.ContentGrid.getRows()[index + 1].getElement());
            }
        });
	}

    private gridItemClicked(e: JQueryEventObject) {
        if(!$(e.currentTarget).hasClass("selected"))  {
            $(e.currentTarget).addClass("selected");
            $(e.currentTarget).find(".user-content").animate({
                opacity: '1.0'
            },"slow");
        }

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

    private scrollGrid(e: JQueryEventObject) {
        Animation.stickyScroll(this.GridMenu,this.ContentGrid.getHeight())
            .done(() => {
                var menuRect = Geometry.createRect(this.GridMenu);
                this.ContentGrid.getRows().forEach(row => {
                    if(menuRect.withinVerticalBoundsOf(row.getRect())) {
                        row.click();
                    }
                });
            })
            .fail((err) => {
                console.error(err)
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

    private addGridRow(e: JQueryEventObject) {
        e.preventDefault();
        var newRow = this.ContentGrid.addRow();
        Animation.smoothScroll(newRow.getElement());
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