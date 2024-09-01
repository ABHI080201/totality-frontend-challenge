// components/Navbar.tsx

import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Side - Logo and Links */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <GiFamilyHouse className="w-10 h-10" />
            </Link>
          </div>
          <div className="flex">
            <div className="flex items-center justify-between md:ml-20 space-x-2">
              <Link
                href="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md lg:text-xl text-sm"
              >
                Home
              </Link>
              <Link
                href="/buy-rent"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md lg:text-xl text-sm"
              >
                Buy/Rent
              </Link>
              <Link
                href="/about-us"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md lg:text-xl text-sm"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Side - Search Bar and Cart */}
          <div className="flex items-center">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
            </div>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="ml-4 text-gray-800 hover:text-gray-600"
            >
              <FaShoppingCart className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
