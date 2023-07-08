<?php

use Illuminate\Support\Facades\Route;

Route::post('/login', 'App\Http\Controllers\Auth\LoginController@login')->name('login');
Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');
Route::post('/register', 'App\Http\Controllers\Auth\RegisterController@register')->name('register');

Route::group(['namespace' => 'App\Http\Controllers'], function () {
    Route::get('{page}', 'IndexController')->where('page', '.*')->name('index');
});
