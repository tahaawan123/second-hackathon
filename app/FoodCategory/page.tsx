import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

function FoodCategory() {
  return (
    <div className="bg-[#0D0D0DF2] w-[1920px] text-white">
      <div className="w-[1320px] h-[489px] ml-[300px]">
        <div className="w-[446px]  m-auto text-center">
          <p className={`${greatVibes.className} text-[32px] text-primary`}>
          
            Food Category
          </p>
          <h3 className="text-5xl">Choose Food Iteam</h3>
        </div>

        {/* Food Items */}

        <div className="w-[1320px] h-[329px]  rounded-[6px] flex gap-5 mt-14 ">
          {/* 1st item */}
          <div className="relative w-[305px] h-[328px]">
            {/* Image */}
            <Image
              src={"/FoodCategory/Item1.svg"}
              width={305}
              height={328}
              alt="eggs"
            />

            {/* Save 30% */}
            <p className="absolute bottom-44 left-20 w-[125px] h-10 rounded-[6px] bg-white text-primary text-[18px] p-2 text-center">
              Save 30%
            </p>

            {/* Fast Food Dish */}
            <p className="absolute bottom-28   w-[206px] h-[46px] rounded-[6px] bg-primary text-white text-5 p-3 text-center">
              Fast Food Dish
            </p>
          </div>

          {/* 2nd item */}
          <div>
            <Image
              src={"/FoodCategory/Item2.svg"}
              width={306}
              height={329}
              alt="burger"
            />
          </div>

          {/* 3rd item */}
          <div>
            <Image
              src={"/FoodCategory/Item3.svg"}
              width={306}
              height={329}
              alt="chat"
            />
          </div>

          {/* 4rth item */}
          <div>
            <Image
              src={"/FoodCategory/Item4.svg"}
              width={306}
              height={329}
              alt="donet"
            />
          </div>
        </div>
      </div>







      
    </div>
  );
}

export default FoodCategory;
