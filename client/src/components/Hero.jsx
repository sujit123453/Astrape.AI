import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homephoto from "../assets/homephoto.jpg";
import { productsCategories, cartCategories } from "../assets/assets";
import { Search } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(cartCategories);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  const filterProducts = (term, category) => {
    let filtered = cartCategories;
    
    // Apply category filter
    if (category !== "All") {
      filtered = filtered.filter(product => {
        const productCategory = product.category.toLowerCase();
        const filterCategory = category.toLowerCase();
        
        return (
          productCategory.includes(filterCategory) ||
          (category === "Soap" && productCategory.includes("bath")) ||
          (category === "Oil" && productCategory.includes("oil")) ||
          (category === "Drink" && productCategory.includes("beverages")) ||
          (category === "Skin-care" && productCategory.includes("skin"))
        );
      });
    }
    
    // Apply search term filter
    if (term) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="bg-gray-200/30 backdrop-blur-md border border-gray-300/50 rounded-xl p-8 shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Your Comfort,
            <span className="block text-gray-700">Our Priority</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Discover premium natural products crafted for your wellness and
            comfort. From organic honey to herbal teas, we bring nature's finest
            to your doorstep.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/products")}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              Shop Now
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-gray-200/50 backdrop-blur-sm border border-gray-400/50 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200/70 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-gray-200/30 backdrop-blur-md border border-gray-300/50 rounded-xl p-6 shadow-lg">
          <div className="rounded-lg overflow-hidden">
            <img
              src={homephoto}
              alt="Natural Products"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold text-black mb-2">
              100% Natural
            </h3>
            <p className="text-gray-600">
              Handpicked products for your healthy lifestyle
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-200/30 backdrop-blur-md border border-gray-300/50 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black text-center mb-6">Find Your Perfect Product</h2>
          
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-100/50 border border-gray-400/30 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-black mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {productsCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black text-white shadow-lg"
                      : "bg-gray-100/50 border border-gray-400/30 text-gray-700 hover:bg-gray-200/50 backdrop-blur-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          {(searchTerm || selectedCategory !== "All") && (
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                {selectedCategory === "All" && !searchTerm 
                  ? `Showing all ${filteredProducts.length} products`
                  : `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found`
                }
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-100/40 backdrop-blur-sm border border-gray-400/30 rounded-lg p-4 hover:bg-gray-200/40 transition-all duration-300"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-black mb-1">{product.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                    <p className="text-lg font-bold text-black">₹{product.price}</p>
                  </div>
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
