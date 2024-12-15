import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div>
      {/* Herosection main container */}
      <div className="bg-[#0D0D0DF2] w-full h-auto flex flex-col md:flex-row text-white">
        {/* left Side main container */}
        <div className="flex justify-center md:ml-[242px] py-10 md:py-0">
          {/* Social icons  */}
          <div className="w-[26px] h-auto flex flex-col justify-between items-center pt-10 md:pt-44 gap-9">
            {/* border */}
            <div className="border h-[50px] md:h-[158px]"></div>
            <div className="text-white space-y-4 md:space-y-7">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
            </div>
            <div className="border h-[50px] md:h-[158px]"></div>
          </div>
        </div>

        {/* content */}
        <div className="w-full md:w-[500px] h-auto mt-5 md:mt-[250px] px-5 space-y-5">
          <p className={`${greatVibes.className} text-[18px] md:text-[32px] text-primary text-center md:text-left`}>
            Its Quick & Amusing!
          </p>
          {/* Heading */}
          <h1 className="text-[24px] md:text-[60px] font-bold leading-[28px] md:leading-[68px] text-center md:text-left">
            <span className="text-primary">Th</span>e Art of speed food Quality
          </h1>
          {/* paragraph */}
          <p className="text-xs md:text-base text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="w-[120px] md:w-[190px] h-[40px] md:h-[60px] bg-primary rounded-[20px] md:rounded-[30px]"
            >
              See Menu
            </button>
          </div>
        </div>

        {/* right side container */}
        <div className="flex justify-center mt-5 md:mt-[170px] md:ml-[150px]">
          <Image
            src={"/HeroImg/FirstFood.svg"}
            alt="Food"
            width={877}
            height={670}
            className="w-[300px] md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
