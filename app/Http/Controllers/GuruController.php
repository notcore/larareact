<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GuruController extends Controller
{
    public function index()
    {
        $Guru = User::where('role', 'guru')->get();

        return inertia('guru', [
            'guru' => $Guru,
            'user' => Auth::user()
        ]);
    }
}
