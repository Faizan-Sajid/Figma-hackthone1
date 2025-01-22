"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { add } from "@/app/redux/features/cartslice";
import { useDispatch } from "react-redux";
import Link from "next/link";

// type ProductProps = {
//   _id: string;
//   title: string;
//   productImageUrl: string;
//   description: string;
//   price: number;
//   dicountPercentage: number;
//   isNew: boolean;
// };

interface ProductInterface {
  _id: number;
  title: string;
  productImageUrl: string;
  description: string;
  price: number;
  dicountPercentage: number;
  isNew: boolean;
}

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); // State to toggle description
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Use React.use() to unwrap the params promise
  const { id } = React.use(params);

  useEffect(() => {
    if (!id) {
      console.log("Waiting for ID...");
      return; // Don't run fetch if ID is not available
    }

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "product" && _id == $id][0]{
          _id,
          title,
          "productImageUrl": productImage.asset->url,
          description,
          price,
          discountPercentage,
          isNew
        }`;

        const data = await client.fetch(query, { id });
        if (data) {
          setProduct(data);
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to fetch product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (product: ProductInterface) => {
    const cartItem = {
      _id: product._id.toString(), // Ensure _id is a string
      title: product.title, // Rename 'name' to 'title'
      productImageUrl: product.productImageUrl, // Add missing property
      price: product.price,
      discountPercentage: product.dicountPercentage, // Add missing property
      isNew: product.isNew, // Add missing property
      quantity: 1,
    };
    dispatch(add(cartItem));
  };

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600">{error}</div>;
  }

  if (!product) {
    return (
      <div className="text-center text-lg text-gray-600">
        Product not found.
      </div>
    );
  }

  const discountedPrice =
    product.dicountPercentage > 0
      ? product.price - (product.price * product.dicountPercentage) / 100
      : null;

  // Truncate the description to a specified length
  const truncatedDescription = product.description.slice(0, 100);

  return (
    <div className="container mx-auto py-16 px-6 md:px-12 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src={product.productImageUrl}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300"
          />
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              New
            </div>
          )}
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            {product.title}
          </h1>

          {/* Description with Read More */}
          <p className="text-lg text-gray-600 mb-4">
            {isDescriptionExpanded
              ? product.description
              : `${truncatedDescription}...`}
          </p>
          <button
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="text-[#B88E2F] font-semibold underline hover:text-[#916c23] transition-colors"
          >
            {isDescriptionExpanded ? "Read Less" : "Read More"}
          </button>

          {/* Price Section */}
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-4xl font-extrabold text-[#B88E2F]">
              Rp{" "}
              {discountedPrice
                ? discountedPrice.toLocaleString()
                : product.price.toLocaleString()}
            </span>
            {discountedPrice && (
              <span className="text-lg text-gray-400 line-through">
                Rp {product.price.toLocaleString()}
              </span>
            )}
          </div>

          {/* Discount Text */}
          {product.dicountPercentage > 0 && (
            <p className="text-md text-green-600 font-semibold mb-8">
              You save {product.dicountPercentage}%!
            </p>
          )}

          {/* Buttons */}
          <div className="flex gap-6">
            <button
              onClick={() => handleAddToCart(product)}
              className="py-3 px-10 bg-[#B88E2F] text-white text-lg font-bold rounded-lg shadow-md hover:bg-[#916c23] transition-transform transform hover:scale-105"
            >
              Add to Cart
            </button>
            <Link href={"/cart"}>
            <button className="py-3 px-10 bg-gray-200 text-lg font-bold rounded-lg shadow-md hover:bg-gray-300 transition-transform transform hover:scale-105">
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
