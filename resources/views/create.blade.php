@extends('app')

@section('content')
<div id="gridTools">
    <div class="tool-item">
        <div class="btn-group dropup">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-plus-circle fa-4x"></i>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#">Column</a></li>
                <li><a id="addRowBtn" href="#">Row</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </div>
    </div>
</div>
<section id="createCanvas" class="container-fluid">
    <div class="container grid">
        <div class="container-fluid grid-row">
            <div class="row user-content">
                <div class="col-xs-12 grid-col">
                    <div class="jumbotron">
                        <h1>Column</h1>
                        <p>Your crap goes here</p>
                        <p><a class="btn btn-primary btn-lg" href="#" role="button">Button!</a></p>
                    </div>
                </div>
            </div>
            <div class="row utils">
                <div class="col-xs-6">
                    <p>
                        Columns: <span class="col-count-label">1</span>
                    </p>
                    <div class="column-size-slider"></div>
                </div>
                <div class="col-xs-6 text-right">
                    <div class="button-group" role="group">
                        <button type="button" class="btn btn-default delete-row-btn">
                            delete
                        </button>
                    </div>
                </div>
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