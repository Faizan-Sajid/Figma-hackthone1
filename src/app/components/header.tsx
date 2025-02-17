"use client";

import Image from "next/image";
import pic from "../../../public/a74736d502746301ed573ed8940fc322.png";
import React, { useState } from "react";
import { Menu, X, User, Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const item = useAppSelector((state) => state.cart); // Assuming `state.cart` contains cart items.
  const wishlist = useAppSelector((state) => state.wishlist)

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
          <Link href={"/wishlist"}>
          <button className="relative flex items-center justify-center p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white">
            <Heart size={22} />
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
          </button>
          </Link>

          {/* Cart Button with Item Count */}
          <Link href="/cart">
            <button className="relative flex items-center justify-center p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white">
              <ShoppingCart size={22} />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
                {item.length}
              </span>
            </button>
          </Link>
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
              <Link
                href="/"
                className="text-gray-800 hover:text-yellow-600 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-gray-800 hover:text-yellow-600 font-medium"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-800 hover:text-yellow-600 font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-yellow-600 font-medium"
              >
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
              <Link href="/wishlist">
              <button className="hover:text-yellow-600">
                <Heart size={22} />
              </button>
              </Link>
              <Link href="/cart">
                <button className="relative flex items-center justify-center p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white">
                  <ShoppingCart size={22} />
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
                    {item.length}
                  </span>
                </button>
              </Link>

            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
