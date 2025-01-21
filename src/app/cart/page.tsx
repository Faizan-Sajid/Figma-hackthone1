"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import pic from "../../../public/a74736d502746301ed573ed8940fc322.png";
import { remove } from "../redux/features/cartslice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks"; // Make sure you are using typed useAppSelector

// Define the CartItem interface again here or import it from your slice
interface CartItem {
  _id: string;
  title: string;
  productImageUrl: string;
  price: number;
  discountPercentage: number;
  isNew: boolean;
  quantity: number;
}

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart); // Ensure state.cart is typed as CartState

  // Function to calculate item subtotal
  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  // Function to calculate total cart value
  const calculateTotal = () => {
    return cartItems.reduce((total: number, item: CartItem) => {
      return total + calculateSubtotal(item.price, item.quantity);
    }, 0);
  };

  const handleDelete = (_id: string) => {
    dispatch(remove(_id)); // Dispatching remove action with CartItem's _id
  };

  return (
    <>
      <div className="relative h-[280px] w-full">
        <Image
          src="/shopcover.jpeg"
          alt="Comparison background"
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
          <h1 className="text-4xl font-semibold mb-2">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Cart</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6 bg-gray-100 text-sm md:text-base">
        <div className="font-semibold">Product</div>
        <div className="font-semibold">Price</div>
        <div className="font-semibold">Quantity</div>
        <div className="font-semibold">Subtotal</div>
        <div></div>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item: CartItem) => (
          <div
            key={item._id}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center px-6 py-4 border-b bg-white"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.productImageUrl}
                alt={item.title || "product image"}
                width={80}
                height={80}
                className="object-cover rounded-md"
              />
              <span className="truncate">{item.title}</span>
            </div>

            <span className="font-medium text-lg">
              ${item.price.toFixed(2)}
            </span>
            <span className="text-center">{item.quantity}</span>
            <span className="font-medium text-lg">
              ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
            </span>
            <div className="flex justify-center">
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-6 text-xl text-gray-600">
          Your cart is empty
        </div>
      )}

      {/* Cart Totals */}
      <div className="bg-gray-50 p-6 rounded-lg mt-6">
        <h2 className="text-xl md:text-2xl font-medium mb-6">Cart Totals</h2>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm md:text-base">Subtotal</span>
            <span className="text-sm md:text-base">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center font-medium">
            <span className="text-sm md:text-base">Total</span>
            <span className="text-[#B88E2F] text-sm md:text-base">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>
        </div>
        <Link href="/checkout">
          <button className="w-full py-2 text-lg font-semibold text-white bg-black rounded-md hover:bg-gray-900 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
