

import React from "react";
import { TiTick } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import Image from "next/legacy/image";
import { BsCartDash } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[203px]">
  {/* Topbar */}
  <div className="w-full h-[45px] flex justify-between bg-[#272343] py-[14px] sm:py-[10px] md:py-[12px] lg:py-[14px]">
    {/* Text */}
    <div className="w-[255px] flex items-center gap-2 text-[#FFFFFF] ml-24 sm:ml-12 md:ml-16 lg:ml-24">
      <TiTick className="w-4 h-4 sm:w-3 sm:h-3" />
      <p className="text-[13px] sm:text-[11px] md:text-[12px] lg:text-[13px]">
        Free shipping on all orders over $50
      </p>
    </div>

    {/* Links */}
    <div className="flex items-center gap-6 text-[#FFFFFF] mr-28 sm:mr-16 md:mr-20 lg:mr-28">
      <p className="text-[13px] sm:text-[11px] md:text-[12px] lg:text-[13px]">Eng</p>
      <FaAngleDown className="w-4 h-4 sm:w-3 sm:h-3" />
      <div className="flex items-center gap-2">
        <Link href="/Faqs" className="text-[13px] hover:text-teal-600 flex items-center gap-2 sm:text-[11px] md:text-[12px] lg:text-[13px]">
          Faqs
        </Link>
        <div className="flex items-center gap-2">
          <CiCircleAlert className="w-5 h-5 sm:w-4 sm:h-4" />
          <p className="text-[13px] whitespace-nowrap sm:text-[11px] md:text-[12px] lg:text-[13px]">Need Help</p>
        </div>
      </div>
    </div>
  </div>

  {/* Midbar */}
  <div className="w-full h-[84px] bg-[#F0F2F3] px-[110px] sm:px-[50px] md:px-[80px] lg:px-[110px] flex items-center justify-between">
    <div className="w-[160px]">
      <Image src="/images/Logo.png" alt="Logo" width={100} height={40} />
    </div>
    <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow">
      <BsCartDash className="w-5 h-5 sm:w-4 sm:h-4" />
      <p className="text-sm sm:text-xs md:text-sm">Cart</p>
      <p className="bg-[#007580] text-white rounded-full px-2 text-sm mt-1 mb-1 pb-1 pt-0 sm:text-xs md:text-sm">
        2
      </p>
    </div>
  </div>

  {/* Navbar */}
  <div>
    <div className="h-[74px] hidden md:flex border-b-2 border-grey-400 bg-white px-[110px] py-3 sm:px-[50px] md:px-[80px] lg:px-[110px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 font-inter font-normal mt-3 text-gray-700 text-[10px] sm:text-[9px] md:text-[10px] lg:text-[15px]">
          <Link href="/" className="text-teal-600">Home</Link>
          <Link href="/Shop" className="hover:text-teal-600">Shop</Link>
          <Link href="/Product" className="hover:text-teal-600">Product</Link>
          <Link href="/Pages" className="hover:text-teal-600">Pages</Link>
          <Link href="/About" className="hover:text-teal-600">About</Link>
        </div>
        <div>
          <Link href="/Contact" className="text-gray-700 mt-3 font-normal hover:text-teal-600">
            Contact: (808) 555-0111
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};

export default Navbar;
