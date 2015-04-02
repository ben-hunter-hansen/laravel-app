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
	        <h4 class="modal-title" id="addPhotoLabel">Add a photo</h4>
	    	</div>
	    	<div class="modal-body">
	    		<div class="form-group">
	    			<label class="control-label" for="photoFromUrlField">From URL</label>
	        		<input type="url" class="form-control" id="photoFromUrlField" placeholder="http://">
	        	</div>
	        	<div class="form-group">
				    <label for="photoFromFileField">From file</label>
				    <input type="file" id="photoFromFileField">
			  	</div>
			  	<div class="file-dropper" id="photoDropField">
				    	Or, place one here
				</div>
	    	</div>
	    	<div class="modal-footer">
	    		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        	<button id="submitAboutEdit" type="button" class="btn btn-primary">Save changes</button>
	    	</div>
	    </div>
  	</div>
</div>
<div class="row">
	<div class="col-xs-12 text-center">
		<img src="{{Auth::user()->photo }}" class="img-responsive photo-center med">
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
		<div class="row">
			<div class="col-xs-10 col-xs-offset-1">
				<h3>Photos <small><a href="#" data-toggle="modal" data-target="#addPhotoMod">add</a></small></h3>
				<div class="row">
					<div class="col-sm-4">
						<a href="#" class="thumbnail">
							<img src="{{Auth::user()->photo}}">
						</a>
					</div>
					<div class="col-sm-4">
						<a href="#" class="thumbnail">
							<img src="{{Auth::user()->photo}}">
						</a>
					</div>
					<div class="col-sm-4">
						<a href="#" class="thumbnail">
							<img src="{{Auth::user()->photo}}">
						</a>
					</div>
				</div>
				<nav>
				  	<ul class="pager">
				    	<li><a href="#">Previous</a></li>
					    <li><a href="#">Next</a></li>
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