import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";

function Header() {
  return (
    <div className="w-full bg-[#0D0D0DF2]">
      <header>
        {/* Logo Centered */}
        <div className="w-full text-center py-4 text-white">
          <p className="text-2xl">
            <span className="text-primary">Food</span>tuck
          </p>
        </div>

        {/* Navbar */}
        <nav className="w-full max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm md:text-base">
            <li className="relative">
              Home
              <p className="w-[7px] h-[7px] bg-primary absolute left-1/2 transform -translate-x-1/2 mt-1 rounded-full"></p>
            </li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Pages</li>
            <li className="flex items-center">
              About <FaAngleDown className="ml-1" />
            </li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>

          {/* Search and Icons */}
          <div className="sm:flex items-center gap-4 mt-4 md:mt-0 flex-none">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="h-[40px] pl-4 pr-10 rounded-[20px] border border-primary bg-transparent placeholder-white w-[200px] sm:w-[300px]"
              />
              <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white" />
            </div>
            {/* Cart Icon */}
            <PiHandbagBold className="w-6 h-6 mt-4" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
