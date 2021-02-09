<?php

use Illuminate\Support\Facades\Route;

// Simply route everything except API calls to the Vue view.
Route::get('{any}', function () {
    return view('vue-application');
})->where('any', '^(?!\/api).*$');
