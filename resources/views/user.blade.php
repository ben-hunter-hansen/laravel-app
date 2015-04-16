@extends('app')

@section('content')
<!-- About Edit Modal -->
<div class="modal fade" id="editAboutMod" tabindex="-1" role="dialog" aria-labelledby="editAboutLabel" aria-hidden="true">
  	<div class="modal-dialog">
	    <div class="modal-content">
	     	<div class="modal-header">
	        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="editAboutLabel">About Me</h4>
	    	</div>
	    	<div class="modal-body">
	    		<div class="form-group">
	    			<label class="control-label" for="editAboutArea">Enter something about yourself</label>
	        		<textarea style="resize:none" id="editAboutArea" class="form-control" resizeable="false" rows="5"></textarea>
	        		<p class="help-block"></p>
	        	</div>
	    	</div>
	    	<div class="modal-footer">
	    		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        	<button id="submitAboutEdit" type="button" class="btn btn-primary">Save changes</button>
	    	</div>
	    </div>
  	</div>
</div>
<!-- Add Photo Modal -->
<div class="modal fade" id="addPhotoMod" tabindex="-1" role="dialog" aria-labelledby="addPhotoLabel" aria-hidden="true">
  	<div class="modal-dialog">
	    <div class="modal-content">
	     	<div class="modal-header">
	        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="addPhotoLabel">Add photos</h4>
	    	</div>
	    	<div class="modal-body">
	    		<div class="form-group">
	    			<label class="control-label" for="photoFromUrlField">From URL</label>
	        		<input type="url" class="form-control" id="photoFromUrlField" describedby="urlStatus" placeholder="http://">
	        		<span id="urlStatus" class="glyphicon form-control-feedback" aria-hidden="true"></span>
	        		<p class="help-block"></p>
	        	</div>
	        	<div class="form-group">
				    <label for="photoFromFileField">From file</label>
			    	<input type="file" id="photoFromFileField">
			    </div>
			    <div class="form-group">
				  	<div class="file-dropper" id="photoDropField">
					    	Or, place one here
					</div>
				</div>
				<div class="form-group">
					<label>Preview</label>
					<div class="img-preview-list well well-sm">
						<h6 class="text-center">No photos added</h6>
					</div>
				</div>
				<div class="form-group">
					<button type="button" class="btn btn-warning btn-xs" style="display:none">
						remove selected
					</button>
				</div>
	    	</div>
	    	<div class="modal-footer">
	    		<p id="uploadNotify" class="text-primary pull-left"></p>
	    		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        	<button id="submitPhotoUpload" type="button" class="btn btn-primary">Upload</button>
	        	<input type="hidden" name="_id" value="{{ Auth::user()->id }}" />
	    	</div>
	    </div>
  	</div>
</div>
<!-- View photo modal -->
<div class="modal fade" id="viewPhotoMod" tabindex="-1" role="dialog" aria-labelledby="viewPhotoLabel" aria-hidden="true">
  	<div class="modal-dialog">
	    <div class="modal-content">
	     	<div class="modal-header">
	        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        	<h4 class="modal-title" id="viewPhotoLabel">View photos</h4>
	    	</div>
	    	<div class="modal-body dark-background">
	    		<div id="view-photo-carousel" class="carousel slide">
				  	<div class="carousel-inner photo-view" role="listbox">
					    <div class="item">
						    <div class="carousel-caption">
							
						    </div>
					    </div>
					</div>
	    			<a class="left carousel-control" href="#view-photo-carousel" role="button" data-slide="prev">
			    		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			    		<span class="sr-only">Previous</span>
			  		</a>
			  		<a class="right carousel-control" href="#view-photo-carousel" role="button" data-slide="next">
			    		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			   			<span class="sr-only">Next</span>
			  		</a>
				</div>
	    	</div>
	    	<div class="modal-footer">
	    		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	    	</div>
	    </div>
  	</div>
  	<input type="hidden" id="sender" value="">
</div>
<div class="row">
	<div class="col-xs-12 text-center">
		<img src="{{Auth::user()->photo }}" class="img-responsive photo-center med" style="border-radius: 50%;">
		<h2>{{ Auth::user()->name }}</h2>
		<h4>{{ Auth::user()->email }}<h4>
	</div>
