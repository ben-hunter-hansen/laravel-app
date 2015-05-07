var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'chart'], function (require, exports, Chart) {
    function randomScalingFactor() {
        return Math.round(Math.random() * 100);
    }
    var lineChartData = {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                label: "New Users",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
                label: "New Posts",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }
        ]
    };
    var barChartData = {
        labels: ["Math", "Comp Sci", "Politics", "Biology"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }
        ]
    };
    var polarData = [
        {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }
    ];
    var radarChartData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
    function getCanvas(el) {
        return el;
    }
    var ChartBase = (function () {
        function ChartBase(data) {
            this.data = data;
        }
        ChartBase.prototype.getInstance = function () {
            return this.chartInstance;
        };
        ChartBase.prototype.draw = function () {
        };
        return ChartBase;
    })();
    exports.ChartBase = ChartBase;
    var LineChart = (function (_super) {
        __extends(LineChart, _super);
        function LineChart(el) {
            _super.call(this, lineChartData.datasets);
            this.canvas = getCanvas(el);
            this.labels = lineChartData.labels;
        }
        LineChart.prototype.draw = function () {
            var chartData = {
                labels: this.labels,
                datasets: this.data
            };
            var ctx = this.canvas.getContext("2d");
            this.chartInstance = new Chart(ctx).Line(chartData, {
                responsive: false,
                animation: true,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                showTooltips: false,
                tooltipFillColor: "rgba(0,0,0,0.8)",
                multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
            });
        };
        return LineChart;
    })(ChartBase);
    exports.LineChart = LineChart;
    var BarChart = (function (_super) {
        __extends(BarChart, _super);
        function BarChart(el) {
            _super.call(this, barChartData.datasets);
            this.labels = barChartData.labels;
            this.canvas = getCanvas(el);
        }
        BarChart.prototype.draw = function () {
            var chartData = {
                labels: this.labels,
                datasets: this.data
            };
            var ctx = this.canvas.getContext("2d");
            this.chartInstance = new Chart(ctx).Bar(chartData, {
                responsive: false,
                showTooltips: false
            });
        };
        return BarChart;
    })(ChartBase);
    exports.BarChart = BarChart;
    var PolarChart = (function (_super) {
        __extends(PolarChart, _super);
        function PolarChart(el) {
            _super.call(this, polarData);
            this.canvas = getCanvas(el);
        }
        PolarChart.prototype.draw = function () {
            var chartData = this.data;
            var ctx = this.canvas.getContext("2d");
            this.chartInstance = new Chart(ctx).PolarArea(chartData, {
                responsive: false,
                showTooltips: false
            });
        };
        return PolarChart;
    })(ChartBase);
    exports.PolarChart = PolarChart;
    var RadarChart = (function (_super) {
        __extends(RadarChart, _super);
        function RadarChart(el) {
            _super.call(this, radarChartData.datasets);
            this.labels = radarChartData.labels;
            this.canvas = getCanvas(el);
        }
        RadarChart.prototype.draw = function () {
            var chartData = {
                labels: this.labels,
                datasets: this.data
            };
            var ctx = this.canvas.getContext("2d");
            this.chartInstance = new Chart(ctx).Radar(radarChartData, {
                responsive: false,
                showTooltips: false
            });
        };
        return RadarChart;
    })(ChartBase);
    exports.RadarChart = RadarChart;
});
//# sourceMappingURL=ChartUtil.js.map