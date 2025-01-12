import React from "react";
import Image from "next/image";
import HeaderTwo from "@/components/HeaderTwo/HeaderTwo";
import Link from "next/link";
import { FaAngleRight, FaTimes, FaStar } from "react-icons/fa";
// Product Rating Component
type ProductRatingProps = {
    rating: number;
  };
  
  const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
    const filledStars = Math.min(Math.floor(rating), 3); // Filled stars limited to 3
    const halfStar = rating % 1 !== 0 && rating <= 3; // Half star only applies within the first 3 stars
    const emptyStars = 3 - filledStars - (halfStar ? 1 : 0); // Remaining empty stars in the first 3
    const secondaryStars = 3; // Always 3 secondary stars (gray color)
  
    return (
      <div className="flex">
        {/* First 3 stars (Primary color) */}
        {Array(filledStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={`filled-${index}`} className="text-primary" />
          ))}
  
        {/* Half star if applicable */}
        {halfStar && <FaStar key="half" className="text-primary opacity-50" />}
  
        {/* Empty stars in the primary section */}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={`empty-${index}`} className="text-[#E0E0E0]" />
          ))}
  
        {/* Last 3 stars (Secondary color) */}
        {Array(secondaryStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={`secondary-${index}`} className="text-[#E0E0E0]" />
          ))}
      </div>
    );
  };
  
  const Cart = () => {
    const products = [
      { name: "Burger", price: 35, quantity: 1, total: 221, image: "/Cart/img1.svg", rating: 3.5 },
      { name: "Fresh Lime", price: 25, quantity: 1, total: 521, image: "/Cart/img2.svg", rating: 4 },
      { name: "Pizza", price: 15, quantity: 1, total: 421, image: "/Cart/img3.svg", rating: 2.5 },
      { name: "Chocolate Muffin", price: 45, quantity: 1, total: 521, image: "/Cart/img4.svg", rating: 4.5 },
      { name: "Cheese Butter", price: 15, quantity: 1, total: 325, image: "/Cart/img5.svg", rating: 3 },
    ];
  
    const cartSubtotal = 120;
    const shippingCharge = 0;
    const totalAmount = 205;
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <HeaderTwo />
  
        {/* Hero Image */}
        <div className="relative">
          <Image
            src={"/Hero2/Hero2.svg"}
            alt="Hero Image"
            height={410}
            width={1920}
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] max-w-[300px] sm:max-w-[400px]">
            <h1 className="text-white font-bold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
              Our Shop
            </h1>
            <ul className="flex gap-2 justify-center text-xs sm:text-sm md:text-base mt-2 text-white">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight />
              </li>
              <li>
                <Link href={"/Cart"} className="text-primary">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Cart Section */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Table Layout for Large Screens */}
          <div className="hidden md:block">
            <div className="border rounded-lg shadow-md bg-white p-4 sm:p-6 lg:p-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b text-sm sm:text-base">
                    <th className="py-2 px-4">Product</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">Total</th>
                    <th className="py-2 px-4">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b text-sm sm:text-base">
                      <td className="py-2 px-4 flex items-center">
                        <div className="relative w-16 h-16 mr-4">
                          <Image
                            src={product.image}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded"
                          />
                        </div>
                        <div>
                          <div className="font-bold">{product.name}</div>
                          <ProductRating rating={product.rating} />
                        </div>
                      </td>
                      <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                      <td className="py-2 px-4 flex items-center space-x-2">
                        <button className="px-2 py-1 border rounded">-</button>
                        <span>{product.quantity}</span>
                        <button className="px-2 py-1 border rounded">+</button>
                      </td>
                      <td className="py-2 px-4">${product.total.toFixed(2)}</td>
                      <td className="py-2 px-4 text-red-400 cursor-pointer">
                        <FaTimes />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Grid Layout for Small Screens */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:hidden">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm flex flex-col space-y-2 bg-white"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-base">{product.name}</div>
                    <ProductRating rating={product.rating} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span>{product.quantity}</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-bold">${product.total.toFixed(2)}</span>
                </div>
                <button className="text-red-500 text-sm mt-2 flex items-center justify-end">
                  <FaTimes className="mr-1" />
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Coupon and Summary Section */}
        <div className="mt-6 flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex-1 lg:pr-4">
            <h3 className="text-lg font-bold mb-2">Coupon Code</h3>
            <textarea
              className="w-full border rounded p-2 mb-4"
              placeholder="Enter coupon code"
            ></textarea>
            <button className="bg-primary text-white px-4 py-2 rounded w-full lg:w-auto">
              Apply
            </button>
          </div>
          <div className="flex-1 lg:w-1/3">
            <h3 className="text-lg font-bold mb-2">Total Bill</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cart Subtotal:</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge:</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded w-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  
  
};

export default Cart;
