import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div>
      {/* Herosection main container */}
      <div className="bg-[#0D0D0DF2] w-[1920px] h-[950px] flex text-white ">
        {/* left Side main container */}

        <div className="ml-[242px] ">
          {/* Social icons  */}
          <div className="w-[26px] h-auto flex flex-col justify-between items-center pt-44 gap-9">
            {/* border */}
            <div className="border h-[158px] "></div>
            <div className="text-white space-y-7">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
            </div>
            <div className="border h-[158px]"></div>
          </div>
        </div>
        {/* content */}
        <div className="w-[472px] h-[356px] mt-[250px] ml-10 space-y-5">
          <p className={`${greatVibes.className} text-[32px] text-primary`}>
            Its Quick & Amusing!
          </p>
          {/* Heading */}
          <h1 className="text-[60px] font-bold leading-[68px]">
            <span className="text-primary">Th</span>e Art of speed food Quality
          </h1>
          {/* paragraph */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>

          <button
            type="button"
            className="w-[190px] h-[60px] bg-primary rounded-[30px]"
          >
            See Menu
          </button>
        </div>
        {/* right side  container */}
        <div className="mt-[170px] ml-20">
          <Image src={"/HeroImg/FirstFood.svg"} alt="Food" width={877} height={670} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
