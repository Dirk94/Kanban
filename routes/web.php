<?php

use Illuminate\Support\Facades\Route;

// Simply route everything to the Vue view.
Route::get('{any}', function () {
    return view('vue-application');
})->where('any', '(.*)');
