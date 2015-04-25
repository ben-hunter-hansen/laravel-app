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
	<section id="siteData" class="container-fluid">
		<div class="row">
			<div class="col-xs-12 text-center">
				<h1>Account Analyitics</h1>
			</div>
			<div class="col-xs-12 text-center">
				<p class="text-muted">
					Enjoy customizable charts for viewing data assoicated with
					your account, such as ratings, posts, and more.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<div class="graph-responsive">
					<canvas id="siteGraphCanvas"></canvas>
				</div>
				<div class="col-xs-12">
					<p class="text-center text-muted"> Frequency of posts by month </p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6">
				<div class="graph-responsive">
					<canvas id="ratingsGraphCanvas"></canvas>
				</div>
				<div class="col-xs-12">
					<p class="text-center text-muted"> Frequency of posts by month </p>
				</div>
			</div>
		</div>
	</section>
	<section id="siteFeatures" class="container-fluid">
		<div class="row">
			<div class="col-xs-12 text-center">
				<h1> Content Creation</h1>
			</div>
			<div style="height: 400px">
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
	<script src="{{ asset('/js/app.min.js') }}"></script>
	<script>


		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
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
		window.onload = function(){
			var landing = new LandingView();
			landing.Init();

			var barCtx = document.getElementById("ratingsGraphCanvas").getContext("2d");
			window.myBar = new Chart(barCtx).Bar(barChartData, {
				responsive : true
			});

			var lineCtx = document.getElementById("siteGraphCanvas").getContext("2d");
			window.myLine = new Chart(lineCtx).Line(lineChartData, {
				responsive : true,
			   	animation: true,
			   	barValueSpacing : 5,
			   	barDatasetSpacing : 1,
			   	tooltipFillColor: "rgba(0,0,0,0.8)",                
			   	multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
			});
		}
	</script>
	</body>
</html>
