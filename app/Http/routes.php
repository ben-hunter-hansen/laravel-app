<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');
Route::get('create','CreateController@create');
Route::get('user/profile/{id}', 'UserController@showProfile');
Route::get('user/profile/photos/get', 'UserController@getPhotos');

Route::post('user/profile/photos/upload', 'UserController@addPhotos');
Route::post('user/profile/about','UserController@submitAbout');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
