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
				$(imgContainer).removeClass("spin");
				$(imgContainer).addClass("spin");
		});
		
		$(Components.Sections).on('viewport:enter',function(e){
			if($(this).prop("id") === "siteFeatures") {
				var features = $(".feature-circle");
				$(features).animate({
					'opacity':'1'
					},{
						duration: 500,
						complete: function(){
							$(this).addClass("spin");
						}
					});
			}
		});
		
		$(Components.Sections).on('viewport:exit',function(e){
			console.log('a section left the viewport');
			if($(this).prop("id") === "siteFeatures") {
				var features = $(".feature-circle");
				$(features).animate({
					'opacity':'0'
					},{
						duration: 500,
						complete: function(){
							$(this).removeClass("spin");
						}
					});
			}
		});
		
		$(window).scroll(function(e){
			var visibleSections = $(Components.Sections);
			$(visibleSections).each(function(i){
				if($(this).inView() && !$(this).hasClass("jq")) {
					$(this).addClass("jq");
					$(this).trigger('viewport:enter');
				} else if(!$(this).inView() && $(this).hasClass("jq")) {
					$(this).removeClass("jq");
					$(this).trigger('viewport:exit');
				}
			});
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