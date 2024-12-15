import React from "react";
import Image from "next/image";

import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const Manu = () => {
  return (
    <div className="bg-[#0D0D0DF2] pt-10 text-white">
      {/* Menu container */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <p
          className={`${greatVibes.className} text-2xl text-primary text-center`}
        >
          Choose & pick
        </p>
        <h3 className="font-bold text-3xl md:text-5xl text-center mt-2">
          <span className="text-primary">Fr</span>om Our Menu
        </h3>

        {/* List */}
        <ul className="flex flex-wrap justify-center gap-4 mt-8 text-sm md:text-base">
          <li className="font-bold text-primary">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
          <li>Snack</li>
          <li>Soups</li>
        </ul>

        {/* Both sides */}
        <div className="flex flex-wrap md:flex-nowrap mt-10 gap-6 items-center">
          {/* Right Side Image */}
          <div className="w-full md:w-auto flex justify-center">
            <Image
              src={"/Manu/ManuImage.svg"}
              alt="Dish"
              width={366}
              height={362}
              className="rounded-full"
            />
          </div>

          {/* Left Side Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Example Box */}
            {[
              {
                img: "/Manu/Manu1.svg",
                title: "Lettuce Leaf",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "12.5$",
              },
              {
                img: "/Manu/Manu2.svg",
                title: "Fresh Breakfast",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "14.5$",
              },
              {
                img: "/Manu/Manu3.svg",
                title: "Mild Butter",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "12.5$",
              },
              {
                img: "/Manu/Manu4.svg",
                title: "Fresh Bread",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "12.5$",
              },
              {
                img: "/Manu/Manu5.svg",
                title: "Glow Cheese",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "12.5$",
              },
              {
                img: "/Manu/Manu6.svg",
                title: "Italian Pizza",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "14.5$",
              },
              {
                img: "/Manu/Manu7.svg",
                title: "Slice Beef",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "12.5$",
              },
              {
                img: "/Manu/Manu8.svg",
                title: "Mushroom Pizza",
                desc: "Lacus nisi, et ac dapibus velit in consequat.",
                price: "12.5$",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Image src={item.img} alt={item.title} width={80} height={79} />
                <div className="ml-4">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                  <p className="text-primary font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manu;
