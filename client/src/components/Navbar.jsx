import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="sticky top-0 z-50  shadow-lg">
      <div className="flex items-center justify-between py-4 mx-8 sm:mx-20 lg:mx-32">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold text-gray-800 cursor-pointer hover:text-blue-400 transition-colors duration-300"
        >
          NATURALS
        </h1>
        <div>
          {isAuthenticated() ? (
            <div className="flex gap-8 items-center">
              <ul className="flex gap-8 items-center text-lg text-gray-700">
                <li
                  onClick={() => navigate("/")}
                  className="cursor-pointer hover:text-gray-900 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-100/70"
                >
                  Home
                </li>
                <li
                  onClick={() => navigate("/products")}
                  className="cursor-pointer hover:text-gray-900 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-100/70"
                >
                  Products
                </li>
                <li
                  onClick={() => navigate("/about")}
                  className="cursor-pointer hover:text-gray-900 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-100/70"
                >
                  About
                </li>
                <li
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer hover:text-gray-900 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-100/70"
                >
                  Contact
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/cart")}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 px-3 py-2 rounded-lg transition-all duration-300"
                >
                  <ShoppingCart size={20} />
                  Cart
                </button>
                <span className="text-gray-600 text-sm">Hi, {user?.fullname}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 px-3 py-2 rounded-lg transition-all duration-300"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className=" flex gap-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white  px-6 py-2 rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Signup
              <ArrowRight className="pt-1" size={25} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
