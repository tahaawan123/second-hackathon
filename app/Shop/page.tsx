import React from "react";
import HeaderTwo from "@/components/HeaderTwo/HeaderTwo";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagLight } from "react-icons/pi";
import { BiGitCompare } from "react-icons/bi";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiRectangleLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";



const Shop = () => {
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
            Our Shop
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
              <Link href={"/Shop"} className="text-primary">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>





      {/* Main container */}

      <div className="w-full h-auto mt-20  2xl:ml-[300px] lg:flex gap-4">
        {/* Left Section */}

        <div className=" w-full sm:w-[984px]  h-auto  text-[#333333] mx-auto">
        <div className="flex flex-wrap gap-6 sm:gap-9 ml-4">
  {/* Sort By */}
  <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center">
    <p className="text-[16px] sm:text-[20px] mt-2 sm:mt-0">Sort By:</p>
    <div className="relative text-[#BDBDBD] w-full sm:w-auto">
      <input
        type="text"
        placeholder="Newest"
        className="rounded-md h-[46px] border p-4 w-full sm:w-[236px] text-[16px] sm:text-[18px]"
      />
      <FaAngleDown className="absolute top-1/2 right-3 transform -translate-y-1/2" />
    </div>
  </div>

  {/* Show */}
  <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center">
    <p className="text-[16px] sm:text-[20px] mt-2 sm:mt-0">Show:</p>
    <div className="relative text-[#BDBDBD] w-full sm:w-auto">
      <input
        type="text"
        placeholder="Default"
        className="rounded-md h-[46px] border p-4 w-full sm:w-[236px] text-[16px] sm:text-[18px]"
      />
      <FaAngleDown className="absolute top-1/2 right-3 transform -translate-y-1/2" />
    </div>
  </div>
</div>

          {/* Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full sm:w-[984px] mx-auto">
  {/* Image Box */}
  {[
    { src: "/Shop/shop1.svg", title: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
    { src: "/Shop/shop2.svg", title: "Chocolate Muffin", price: "$28.00", label: "Sell" },
    { src: "/Shop/shop3.svg", title: "Burger", price: "$21.00", oldPrice: "$45.00" },
    { src: "/Shop/shop4.svg", title: "Country Burger", price: "$45.00" },
    { src: "/Shop/shop5.svg", title: "Drink", price: "$23.00", oldPrice: "$45.00" },
    { src: "/Shop/shop6.svg", title: "Pizza", price: "$43.00" },
    { src: "/Shop/shop7.svg", title: "Cheese Butter", price: "$10.00" },
    { src: "/Shop/shop8.svg", title: "Sandwiches", price: "$25.00" },
    { src: "/Shop/shop9.svg", title: "Chicken Chup", price: "$12.00", label: "Sell" },
    { src: "/Shop/shop4.svg", title: "Country Burger", price: "$45.00" },
    { src: "/Shop/shop5.svg", title: "Drink", price: "$23.00", oldPrice: "$45.00" },
    { src: "/Shop/shop6.svg", title: "Pizza", price: "$43.00" },
    { src: "/Shop/shop7.svg", title: "Cheese Butter", price: "$10.00" },
    { src: "/Shop/shop8.svg", title: "Sandwiches", price: "$25.00" },
    { src: "/Shop/shop9.svg", title: "Chicken Chup", price: "$12.00", label: "Sell" }
  ].map((item, index) => (
    <div key={index} className="relative bg-white p-3 shadow-md rounded-md">
      {/* Image */}
      <Image src={item.src} alt={item.title} width={312} height={267} className="rounded-md " />

      {/* Optional Label */}
      {item.label && (
        <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
          {item.label}
        </div>
      )}

      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 rounded-md">
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white text-primary flex justify-center items-center rounded shadow-md">
            <BiGitCompare />
          </div>
          <div className="w-10 h-10 bg-primary text-white flex justify-center items-center rounded shadow-md">
            <PiHandbagLight />
          </div>
          <div className="w-10 h-10 bg-white text-primary flex justify-center items-center rounded shadow-md">
            <FaRegHeart />
          </div>
        </div>
      </div>

      {/* Title */}
      <p className="text-lg font-bold mt-2">{item.title}</p>
      <p className="text-primary">
        {item.price}
        {item.oldPrice && <span className="line-through text-gray-400">{item.oldPrice}</span>}
      </p>
    </div>
  ))}
</div>


          
                     {/* pagination */}
                     
                     <div className="w-full flex justify-center my-10">
                             <div className="flex gap-3 text-primary">
                               <div className="w-[50px] h-[50px] border-[2px] flex items-center justify-center">
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

                                           {/* Right Section */}


             <div className="w-[312px] h-[1489px]  pt-20">

                {/* Searchbar */}
                          {/* Searchbar */}
<div className="max-w-md w-full flex flex-col sm:flex-row border">
  <input
    type="text"
    placeholder="Search Your Keyword"
    className="flex-grow p-2 border-b sm:border-b-0 sm:border-r"
  />
  <div className="w-full sm:w-16 h-12 sm:h-16 bg-primary text-white flex justify-center items-center">
    <CiSearch className="w-6 h-6" />
  </div>
</div>

  

                  {/* Category */}
                     
                 <div className="w-[248px] h-[372px] text-[#333333] text-[18px]  space-y-4">
                      <h3 className="text-[20px] font-bold">Category</h3>
                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Sandwiches</p>
                    </div>
                   
                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Burger</p>
                    </div>

                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Chicken Chup</p>
                    </div>

                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Drink</p>
                    </div>


                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Pizza</p>
                    </div>


                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Thi</p>
                    </div>


                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Non Veg</p>
                    </div>


                    <div className="flex space-x-3">
                        <PiRectangleLight className="mt-[5px]"/>
                        <p>Uncategorized</p>
                    </div>
                 </div>

                        

                        {/* Latest Product */}

                        <div className="w-[252px] h-[368px]   p-4 text-[#4F4F4F]">
      <h1 className="text-[20px] font-bold mb-6">Latest Products</h1>

      {/* Product 1 */}
      <div className="flex items-center mb-4">
        <Image
          src="/Shop/shop10.svg"
          alt="Pizza"
          width={71}
          height={65}
          className=" rounded-md "
        />
        <div className="ml-4">
          <h3>Pizza</h3>
          <div className="text-primary text-[9px] flex">
            <FaStar />
            <FaStar />
            <span className="text-[#E0E0E0] flex">
             <FaStar />
             <FaStar />
             <FaStar />
             </span>
          </div>
          <p className="text-[14px]">$35.00</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex items-center mb-4">
        <Image
          src="/Shop/shop10.svg"
          alt="Pizza"
          width={71}
          height={65}
          className=" rounded-md "
        />
        <div className="ml-4">
          <h3>Cupchake</h3>
          <div className="text-primary text-[9px] flex">
            <FaStar />
            <FaStar />
            <span className="text-[#E0E0E0] flex">
             <FaStar />
             <FaStar />
             <FaStar />
             </span>
          </div>
          <p className="text-[14px]">$35.00</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex items-center mb-4">
        <Image
          src="/Shop/shop10.svg"
          alt="Pizza"
          width={71}
          height={65}
          className=" rounded-md "
        />
        <div className="ml-4">
          <h3>Cookies</h3>
          <div className="text-primary text-[9px] flex">
            <FaStar />
            <FaStar />
            <span className="text-[#E0E0E0] flex">
             <FaStar />
             <FaStar />
             <FaStar />
             </span>
          </div>
          <p className="text-[14px]">$35.00</p>
        </div>
      </div>

      {/* Product 4 */}
      <div className="flex items-center mb-4">
        <Image
          src="/Shop/shop10.svg"
          alt="Pizza"
          width={71}
          height={65}
          className=" rounded-md "
        />
        <div className="ml-4">
          <h3>Burger</h3>
          <div className="text-primary text-[9px] flex">
            <FaStar />
            <FaStar />
            <span className="text-[#E0E0E0] flex">
             <FaStar />
             <FaStar />
             <FaStar />
             </span>
          </div>
          <p className="text-[14px]">$35.00</p>
        </div>
      </div>







    </div>
 




             </div>


      </div>
    </div>
  );
};

export default Shop;
