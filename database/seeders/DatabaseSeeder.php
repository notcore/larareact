<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin_90',
            'email' => 'admin@gmail.com',
            'role' => 'admin'
        ]);
        User::factory()->create([
            'name' => 'user1',
            'email' => 'user1@gmail.com',
            'role' => 'user'
        ]);
        User::factory()->create([
            'name' => 'user2',
            'email' => 'user2@gmail.com',
            'role' => 'user'
        ]);
        User::factory()->create([
            'name' => 'user3',
            'email' => 'user3@gmail.com',
            'role' => 'user'
        ]);
    }
}
