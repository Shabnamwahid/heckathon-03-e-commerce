// "use client";

// // import { useState } from "react";
// import { TiTick } from "react-icons/ti";
// import { FaAngleDown } from "react-icons/fa";
// import { CiCircleAlert } from "react-icons/ci";
// import Image from "next/image";
// import { BsCartDash } from "react-icons/bs";
// import Link from "next/link";
// import { useRouter } from 'next/navigation';


// const Navbar = () => {
//   const router = useRouter();
//   const categories = ["Wooden Chair", "Wing Chair", "Sofa"]; // Categories list

//   // Simple change category function
//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const category = e.target.value;
//     if (category) {
//       router.push(`/category/${category.toLowerCase().replace(' ', '-')}`);
//     }
//   };

//   return (
//     <div className="w-full h-[203px]">
//       {/* Topbar */}
     
//      <div className="w-full h-[45px] flex justify-between bg-[#272343] py-[14px] sm:py-[10px] md:py-[12px] lg:py-[14px]">
//          <div className="w-[255px] flex items-center gap-2 text-[#FFFFFF] ml-24 sm:ml-12 md:ml-16 lg:ml-24">
//       <TiTick className="w-4 h-4 sm:w-3 sm:h-3" />
//            <p className="text-[13px] sm:text-[11px] md:text-[12px] lg:text-[13px]">
//              Free shipping on all orders over $50
//            </p>
//          </div>
//          <div className="flex items-center gap-6 text-[#FFFFFF] mr-28 sm:mr-16 md:mr-20 lg:mr-28">
//            <p className="text-[13px] sm:text-[11px] md:text-[12px] lg:text-[13px]">Eng</p>
//           <FaAngleDown className="w-4 h-4 sm:w-3 sm:h-3" />
//            <div className="flex items-center gap-2">
//              <Link href="/Faqs" className="text-[13px] hover:text-teal-600 flex items-center gap-2 sm:text-[11px] md:text-[12px] lg:text-[13px]">
//                Faqs
//              </Link>
//              <div className="flex items-center gap-2">
//                <CiCircleAlert className="w-5 h-5 sm:w-4 sm:h-4" />
//                <p className="text-[13px] whitespace-nowrap sm:text-[11px] md:text-[12px] lg:text-[13px]">Need Help</p>
//              </div>
//          </div>
//         </div>
//       </div>



//       {/* Midbar */}
//       <div className="w-full h-[84px] bg-[#F0F2F3] px-[110px] sm:px-[50px] md:px-[80px] lg:px-[110px] flex items-center justify-between">
//         <div className="w-[160px]">
//           <Image src="/images/Logo.png" alt="Logo" width={100} height={40} />
//         </div>
//         <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow">
//           <BsCartDash className="w-5 h-5 sm:w-4 sm:h-4" />
//           <Link href="/Product">
//             <p className="text-sm sm:text-xs md:text-sm">Cart</p>
//           </Link>
//           <p className="bg-[#007580] text-white rounded-full px-2 text-sm mt-1 mb-1 pb-1 pt-0 sm:text-xs md:text-sm">2</p>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="h-[74px] hidden md:flex border-b-2 border-grey-400 bg-white px-[110px] py-3 sm:px-[50px] md:px-[80px] lg:px-[110px]">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex space-x-4 font-inter font-normal mt-3 text-gray-700 text-[10px] sm:text-[9px] md:text-[10px] lg:text-[15px]">
//             <Link href="/" className="text-teal-600">Home</Link>
//             <Link href="/Shop" className="hover:text-teal-600">Shop</Link>
//             <Link href="/Product" className="hover:text-teal-600">Product</Link>
//             <Link href="/Pages" className="hover:text-teal-600">Pages</Link>
//             <Link href="/About" className="hover:text-teal-600">About</Link>

//             <div className="relative mb-6">
//               <select
//                 aria-label="Category selection"
//                 className="px-4 py-2 border rounded bg-gray-200"
//                 onChange={handleCategoryChange} // Category change handling
//               >
//                 <option value="">Select a Category</option>
//                 {categories.map((category) => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div>
//             <Link href="/Contact" className="text-gray-700 mt-3 font-normal hover:text-teal-600">
//               Contact: (808) 555-0111
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";

import { TiTick } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const categories = ["Wooden Chair", "Wing Chair", "Sofa"];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    if (category) {
      router.push(`/category/${category.toLowerCase().replace(' ', '-')}`);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Topbar */}
      <div className="w-full bg-[#272343]">
        <div className=" w-full mx-auto sm-max-w-[600px] py-[10px] sm:py-[8px] md:py-[10px] flex justify-between items-center">
          <div className="ml-4 sm:ml-2 md:ml-4 flex items-center gap-2 text-[#FFFFFF]">
            <TiTick className="w-4 h-4 sm:w-3 sm:h-3" />
            <p className="text-[13px] sm:text-[11px] md:text-[13px] sm:text-center">
              Free shipping on all orders over $50
            </p>
          </div>
          <div className="mr-4 sm:mr-2 md:mr-4 flex items-center gap-4 text-[#FFFFFF]">
            <p className="text-[13px] sm:text-[11px] md:text-[13px]">Eng</p>
            <FaAngleDown className="w-4 h-4 sm:w-3 sm:h-3" />
            <Link href="/Faqs" className="text-[13px] hover:text-teal-600 sm:text-[11px] md:text-[13px]">
              Faqs
            </Link>
            <div className="flex items-center gap-2">
              <CiCircleAlert className="w-5 h-5 sm:w-4 sm:h-4" />
              <p className="text-[13px] sm:text-[11px] md:text-[13px]">Need Help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Midbar */}
      <div className="w-full bg-[#F0F2F3]">
        <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center px-4 sm:px-3 md:px-10 py-3 sm:py-2 md:py-3">
          <div className="w-[150px] sm:w-[120px] md:w-[160px]">
            <Image src="/images/Logo.png" alt="Logo" width={100} height={40} />
          </div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-md shadow">
            <BsCartDash className="w-5 h-5 sm:w-4 sm:h-4" />
            <Link href="/Product">
              <p className="text-sm sm:text-xs md:text-sm">Cart</p>
            </Link>
            <p className="bg-[#007580] text-white rounded-full px-2 text-sm sm:text-xs md:text-sm">2</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full bg-white border-b-2 border-grey-400 py-3 sm:py-2 md:py-3">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col sm:flex-col md:flex-row items-center justify-between px-4 sm:px-3 md:px-10">
          {/* Links Section */}
          <div className="flex flex-col sm:flex-col md:flex-row items-center space-y-2 sm:space-y-2 md:space-y-0 md:space-x-4 font-inter text-gray-700 text-[13px] sm:text-[11px] md:text-[13px]">
            <Link href="/" className="text-teal-600">Home</Link>
            <Link href="/Shop" className="hover:text-teal-600">Shop</Link>
            <Link href="/Product" className="hover:text-teal-600">Product</Link>
            <Link href="/Pages" className="hover:text-teal-600">Pages</Link>
            <Link href="/About" className="hover:text-teal-600">About</Link>
            <div className="relative">
              <select
                aria-label="Category selection"
                className="px-4 py-2 border rounded bg-gray-200"
                onChange={handleCategoryChange}
              >
                <option value="">Select a Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Contact Section */}
          <div className="mt-2 sm:mt-2 md:mt-0">
            <Link href="/Contact" className="text-gray-700 font-normal hover:text-teal-600">
              Contact: (808) 555-0111
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