</div>
<div class="row">
	<div class="col-sm-8">
		<div class="row">
			<div class="col-xs-10 col-xs-offset-1">
				<h3>About <small><a href="#" data-toggle="modal" data-target="#editAboutMod">edit</a></small></h3>
				<p id="aboutText">{{ Auth::user()->about }}</p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-10 col-xs-offset-1">
				<h3>Recent Posts</h3>
				<table class="table table-hover">
			  		<thead>
			  			<tr>
			  				<th>Title</th>
			  				<th>Date</th>
			  				<th>Edit</th>
			  			</tr>
			  		</thead>
			  		<tbody>
			  			<tr class="small-font">
				  			<td>
				  				<a href="#">Wow Such Post</a>
				  			</td>
				  			<td>3/30/15</td>
				  			<td>
				  				<a href="#">
								  <span class="glyphicon glyphicon-pencil"></span>
								</a>
								<a class="text-danger" href="#">
								  <span class="glyphicon glyphicon-remove"></span>
								</a>
				  			</td>
			  			</tr>
			  			<tr class="small-font">
				  			<td>
				  				<a href="#">Very blog, wow</a>
				  			</td>
				  			<td>3/31/15</td>
				  			<td>
				  				<a href="#">
								  <span class="glyphicon glyphicon-pencil"></span>
								</a>
								<a class="text-danger" href="#">
								  <span class="glyphicon glyphicon-remove"></span>
								</a>
				  			</td>
			  			</tr>
			  		</tbody>
				</table>
			</div>
		</div>
		<div class="row" id="photoContent">
			<div class="col-xs-10 col-xs-offset-1">
				<h3>Photos <small><a href="#" data-toggle="modal" data-target="#addPhotoMod">add</a></small></h3>
				<div class="row">
					<div class="user-photos">
					</div>
				</div>
				<nav>
				  	<ul class="pager">
				    	<li><a id="photosPrev" href="#">Previous</a></li>
					    <li><a id="photosNext" href="#">Next</a></li>
			  		</ul>
				</nav>
			</div>
		</div>
	</div>
	<div class="col-sm-4">
		<div class="row">
			<div class="col-xs-10 col-xs-offset-1">
				<h3>Friends</h3>
				<ul class="media-list">
				  <li class="media">
				    <div class="media-left">
				      <a href="#">
				        <img class="media-object photo-center tiny" src="{{Auth::user()->photo}}" alt="...">
				      </a>
				    </div>
				    <div class="media-body">
				      <h5 class="media-heading">Tony Danza</h5>
				      	<small><a href="#">contact@contact.com</a></small>
				    </div>
				  </li>
				  <li class="media">
				    <div class="media-left">
				      <a href="#">
				        <img class="media-object photo-center tiny" src="{{Auth::user()->photo}}" alt="...">
				      </a>
				    </div>
				    <div class="media-body">
				      <h5 class="media-heading">Semour Butts</h5>
				      	<small><a href="#">contact@contact.com</a></small>
				    </div>
				  </li>
				  <li class="media">
				    <div class="media-left">
				      <a href="#">
				        <img class="media-object photo-center tiny" src="{{Auth::user()->photo}}" alt="...">
				      </a>
				    </div>
				    <div class="media-body">
				      <h5 class="media-heading">Darth Vader</h5>
				      	<small><a href="#">contact@contact.com</a></small>
				    </div>
				  </li>
				  <li class="media">
				    <div class="media-left">
				      <a href="#">
				        <img class="media-object photo-center tiny" src="{{Auth::user()->photo}}" alt="...">
				      </a>
				    </div>
				    <div class="media-body">
				      <h5 class="media-heading">Tony Danza</h5>
				      	<small><a href="#">contact@contact.com</a></small>
				    </div>
				  </li>
				  <li class="media">
				    <div class="media-left">
				      <a href="#">
				        <img class="media-object photo-center tiny" src="{{Auth::user()->photo}}" alt="...">
				      </a>
				    </div>
				    <div class="media-body">
				      <h5 class="media-heading">Semour Butts</h5>
				      	<small><a href="#">contact@contact.com</a></small>
				    </div>
				  </li>
				  <li class="media">
				    <div class="media-left">
				      <a href="#">
				        <img class="media-object photo-center tiny" src="{{Auth::user()->photo}}" alt="...">
				      </a>
				    </div>
				    <div class="media-body">
				      <h5 class="media-heading">Darth Vader</h5>
				      	<small><a href="#">contact@contact.com</a></small>
				    </div>
				  </li>
				</ul>
			</div>
		</div>
	</div>
</div>

@endsection