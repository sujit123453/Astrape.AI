import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="bg-gray-200/30 backdrop-blur-md border border-gray-300/50 rounded-xl p-8 shadow-lg mb-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-black mb-4">NATURALS</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your comfort is our priority. We provide premium natural
                products that enhance your wellness journey with nature's finest
                ingredients.
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart size={16} className="text-red-500" />
                <span className="text-sm">Made with love for your comfort</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/products")}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/contact")}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={16} />
                  <span className="text-sm">info@naturals.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={16} />
                  <span className="text-sm">+91 6299515398</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">Noida, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-gray-200/40 backdrop-blur-md border border-gray-300/50 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 NATURALS. All rights reserved. Your comfort, our
              commitment.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <button className="hover:text-black transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-black transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-black transition-colors duration-300">
                Return Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
