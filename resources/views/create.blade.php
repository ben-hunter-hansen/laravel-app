@extends('app')

@section('content')
<section id="createTools" class="container-fluid">
	<div class="row">
		<div class="col-xs-12">
		
		</div>
	</div>
</section>
<section id="createCanvas" class="container-fluid">
	<div class="row grid-row">
		<div class="col-xs-12 grid-col">
			<div class="btn-group create-utils" role="group" aria-label="...">
				<button type="button" class="btn btn-default">
					<span class="glyphicon glyphicon-pencil"></span>
			  	</button>
			  	<button type="button" class="btn btn-default">
					<span class="glyphicon glyphicon-picture"></span>
			  	</button>
				<button type="button" class="btn btn-default">
					<span class="glyphicon glyphicon-facetime-video"></span>
				</button>
				<button type="button" class="btn btn-default">
					<span class="glyphicon glyphicon-cd"></span>
				</button>
				<button type="button" class="btn btn-default">
					<span class="fa fa-file-pdf-o"></span>
				</button>
				<button type="button" class="btn btn-default">
					<span class="fa fa-line-chart"></span>
				</button>
				<button type="button" class="btn btn-default">
					<span class="fa fa-paint-brush"></span>
				</button>
			</div>
		</div>
	</div>
</section>
<script>
	window.onload = function() {
		require(['CreateView','jqueryui'],function(CreateView){
			var createView = new CreateView();
			createView.registerEvents();
		});
	}
</script>
@endsection