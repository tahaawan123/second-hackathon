import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"




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
        <nav className="hidden w-full max-w-[1320px] mx-auto px-4 md:flex flex-col md:flex-row items-center justify-between text-white">
          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm md:text-base">
            <li className="relative">
            <Link href={"./"}>Home</Link>  
              <p className="w-[7px] h-[7px] bg-primary absolute left-1/2 transform -translate-x-1/2 mt-1 rounded-full"></p>
            </li>
            <li><Link href={"/Menu"}> Menu</Link></li>
            <li><Link href={"/BlogPage"}>Blog</Link></li>
            <li><Link href={"/Pages"}>Pages</Link></li>
            <li className="flex items-center">
            <Link href={"#"}>    About <FaAngleDown className="ml-1" />
            </Link>
            </li>
            <li><Link href={"/Shop"}>Shop</Link></li>
            <li><Link href={"/ContactPage"}>Contact</Link></li>
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
           <Link href={"/Cart"}> <PiHandbagBold className="w-6 h-6 mt-4" /></Link>
          </div>
        </nav>


         


          {/* Mobile Navigation Links */}

        
<div className="md:hidden absolute top-0 right-0 p-4">
<Sheet >
<SheetTrigger className="text-white"><RiMenu3Fill/> </SheetTrigger>
<SheetContent className="w-[200px] sm:w-[300px]">
<nav className=" space-y-8">
    <Link href="./" className="flex items-center space-x-2 hover:text-gray-400 transition">
      
      <span className="text-primary">Home</span>
    </Link>
    <Link href="/Menu" className="flex items-center space-x-2 hover:text-gray-400 transition">
      
      <span>Menu</span>
    </Link>
    <Link href="/BlogPage" className="flex items-center space-x-2 hover:text-gray-400 transition">
     
      <span>Blog</span>
    </Link>
    <Link href="/Pages" className="flex items-center space-x-2 hover:text-gray-400 transition">
      
      <span>Pages</span>
    </Link>
    <Link href="#" className="flex items-center space-x-2 hover:text-gray-400 transition">
      
      <span>About</span>
    </Link>
    <Link href="/Shop" className="flex items-center space-x-2 hover:text-gray-400 transition">
      
      <span>Shop</span>
    </Link>
    <Link href="/ContactPage" className="flex items-center space-x-2 hover:text-gray-400 transition">
      
      <span>Contact</span>
    </Link>
  </nav>

</SheetContent>
</Sheet>
</div>






      </header>
    </div>
  );
}

export default Header;
