<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        // Inertia::share([
        //     'auth' => fn () => [
        //         'user' => Auth::user(),
        //     ],
        // ]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Inertia::share([
            'auth' => fn () => [
                'user' => Auth::user(),
            ],
        ]);
    }
}
