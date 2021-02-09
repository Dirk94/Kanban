<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller 
{
	public function register(Request $request) 
	{
		$request->validate($this->getValidationRules());

		$user = User::create([
			'name' => $request->input('name'),
			'email' => $request->input('email'),
			'password' => Hash::make($request->input('password')),
		]);
		
		return response()->json([
			'user' => $user
		], 200);
	}	

	private function getValidationRules()
	{
		return [
			'name' => 'required',
			'email' => 'required|email|unique:users,email',
			'password' => 'required|min:5',
		];
	}
}
