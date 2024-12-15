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
  
    <div className="bg-[#0D0D0DF2] w-full h-auto text-white py-52 ">
      {/* why chose us container */}
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row px-4 lg:px-0">
        {/* left side */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {/* 1st image */}
          <Image
            src={"/ChoseUs/FirstImg.svg"}
            alt="img1"
            width={362}
            height={356}
            className="w-full h-auto"
          />

          {/* 2nd image */}
          <Image
            src={"/ChoseUs/SecondImg.svg"}
            alt="img2"
            width={281}
            height={231}
            className="w-full h-auto"
          />

          {/* 3rd image */}
          <Image
            src={"/ChoseUs/ThirdImg.svg"}
            alt="img3"
            width={244}
            height={306}
            className="w-full h-auto"
          />

          {/* 4th image */}
          <Image
            src={"/ChoseUs/FourthImg.svg"}
            alt="img4"
            width={221}
            height={226}
            className="w-full h-auto"
          />

          {/* 5th image */}
          <Image
            src={"/ChoseUs/FifthImg.svg"}
            alt="img5"
            width={161}
            height={168}
            className="w-full h-auto"
          />

          {/* 6th image */}
          <Image
            src={"/ChoseUs/SixthImg.svg"}
            alt="img6"
            width={161}
            height={166}
            className="w-full h-auto"
          />
         </div>

        {/* right side */}
        <div className="lg:ml-28 mt-10 lg:mt-0 w-full lg:w-[526px] space-y-7">
          <p className={`${greatVibes.className} text-[32px] text-primary`}>Why Choose us</p>
          <h3 className="text-[36px] lg:text-[48px] font-bold">
            <span className="text-primary">Ex</span>traordinary taste And
            Experienced
          </h3>

          <p className="text-[16px] lg:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Icons Main Div */}
          <div className="flex justify-between items-center gap-4 flex-wrap">
            {/* 1st Icon */}
            <div className="flex flex-col items-center">
              <div className="w-[102px] h-[100px] bg-primary flex justify-center items-center rounded-[6px]">
                <PiHamburgerThin className="w-[56px] h-[56px]" />
              </div>
              <p className="text-[14px] lg:text-[18px] mt-2">Fast Food</p>
            </div>

            {/* 2nd Icon */}
            <div className="flex flex-col items-center">
              <div className="w-[102px] h-[100px] bg-primary flex justify-center items-center rounded-[6px]">
                <PiCookieLight className="w-[56px] h-[56px]" />
              </div>
              <p className="text-[14px] lg:text-[18px] mt-2">Cookies</p>
            </div>

            {/* 3rd Icon */}
            <div className="flex flex-col items-center">
              <div className="w-[102px] h-[100px] bg-primary flex justify-center items-center rounded-[6px]">
                <PiWine className="w-[56px] h-[56px]" />
              </div>
              <p className="text-[14px] lg:text-[18px] mt-2">Drinks</p>
            </div>
          </div>

          <div className="w-full sm:w-[300px] lg:w-[374px] h-[92px] rounded-[6px] bg-white border-l-[6px] border-primary flex items-center pl-6 sm:pl-8 mt-4">
  <p className="text-primary font-bold text-[24px] sm:text-[30px] lg:text-[40px]">
    30+
  </p>
  <div className="text-black ml-4 sm:ml-5">
    <p className="text-[14px] sm:text-[16px] lg:text-[20px]">Years of</p>
    <p className="font-bold text-[16px] sm:text-[20px] lg:text-[24px]">Experienced</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default WhyChoseUs;