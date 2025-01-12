import React from "react";
import Link from "next/link";
import { CiUser, CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { RiMenu3Fill } from "react-icons/ri";


function HeaderTwo() {
  return (
    <div className="w-full bg-black pt-6">
      <header>
        {/* Navbar */}
        <nav className="w-full max-w-[1320px] mx-auto px-4 flex flex-wrap justify-between items-center text-white">
          {/* Logo */}
          <div className="py-4 text-white">
            <p className="text-2xl">
              Food <span className="text-primary">tuck</span>
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex flex-row gap-4 text-sm md:text-base">
            <li className="text-primary">
              <Link href="/">Home</Link>
            </li>
            <li>

              <Link href="/Menu">Menu</Link>
            </li>
            <li>
              <Link href="/BlogPage">Blog</Link>
            </li>
            <li>
              <Link href="/Pages">Pages</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="/Shop">Shop</Link>
            </li>
            <li>
              <Link href="/ContactPage">Contact</Link>
            </li>
          </ul>

        
           
          

          {/* Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <CiSearch className="w-6 h-6" />
            <CiUser className="w-6 h-6" />
         <Link href={"/Cart"}><PiHandbagBold className="w-6 h-6" /></Link>
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

export default HeaderTwo;
