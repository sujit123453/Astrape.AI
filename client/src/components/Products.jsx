import React from "react";
import { cartCategories } from "../assets/assets";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-12">
          Our Products
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartCategories.map((product) => (
            <div
              key={product.id}
              className="bg-gray-200/30 backdrop-blur-md border border-gray-300/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-200/40 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="w-full h-64 bg-gray-100/50 border border-gray-400/30 rounded-lg overflow-hidden backdrop-blur-sm mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.category} • {product.unit}
                  </p>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex justify-between items-center pt-4">
                  <div className="text-2xl font-bold text-black">
                    ₹{product.price}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
