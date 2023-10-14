<?php

namespace Database\Seeders;
use App\Models\Products;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // crear 10 productos aleatorios
        Products::factory(10)->create();
    }
}
