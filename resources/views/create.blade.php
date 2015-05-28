@extends('app')

@section('content')
<section id="createCanvas" class="container-fluid">
    <div class="row">
        <div class="col-xs-2 col-sm-1">
            <div class="grid-menu">
                <button id="addRowBtn" type="button" class="btn btn-default">
                    <i class="fa fa-plus-circle fa-2x"></i>
                </button>
                <div style="height: 2em"></div>
                <button id="deleteRowBtn" type="button" class="btn btn-default">
                    <i class="fa fa-ban fa-2x"></i>
                </button>
                <div style="height: 2em"></div>
                <button type="button" class="btn btn-default">
                    <i class="fa fa-save fa-2x"></i>
                </button>
            </div>
        </div>
        <div class="col-xs-8 col-sm-10 grid">
            <div class="container-fluid grid-row">
                <div class="row user-content">
                    <div class="col-xs-12 grid-col">
                        <div class="inset-shadow" style="width: 100%; min-height: 300px;">

                        </div>
                    </div>
                </div>
                <div class="row utils">
                    <div class="col-xs-6 col-sm-8 col-md-10">
                        <div class="column-size-slider"></div>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-2 text-right">
                        <p><span class="col-count-label">1</span> Columns</p>

                        <!--
                        <div class="button-group" role="group">
                            <button type="button" class="btn btn-default delete-row-btn">
                                delete
                            </button>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-2 col-sm-1">
            <div class="grid-menu">
                <button id="gridScrollTopBtn" type="button" class="btn btn-default">
                    <i class="fa fa-angle-double-up fa-2x"></i>
                </button>
                <button id="gridScrollUpBtn" type="button" class="btn btn-default">
                    <i class="fa fa-angle-up fa-2x"></i>
                </button>
                <div style="height: 2em"></div>
                <button id="gridScrollDownBtn" type="button" class="btn btn-default">
                    <i class="fa fa-angle-down fa-2x"></i>
                </button>
                <button id="gridScrollBottomBtn" type="button" class="btn btn-default">
                    <i class="fa fa-angle-double-down fa-2x"></i>
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