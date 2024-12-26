import React from "react";
import Image from "next/image";
export default function Pages() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Library Stool Chair</h1>
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/Pink.png"
            alt="Library Stool Chair"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Library Stool Chair</h2>
           {/* Price */}
           <p className="text-lg  font-semibold mb-4 text-white bg-teal-600  w-20 rounded-full flex items-center justify-center">$99.99</p>
          <p className="text-gray-600 mb-4 border-t-2 mt-2 pt-4">
            This stylish and durable library stool chair is perfect for your
            reading nook or study space. Built with high-quality materials for
            comfort and reliability.
          </p>

        

          {/* Add to Cart Button */}
          <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-gray-400">
            Add to Cart
          </button>
        </div>

      </div>
      
      
      <div className="w-full">
  <div className="bg-[#FFFFFF] py-8 w-full h-auto">
    {/* Title and View All on Same Line */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-inter font-bold">Featured Products</h2>
      <p className="text-right text-black border-b-2 border-black hover:underline cursor-pointer">
        View all
      </p>
    </div>
    {/* Main Grid Container */}
    <div className="container mx-auto grid grid-cols-5 gap-4">
      {/* Product 1 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <Image
          src="/images/black.png"
          alt="Library Stool Chair"
          width={230}
          height={230}
          className="w-[180px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex gap-6 items-center">
          <h3 className="text-sm font-medium font-inter text-gray-500">Library Stool Chair</h3>
          <p className="text-black mr-14">$20</p>
        </div>
      </div>
      
      {/* Product 2 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <Image
          src="/images/White.png"
          alt="Library Stool Chair"
          width={230}
          height={230}
          className="w-[180px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex gap-6 items-center">
          <h3 className="text-sm font-medium font-inter text-gray-500">Library Stool Chair</h3>
          <p className="text-black mr-14">$20</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <Image
          src="/images/Desk.png"
          alt="Library Stool Chair"
          width={230}
          height={230}
          className="w-[180px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex gap-6 items-center">
          <h3 className="text-sm font-medium font-inter text-gray-500">Library Stool Chair</h3>
          <p className="text-black mr-14">$20</p>
        </div>
      </div>

      {/* Product 4 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <Image
          src="/images/Orange.png"
          alt="Library Stool Chair"
          width={230}
          height={230}
          className="w-[180px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex gap-6 items-center">
          <h3 className="text-sm font-medium font-inter text-gray-500">Library Stool Chair</h3>
          <p className="text-black mr-14">$20</p>
        </div>
      </div>

      {/* Product 5 */}
      <div className="relative w-[312px] h-[377px] p-4 rounded-lg shadow-sm">
        <Image
          src="/images/brown.png"
          alt="Library Stool Chair"
          width={230}
          height={230}
          className="w-[180px] h-[230px] object-cover rounded-lg mb-4"
        />
        <div className="flex gap-6 items-center">
          <h3 className="text-sm font-medium font-inter text-gray-500">Library Stool Chair</h3>
          <p className="text-black mr-14">$20</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


      
  );
}
