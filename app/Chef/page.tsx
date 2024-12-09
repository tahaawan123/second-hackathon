import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Cheif() {
  return (
    <div className="w-[1920px] bg-[#0D0D0DF2] pt-[100px]">
      <div className="w-[1764px]  h-auto  ml-[100px]  text-white">
        <h1
          className={`${greatVibes.className}  ml-[790px] font-normal text-[32px] text-primary  `}
        >
          Chefs
        </h1>
        <h1 className="w-[420px] h-[56px] ml-[700px] text-center font-semibold text-[48px]">
          <span className="text-primary">Me</span>et Our Chef
        </h1>

        {/* main div of boxes */}

        <div className="flex gap-[15px] justify-center mt-[60px]">
          <div className="w-[312px] h-[391px] bg-gray-500 relative">
            <Image
              src={"Chef/Chef1.svg"}
              alt="cheif1"
              width={312}
              height={391}
            />
            <div className="w-[181px] h-[67px] mt-[10px]  rounded-[6px] bg-white absolute bottom-0">
              <p className="font-semibold text-[18px] text-[#333333] ml-[20px]">
                D.Estwood
              </p>
              <p className="text-[#333333] font-normal text-[14px] ml-[20px] mt-2">
                Chief Chef
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="w-[312px] h-[391px] bg-gray-500 relative">
            <Image
              src={"/Chef/Chef2.svg"}
              alt="cheif2"
              width={312}
              height={391}
            />
            <div className="w-[181px] h-[67px] mt-[10px]  rounded-[6px] bg-white absolute bottom-0">
              <p className="font-semibold text-[18px] text-[#333333] ml-[20px]">
                D.Estwood
              </p>
              <p className="text-[#333333] font-normal text-[14px] ml-[20px] mt-2">
                Chief Chef
              </p>
            </div>
          </div>
          {/* box 3 */}
          <div className="w-[312px] h-[391px] bg-gray-500 relative">
            <Image
              src={"Chef/Chef3.svg"}
              alt="cheif3"
              width={312}
              height={391}
            />
            <div className="w-[181px] h-[67px] mt-[10px]  rounded-[6px] bg-white absolute bottom-0">
              <p className="font-semibold text-[18px] text-[#333333] ml-[20px]">
                D.Estwood
              </p>
              <p className="text-[#333333] font-normal text-[14px] ml-[20px] mt-2">
                Chief Chef
              </p>
            </div>
          </div>
          {/* box 4 */}
          <div className="w-[312px] h-[391px] bg-gray-500 relative">
            <Image
              src={"/Chef/Chef4.svg"}
              alt="cheif4"
              width={312}
              height={391}
            />
            <div className="w-[181px] h-[67px] mt-[10px]  rounded-[6px] bg-white absolute bottom-0">
              <p className="font-semibold text-[18px] text-[#333333] ml-[20px]">
                D.Estwood
              </p>
              <p className="text-[#333333] font-normal text-[14px] ml-[20px] mt-2">
                Chief Chef
              </p>
            </div>
          </div>
        </div>
        {/* see more button */}

        <button className="w-[155px] h-[50px] rounded-[25px] border ml-[800px] mt-[50px] border-primary font-normal text-[16px]">
          See More
        </button>
      </div>
    </div>
  );
}
