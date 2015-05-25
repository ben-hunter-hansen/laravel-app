@extends('app')

@section('content')
<section id="createCanvas" class="container-fluid">
    <div class="row">
        <div class="col-xs-2 col-md-1">
            <div class="grid-menu">
                <button id="addRowBtn" type="button" class="btn btn-default">
                    <i class="fa fa-plus-circle fa-3x"></i>
                </button>
                <div style="height: 2em"></div>
                <button type="button" class="btn btn-default">
                    <i class="fa fa-ban fa-3x"></i>
                </button>
                <div style="height: 2em"></div>
                <button type="button" class="btn btn-default">
                    <i class="fa fa-save fa-3x"></i>
                </button>
            </div>
        </div>
        <div class="col-xs-8 col-md-10 grid">
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
        <div class="col-xs-2 col-md-1">
            <div class="grid-menu">
                <button type="button" class="btn btn-default">
                    <i class="fa fa-angle-up fa-3x"></i>
                </button>
                <div style="height: 8em"></div>
                <button type="button" class="btn btn-default">
                    <i class="fa fa-angle-down fa-3x"></i>
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