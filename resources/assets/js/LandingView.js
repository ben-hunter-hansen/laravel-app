function LandingView() {
	View.call(this);
	
	this.Init = function() {
		var Components = new LandingComponents();
		var chartFactory = new ChartFactory();

		$(Components.Navigation).on('mouseover', function(e) {
			$(this).addClass("flash");
		});
		
		$(Components.Navigation).on('mouseleave', function(e) {
			$(this).removeClass("flash");
		});
		
		$(Components.FeaturedContent).on('mouseover',function(e){
			var imgContainer = $(this).find(".feature-circle").first();
			$(imgContainer).addClass("spin");
		});
		
		$(Components.FeaturedContent).on('mouseleave',function(e){
			var imgContainer = $(this).find(".feature-circle").first();
			$(imgContainer).removeClass("spin");
		});

		var resizeId;
		$(window).resize(function() {
		    clearTimeout(resizeId);
		    resizeId = setTimeout(doneResizing, 500);
		});
		 
		 
		function doneResizing(){
			if(window.lineChart){
				window.lineChart.destroy();
				window.barChart.destroy();
				$(Components.ChartCarousel).trigger('slid.bs.carousel');
			}
			if(window.polarChart){
				window.polarChart.destroy();
				window.radarChart.destroy();
				$(Components.ChartCarousel).trigger('slid.bs.carousel');
			}
		}

		$(Components.ChartCarousel).on('slide.bs.carousel', function(e) {
			var active = $(this).find(".item.active");
			$(active).animate({
				'opacity': '0.0'
			},500, function(){
				var inc = e.relatedTarget;
				$(inc).animate({
					'opacity':'1.0'
				},500);
			}); 
		});

		$(Components.ChartCarousel).on('slid.bs.carousel', function(e) {
			if(!$(Components.Charts.Line).is(":visible")) {
				chartFactory.PolarChart(Components.Charts.Polar[0]);
				chartFactory.RadarChart(Components.Charts.Radar[0]);
			} else {
				chartFactory.LineChart(Components.Charts.Line[0]);
				chartFactory.BarChart(Components.Charts.Bar[0]);
			}
		});

		function initGraphs() {

			chartFactory.LineChart(Components.Charts.Line[0]);
			chartFactory.BarChart(Components.Charts.Bar[0]);
		}
		initGraphs();
	}
}