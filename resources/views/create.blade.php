@extends('app')

@section('content')
<section id="createTools" class="container-fluid">
	<div class="row">
		<div class="col-xs-12">
		
		</div>
	</div>
</section>
<section id="createCanvas" class="container-fluid">
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <!-- Single button -->
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    New.. <span class="caret"></span>
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
        <div class="col-xs-12 col-sm-6">
            <p>
                <label for="nColumns">Number of columns:</label>
                <input type="text" id="nColumns" readonly style="border:0; color:#f6931f; font-weight:bold;">
            </p>
            <!-- slider -->
        </div>
    </div>
    <div class="container grid">
        <div class="container-fluid grid-row selected">
            <div class="row user-content">
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
            <div class="row utils">
                <div class="column-size-slider"></div>
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