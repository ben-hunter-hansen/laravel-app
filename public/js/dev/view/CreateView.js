var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'jquery', 'ViewBase'], function (require, exports, $, ViewBase) {
    var CreateView = (function (_super) {
        __extends(CreateView, _super);
        function CreateView() {
            _super.call(this);
        }
        CreateView.prototype.registerEvents = function () {
            var _this = this;
            $(document).ready(function (e) {
                _this.setup();
            });
        };
        CreateView.prototype.setup = function () {
            $(".grid-col").resizable({
                grid: 50,
                containment: "parent"
            });
            $("#column-size-slider").slider({
                value: 1,
                min: 1,
                max: 6,
                step: 1,
                slide: function (event, ui) {
                    $("#nColumns").val(ui.value);
                }
            });
            $("#nColumns").val("" + $("#column-size-slider").slider("value"));
        };
        return CreateView;
    })(ViewBase);
    return CreateView;
});
//# sourceMappingURL=CreateView.js.map