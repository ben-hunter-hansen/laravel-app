var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'jquery', 'ViewBase', 'grid/Grid'], function (require, exports, $, ViewBase, Grid) {
    var CreateView = (function (_super) {
        __extends(CreateView, _super);
        function CreateView() {
            this.ColumnSlider = $("#column-size-slider");
            this.ColumnSliderLabel = $("#nColumns");
            this.CreateUtils = $(".create-utils");
            var grid = $(".grid").first();
            var rowTemplate = $(grid).find(".grid-row").first();
            var colTemplate = $(rowTemplate).find(".grid-col").first();
            this.ContentGrid = new Grid(grid, rowTemplate, colTemplate, this.gridEvents());
            _super.call(this);
        }
        CreateView.prototype.registerEvents = function () {
            var _this = this;
            $(document).ready(function () {
                _this.setup();
            });
            $("#addRowBtn").click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.ContentGrid.addRow();
            });
        };
        CreateView.prototype.setup = function () {
            var _this = this;
            $(".grid-col").resizable({
                grid: 50,
                containment: "parent"
            });
            $(this.ColumnSlider).slider({
                value: 1,
                min: 1,
                max: 4,
                step: 1,
                slide: function (event, ui) {
                    _this.adjustColumns(event, ui);
                },
                animate: "fast"
            });
            $(this.ColumnSliderLabel).val("" + $(this.ColumnSlider).slider("value"));
        };
        CreateView.prototype.gridEvents = function () {
            return {
                onClick: function (e) {
                    $(e.currentTarget).toggleClass("selected");
                    var rowElems = $(".grid-row");
                    $(rowElems).each(function (i) {
                        $(rowElems[i]).hasClass("selected") && (rowElems[i] !== e.currentTarget) ? $(rowElems[i]).removeClass("selected") : 0;
                    });
                }
            };
        };
        CreateView.prototype.adjustColumns = function (event, ui) {
            this.ContentGrid.getRows().forEach(function (row) {
                if (row.isSelected()) {
                    console.log('a row is selected');
                    var adjMagnitude = row.adjustColumns(ui.value);
                    adjMagnitude > 0 ? row.addColumns(adjMagnitude) : row.removeColumns(Math.abs(adjMagnitude));
                }
            });
            $(this.ColumnSliderLabel).val("" + ui.value);
        };
        return CreateView;
    })(ViewBase);
    return CreateView;
});
//# sourceMappingURL=CreateView.js.map