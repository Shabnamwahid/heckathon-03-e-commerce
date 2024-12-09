import React from "react";
import { TiTick } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

const Navbar = () => {
  

  return (
    <div className="w-full h-[203px]">
      {/* Topbar */}
      <div className="w-full h-[45px] flex justify-between bg-[#272343] py-[14px] px-[110px]">
        {/* Text */}
        <div className="w-[255px] flex items-center gap-2 text-[#FFFFFF]">
          <TiTick className="w-4 h-4" />
          <p className="text-[13px]">
            Free shipping on all orders over $50
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-[#FFFFFF]">
          <p className="text-[13px]">Eng</p>
          <FaAngleDown className="w-4 h-4" />
          <div className="flex items-center gap-2">
            <p className="text-[13px]">Faqs</p>
            <div className="flex items-center gap-2">
              <CiCircleAlert className="w-5 h-5" />
              <p className="text-[13px] whitespace-nowrap">Need Help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Midbar */}
      <div className="w-full h-[84px] bg-[#F0F2F3] px-[110px] flex items-center justify-between">
        {/* Logo */}
        <div className="w-[160px]">
          <Image src="/images/Logo.png" alt="Logo" width={100} height={40} />
        </div>

        {/* Cart */}
        <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow">
          <BsCartDash className="w-5 h-5" />
          <p className="text-sm">Cart</p>
          <p className="bg-[#007580] text-white rounded-full px-2 text-sm mt-1 mb-1 pb-1 pt-0">2</p>
        </div>
      </div>

      {/* Navbar */}
      <div>
        <div className="h-[74px] hidden md:flex bg-white px-[110px] py-3">
          <div className="container mx-auto flex justify-between items-center">
            {/* Links */}
            <div className="flex space-x-4 font-inter font-normal mt-3 text[10px] text-gray-700">
              <a href="#" className="text-teal-600">Home</a>
              <a href="#" className="hover:text-teal-600">Shop</a>
              <a href="#" className="hover:text-teal-600">Product</a>
              <a href="#" className="hover:text-teal-600">Pages</a>
              <a href="#" className="hover:text-teal-600">About</a>
            </div>
            {/* Contact */}
            <div className="text-gray-700 mt-3 font-normal">Contact: (808) 555-0111</div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;

