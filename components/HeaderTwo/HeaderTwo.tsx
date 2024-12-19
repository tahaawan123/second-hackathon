import React from "react";
import Link from "next/link";
import { CiUser, CiSearch } from "react-icons/ci";
import { PiHandbagBold } from "react-icons/pi";

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
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/Pages">Pages</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Shop">Shop</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>

        
           
          

          {/* Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <CiSearch className="w-6 h-6" />
            <CiUser className="w-6 h-6" />
            <PiHandbagBold className="w-6 h-6" />
          </div>
        </nav>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col gap-4 text-sm mt-4 text-white md:hidden">
          <li className="text-primary">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Menu">Menu</Link>
          </li>
          <li>
            <Link href="/Blog">Blog</Link>
          </li>
          <li>
            <Link href="/Pages">Pages</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default HeaderTwo;
