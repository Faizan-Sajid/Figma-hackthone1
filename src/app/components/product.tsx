"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Adjust path based on your project
import picPlaceholder from "../../../public/4bdba3a6bef9d68df2d9a06e32e96c61.png"; // Fallback image
import Link from "next/link";

const query = `
  *[_type == "product"][0...6] {
    title,
    "productImageUrl": productImage.asset->url,
    detail,
    price,
    isNew
  }
`;

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Explore Our Products
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-10">
        {products.map((product:any, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative w-full h-[250px]">
              <Link href={"/shop"}>
              <Image
                src={product.productImageUrl || picPlaceholder}
                alt={product.title || "Product Image"}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              </Link>
              {/* New Badge */}
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </span>
              )}
            </div>
            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{product.detail}</p>
              <h3 className="text-yellow-600 font-bold text-lg mt-4">
                PKR {parseInt(product.price).toLocaleString()}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
