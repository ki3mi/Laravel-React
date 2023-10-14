<?php

namespace Database\Factories;
use App\Models\Products;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products>
 */
class ProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        return [
            'name_product' => $this->faker->text(15),
            'price_product' => $this->faker->randomFloat(2, 0, 1000),
            'stock_product' => $this->faker->numberBetween(0, 100),
            'img_product' => $this->faker->text(50),
        ];
    }
}
