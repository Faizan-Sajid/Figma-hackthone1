"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { client } from "@/sanity/lib/client"; // Adjust the path based on your project structure
import shopcover from "../../../../public/shopcover.jpeg";


interface ProductInterface {
  _id: number
  title: string,
  productImageUrl: string,
  price: number, 
  dicountPercentage:number
  isNew: boolean
}

const query = `
  *[_type == "product"] {
    _id,
    title,
    "productImageUrl": productImage.asset->url,
    price,
    dicountPercentage,
    isNew
  }
`;

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.fetch(query).then((data) => setProducts(data));
  }, []);

  const handleAddToCart = async (product:ProductInterface) => {
    try {
      // Simulate adding product to a cart using async/await
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product._id, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      // Optionally, show a success message or update cart state
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart");
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src={shopcover}
          alt="Shop Cover"
          fill
          quality={100}
          priority
          className="object-cover blur-sm"
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Shop</h1>
          <div className="flex items-center gap-2 text-[#000000] text-base">
            <Link href="/" className="hover:text-[#B88E2F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Shop</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-[#f9f9f9] py-12">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product:ProductInterface, index) => {
            const discountedPrice =
              product.dicountPercentage > 0
                ? product.price - (product.price * product.dicountPercentage) / 100
                : null;

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                
                {/* Product Image */}
                <div className="relative w-full h-60">
                  {/* Link to dynamic product detail page */}
                  <Link href={`/shop/${product._id}`}>
                  
                  <Image
                    src={product.productImageUrl}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                  
                  {/* New Badge */}
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  </Link>
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#111111]">
                    
                      {product.title}
                    
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    {discountedPrice ? (
                      <>
                        <p className="text-lg font-bold text-red-500">
                          Rp {discountedPrice.toLocaleString()}
                        </p>
                        <p className="text-sm line-through text-[#666666]">
                          Rp {product.price.toLocaleString()}
                        </p>
                      </>
                    ) : (
                      <p className="text-lg font-bold text-[#111111]">
                        Rp {product.price.toLocaleString()}
                      </p>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2 bg-[#B88E2F] text-white font-semibold rounded-md hover:bg-[#9e7424] transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
