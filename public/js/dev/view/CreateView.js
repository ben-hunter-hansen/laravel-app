var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'jquery', 'ViewBase', 'grid/Grid', 'grid/Template', 'utils/Animation', 'utils/Geometry'], function (require, exports, $, ViewBase, Grid, Template, Animation, Geometry) {
    var CreateView = (function (_super) {
        __extends(CreateView, _super);
        function CreateView() {
            var _this = this;
            this.MAGIC_SCROLL_OFFSET = 75 + 51;
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
            $(window).scroll(function (e) {
                _this.scrollGrid(e);
            });
            $("#addRowBtn").click(function (e) {
                _this.addGridRow(e);
            });
            $("#gridScrollTopBtn").click(function (e) {
                _this.gridScrollTop(e);
            });
            $("#gridScrollBottomBtn").click(function (e) {
                _this.gridScrollBottom(e);
            });
            $("#gridScrollUpBtn").click(function (e) {
                _this.gridScrollUp(e);
            });
            $("#gridScrollDownBtn").click(function (e) {
                _this.gridScrollDown(e);
            });
        };
        CreateView.prototype.gridScrollTop = function (e) {
            if (this.ContentGrid.getRows()[0]) {
                Animation.smoothScroll(this.ContentGrid.getRows()[0].getElement(), this.MAGIC_SCROLL_OFFSET);
            }
        };
        CreateView.prototype.gridScrollBottom = function (e) {
            var n = this.ContentGrid.getRows().length;
            if (n) {
                Animation.smoothScroll(this.ContentGrid.getRows()[n - 1].getElement(), this.MAGIC_SCROLL_OFFSET);
            }
        };
        CreateView.prototype.gridScrollUp = function (e) {
            var currentRow = this.ContentGrid.getSelected(), index = this.ContentGrid.getRows().indexOf(currentRow);
            if (index > 0) {
                Animation.smoothScroll(this.ContentGrid.getRows()[index - 1].getElement(), this.MAGIC_SCROLL_OFFSET);
            }
        };
        CreateView.prototype.gridScrollDown = function (e) {
            var currentRow = this.ContentGrid.getSelected(), index = this.ContentGrid.getRows().indexOf(currentRow);
            if (index > -1 && index < this.ContentGrid.getRows().length - 1) {
                Animation.smoothScroll(this.ContentGrid.getRows()[index + 1].getElement(), this.MAGIC_SCROLL_OFFSET);
            }
        };
        CreateView.prototype.gridItemClicked = function (e) {
            if (!$(e.currentTarget).hasClass("selected")) {
                $(e.currentTarget).addClass("selected");
                $(e.currentTarget).find(".user-content").animate({
                    opacity: '1.0'
                }, "slow");
            }
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
        CreateView.prototype.scrollGrid = function (e) {
            var _this = this;
            Animation.stickyScroll(this.GridMenu, this.ContentGrid.getHeight()).done(function () {
                var menuRect = Geometry.createRect(_this.GridMenu);
                _this.ContentGrid.getRows().forEach(function (row) {
                    if (menuRect.withinVerticalBoundsOf(row.getRect())) {
                        row.click();
                    }
                });
            }).fail(function (err) {
                console.error(err);
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
        CreateView.prototype.addGridRow = function (e) {
            e.preventDefault();
            var newRow = this.ContentGrid.addRow();
            Animation.smoothScroll(newRow.getElement());
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