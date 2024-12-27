import Image from "next/image";

import pic from "../../../../public/43eebd52ea72d60650f31030ec4bf7e6.png";
import pic2 from "../../../../public/4bdba3a6bef9d68df2d9a06e32e96c61.png";
import pic3 from "../../../../public/9765b31b26fb533b95b7b43e636201e6.png";
import pic4 from "../../../../public/a11f805aade2224f1d6658764a2395df.jpeg";
import pic5 from "../../../../public/4bdba3a6bef9d68df2d9a06e32e96c61.png";
import shopcover from "../../../../public/shopcover.jpeg"
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const data = [
  { image: pic, productName: "Syltherine", detail: "Stylish cafe chair", price: "Rp 12.000" },
  { image: pic2, productName: "Levante", detail: "Modern dining table", price: "Rp 25.000" },
  { image: pic3, productName: "Axel Chair", detail: "Ergonomic office chair", price: "Rp 15.500" },
  { image: pic4, productName: "Luna Sofa", detail: "Comfortable 2-seater", price: "Rp 35.000" },
  { image: pic5, productName: "Aurora Bed", detail: "King size bed frame", price: "Rp 45.000" },
  { image: pic5, productName: "Aurora Bed", detail: "King size bed frame", price: "Rp 45.000" },
  { image: pic2, productName: "Neptune Lamp", detail: "Minimalist floor lamp", price: "Rp 7.500" },
  { image: pic3, productName: "Mars Cabinet", detail: "Compact storage unit", price: "Rp 18.000" },
  { image: pic3, productName: "Mars Cabinet", detail: "Compact storage unit", price: "Rp 18.000" },
  { image: pic4, productName: "Luna Sofa", detail: "Comfortable 2-seater", price: "Rp 35.000" },
  { image: pic4, productName: "Luna Sofa", detail: "Comfortable 2-seater", price: "Rp 35.000" },
  { image: pic, productName: "Venus Mirror", detail: "Wall-mounted mirror", price: "Rp 10.000" },
];

function Shop() {
  return (
    <>


    <div className="relative h-[300px] w-full">
          <Image
            src={shopcover}
            alt="Shop Cover"
            fill
            quality={100}
            priority
            className="object-cover blur-sm"
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Shop
            </h1>
            <div className="flex items-center gap-2 text-[#000000] text-base">
              <Link href="/" className="hover:text-[#B88E2F] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>Shop</span>
            </div>
          </div>
        </div>
    <div className="bg-[#f9f9f9] py-12">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            {/* Product Image */}
            <div className="relative w-full h-60">
              <Image
                src={product.image}
                alt={product.productName}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-[#111111]">
                {product.productName}
              </h3>
              <p className="text-sm text-[#666666]">{product.detail}</p>
              <p className="text-lg font-bold text-[#111111] mt-2">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Shop;
