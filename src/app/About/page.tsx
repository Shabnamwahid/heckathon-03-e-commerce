// import React from 'react';
// import Image from "next/legacy/image";
// import { FaCartShopping } from 'react-icons/fa6';

// const About = () => {
//   return (
//     <section className="text-gray-600 body-font py-12">
//       <div className="container px-5 md:px-28 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">
        
//         {/* Content Section */}
//         <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 bg-teal-600 p-8 rounded-lg shadow-lg text-white flex flex-col justify-between items-center md:items-start">
//           <h1 className="title-font font-medium text-2xl md:text-3xl mb-4 text-white text-center md:text-left">
//             About Us - Comforty
//           </h1>
//           <p className="leading-relaxed mb-6 text-center md:text-left">
//             Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
//           </p>
//           <button className="px-6 py-2 bg-teal-800 text-white font-semibold rounded hover:bg-teal-900 transition duration-300">
//             View Product
//           </button>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 px-4 md:px-8 rounded-lg overflow-hidden mt-6 md:mt-0">
//           <div className="relative w-full h-96">
//             <Image
//               className="object-cover object-center"
//               src="/images/White.png"
//               alt="About Us Image"
//               layout="fill"
//               quality={90}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Brand Difference Section */}
//       <h1 className="text-center text-2xl md:text-3xl font-bold mb-6 mt-20">What Makes Our Brand Different</h1>
//       <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-48 py-8">
//         {[ 
//           { emoji: '🚍', title: 'Next Day as Standard', text: 'Order before 3 pm to get standard delivery the next day.' },
//           { emoji: '💹', title: 'Fast Shipping', text: 'Enjoy fast and reliable shipping for all your orders.' },
//           { emoji: '💯', title: 'Quality Assurance', text: 'We ensure the highest quality for all our products.' },
//           { emoji: '👍', title: 'Customer Support', text: 'We provide excellent customer support 24/7.' },
//         ].map((item, index) => (
//           <div key={index} className="bg-slate-200 p-6 md:p-8 rounded-lg shadow-md text-teal-600 flex flex-col justify-between">
//             <span className="block mb-4 text-lg font-semibold text-emerald-500">{item.emoji}</span>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
//             <p className="text-teal-600 text-base md:text-lg">{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Featured Products Section */}
//       <div className="px-4 sm:px-8 md:px-48 py-8">
//         <h1 className="text-2xl font-bold mb-4 pl-4">Our Popular Product Products</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          
         
        
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-96 mt-10"> 
//   {/* Large Image */}
//   <div
//     key="large"
//     className="flex flex-col items-center w-[400px] mr-36  bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//   >
//     <div className="w-full h-auto overflow-hidden">
//       <Image
//         src="/images/Large.png"
//         alt="Large Image"
//         width={1000} // Increased the width for large image
//         height={440}
//         className="w-full h-auto object-cover"
//       />
//     </div>
//     <div className="flex justify-between w-full px-4 py-2">
//       <div className="flex flex-col items-start">
//         <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
//         <span className="text-black text-lg font-bold">$20</span>
//       </div>
//       <div className="flex items-center">
//         <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
//       </div>
//     </div>
//   </div>

//   {/* Photo Image */}
//   <div
//     key="photo"
//     className="flex flex-col items-center w-[200px] ml-28 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//   >
//     <div className="w-full h-auto overflow-hidden">
//       <Image
//         src="/images/Photo.png"
//         alt="Photo Image"
//         width={300}
//         height={300}
//         className="w-full h-auto object-cover"
//       />
//     </div>
//     <div className="flex justify-between w-full px-2 py-2">
//       <div className="flex flex-col items-start">
//         <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
//         <span className="text-black text-lg font-bold">$15</span>
//       </div>
//       <div className="flex items-center">
//         <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
//       </div>
//     </div>
//   </div>

//   {/* Small Image */}
//   <div
//     key="small"
//     className="flex flex-col items-center w-[200px]  ml-8 bg-white rounded-lg shadow-lg  overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//   >
//     <div className="w-full h-auto overflow-hidden">
//       <Image
//         src="/images/small.png"
//         alt="Small Image"
//         width={300}
//         height={300}
//         className="w-full h-auto object-cover"
//       />
//     </div>
//     <div className="flex justify-between w-full px-4 py-2">
//       <div className="flex flex-col items-start">
//         <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
//         <span className="text-black text-lg font-bold">$18</span>
//       </div>
//       <div className="flex items-center">
//         <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
//       </div>
//     </div>
//   </div>
// </div>

//             {/*  */}
//         </div>
//       </div> 
//     </section>
//   );
// };

// export default About;

// import React from 'react';
import Image from "next/legacy/image";
import { FaCartShopping } from 'react-icons/fa6';

const About = () => {
  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container px-5 md:px-28 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">

        {/* Content Section */}
        <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 bg-teal-600 p-8 rounded-lg shadow-lg text-white flex flex-col justify-between items-center md:items-start">
          <h1 className="title-font font-medium text-2xl md:text-3xl mb-4 text-white text-center md:text-left">
            About Us - Comforty
          </h1>
          <p className="leading-relaxed mb-6 text-center md:text-left">
            Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
          </p>
          <button className="px-6 py-2 bg-teal-800 text-white font-semibold rounded hover:bg-teal-900 transition duration-300">
            View Product
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 px-4 md:px-8 rounded-lg overflow-hidden mt-6 md:mt-0">
          <div className="relative w-full h-96">
            <Image
              className="object-cover object-center"
              src="/images/White.png"
              alt="About Us Image"
              layout="fill"
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="px-4 sm:px-8 md:px-28 py-8">
        <h1 className="text-2xl font-bold mb-4 pl-4">Our Popular Product Products</h1>
        
        {/* Responsive Grid */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">

          {/* Large Image */}
          <div className="flex flex-col items-center w-full md:w-[66.66%] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/images/Large.png"
                alt="Large Image"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex justify-between w-full px-4 py-2">
              <div className="flex flex-col items-start">
                <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                <span className="text-black text-lg font-bold">$20</span>
              </div>
              <div className="flex items-center">
                <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Photo Image */}
          <div className="flex flex-col items-center w-full md:w-[33.33%] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/images/Photo.png"
                alt="Photo Image"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex justify-between w-full px-2 py-2">
              <div className="flex flex-col items-start">
                <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                <span className="text-black text-lg font-bold">$15</span>
              </div>
              <div className="flex items-center">
                <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Small Image */}
          <div className="flex flex-col items-center w-full md:w-[33.33%] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/images/small.png"
                alt="Small Image"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex justify-between w-full px-4 py-2">
              <div className="flex flex-col items-start">
                <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                <span className="text-black text-lg font-bold">$18</span>
              </div>
              <div className="flex items-center">
                <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
