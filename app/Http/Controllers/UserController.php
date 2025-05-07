<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(){

        $User = User::all();

        return Inertia::render('user', [
            'users' => $User,
            'user' => Auth::user(),
        ]);
    }
}
