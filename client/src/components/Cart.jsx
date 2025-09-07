import React from "react";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-black text-center mb-12">
            Shopping Cart
          </h1>
          <div className="bg-gray-200/30 backdrop-blur-md border border-gray-300/50 rounded-xl p-12 shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500">Add some products to get started!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-12">
          Shopping Cart
        </h1>

        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200/30 backdrop-blur-md border border-gray-300/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-200/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="w-full md:w-48 h-48 bg-gray-100/50 border border-gray-400/30 rounded-lg overflow-hidden backdrop-blur-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.category} • {item.unit}
                      </p>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors duration-300"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  {/* Price and Quantity */}
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-black">
                      ₹{item.price * item.quantity}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-400/50 rounded-lg bg-gray-100/30 backdrop-blur-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors duration-300"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-semibold text-black border-x border-gray-400/50">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors duration-300"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-12 bg-gray-200/40 backdrop-blur-md border border-gray-300/50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-black">Total:</span>
            <span className="text-3xl font-bold text-black">
              ₹{getTotalPrice()}
            </span>
          </div>
          <button className="w-full bg-black text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
