import Image from "next/image";

import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
export default function Latest() {
  return (
    <div className="w-[1920px] bg-[#0D0D0DF2] pt-[100px]">
      <div className="w-[1320px] h-[732px]  ml-[300px] ">
        <p className="text-primary font-normal text-[32px] text-center">
          Blog Post
        </p>
        <h1 className=" text-center font-bold text-[48px] text-white">
          {" "}
          <span className="text-primary">La</span>test News & Blog
        </h1>

        {/* boxes */}
        <div className="flex gap-[23px] mt-[50px]">
          <div className="w-[424px] h-[569px] ">
            <Image
              src={"/Blog/Burger.svg"}
              alt="burger"
              width={423}
              height={349}
            />
            <p className="text-primary mt-[10px] font-normal text-[16px]">
              10 February 2022{" "}
            </p>
            <p className="font-bold mt-[15px] text-[24px] text-[#FFFFFF]">
              Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </p>
            <div className="flex justify-between">
              <p className="mt-[20px] font-normal text-[20px] text-[#FFFFFF]">
                Learn More
              </p>
              <div className="flex gap-[10px] mt-[20px] mr-[40px] text-[white]">
                <AiOutlineLike className="w-[30px] h-[30px] " />
                <LuMessageSquareMore className="w-[30px] h-[30px] text-primary" />
                <CiShare2 className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>

          {/* box 2 */}
          <div className="w-[424px] h-[569px] ">
            <Image
              src={"/Blog/Pizza.svg"}
              alt="burger"
              width={423}
              height={349}
            />

            <p className="text-primary mt-[10px] font-normal text-[16px]">
              10 February 2022{" "}
            </p>
            <p className="font-bold mt-[15px] text-[24px] text-[#FFFFFF]">
              Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
            </p>
            <div className="flex justify-between">
              <p className="mt-[20px] font-normal text-[20px] text-[#FFFFFF]">
                Learn More
              </p>
              <div className="flex gap-[10px] mt-[20px] mr-[40px] text-[white]">
                <AiOutlineLike className="w-[30px] h-[30px] " />
                <LuMessageSquareMore className="w-[30px] h-[30px] text-primary" />
                <CiShare2 className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
          {/* box 3 */}
          <div className="w-[424px] h-[569px] ">
            <Image
              src={"/Blog/Curabitur.svg"}
              alt="burger"
              width={423}
              height={349}
            />

            <p className="text-primary mt-[10px] font-normal text-[16px]">
              10 February 2022{" "}
            </p>
            <p className="font-bold mt-[15px] text-[24px] text-[#FFFFFF]">
              Curabitur rutrum velit ac congue malesuada
            </p>
            <div className="flex justify-between">
              <p className="mt-[20px] font-normal text-[20px] text-[#FFFFFF]">
                Learn More
              </p>
              <div className="flex gap-[10px] mt-[20px] mr-[40px] text-[white]">
                <AiOutlineLike className="w-[30px] h-[30px] " />
                <LuMessageSquareMore className="w-[30px] h-[30px] text-primary" />
                <CiShare2 className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
