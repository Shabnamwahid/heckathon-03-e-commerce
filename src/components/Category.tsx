import React from 'react'
import Image from 'next/image';


const Category = () => {
  return (
    <div className="bg-white py-8 w-full h-[650px] ">
      <h2 className="text-start ml-24 text-[32px]  text-2xl font-bold mb-4 mt-10  font-inter">Top Categories</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Wing Chair */}
        <div className="relative group overflow-hidden  rounded-lg  shadow-lg">
          <Image src="/images/library.png" alt="Wing Chair" width={400} height={400} className="w-[424px] h-[424px] object-cover group-hover:opacity-75  " />
          <div className="absolute bottom-0 left-0 right-0  px-4 py-3 font-inter  bg-gradient-to-t from-black to-transparent" >
            <h3 className="text-white font-bold">Wing Chair</h3>
            <p className="text-sm text-gray-200">3,584 Products</p>
          </div>
        </div>

        {/* Wooden Chair */}
        <div className="relative group overflow-hidden  rounded-lg shadow-lg">
          <Image src="/images/wooden.png" alt="Wooden Chair"width={400} height={400} className="w-[424px] h-[424px] object-cover group-hover:opacity-75   "/>
          <div className="absolute bottom-0 left-0 right-0  px-4 py-3 font-inter   bg-gradient-to-t from-black to-transparent" >
            <h3 className="text-white font-bold">Wooden Chair</h3>
            <p className="text-sm text-gray-200">137 Products</p>
          </div>
        </div>

        {/* Desk Chair */}
        <div className="relative group overflow-hidden  rounded-lg shadow-lg">
          <Image src="/images/Desk.png" alt="Desk Chair"  width={400} height={400} className="w-[424px] h-[424px] object-cover group-hover:opacity-75  "/>
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 font-inter  bg-gradient-to-t from-black to-transparent ">
            <h3 className="text-white font-bold">Desk Chair</h3>
            <p className="text-sm text-gray-200">164 Products</p>
          </div>
        </div>
        </div>

      </div>
   
  )
}

export default Category;

