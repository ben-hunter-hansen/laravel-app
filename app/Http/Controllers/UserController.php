<?php namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Photo;
use Illuminate\Http\Request;
use Response;

class UserController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Home Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders your application's "dashboard" for users that
	| are authenticated. Of course, you are free to change or remove the
	| controller as you wish. It is just here to get your app started!
	|
	*/

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * Show the application dashboard to the user.
	 *
	 * @return Response
	 */
	public function showProfile($id)
	{
		return view('user',['user' => User::findOrFail($id)]);
	}

	public function getPhotos(Request $request) {
		$user = $request->input('id');
		$photos = Photo::where('uploader','=', $user)->get();
		return Response::json(['photos' => $photos]);
	}

	public function submitAbout(Request $request) {
		$about = $request->input('data');
		$id = $request->input('id');
		$user = User::findOrFail($id);
		$user->about = $about;
		$user->save();
		echo $user->about;
	}
	
	public function addPhotos(Request $request) {
		$photos = $request->input('photos');
		$id = $request->input('id');
		foreach ($photos as $src) {
			$photo = new Photo;
			$photo->uploader = $id;
			$photo->photo_src = $src;
			$photo->save();
		}
		return Response::json(['upload_count' => count($photos)]);
	}
}

