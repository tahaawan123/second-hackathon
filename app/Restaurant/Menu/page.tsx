import React from "react";
import Image from "next/image";

import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const Manu = () => {
  return (
    <div className="w-[1920px] bg-[#0D0D0DF2] pt-[100px] text-white">
      {/* Menu container */}
      <div className="w-[1320px] ml-[300px] h-[656px] ">
        <p
          className={`${greatVibes.className} text-[32px] text-primary text-center`}
        >
          Choose & pick
        </p>
        <h3 className="font-bold text-5xl text-center">
          <span className="text-primary">Fr</span>om Our Menu
        </h3>
        {/* list */}
        <ul className="w-[1056px] flex space-x-32 mt-12">
          <li className="font-bold text-[20px] text-primary">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
          <li>Snack</li>
          <li>Suops</li>
        </ul>

        {/*  both side  */}
        <div className="flex mt-11">
          {/* Right Side Image */}
          <div>
            <Image
              src={"/Manu/ManuImage.png"}
              alt="Dish"
              width={366}
              height={362}
              className="rounded-[50%]"
            />
          </div>

          {/* left side container */}

          {/* {/* main box  */}

          <div className="ml-20 grid grid-cols-2 h-auto gap-6">
            {/* box1 */}
            <div className="w-[367px] h-[79px] flex">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu1.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>

            {/* box2 */}
            <div className="w-[367px] h-[79px] flex">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu2.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>

            {/* box3 */}
            <div className="w-[367px] h-[79px] flex">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu3.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>

            {/* box4 */}
            <div className="w-[367px] h-[79px] flex">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu4.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>

            {/* box5 */}
            <div className="w-[367px] h-[79px] flex ">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu5.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>

            {/* box6 */}
            <div className="w-[367px] h-[79px] flex">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu6.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>

            {/* box7 */}
            <div className="w-[367px] h-[79px] flex">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu7.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>

            {/* box8 */}
            <div className="w-[367px] h-[79px] flex">
              {/* image div */}
              <div>
                <Image
                  src={"/Manu/Manu8.svg"}
                  alt="pic1"
                  width={80}
                  height={79}
                />
              </div>
              {/* content */}
              <div className="ml-5">
                <p className="font-bold text-[20px]">Lettuce Leaf</p>
                <p className="text-[14px]">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[18px] font-bold text-primary">12.5$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manu;
