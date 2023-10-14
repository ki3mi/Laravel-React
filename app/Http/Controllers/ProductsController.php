<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    
    public function index()
    {
        $products = Products::all();
        return Inertia::render('Products/index',['products'=>$products]);
    }

    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $request -> validate([
            'name_product' => 'required|max:50',
            'price_product' => 'required|numeric|between:0,9999.99',
            'stock_product' => 'required|integer|min:0',
            'img_product' => 'required|url',
        ]);
        $products = new Products($request->input());
        $products->save();
        return redirect('products');
    }

    public function update(Request $request, $id)
    {
        $product = Products::find($id);
        $product->fill($request->input())->saveOrfail();
        return redirect('products');
    }

    public function destroy($id)
    {
        $product = Products::find($id);
        $product->delete();
        return redirect('products');
    }
}
