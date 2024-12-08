import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

function AboutUs() {
  return (
    <div className="bg-[#0D0D0DF2] w-[1920px] text-white">
      {/* About us main container */}
      <div className="w-[1320px] h-[562px]  ml-[300px]  flex">
        {/* Left Section */}
        <div className="w-[562px] h-[562] space-y-7">
          <p
            className={`${greatVibes.className} text-[32px] leading-10 text-primary`}
          >
            About us
          </p>
          <h2 className="font-bold text-5xl leading-[56px]">
            <span className="text-primary">We</span> Create the best foody
            product
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <div className="flex gap-3">
            <FaCheck className="mt-1" />
            <p className="text-[18px]">
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
          </div>

          <div className="flex gap-3">
            <FaCheck className="mt-1" />
            <p className="text-[18px]">
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </p>
          </div>

          <div className="flex gap-3">
            <FaCheck className="mt-1" />
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <button
            type="button"
            className="w-[190px] h-[60px] rounded-[30px] bg-primary"
          >
            Read More
          </button>
        </div>

        {/* Riht Section */}
        <div className="w-[660px] h-[495px] grid grid-cols-2 grid-rows-3  ml-24 gap-1">
          {/* 1st image */}
          <div className=" col-span-3 row-span-2">
            <Image src={"/AboutImg/Eggs.svg"} alt="" width={660} height={300} />
          </div>
          {/* 2nd image */}

          <div>
            <Image
              src={"/AboutImg/Sandwich.svg"}
              alt=""
              width={322}
              height={194}
            />
          </div>
          {/* 3rd image */}

          <div>
            <Image
              src={"/AboutImg/Burger.svg"}
              alt=""
              width={322}
              height={194}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
