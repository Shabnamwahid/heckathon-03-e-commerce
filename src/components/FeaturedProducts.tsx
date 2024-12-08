import React from 'react';
import Image from 'next/image';
import { BsCartDash } from "react-icons/bs";


const FeaturedProducts = () => {
  return (
    <div className="w-full bg-white">
      {/* Logo Section */}
      <div className="w-full h-[139px] flex justify-evenly gap-0 items-center py-4 ">
        <img src="/images/Logo1.png" alt="Zapier" className="w-[85px] h-[87px] object-contain" />
        <img src="/images/Logo2.png" alt="Pipedrive" className="w-[107px] h-[109px] object-contain" />
        <img src="/images/Logo3.png" alt="CIB Bank" className="w-[135px] h-[139px] object-contain" />
        <img src="/images/Logo4.png" alt="Logo4" className="w-[63px] h-[65px] object-contain" />
        <img src="/images/Logo5.png" alt="Burnt Toast" className="w-[98px] h-[101px] object-contain" />
        <img src="/images/Logo6.png" alt="PandaDoc" className="w-[113px] h-[115px] object-contain" />
        <img src="/images/Logo7.png" alt="Moz" className="w-[84px] h-[87px] object-contain" />
      </div>

      {/* Featured Products Section */}
<div>
  <div className="bg-gray-50 py-8 w-full h-[461px]">
    <h2 className="text-center text-2xl  font-inter font-semibold mb-6">Featured Products</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4">
      {/* Product 1 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <span className="absolute top- left- text-xs font-semibold px-2 py-1 rounded text-white bg-green-500">
          New
        </span>
        <img
          src="/images/White.png"
          alt="Library Stool Chair"
          className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter text-[#029FAE]">Library Stool Chair</h3>
    <BsCartDash className="w-5 h-5 rounded-sm bg-[#029FAE] text-white mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
      </div>

      {/* Product 2 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <span className="absolute top- left- text-xs font-semibold px-2 py-1 rounded text-white bg-red-500">
          Sale
        </span>
        <img
          src="/images/Pink.png"
          alt="Library Stool Chair"
          className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 h-5 rounded-sm  text-grey mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
      </div>

      {/* Product 3 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
  <img
    src="/images/Orange.png"
    alt="Library Stool Chair"
    className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
  />
  <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 h-5 rounded-sm  text-grey mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
</div>
{/* product 4 */}
<div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
  <img
    src="/images/Sofa.png"
    alt="Library Stool Chair"
    className="w-[230px] h-[230px] object-cover rounded-lg mb-4"
  />
  <div className="flex justify-between items-center">
    <h3 className="text-sm font-medium font-inter">Library Stool Chair</h3>
    <BsCartDash className="w-5 h-5 rounded-sm  text-grey mr-14 " />
  </div>
  <p className="text-gray-700">$20</p>
</div>


      </div>
    </div>
  </div>
</div>

        
  );
};

export default FeaturedProducts;
