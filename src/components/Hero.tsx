  
// 'use client';
// import React from "react";
// import Image from "next/legacy/image";
// import  Link  from "next/link";
// const Hero = () => {
//   return (
//     <section className="w-full h-[800px] mt-11 pt-10 bg-[#FFFFFF] py-16 px-8 sm:px-12 md:px-16 lg:px-24 flex flex-col sm:flex-row items-center justify-between">
//       {/* Left Side Content */}
//       <div className="bg-[#F0F2F3] w-[1500px] h-[700px] flex mb-40 ml-14 rounded-bl-[48px] ">
//         <div className="max-w-md text-left space-y-4 sm:ml-24 mt-60">
//           <p className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">
//             Welcome to Chairy
//           </p>
//           <h1 className="lg:text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-snug">
//             Best Furniture  <br /> Collection For Your <br /> Interior.
//           </h1>
//           {/* link the product page */}
//           {/* <Link href="/product-page" passHref></Link> */}
//           <Link href="/Product" className="hover:text-teal-600">
//           <button className="mt-6 px-8 py-3 bg-teal-500 text-white font-medium rounded-md shadow-md hover:bg-teal-600 transition-all">
//             Shop Now <span className="ml-2">→</span>
//           </button></Link>
//         </div>
        
//         {/* Right Side Image */}
//         <div className="mt-24 md:mt-0 bg-[#F0F2F3] h-[700px] mb-40">
//           <Image
//             src="/images/Product.png"
//             alt="Chair"
//             width={700}
//             height={700}
//             className="w-[584px] h-[584px] mt-28 object-contain mx-auto md:mx-0"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// 'use client';
// 'use client';
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-auto mt-4 pt-10 bg-[#FFFFFF] py-8 px-4 sm:px-12 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center">
      {/* Left Side Content */}
      <div className="bg-[#F0F2F3] w-full max-w-[1200px] h-auto flex flex-col md:flex-row items-center md:items-start mb-10 md:mb-20 rounded-bl-[48px]">
        <div className="text-center md:text-left space-y-4 p-4 md:p-8 lg:p-12">
          <p className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">
            Welcome to Chairy
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug">
            Best Furniture <br /> Collection For Your <br /> Interior.
          </h1>
          <Link href="/Product" className="hover:text-teal-600">
            <button className="mt-6 px-8 py-3 bg-teal-500 text-white font-medium rounded-md shadow-md hover:bg-teal-600 transition-all">
              Shop Now <span className="ml-2">→</span>
            </button>
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="w-full flex justify-center items-center p-4">
          <Image
            src="/images/Product.png"
            alt="Chair"
            width={700}
            height={700}
            className="w-full max-w-[300px] sm:max-w-[80px] md:max-w-[500px] lg:max-w-[584px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
