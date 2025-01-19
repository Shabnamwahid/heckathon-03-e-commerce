import Image from "next/legacy/image";
import React from 'react';
import { BsCartDash } from "react-icons/bs";



const OurProducts = () => {
  return (

    
    <div className='w-full' >
   <div className="bg-[#FFFFFF] py-8 w-full h-[461px]">
    <h2 className="text-center text-2xl  font-inter font-bold mb-6 mt-8">Our Products</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4">
      {/* Product 1 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <span className="absolute top- left- text-xs font-semibold px-2 py-1 rounded text-white bg-green-500">
          New
        </span>
        <Image
          src="/images/White.png"
          alt="Library Stool Chair"
          width={230} height={230}
          className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter text-[#029FAE]">Library Stool Chair</h3>
    <BsCartDash className="w-5 h-5 rounded bg-[#029FAE] text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
      </div>

      {/* Product 2 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <span className="absolute top- left- text-xs font-semibold px-2 py-1 rounded text-white bg-red-500">
          Sale
        </span>
        <Image
          src="/images/Pink.png"
          alt="Library Stool Chair"
         
          width={230} height={230}

          className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 bg-gray-300 text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
      </div>

      {/* Product 3 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
  <Image
    src="/images/Orange.png"
    alt="Library Stool Chair"
    width={230} height={230}
    className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
  />
  <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 bg-gray-300 text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
</div>
{/* product 4 */}
<div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
  <Image
    src="/images/Sofa.png"
    alt="Library Stool Chair"
    width={230} height={230}
    className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
  />
  <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 bg-gray-300 text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
</div>
  </div>
    </div>
{/* column 2 */}
    <div className="bg-[#FFFFFF] py-8 w-full h-[461px]">
  
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4"> 
      {/* Product 1 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <span className="absolute top- left- text-xs font-semibold px-2 py-1 rounded text-white bg-green-500">
          New
        </span>
        <Image
          src="/images/library.png"
          alt="Library Stool Chair"
          width={230} height={230}
          className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter text-gray-700">Library Stool Chair</h3>
    <BsCartDash className="w-5 h-5 rounded-sm bg-gray-300 text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
      </div>

      {/* Product 2 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <span className="absolute top- left- text-xs font-semibold px-2 py-1 rounded text-white bg-red-500">
          Sale
        </span>
        <Image
          src="/images/brown.png"
          alt="Library Stool Chair"
         
          width={230} height={230}

          className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 bg-gray-300 text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
      </div>

      {/* Product 3 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
  <Image
    src="/images/black.png"
    alt="Library Stool Chair"
    width={230} height={230}
    className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
  />
  <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 bg-gray-300 text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
</div>
{/* product 4 */}
<div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
  <Image
    src="/images/White.png"
    alt="Library Stool Chair"
    width={230} height={230}
    className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
  />
  <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 bg-gray-300 text-[#272343] mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
</div>


      </div>
   </div>
   </div>

  )
}
export default OurProducts