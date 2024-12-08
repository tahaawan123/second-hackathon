import React from "react";
import Image from "next/image";
import { PiHamburgerThin } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { PiWine } from "react-icons/pi";

import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

function WhyChoseUs() {
  return (
    <div className="bg-[#0D0D0DF2] w-[1920px] h-auto text-white pt-28">
      {/* why chose us container */}
      <div className="w-[1320px] h-[710px] ml-[300px] flex">
        {/* left side */}

        <div className="w-[650px] h-[700px] grid grid-cols-3 grid-rows-3 gap-4">
          {/* 1st imange */}
          <div className="col-span-2 row-span-1">
            <Image
              src={"/ChoseUs/FirstImg.svg"}
              alt="img1"
              width={362}
              height={356}
            />
          </div>
          {/* 2nd imange */}
          <div className="row-span-2 ">
            <Image
              src={"/ChoseUs/SecondImg.svg"}
              alt="img2"
              width={281}
              height={231}
            />
          </div>
          {/* 3rd imange */}
          <div className="">
            <Image
              src={"/ChoseUs/ThirdImg.svg"}
              alt="img3"
              width={244}
              height={306}
            />
          </div>
          {/* 4rth imange */}
          <div className="">
            <Image
              src={"/ChoseUs/FourthImg.svg"}
              alt="img4"
              width={221}
              height={226}
            />
          </div>{" "}
          {/* 5th imange */}
          <div className="">
            <Image
              src={"/ChoseUs/FifthImg.svg"}
              alt="img5"
              width={161}
              height={168}
            />
          </div>
          {/* 6th imange */}
          <div className="col-span-1">
            <Image
              src={"/ChoseUs/SixthImg.svg"}
              alt="img6"
              width={161}
              height={166}
            />
          </div>
        </div>

        {/* right side */}
        <div className="w-[526px] h-auto ml-28 space-y-7">
          <p className={`${greatVibes.className} text-[32px] text-primary`}>Why Choose us</p>
          <h3 className="text-[48px] font-bold">
            <span className="text-primary">Ex</span>ta ordinary taste And
            Experienced
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
        
          {/* Icons Main Div */}
          <div className="w-[374px] h-auto flex justify-between items-center gap-4">
            {/* 1st Icon */}
            <div className="flex flex-col items-center">
              <div className="w-[102px] h-[100px] bg-primary flex justify-center items-center rounded-[6px]">
                <PiHamburgerThin className="w-[56px] h-[56px]" />
              </div>
              <p className="text-[18px] mt-2">Fast Food</p>
            </div>

            {/* 2nd Icon */}
            <div className="flex flex-col items-center">
              <div className="w-[102px] h-[100px] bg-primary flex justify-center items-center rounded-[6px]">
                <PiCookieLight className="w-[56px] h-[56px]" />
              </div>
              <p className="text-[18px] mt-2">Cookies</p>
            </div>

            {/* 3rd Icon */}
            <div className="flex flex-col items-center">
              <div className="w-[102px] h-[100px] bg-primary flex justify-center items-center rounded-[6px]">
                <PiWine className="w-[56px] h-[56px]" />
              </div>
              <p className="text-[18px] mt-2">Drinks</p>
            </div>
          </div>

               <div className="w-[374px] h-[92px] rounded-[6px] bg-white border-l-[6px] border-primary flex pt-4 pl-8">
               <p className="text-primary font-bold text-5xl ">30+</p>
                  <div className="text-black ml-5">
                    <p className="text-[20px">Years of</p>
                    <p className="font-bold text-[24px] text-black">Experienced</p>
                  </div>
               </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoseUs;
