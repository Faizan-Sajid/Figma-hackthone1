"use client";

import Image from "next/image";
import pic from "../../../public/a74736d502746301ed573ed8940fc322.png";

import React, { useState } from "react";
import { Menu, X, User, Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Website Logo */}
        <div className="flex items-center space-x-2">
          <Image src={pic} alt="Furniro Logo" width={40} height={40} />
          <h3 className="text-2xl font-bold text-yellow-600">Furniro</h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-800">
          <Link href="/" className="hover:text-yellow-600 font-medium">
            Home
          </Link>
          <Link href="/shop" className="hover:text-yellow-600 font-medium">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-yellow-600 font-medium">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-yellow-600 font-medium">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600">
          <button className="hover:text-yellow-600">
            <User size={22} />
          </button>
          <button className="hover:text-yellow-600">
            <Search size={22} />
          </button>
          <button className="hover:text-yellow-600">
            <Heart size={22} />
          </button>
          <button className="hover:text-yellow-600">
            <ShoppingCart size={22} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-yellow-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-gray-800 hover:text-yellow-600 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-800 hover:text-yellow-600 font-medium">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-800 hover:text-yellow-600 font-medium">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-yellow-600 font-medium">
                Contact
              </Link>
            </li>
            <li className="flex space-x-6">
              <button className="hover:text-yellow-600">
                <User size={22} />
              </button>
              <button className="hover:text-yellow-600">
                <Search size={22} />
              </button>
              <button className="hover:text-yellow-600">
                <Heart size={22} />
              </button>
              <button className="hover:text-yellow-600">
                <ShoppingCart size={22} />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
