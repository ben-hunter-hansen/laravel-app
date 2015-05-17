import $ = require('jquery');
import ViewBase = require('ViewBase');
import ChartUtil = require('utils/ChartUtil');
import EventRegister = require('interfaces/EventRegister');

class WelcomeView extends ViewBase implements EventRegister {
	protected NavLinks: JQuery;
	protected SignInBtns: JQuery;
	protected SignUpBtns: JQuery;
	protected FeaturedCircles: JQuery;
	protected ChartCarousel: JQuery;
	protected Charts: Array<ChartUtil.ChartBase>;
	private resizeId: number;
	
	constructor() {
		super();
		this.NavLinks = $(".landing-nav-link");
		this.SignInBtns = $(".sign-in-btn");
		this.SignUpBtns = $(".sign-up-btn");
		this.FeaturedCircles =  $(".feature-circle");
		this.ChartCarousel = $("#chartCarousel").carousel({interval:3000,pause:"false"});
	}
	
	// Register event callbacks
	public registerEvents() {
		$(document).ready((e) => { this.setup() });
		$(window).resize((e) => { this.resize() });
		
		$(this.NavLinks).mouseover(this.flash);
		$(this.NavLinks).mouseout(this.flash);
		$(this.FeaturedCircles).mouseover(this.spin);
		$(this.FeaturedCircles).mouseout(this.spin);
		$(this.ChartCarousel).on('slide.bs.carousel',this,this.slide);
		$(this.ChartCarousel).on('slid.bs.carousel',this,(e) => { this.slid(e) });
		$(this.SignInBtns).click(this.signIn);
		$(this.SignUpBtns).click(this.signUp);
	}
	
	private setup() {
		$("#headerContent").animate({'opacity':'1.0'},800);
		
		this.Charts = new Array<ChartUtil.ChartBase>();
		var lineChart = new ChartUtil.LineChart($("#lineChartCanvas")[0]);
		var barChart = new ChartUtil.BarChart($("#barChartCanvas")[0]);
		
		lineChart.draw();
		barChart.draw();
		
		this.Charts.push(lineChart);
		this.Charts.push(barChart);
		this.Charts.push(new ChartUtil.PolarChart($("#polarChartCanvas")[0]));
		this.Charts.push(new ChartUtil.RadarChart($("#radarChartCanvas")[0]));
	}
	
	private resize() {
		clearTimeout(this.resizeId);
		this.resizeId = setTimeout(() =>{
			this.Charts.forEach(chart => {
				if(chart.getInstance()) {
					chart.getInstance().destroy();
				}
			});
			$(this.ChartCarousel).trigger('slide.bs.carousel');
		}, 500);
	}
	
	private slid(e: JQueryEventObject) {
		this.Charts.forEach(chart => {
			if($(chart.canvas).is(":visible")) {
				chart.draw();
			}
		});
		
	}
	
	private slide(e: JQueryEventObject) {
		var active = $(this).find(".item.active").first();
		$(active).animate({'opacity':'0.0'},600,() => {
			$(e.relatedTarget).animate({'opacity':'1.0'},700);
		});	
	}
	
	private signIn(e: JQueryEventObject) {
		window.location.href = "auth/login";
	}
	
	private signUp(e: JQueryEventObject) {
		window.location.href = "auth/register";
	}
	// Applies a flash animation to the target element
	private flash(e: JQueryEventObject) {
		$(e.target).toggleClass("flash");
	}
	
	// Applies a spin animation to target element
	private spin(e: JQueryEventObject) {
		$(e.target).toggleClass("spin");
	}
}

export = WelcomeView;
