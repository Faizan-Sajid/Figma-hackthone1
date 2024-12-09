import pic from "../../../public/43eebd52ea72d60650f31030ec4bf7e6.png";
import pic2 from "../../../public/4bdba3a6bef9d68df2d9a06e32e96c61.png";
import pic3 from "../../../public/9765b31b26fb533b95b7b43e636201e6.png";
import pic4 from "../../../public/a11f805aade2224f1d6658764a2395df.jpeg";
import pic5 from "../../../public/4bdba3a6bef9d68df2d9a06e32e96c61.png";
import Image from "next/image";

const data = [
  { image: pic, productName: "Syltherine", detail: "Stylish cafe chair", price: "12,000" },
  { image: pic2, productName: "Levante", detail: "Modern dining table", price: "25,000" },
  { image: pic3, productName: "Axel Chair", detail: "Ergonomic office chair", price: "15,500" },
  { image: pic4, productName: "Luna Sofa", detail: "Comfortable 2-seater", price: "35,000" },
  { image: pic5, productName: "Aurora Bed", detail: "King size bed frame", price: "45,000" },
  { image: pic2, productName: "Neptune Lamp", detail: "Minimalist floor lamp", price: "7,500" },
  { image: pic3, productName: "Mars Cabinet", detail: "Compact storage unit", price: "18,000" },
  { image: pic, productName: "Venus Mirror", detail: "Wall-mounted mirror", price: "10,000" },
];

function Product() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Explore Our Products
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-10">
        {data.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <Image
              src={value.image}
              alt={value.productName}
              className="w-full h-[250px] object-cover"
              width={285}
              height={285}
            />
            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {value.productName}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{value.detail}</p>
              <h3 className="text-yellow-600 font-bold text-lg mt-4">
                PKR {value.price}
              </h3>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
