@extends('app')

@section('content')
<section id="createTools" class="container-fluid">
	<div class="row">
		<div class="col-xs-12">
			<div class="btn-group" role="group" aria-label="...">
			  <button type="button" class="btn btn-lg btn-default">
				  <span class="glyphicon glyphicon-pencil"></span>
			  </button>
			  <button type="button" class="btn btn-lg btn-default">
				  <span class="glyphicon glyphicon-picture"></span>
			  </button>
			  <button type="button" class="btn btn-lg btn-default">
				  <span class="glyphicon glyphicon-facetime-video"></span>
			  </button>
			  <button type="button" class="btn btn-lg btn-default">
				  <span class="glyphicon glyphicon-cd"></span>
			  </button>
			  <button type="button" class="btn btn-lg btn-default">
				  <span class="fa fa-file-pdf-o"></span>
			  </button>
			  <button type="button" class="btn btn-lg btn-default">
				  <span class="fa fa-paint-brush"></span>
			  </button>
		</div>
	</div>
</section>
<section id="createCanvas" class="container-fluid">
	<div class="row canvas-grid">
		<div class="col-xs-6">
			<h3> A section </h3>
		</div>
		<div class="col-xs-6">
			<h3> Another section </h3>
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