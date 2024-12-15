import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

function FoodCategory() {
  return (
    <div className="bg-[#0D0D0DF2] w-full text-white">
      <div className="w-full max-w-[1320px] px-5 md:px-10 mx-auto">
        {/* Header Section */}
        <div className="w-full text-center mb-10">
          <p className={`${greatVibes.className} text-[24px] md:text-[32px] text-primary`}>Food Category</p>
          <h3 className="text-2xl md:text-5xl">Choose Food Iteam</h3>
        </div>

        {/* Food Items */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
          {/* 1st item */}
          <div className="relative w-full h-auto">
            {/* Image */}
            <Image
              src={"/FoodCategory/Item1.svg"}
              width={305}
              height={328}
              alt="eggs"
              className="w-full h-auto rounded-md"
            />

            {/* Save 30% */}
            <p className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-[125px] h-10 rounded-md bg-white text-primary text-sm md:text-[18px] p-2 text-center">
              Save 30%
            </p>

            {/* Fast Food Dish */}
            <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[206px] h-[46px] rounded-md bg-primary text-white text-xs md:text-base p-3 text-center">
              Fast Food Dish
            </p>
          </div>

          {/* 2nd item */}
          <div className="w-full h-auto">
            <Image
              src={"/FoodCategory/Item2.svg"}
              width={306}
              height={329}
              alt="burger"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* 3rd item */}
          <div className="w-full h-auto">
            <Image
              src={"/FoodCategory/Item3.svg"}
              width={306}
              height={329}
              alt="chat"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* 4th item */}
          <div className="w-full h-auto">
            <Image
              src={"/FoodCategory/Item4.svg"}
              width={306}
              height={329}
              alt="donet"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCategory;
