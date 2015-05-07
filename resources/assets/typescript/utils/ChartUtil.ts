import Chart = require('chart');

function randomScalingFactor() {
	return Math.round(Math.random()*100);
}

var lineChartData = {
	labels : ["January","February","March","April"],
	datasets : [
		{
			label: "New Users",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			label: "New Posts",
			fillColor : "rgba(151,187,205,0.2)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]

}

var barChartData = {
	labels : ["Math","Comp Sci","Politics","Biology"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,0.8)",
			highlightFill : "rgba(151,187,205,0.75)",
			highlightStroke : "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]
}
var polarData = [
		{
			value: 300,
			color:"#F7464A",
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
			data: [65,59,90,81,56,55,40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28,48,40,19,96,27,100]
		}
	]
};

function getCanvas(el: HTMLElement) {
	return <HTMLCanvasElement> el;
}

interface IDrawable {
	labels?: Array<string>;
	canvas?: HTMLCanvasElement;
	draw: () => void;
}

interface ChartInstance {
	clear: () => void;
    stop: () => void;
    resize: () => void;
    destroy: () => void;
    toBase64Image: () => string;
    generateLegend: () => string;
}

export class ChartBase implements IDrawable {
	protected data: any;
	protected chartInstance: ChartInstance;
	public canvas: HTMLCanvasElement;
	
	constructor(data: any) {
		this.data = data;
	}
	
	public getInstance() {
		return this.chartInstance;
	}
	public draw() {
		
	}
}

export class LineChart extends ChartBase {
	labels: Array<string>;
	canvas: HTMLCanvasElement;
	constructor(el: HTMLElement) {
		super(lineChartData.datasets);
		this.canvas = getCanvas(el);
		this.labels = lineChartData.labels;
	}
	
	public draw() {
		var chartData = {
			labels: this.labels,
			datasets: this.data
			
		}
		var ctx = this.canvas.getContext("2d");
		this.chartInstance = new Chart(ctx).Line(chartData, {
			responsive : false,
		   	animation: true,
		   	barValueSpacing : 5,
		   	barDatasetSpacing : 1,
		   	showTooltips: false,
		   	tooltipFillColor: "rgba(0,0,0,0.8)",                
		   	multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
		});
	}
}

export class BarChart extends ChartBase {
	labels: Array<string>;
	canvas: HTMLCanvasElement;
	constructor(el: HTMLElement) {
		super(barChartData.datasets);
		this.labels = barChartData.labels;
		this.canvas = getCanvas(el);
	}
	public draw() {
		var chartData = {
			labels: this.labels,
			datasets: this.data
			
		}
		var ctx = this.canvas.getContext("2d");
		this.chartInstance = new Chart(ctx).Bar(chartData,{
			responsive: false,
			showTooltips: false
		});
	}
}

export class PolarChart extends ChartBase {
	canvas: HTMLCanvasElement;
	constructor(el: HTMLElement) {
		super(polarData);
		this.canvas = getCanvas(el);
	}
	public draw() {
		var chartData = this.data;
		var ctx = this.canvas.getContext("2d");
		this.chartInstance = new Chart(ctx).PolarArea(chartData, {
			responsive: false,
			showTooltips: false
		});
	}
}

export class RadarChart extends ChartBase {
	labels: Array<string>;
	canvas: HTMLCanvasElement;
	constructor(el: HTMLElement) {
		super(radarChartData.datasets);
		this.labels = radarChartData.labels;
		this.canvas = getCanvas(el);
	}
	public draw() {
		var chartData = {
			labels: this.labels,
			datasets: this.data
		}
		var ctx = this.canvas.getContext("2d");
		this.chartInstance = new Chart(ctx).Radar(radarChartData, {
			responsive: false,
			showTooltips: false
		});
	}
}