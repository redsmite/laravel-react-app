<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return Inertia::render('Products/index', []);
    }

    public function create(){
        return Inertia::render('Products/create');
    }

    public function store(Request $request){
        $request->validate([
            'name'=> 'required|string|max:255',
            'price'=> 'required|numeric',
            'description' => 'nullable|string'
        ]);

        Product::create($request->all());
        return redirect()->route('products.index')->with('message', "Product created successfully");
    }
}
