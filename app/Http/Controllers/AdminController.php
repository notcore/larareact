<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        return inertia('admin', [
            'user' => Auth::user(),
            'users' => User::all()
        ]);
    }

    public function jadikanGuru(Request $request)
    {
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'role' => 'required|in:user,guru,admin',
    ]);
    $user = User::findOrFail($request->user_id);
    $user->role = $request->role;
    $user->save();
    return back()->with('success', 'Role berhasil diubah.');
    }
}
