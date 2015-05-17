<html>
	<head>
		<title>Information Netowrk</title>
		<link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<link href="{{ asset('/css/app.css') }}" rel="stylesheet"> 
	</head>
	<body>
	<div id="landingJumbo" class="jumbotron home">
		<div class="container">
			<div id="headerContent" class="row text-center">
				<div class="col-xs-12 jumbo-header">
					<h1>Information Network</h1>
					<p>
						Present your digital information in a meaningful, semantic, and collaberative enviornment.
						Browse user created content, create your own, and enjoy real time analytics/feedback
						from other users.
					</p>
				</div>
				<div class="col-xs-12 col-sm-4 btn-row">
					<button class="btn btn-link landing-nav-link sign-in-btn">
						SIGN IN
					</button>
				</div>
				<div class="col-xs-12 col-sm-4 btn-row">
					<button class="btn btn-link landing-nav-link sign-up-btn">
						SIGN UP
					</button>
				</div>
				<div class="col-xs-12 col-sm-4 btn-row">
					<button class="btn btn-link landing-nav-link">
						BROWSE
					</button>
				</div>
			</div>
		</div>
	</div>
	<section id="siteOverview">
		<div class="row">
			<div class="col-xs-12 col-sm-6 text-content">
				<h2>Kick ass overview</h2>
				<div class="underline"></div>
				<p>
					Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. 
					A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. 
					Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.
				</p>
				<br>
				<p>
					Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. 
					A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non.
				</p>
			</div>
			<div class="col-xs-12 col-sm-6 photo-content">
				<img class="img-responsive" src="{{ asset('/img/social-media.jpg') }}">
			</div>
		</div>
	</section>
	<section id="siteDetails" class="container-fluid">
		<div class="row">
			<div class="col-xs-12 col-sm-6 text-center icons-area">
				<div class="icon-wrapper">
					<span style="color: #C3E895" class="fa fa-bar-chart fa-4x"></span>
				</div>
				<div class="icon-wrapper">
					<span style="color: #8ADDAA" class="fa fa-code fa-4x"></span>
				</div>
				<div class="icon-wrapper">
					<span style="color: #6BD4C8" class="fa fa-database fa-4x"></span>
				</div>
				<div class="icon-wrapper">
					<span style="color: #57AED3" class="fa fa-envelope-o fa-4x"></span>
				</div>
				<div class="icon-wrapper">
					<span style="color: #4A87D3" class="fa fa-comment-o fa-4x"></span>
				</div>
				<div class="icon-wrapper">
					<span style="color: #6B88E6" class="fa fa-camera-retro fa-4x"></span>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 text-content">
				<h2>Kick ass content</h2>
				<div class="underline"></div>
				<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
				<br>
				<p>
					Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent
					vis commodo nunc phasellus cubilia ac risus accumsan. 
					Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius 
					accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper 
					morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus 
					adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.
				</p>
				<br>
				<p>
					Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. 
					A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. 
					Lorem curae eu ante amet sapien in tempus ac. 
					Adipiscing id accumsan adipiscing ipsum.
				</p>
				<br>
				<p>
					Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. 
					A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. 
					Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan 
					adipiscing ipsum.
				</p>
			</div>
		</div>
	</section>
	<section id="siteData" class="container-fluid text-center">
		<div class="row">
			<h2>Kick ass analytics</h2>
			<div class="underline"></div>
			<p>Lorem curae eu ante amet sapien in tempus ac.</p>
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
	<section id="siteSection" class="container-fluid text-center">
		<div class="row">
			<h2>Kick ass stuff?</h2>
			<div class="underline"></div>
			<p>Sed lacus nascetur ac ante amet sapien.</p>
			<button class="landing-nav-link">THIS</button>
			<button class="landing-nav-link">THAT</button>
		</div>
	</section>
	<section id="siteFeatures" class="container-fluid text-center">
		<div class="row">
			<h2>Kick ass creativity</h2>
			<div class="underline"></div>
			<p>Sed lacus nascetur ac ante amet sapien.</p>
			<br>
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
	
	
	<section id="siteExplore" class="container-fluid text-center snap-bottom">
		<div class="row">
			<div class="col-xs-12 col-sm-4 btn-row">
				<button class="btn btn-link landing-nav-link sign-in-btn">
					SIGN IN
				</button>
			</div>
			<div class="col-xs-12 col-sm-4 btn-row">
				<button class="btn btn-link landing-nav-link sign-up-btn">
					SIGN UP
				</button>
			</div>
			<div class="col-xs-12 col-sm-4 btn-row">
				<button class="btn btn-link landing-nav-link">
					BROWSE
				</button>
			</div>
		</div>
		<div class="col-xs-12">
			<br>
			<p>@ Information Network | 2015</p>
		</div>
	</section>

	<script src="{{ asset('/js/require.js') }}"></script>
	<script src="{{ asset('/js/dev/config.js') }}"></script>
	<script>
		window.onload = function() {
			require(['WelcomeView','bootstrap'],function(WelcomeView){
				var welcomeView = new WelcomeView();
				welcomeView.registerEvents();
			});
		}
	</script>
	</body>
</html>
