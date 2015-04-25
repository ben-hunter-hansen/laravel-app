function LandingView() {
	View.call(this);

	this.Init = function() {
		var Components = new LandingComponents();

		$(Components.Navigation).on('mouseover', function(e) {
			var self = $(this);
			$(self).removeClass("flash");
			setTimeout(function(){
				$(self).addClass("flash");
			},1);
		});

		$(Components.Navigation).on('mouseleave', function(e) {
			$(this).removeClass("flash");
		});
	}
}