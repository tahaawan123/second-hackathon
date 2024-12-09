import Image from "next/image"



import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});


import { LiaQuoteRightSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";

export default function Client(){
    return(
        <div className="bg-[#0D0D0DF2] w-[1920px] pt-[100px]">
            <div className="w-[1273px] h-[770px]  ml-[350px] ">
                <p className={`${greatVibes.className} text-primary font-normal text-[32px]`}>Testimonials</p>
                <p className="font-semibold text-[48px] text-white">What our client are saying</p>
                 
                


                <div className="w-[868px] h-[450px] mt-[130px] ml-[215px] bg-[#FFFFFF] ">
                <Image src={"/Client/Client.svg"} alt="pic" width={132} height={133} className=" ml-[350px]"/>
                <LiaQuoteRightSolid  className="ml-[390px]  text-primary mt-[20px] w-[50px] h-[40px]"/>
                <p className="w-[696px] h-[103px] mt-[20px] ml-[100px] text-[#4F4F4F] text-[18px] text-center font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                  <div className="text-primary flex ml-[390px] mt-[30px] gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-[#E0E0E0]"/>
                  </div>
                  <p  className="text-center font-semibold text-[24px] ml-4 text-[#333333]">Alamin Hasan</p>
                  <p className="text-center text-[#828282] font-normal text-[16px]">Food Specialist</p>
                </div>

            </div>
      </div>
)
}