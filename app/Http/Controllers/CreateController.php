<?php namespace App\Http\Controllers;

class CreateController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function create()
	{
		return view('create');
	}

}