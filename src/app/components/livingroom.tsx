import Image from "next/image";
import diningpic from "../../../public/4bdba3a6bef9d68df2d9a06e32e96c61.png";
import livingpic from "../../../public/ec6e291e21c9694ce22e6c5b50d777fe.png";
import bedroompic from "../../../public/f3961ca2b1edab00f7a7640b3c2ed666.png";

function Livingarea() {
  return (
    <section className="container mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-black text-2xl sm:text-3xl font-bold">
          Browse The Range
        </h1>
        <p className="text-[#666666] font-medium text-lg sm:text-xl mt-2">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10 lg:px-20">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src={diningpic}
            alt="Dining Room"
            className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-[22px] mt-3 font-bold text-center">Dining</h2>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src={livingpic}
            alt="Living Room"
            className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
          />
           <h2 className="text-[22px] mt-3 font-bold text-center">Living</h2>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src={bedroompic}
            alt="Bedroom"
            className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
          />
           <h2 className="text-[22px] mt-3 font-bold text-center">Bedroom</h2>
        </div>
      </div>
    </section>
  );
}

export default Livingarea;
