var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'jquery', 'ViewBase', 'utils/ChartUtil'], function (require, exports, $, ViewBase, ChartUtil) {
    var WelcomeView = (function (_super) {
        __extends(WelcomeView, _super);
        function WelcomeView() {
            _super.call(this);
            this.NavLinks = $(".landing-nav-link");
            this.SignInBtns = $(".sign-in-btn");
            this.FeaturedCircles = $(".feature-circle");
            this.ChartCarousel = $("#chartCarousel").carousel({ interval: 3000, pause: "false" });
        }
        WelcomeView.prototype.registerEvents = function () {
            var _this = this;
            $(document).ready(function (e) {
                _this.setup();
            });
            $(window).resize(function (e) {
                _this.resize();
            });
            $(this.NavLinks).mouseover(this.flash);
            $(this.NavLinks).mouseout(this.flash);
            $(this.FeaturedCircles).mouseover(this.spin);
            $(this.FeaturedCircles).mouseout(this.spin);
            $(this.ChartCarousel).on('slide.bs.carousel', this, this.slide);
            $(this.ChartCarousel).on('slid.bs.carousel', this, function (e) {
                _this.slid(e);
            });
            $(this.SignInBtns).click(this.signIn);
        };
        WelcomeView.prototype.setup = function () {
            this.Charts = new Array();
            var lineChart = new ChartUtil.LineChart($("#lineChartCanvas")[0]);
            var barChart = new ChartUtil.BarChart($("#barChartCanvas")[0]);
            lineChart.draw();
            barChart.draw();
            this.Charts.push(lineChart);
            this.Charts.push(barChart);
            this.Charts.push(new ChartUtil.PolarChart($("#polarChartCanvas")[0]));
            this.Charts.push(new ChartUtil.RadarChart($("#radarChartCanvas")[0]));
        };
        WelcomeView.prototype.resize = function () {
            var _this = this;
            clearTimeout(this.resizeId);
            this.resizeId = setTimeout(function () {
                _this.Charts.forEach(function (chart) {
                    if (chart.getInstance()) {
                        chart.getInstance().destroy();
                    }
                });
                $(_this.ChartCarousel).trigger('slide.bs.carousel');
            }, 500);
        };
        WelcomeView.prototype.slid = function (e) {
            this.Charts.forEach(function (chart) {
                if ($(chart.canvas).is(":visible")) {
                    chart.draw();
                }
            });
        };
        WelcomeView.prototype.slide = function (e) {
            var active = $(this).find(".item.active").first();
            $(active).animate({ 'opacity': '0.0' }, 600, function () {
                $(e.relatedTarget).animate({ 'opacity': '1.0' }, 700);
            });
        };
        WelcomeView.prototype.signIn = function (e) {
            window.location.href = "auth/login";
        };
        WelcomeView.prototype.flash = function (e) {
            $(e.target).toggleClass("flash");
        };
        WelcomeView.prototype.spin = function (e) {
            $(e.target).toggleClass("spin");
        };
        return WelcomeView;
    })(ViewBase);
    return WelcomeView;
});
//# sourceMappingURL=WelcomeView.js.map