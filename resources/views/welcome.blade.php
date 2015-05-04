<html>
	<head>
		<title>Information Netowrk</title>
			<link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet">
			<link href="{{ asset('/css/app.css') }}" rel="stylesheet"> 
	</head>
	<body>
	<div id="landingJumbo" class="jumbotron home">
		<div class="container">
			<div class="row text-center">
				<div class="col-xs-12">
					<h1>Information Network</h1>
					<p>
						Present your digital information in a meaningful, semantic, and collaberative enviornment.
						Browse user created content, create your own, and enjoy real time analytics/feedback
						from other users.
					</p>
				</div>
				<div class="col-xs-4">
					<button class="btn btn-link landing-nav-link">
						Sign in
					</button>
				</div>
				<div class="col-xs-4">
					<button class="btn btn-link landing-nav-link">
						Browse
					</button>
				</div>
				<div class="col-xs-4">
					<button class="btn btn-link landing-nav-link">
						Sign up
					</button>
				</div>
			</div>
		</div>
	</div>
	<section id="siteFeatures" class="container-fluid text-center">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="section-header"> Content Creation</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-4 featured-content">
				<div class="feature-circle">
					<img class="img-responsive" src="../img/stock-video.jpg">
				</div>
				<p class="content-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div class="col-xs-12 col-sm-4 featured-content">
				<div class="feature-circle">
					<img class="img-responsive" src="../img/stock-chart.jpg">
				</div>
				<p class="content-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div class="col-xs-12 col-sm-4 featured-content">
				<div class="feature-circle">
					<img class="img-responsive" src="../img/stock-paint.jpg">
				</div>
				<p class="content-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
		</div>
	</section>
	<section id="siteData" class="container-fluid text-center snap-bottom">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="section-header">Account Analyitics</h1>
			</div>
		</div>
		<div class="row">
			<div id="chartCarousel" class="carousel slide">
				<div class="carousel-inner" role="listbox">
				    <div class="item active">
						<div class="col-xs-12 col-sm-6">
							<div class="chart-responsive">
								<canvas id="lineChartCanvas"></canvas>
							</div>
							<p class="text-muted">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div class="col-xs-12 col-sm-6">
							<div class="chart-responsive">
								<canvas id="barChartCanvas"></canvas>
							</div>
							<p class="text-muted">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
				    </div>
				    <div class="item">
						<div class="col-xs-12 col-sm-6">
							<div class="chart-responsive">
								<canvas id="polarChartCanvas"></canvas>
							</div>
							<p class="text-muted">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div class="col-xs-12 col-sm-6">
							<div class="chart-responsive">
								<canvas id="radarChartCanvas"></canvas>
							</div>
							<p class="text-muted">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
				    </div>
				</div>
			</div>
		</div>
	</section>
	<section id="siteExplore" class="container-fluid text-center snap-bottom">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="section-header">Start Exploring</h1>
			</div>
		</div>
	</section>
	<div class="container-fluid footer-container">
		<footer class="footer">
		    <div class="container">
		    <img src="" class="img-responsive photo-center tiny" style="border-radius: 50%;">
		    	<p class="text-muted">
		    		Copyright &#9400; 2015 by Benjamin Hansen <br>
		    		<span class="cr-notice">
						All rights reserved. No part of this publication may be reproduced, 
						distributed, or transmitted in any form or by any means, including photocopying, 
						recording, or other electronic or mechanical methods, without the prior written permission of the publisher, 
						except in the case of brief quotations embodied in critical reviews and certain
						other noncommercial uses permitted by copyright law. For permission requests,
						write to the publisher, addressed “Attention: Permissions Coordinator,” at the address below.
						<address>
							Imaginary Press
							1233 Pennsylvania Avenue
							San Francisco, CA 94909<br>
							<a href="mailto:ben@bensdevblog.com">ben@bensdevblog.com</a></span>
						</address>
					</span>
		    	</p>
		    </div>
	    </footer>
	</div>

	<script src="{{ asset('/js/chartjs/Chart.min.js') }}"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="{{ asset('/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('/js/app.min.js') }}"></script>
	<script src="{{ asset('/js/require.js') }}"></script>
	<script src="{{ asset('/js/dev/config.js') }}"></script>
	<script>
		window.onload = function(){
			var landing = new LandingView();
			landing.Init();
		}
	</script>
	</body>
</html>
