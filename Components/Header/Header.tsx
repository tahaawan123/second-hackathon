import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";

function Header() {
  return (
    <div>
      <header>
        {/* navbar */}

        <nav className="w-[1320px] h-[87px] ml-[300px] mt-[45px]  text-white absolute">
          <p className="ml-[700px] text-2xl ">
            <span className="text-primary">Food</span>tuck
          </p>
          <div className="w-auto h-[38px] flex ">
            <div className="w-[675px] h-6 mt-[6px]">
              <ul className="flex gap-12 ">
                <li>
                  Home{" "}
                  <p className="w-[7px] h-[7px] bg-primary ml-4 rounded-full"></p>{" "}
                </li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Pages</li>
                <li className="flex">
                  About <FaAngleDown className="mt-2" />
                </li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* searchbar*/}
            <div className="w-[370px] h-[54px] relative ml-56">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full pl-4 pr-12 rounded-[27px] border border-primary focus:outline-none bg-transparent placeholder-white text-white"
              />

              {/* Search Icon */}
              <CiSearch className="absolute w-6 h-6 top-1/2 right-4 transform -translate-y-1/2 text-white" />
            </div>
            <PiHandbagBold className="w-6 h-6 ml-2 mt-4" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
