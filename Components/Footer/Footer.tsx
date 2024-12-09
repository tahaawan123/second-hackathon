import Image from "next/image";

import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImYoutube,
  ImPinterest,
} from "react-icons/im";
import { PiClockClockwise } from "react-icons/pi";
export default function Footer() {
  return (
    <div>
      {/* main div of footer */}
      <div className="w-[1923px] h-[740px]  pt-[200px] bg-[#0D0D0DF2] ">
        {/* div of still need and email box */}

        <div className="w-[1170px] h-[142px] justify-between  ml-[300px]  flex">
          <div className="w-[439px] h-[80px]">
            <p className="font-bold text-[32px] text-[#FFFFFF]">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our Support
              ?
            </p>
            <p className="font-normal text-[16px] text-[#FFFFFF]">
              Dont wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          {/* rigthside emailbox */}
          <div className="flex">
            <input
              type="text"
              placeholder=" Enter Your Email"
              className="w-[400px] h-[56px] rounded-[5px] bg-[#FF9F0D] placeholder-white "
            />
            <button className="w-[115px] h-[56px] mb-[20px]  bg-white  text-[#FF9F0D]">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="w-[1170px] ml-[300px] border border-[#FF9F0D]"></div>

        {/* boxes */}
        <div className="flex justify-center items-center gap-[90px] mt-[20px] mr-[60px]">
          <div className="w-[285px] h-[250px] ">
            <p className="font-semibold text-[24px] text-white">About Us.</p>
            <p className="w-[312px] text-white font-normal text-[16px]">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="flex mt-4">
              <div className="bg-primary w-[78px] h-[72px] text-white pt-4 pl-4">
                <PiClockClockwise className="w-10 h-10 " />
              </div>
              <p className="text-white text-[14px] ml-3">
                Opening Houres <br />
                Mon - Sat(8.00 - 6.00)
                <br />
                Sunday - Closed
              </p>
            </div>
          </div>
          {/* second box */}
          <div className="w-[143px] h-[367px] ">
            <div className="gap-[10px]">
              <h2 className="font-semibold text-Regular leading-[24px] text-white mt-4 text-[24px] pt-[20px]">
                Useful Links
              </h2>
              <ul className="text-[20px] text-white">
                <li className="w-[250px] h-[37px] pt-[30px] ">About</li>

                <li className="w-[250px] h-[37px] pt-[30px] ">News</li>

                <li className="w-[250px] h-[37px] pt-[30px] ">Partners</li>

                <li className="w-[250px] h-[37px] pt-[30px] ">Team</li>

                <li className="w-[250px] h-[37px] pt-[30px] ">Menu</li>

                <li className="w-[250px] h-[37px] pt-[30px] ">Contacts</li>
              </ul>
            </div>
          </div>
          <div className="w-[170px] h-[363px] ">
            <div className="gap-[10px]">
              <h2 className="font-semibold text-Regular leading-[24px] text-white mt-4 text-[24px] pt-[20px]">
                Help?
              </h2>
              <ul className="text-[20px] text-white">
                <li className="w-[250px] h-[37px] pt-[30px] ">FAQ</li>

                <li className="w-[250px] h-[37px] pt-[30px] ">
                  Term & Conditions
                </li>

                <li className="w-[250px] h-[37px] pt-[30px] ">Reporting</li>

                <li className="w-[250px] h-[37px] pt-[30px] ">
                  {" "}
                  Documentation
                </li>

                <li className="w-[250px] h-[37px] pt-[30px] ">
                  Support Policy
                </li>

                <li className="w-[250px] h-[37px] pt-[30px] ">Privacy</li>
              </ul>
            </div>
          </div>
          <div className="w-[244px] h-[250px] ">
            <p className="font-semibold text-[24px] gap-[60px] text-white">
              Recent Post
            </p>
            <div className="w-[244px] h-auto flex text-white pt-[10px]">
              <Image
                src={"/FooterImg/Business1.svg"}
                alt="pic"
                width={55}
                height={47}
              />
              <div className="w-[168px] h-[53px]">
                <p className="ml-2 text-[16px] text-gray-400">20 Feb 2022</p>
                <p className="ml-2">Keep Your Business </p>
              </div>
            </div>

            {/* 2 */}
            <div className="w-[244px] h-[53px]  flex text-white">
              <Image
                src={"/FooterImg/Business2.svg"}
                alt="pic"
                width={55}
                height={47}
              />
              <div className="w-[168px] h-[53px]">
                <p className="ml-2 text-[16px] text-gray-400">20 Feb 2022</p>
                <p className="ml-2">Keep Your Business </p>
              </div>
            </div>
            {/* 3 */}
            <div className="w-[244px] h-[53px]  flex text-white">
              <Image
                src={"/FooterImg/Business3.svg"}
                alt="pic"
                width={55}
                height={47}
              />
              <div className="w-[168px] h-[53px]">
                <p className="ml-2 text-[16px] text-gray-400">20 Feb 2022</p>
                <p className="ml-2 text-white">Keep Your Business </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last yellow foot */}
      <div className="w-[1920px] h-[100px] bg-[#FF9F0D] ">
        <p className="w-[384px] h-[24px] ml-[200px] pt-[40px] font-normal text-[16px] text-white">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>

        <div className="flex gap-4 ml-[65%] mb-[30px]">
          <div className="w-[36px] h-[34px] rounded-[2px] bg-white">
            <ImFacebook className="ml-2 mt-2" />
          </div>
          <div className="w-[36px] h-[34px] rounded-[2px] bg-white">
            <ImTwitter className="ml-2 mt-2" />
          </div>
          <div className="w-[36px] h-[34px] rounded-[2px] bg-white">
            <ImInstagram className="ml-2 mt-2" />
          </div>
          <div className="w-[36px] h-[34px] rounded-[2px] bg-white">
            <ImYoutube className="text-yellow-400 ml-2 mt-2" />
          </div>
          <div className="w-[36px] h-[34px] rounded-[2px] bg-white">
            <ImPinterest className="ml-2 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
