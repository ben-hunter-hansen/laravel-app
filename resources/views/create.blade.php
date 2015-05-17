@extends('app')

@section('content')
<section>
	<h1>create shit</h1>
	<input type="text" name="date" id="date">
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