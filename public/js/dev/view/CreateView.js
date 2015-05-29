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
            $("#deleteRowBtn").click(function (e) {
                _this.removeGridRow(e);
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
                Animation.smoothScroll(this.ContentGrid.getRows()[0].getElement());
            }
        };
        CreateView.prototype.gridScrollBottom = function (e) {
            var n = this.ContentGrid.getRows().length;
            if (n) {
                Animation.smoothScroll(this.ContentGrid.getRows()[n - 1].getElement());
            }
        };
        CreateView.prototype.gridScrollUp = function (e) {
            var currentRow = this.ContentGrid.getSelected(), index = this.ContentGrid.getRows().indexOf(currentRow);
            if (index > 0) {
                Animation.smoothScroll(this.ContentGrid.getRows()[index - 1].getElement());
            }
        };
        CreateView.prototype.gridScrollDown = function (e) {
            var currentRow = this.ContentGrid.getSelected(), index = this.ContentGrid.getRows().indexOf(currentRow);
            if (index > -1 && index < this.ContentGrid.getRows().length - 1) {
                Animation.smoothScroll(this.ContentGrid.getRows()[index + 1].getElement());
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
            var row = this.ContentGrid.getSelected();
            var adjMagnitude = row.adjustColumns(ui.value);
            if (adjMagnitude > 0) {
                row.addColumns(adjMagnitude).then(function (cols) {
                    cols.map(function (col) {
                        col.fadeIn("slow");
                    });
                });
            }
            else if (adjMagnitude) {
                row.removeColumns(Math.abs(adjMagnitude)).then(function (cols) {
                    cols.map(function (col) {
                        col.fadeIn("slow");
                    });
                });
            }
            row.updateColumnsLabel(ui.value);
        };
        CreateView.prototype.addGridRow = function (e) {
            e.preventDefault();
            var newRow = this.ContentGrid.addRow();
            Animation.smoothScroll(newRow.getElement());
        };
        CreateView.prototype.removeGridRow = function (e) {
            var currentRow = this.ContentGrid.getSelected(), currentIndex = this.ContentGrid.getRows().indexOf(currentRow);
            this.ContentGrid.deleteRow(currentRow);
            if (currentIndex > 0) {
                var prevRow = this.ContentGrid.getRow(currentIndex - 1);
                Animation.smoothScroll(prevRow.getElement());
            }
            else if (!currentIndex) {
                this.ContentGrid.getRow(currentIndex).click();
            }
        };
        return CreateView;
    })(ViewBase);
    return CreateView;
});
//# sourceMappingURL=CreateView.js.map