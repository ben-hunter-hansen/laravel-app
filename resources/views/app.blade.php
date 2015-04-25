<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	@if (!Auth::guest())
		<meta name="csrf_token" content="{{{ csrf_token() }}}">
		<meta name="user_id" content="{{ Auth::user()->id }}">
	@endif

	<title>Laravel</title>

	<link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/app.css') }}" rel="stylesheet">
	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle Navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Laravel</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li><a href="{{ url('/') }}">Home</a></li>
				</ul>

				<ul class="nav navbar-nav navbar-right">
					@if (Auth::guest())
						<li><a href="{{ url('/auth/login') }}">Login</a></li>
						<li><a href="{{ url('/auth/register') }}">Register</a></li>
					@else
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><a href="/user/profile/{{ Auth::user()->id }}">Profile</li>
								<li><a href="{{ url('/auth/logout') }}">Logout</a></li>
							</ul>
						</li>
					@endif
				</ul>
			</div>
		</div>
	</nav>
	<!-- Scripts -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="{{ asset('/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('/js/app.min.js') }}"></script>
	<div class="container-fluid">
		@yield('content')
	</div>
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
</body>
</html>
