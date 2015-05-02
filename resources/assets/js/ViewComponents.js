var ProfileComponents = function() {
	return {
		Modals: {
			About: $('#editAboutMod'),
			AddPhoto: $('#addPhotoMod'),
			ViewPhoto: $('#viewPhotoMod')
		},
		Content: {
			Photos: $('#photoContent'),
			About: $('#aboutText')
		}
	}
}

var LandingComponents = function() {
	return {
		Navigation: $(".landing-nav-link"),
		ChartCarousel: $("#chartCarousel").carousel({interval: 3000,pause: "hover"}),
		Charts: {
			Line: $("#lineChartCanvas"),
			Bar: $("#barChartCanvas"),
			Polar:$("#polarChartCanvas"),
			Radar: $("#radarChartCanvas"),
		},
		FeaturedContent: $(".featured-content")
	};
};