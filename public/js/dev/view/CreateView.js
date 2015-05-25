var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'jquery', 'ViewBase', 'grid/Grid', 'grid/Template', 'utils/Animation'], function (require, exports, $, ViewBase, Grid, Template, Animation) {
    var CreateView = (function (_super) {
        __extends(CreateView, _super);
        function CreateView() {
            var _this = this;
            var grid = $(".grid").first();
            this.GridMenu = $(".grid-menu");
            var gridConfig = {
                element: grid,
                model: Template.Factory.Model(grid),
                events: {
                    onClick: function (e) {
                        _this.gridItemClicked(e);
                    },
                    onDelete: function (e) {
                        _this.removeGridRow(e);
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
                var newRow = _this.ContentGrid.addRow();
                Animation.smoothScroll(newRow.getElement());
            });
            $(window).scroll(function (e) {
                Animation.stickyScroll(_this.GridMenu, _this.ContentGrid.getHeight());
            });
            $(document).ready(function () {
            });
        };
        CreateView.prototype.gridItemClicked = function (e) {
            if (!$(e.currentTarget).hasClass("selected")) {
                $(e.currentTarget).addClass("selected");
                $(e.currentTarget).find(".user-content").animate({
                    opacity: '1.0'
                }, "slow");
            }
            Animation.smoothScroll($(e.currentTarget));
            $(e.currentTarget).find(".utils").fadeIn("slow");
            var rowElems = $(".grid-row");
            $(rowElems).each(function (i) {
                var isSelected = $(rowElems[i]).hasClass("selected");
                var notSelf = rowElems[i] !== e.currentTarget;
                if (isSelected && notSelf) {
                    $(rowElems[i]).removeClass("selected");
                    $(rowElems[i]).find(".utils").hide();
                    $(rowElems[i]).find(".user-content").animate({
                        opacity: '0.5'
                    }, "slow");
                }
            });
        };
        CreateView.prototype.adjustColumns = function (event, ui) {
            this.ContentGrid.getRows().forEach(function (row) {
                if (row.isSelected()) {
                    var adjMagnitude = row.adjustColumns(ui.value);
                    adjMagnitude > 0 ? row.addColumns(adjMagnitude) : row.removeColumns(Math.abs(adjMagnitude));
                    row.updateColumnsLabel(ui.value);
                }
            });
        };
        CreateView.prototype.removeGridRow = function (e) {
            var _this = this;
            var prev;
            this.ContentGrid.getRows().forEach(function (row) {
                if (row.isSelected()) {
                    _this.ContentGrid.deleteRow(row);
                    prev ? prev.click() : 0;
                }
                prev = row;
            });
        };
        return CreateView;
    })(ViewBase);
    return CreateView;
});
//# sourceMappingURL=CreateView.js.map