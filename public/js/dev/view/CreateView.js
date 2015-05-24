var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'jquery', 'ViewBase', 'grid/Grid', 'grid/Template'], function (require, exports, $, ViewBase, Grid, Template) {
    var CreateView = (function (_super) {
        __extends(CreateView, _super);
        function CreateView() {
            var _this = this;
            var grid = $(".grid").first();
            var gridConfig = {
                element: grid,
                model: Template.Factory.Model(grid),
                events: {
                    onClick: function (e) {
                        _this.gridItemClicked(e);
                    }
                },
                components: {
                    slider: Template.Factory.SlideConfig(function (e, ui) {
                        _this.adjustColumns(e, ui);
                    })
                }
            };
            this.ContentGrid = new Grid(gridConfig);
            this.ContentGrid.clear(".grid-row");
            this.ContentGrid.addRow();
            _super.call(this);
        }
        CreateView.prototype.registerEvents = function () {
            var _this = this;
            $("#addRowBtn").click(function (e) {
                e.preventDefault();
                _this.ContentGrid.addRow();
            });
        };
        CreateView.prototype.gridItemClicked = function (e) {
            $(e.currentTarget).toggleClass("selected");
            var rowElems = $(".grid-row");
            $(rowElems).each(function (i) {
                $(rowElems[i]).hasClass("selected") && (rowElems[i] !== e.currentTarget) ? $(rowElems[i]).removeClass("selected") : 0;
            });
        };
        CreateView.prototype.adjustColumns = function (event, ui) {
            this.ContentGrid.getRows().forEach(function (row) {
                if (row.isSelected()) {
                    var adjMagnitude = row.adjustColumns(ui.value);
                    adjMagnitude > 0 ? row.addColumns(adjMagnitude) : row.removeColumns(Math.abs(adjMagnitude));
                }
            });
        };
        return CreateView;
    })(ViewBase);
    return CreateView;
});
//# sourceMappingURL=CreateView.js.map