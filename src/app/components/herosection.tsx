import Image from "next/image";
import bgpic from "../../../public/a11f805aade2224f1d6658764a2395df.jpeg";

function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <Image
        src={bgpic}
        alt="background pic"
        className="absolute inset-0 w-full h-[90%] object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto flex items-center justify-end h-full px-6 md:px-10">
        <div className="bg-yellow-100/90 p-6 md:p-10 rounded-lg shadow-lg max-w-md">
          <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
            New Arrival
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 leading-tight mt-2">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
