<?php

use Inertia\Inertia;
use App\Models\Catatan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\CatatanController;

Route::get('/', function () {
    return to_route('login');
});

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        
        $user = Auth::user();
        $catatan = Catatan::all();
        // dd($catatan);

        return Inertia::render('dashboard',[
            'user' => $user,
            'catatan' => $catatan,
        ]);
        
    })->name('dashboard');

    Route::controller(CatatanController::class)->group(function(){
        Route::post('catatan','post');
    });

    Route::controller(AlbumController::class)->group(function(){
        Route::get('album','index');
    });

    Route::controller(UserController::class)->group(function(){
        Route::get('users','index');
    });
    Route::controller(GuruController::class)->group(function(){
        Route::get('guru','index');
    });

    Route::controller(AdminController::class)->group(function(){
        Route::get('admin','index');
        Route::post('admin/jadikan-guru','jadikanGuru')->name('admin.jadikan-guru');
    })->middleware('admin');
    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
