"use client";

import { Award, ShieldCheck, Truck, Headphones } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-[#fef5ec] py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
        {/* High Quality */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <Award className="text-[#d3ad7f] w-12 h-12" />
          <h3 className="text-lg font-semibold text-[#111111]">High Quality</h3>
          <p className="text-sm text-[#666666] leading-5">
            Crafted from top materials
          </p>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <ShieldCheck className="text-[#d3ad7f] w-12 h-12" />
          <h3 className="text-lg font-semibold text-[#111111]">
            Warranty Protection
          </h3>
          <p className="text-sm text-[#666666] leading-5">Over 2 years</p>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <Truck className="text-[#d3ad7f] w-12 h-12" />
          <h3 className="text-lg font-semibold text-[#111111]">
            Free Shipping
          </h3>
          <p className="text-sm text-[#666666] leading-5">Order over 150 $</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <Headphones className="text-[#d3ad7f] w-12 h-12" />
          <h3 className="text-lg font-semibold text-[#111111]">
            24 / 7 Support
          </h3>
          <p className="text-sm text-[#666666] leading-5">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
