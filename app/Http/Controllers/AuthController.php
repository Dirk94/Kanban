<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller 
{
	public function register(Request $request) 
	{
		$request->validate([
			'name' => 'required',
			'email' => 'required|email|unique:users,email',
			'password' => 'required|min:5',
		]);

		$user = User::create([
			'name' => $request->input('name'),
			'email' => $request->input('email'),
			'password' => Hash::make($request->input('password')),
		]);
		
		return response()->json([
			'user' => $user
		], 200);
	}

	public function login(Request $request) 
	{
		$request->validate([
			'email' => 'required',
			'password' => 'required',
		]);

		$credentials = $request->only('email', 'password');

		if (Auth::attempt($credentials)) {
				$request->session()->regenerate();

				return response()->json([
					'user' => Auth::user(),
				], 200);
		}

		return response()->json([
			'errors' => [
				'email' => [
					'The provided credentials do not match our records.'
				]
			]
				], 422);
	}
}
