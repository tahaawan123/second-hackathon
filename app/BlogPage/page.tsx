import React from "react";
import HeaderTwo from "@/components/HeaderTwo/HeaderTwo";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div>
      <HeaderTwo />
      {/* Hero Image */}
      <div className="relative">
        <Image
          src={"/Hero2/Hero2.svg"}
          alt="pic"
          height={410}
          width={1920}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px]">
          {/* Title */}
          <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
            Our Menu
          </h1>

          {/* Breadcrumb Navigation */}
          <ul className="flex gap-2 justify-center text-xs sm:text-sm md:text-base mt-2 text-white">
            <li>
              <Link href={"./"}>Home</Link>
            </li>
            <li className="flex items-center">
              <FaAngleRight />
            </li>
            <li>
              <Link href={"/BlogPage"} className="text-primary">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main div */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Side Div */}
        <div className="w-full lg:w-2/3 p-4">
          {/* Blog1 */}
          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/BlogPageImage/image1.svg"}
                alt="image1"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-primary absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-primary w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-primary w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-primary w-6 h-6" />
              Admin
            </div>
            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              10 Reasons To Do A Digital Detox Challenge
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <button
              type="button"
              className="text-primary border border-primary w-full lg:w-[100px] h-10 mt-6"
            >
              Read More
            </button>
          </div>

          {/* Blog2 */}

          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/BlogPageImage/image2.svg"}
                alt="image2"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-primary absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons  */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-primary w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-primary w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-primary w-6 h-6" />
              Admin
            </div>

            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              Traditional Soft Pretzels with Sweet Beer Cheese
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <button
              type="button"
              className="text-primary border border-primary w-full lg:w-[100px] h-10 mt-6"
            >
              Read More
            </button>
          </div>

          {/* Blog3 */}
          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/BlogPageImage/image3.svg"}
                alt="image3"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-primary absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons  */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-primary w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-primary w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-primary w-6 h-6" />
              Admin
            </div>

            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              The Ultimate Hangover Burger: Egg in a Hole Burger
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <button
              type="button"
              className="text-primary border border-primary w-full lg:w-[100px] h-10 mt-6"
            >
              Read More
            </button>
          </div>

          {/* Blog4 */}

          <div className="w-full max-w-[872px] h-auto lg:h-[830px] mx-auto mt-8 lg:mt-10 px-4">
            <div className="relative">
              <Image
                src={"/BlogPageImage/image4.svg"}
                alt="image3"
                width={871}
                height={520}
                className="w-full h-auto"
              />
              {/* Date */}
              <div className="w-[60px] h-[60px] rounded-md bg-primary absolute top-4 left-4">
                <p className="text-[18px] font-bold text-white w-[28px] ml-4">
                  14 Feb
                </p>
              </div>
            </div>
            {/* icons  */}
            <div className="flex text-[#4F4F4F] gap-3 mt-3">
              <IoCalendarNumberOutline className="text-primary w-6 h-6" />
              Feb 14, 2022 /
              <TbMessages className="text-primary w-6 h-6" />
              3 /
              <PiUserCirclePlusLight className="text-primary w-6 h-6" />
              Admin
            </div>

            {/* Heading */}
            <h5 className="font-bold text-[#333333] mt-5">
              My Favorite Easy Black Pizza Toast Recipe
            </h5>

            {/* line */}
            <div className="w-full lg:w-[694px] border mt-5"></div>

            {/* Paragraph */}
            <p className="w-full lg:w-[648px] text-[#4F4F4F] mt-5">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </p>

            <button
              type="button"
              className="text-primary border border-primary w-full lg:w-[100px] h-10 mt-6"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Right Side */}
        {/* main container */}
        <div className="w-full px-4 mt-8">
          {/* Searchbar */}
          <div className="max-w-md w-full flex border">
            <input
              type="text"
              placeholder="Search Your Keyword"
              className="flex-grow p-2"
            />
            <div className="w-16 h-16 bg-primary text-white flex justify-center items-center">
              <CiSearch className="w-6 h-6" />
            </div>
          </div>

          {/* Blogger/Photographer */}
          <div className="bg-white border max-w-md w-full mt-4 p-4">
            <div className="flex flex-col items-center">
              <Image
                src="/BlogPageImage/BloggerPerson.svg"
                alt="Client"
                width={147}
                height={128}
                className="w-32 h-32 rounded-full"
              />
              <p className="text-[#333333] font-bold text-lg mt-4">
                Prince Miyako
              </p>
              <p className="text-gray-500 text-sm">Blogger/Photographer</p>
              <div className="flex justify-center items-center text-primary mt-4 space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-[#828282]">(1 Review)</p>
              </div>
              <div className="text-center text-sm text-[#828282] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis distinctio, odio eligendi suscipit reprehenderit
                atque.
              </div>
              <div className="text-[#333333] flex gap-4 my-4">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaPinterestSquare />
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="max-w-md w-full border p-4 text-[#828282] mt-5">
            <p className="font-bold text-lg text-[#333333]">Recent Posts</p>

            {/* Post 1 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Recent1.svg"
                alt="Recent Post 1"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Recent2.svg"
                alt="Recent Post 2"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Recent3.svg"
                alt="Recent Post 3"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>

            {/* Post 4 */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Recent4.svg"
                alt="Recent Post 4"
                width={99}
                height={91}
              />
              <div className="ml-3">
                <p className="text-sm">June 22, 2020</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit cingelit, sed do.
                </p>
              </div>
            </div>
          </div>

          {/* Filter By Menu */}
          <div className="max-w-md w-full border p-4 mt-5">
            <p className="font-bold text-lg text-[#333333]">Filter By Menu</p>

            {/* Menu Items */}
            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Filter1.svg"
                alt="Filter 1"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Chicken Fry</p>
                <p className="text-sm">26</p>
              </div>
            </div>

            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Filter2.svg"
                alt="Filter 2"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Burger Food</p>
                <p className="text-sm">46</p>
              </div>
            </div>

            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Filter3.svg"
                alt="Filter 3"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Pizza</p>
                <p className="text-sm">16</p>
              </div>
            </div>

            <div className="flex items-center border-b py-3">
              <Image
                src="/BlogPageImage/Filter4.svg"
                alt="Filter 4"
                width={67}
                height={62}
              />
              <div className="ml-3 flex justify-between items-center w-full">
                <p className="font-bold text-sm">Fresh Fruits</p>
                <p className="text-sm">36</p>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="max-w-md w-full border p-4 mt-5">
            <p className="text-[#333333] font-bold text-lg">Popular Tags</p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Sandwich
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Tikka
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Bbq
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Restaurant
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Pizza
              </div>
              <div className="border p-2 text-center text-sm bg-gray-100 rounded">
                Health
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="max-w-md w-full border p-4 mt-5">
            <p className="font-bold text-lg">Follow Us</p>
            <div className="flex gap-4 mt-3">
              <div className="w-12 h-12 bg-gray-100 flex justify-center items-center rounded">
                <FaTwitter />
              </div>
              <div className="w-12 h-12 bg-gray-100 flex justify-center items-center rounded">
                <FaYoutube />
              </div>
              <div className="w-12 h-12 bg-primary text-white flex justify-center items-center rounded">
                <FaPinterestSquare />
              </div>
              <div className="w-12 h-12 bg-gray-100 flex justify-center items-center rounded">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}

      <div className="w-full flex justify-center my-10">
        <div className="flex gap-3 text-primary">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <FaAngleDoubleLeft />
          </div>
          <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
            1
          </div>
          <div className="w-[50px] h-[50px] border-[2px] bg-primary text-white flex items-center justify-center">
            2
          </div>
          <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
            3
          </div>
          <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
            <FaAngleDoubleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
