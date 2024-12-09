"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Funiro.</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-800 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-500 hover:text-gray-800 transition duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-gray-800 transition duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-gray-800 transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/payment-options"
                  className="text-gray-500 hover:text-gray-800 transition duration-200"
                >
                  Payment Options
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  className="text-gray-500 hover:text-gray-800 transition duration-200"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policies"
                  className="text-gray-500 hover:text-gray-800 transition duration-200"
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Newsletter
            </h3>
            <form className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-6">
          <p className="text-sm text-gray-500 text-center">
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
