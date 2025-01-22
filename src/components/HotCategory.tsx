// import Image from 'next/image';
// import React from 'react';

// export default function HotCategory() {
//   return (
    
//     <div className="flex flex-wrap px-4 sm:px-8 mx-auto mt-12  h-400 ml-20 mr-16">
//       {/* First  */}

//      <div className="w-full h-full md:w-1/2 p-2 flex flex-row justify-center items-center relative">
//   {/* Vertical Text */}
//   <p className="text-black text-bold  -rotate-90 whitespace-nowrap text-2xl absolute left-0 -ml-48 z-10">
//     Explore new and popular styles
//   </p>

//   {/* Main Image */}
//   <div className="w-full h-full relative">
//     <Image
//       src="/images/Orange.png"
//       alt="Main Image"
//       layout="responsive"
//       width={400}
//       height={560}
//       className="object-cover"
//     />
//   </div>
// </div>


//       <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-4">
//         {/* 4 Images */}
//         <div className="relative">
//           <Image
//             src="/images/Sofa.png"
//             alt="Image 1"
//             layout="responsive"
//             width={200}
//             height={280}
//             className="rounded-lg object-cover "
//           />
//         </div>
//         <div className="relative">
//           <Image
//             src="/images/White.png"
//             alt="Image 2"
//             layout="responsive"
//             width={200}
//             height={280}
//             className="rounded-lg object-cover "
//           />
//         </div>
//         <div className="relative">
//           <Image
//             src="/images/brown.png"
//             alt="Image 3"
//             layout="responsive"
//             width={200}
//             height={280}
//             className="rounded-lg object-cover "
//           />
//         </div>
//         <div className="relative">
//           <Image
//             src="/images/White.png"
//             alt="Image 4"
//             layout="responsive"
//             width={200}
//             height={280}
//             className="rounded-lg object-cover "
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import Image from "next/legacy/image";
import React from 'react';

export default function HotCategory() {
  return (
    <div className="flex flex-wrap px-4 sm:px-8 mx-auto mt-12">
      
      {/* Main Section with Vertical Text + Image */}
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 flex justify-center items-center relative">
        {/* Vertical Text */}
        <p className="text-black font-bold -rotate-90 whitespace-nowrap text-xs sm:text-xl md:text-2xl lg:text-3xl absolute left-0 -ml-24 lg:-ml-48 z-10">
          Explore new and popular styles
        </p>

        {/* Main Image */}
        <div className="w-full h-full relative">
          <Image
            src="/images/Orange.png"
            alt="Main Image"
            layout="responsive"
            width={400}
            height={560}
            className="object-cover"
          />
        </div>
      </div>

      {/* Section with 4 images */}
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 p-2 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* 4 Images */}
        <div className="relative">
          <Image
            src="/images/Sofa.png"
            alt="Image 1"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/White.png"
            alt="Image 2"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/brown.png"
            alt="Image 3"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/White.png"
            alt="Image 4"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

    </div>
  );
}
