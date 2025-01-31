"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import pic from "../../../public/a74736d502746301ed573ed8940fc322.png";
import { useDispatch } from "react-redux";
import { remove } from "../redux/features/wishlistSlice"; // Import the correct action for removing items from the wishlist
import { useAppSelector } from "../redux/hooks"; // Correctly typed useAppSelector
import { add } from "../redux/features/cartslice"; // Import the add to cart action

// Define the WishlistItem interface or import it from your slice
interface WishlistItem {
  _id: string;
  title: string;
  productImageUrl: string;
  price: number;
  discountPercentage: number;
  isNew: boolean;
  quantity: number;
}

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist); // Ensure state.wishlist is correctly typed

  // Handle remove item from wishlist
  const handleRemoveFromWishlist = (_id: string) => {
    dispatch(remove(_id)); // Dispatching remove action with WishlistItem's _id
  };

  // Handle add item to cart
  const handleAddToCart = (item: WishlistItem) => {
    const cartItem = {
      _id: item._id,
      title: item.title,
      productImageUrl: item.productImageUrl,
      price: item.price,
      discountPercentage: item.discountPercentage,
      isNew: item.isNew,
      quantity: 1, // Set default quantity to 1
    };
    dispatch(add(cartItem)); // Dispatch the item to be added to the cart
  };

  return (
    <>
      <div className="relative h-[280px] w-full">
        <Image
          src="/shopcover.jpeg"
          alt="Wishlist background"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <Image
            src={pic}
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-4"
          />
          <h1 className="text-4xl font-semibold mb-2">Wishlist</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Wishlist</span>
          </div>
        </div>
      </div>

      {/* Wishlist Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item: WishlistItem) => (
            <div
              key={item._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={item.productImageUrl}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-48 rounded-md"
                />
                {item.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-red-500">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.discountPercentage > 0 && (
                    <span className="text-sm line-through text-gray-500">
                      ${(
                        item.price + (item.price * item.discountPercentage) / 100
                      ).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full py-3 bg-[#B88E2F] text-white font-semibold rounded-md hover:bg-[#9e7424] transition-colors transform hover:scale-105"
                >
                  Add to Cart
                </button>
                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromWishlist(item._id)}
                  className="text-red-600 font-medium hover:text-red-800 transition-colors duration-300 flex items-center gap-2 text-sm"
                >
                  <span>Remove</span>
                  <svg
                    className="w-4 h-4 text-red-600 transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-xl text-gray-600 col-span-full">
            Your wishlist is empty
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
