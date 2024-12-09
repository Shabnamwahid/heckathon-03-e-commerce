import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className='flex'>
              <Image src="/images/LogoIcon.png" alt="sofa" width={30} height={30} className="h-6 flex" />
              <h3 className="text-lg font-bold font-inter text-black">Comforty</h3>
            </div>
            <p className="text-gray-600 mt-4 font-inter">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>

            <div>
              <div className="flex space-x-4 mt-4">
                {/* Facebook Icon */}
               
                  <FaFacebook className=" text-teal-600  flex items-center justify-center w-8 h-8 border-2 border-teal-600 rounded-full" />
              

                {/* Twitter Icon */}
                
                  <FaTwitter className="text-gray-600 hover:text-teal-600 flex items-center justify-center w-5 h-5 mt-2" />
               

                {/* Instagram Icon */}
                
                  
                  <FaInstagram className="text-gray-600 hover:text-blue-500 flex items-center justify-center w-5 h-5 mt-2" />
               
                {/* Pinterest Icon */}
 
              
                  <FaPinterest className="text-gray-600 hover:text-red-600 flex items-center justify-center w-5 h-5 mt-2" />
                
                {/* YouTube Icon */}
               
               
                  <FaYoutube className="text-gray-600 hover:text-red-600 flex items-center justify-center w-6 h-6 mt-2" />
              
              </div>
            </div>
          </div> 
          {/* Category Links */}
          <div>
            <h4 className="text-lg font-semibold font-inter text-gray-800">Category</h4>
            <ul className="mt-4 space-y-2 font-inter">
              <li><Link href="#" className="text-gray-600">Sofa</Link></li>
              <li><Link href="#" className="text-gray-600">Armchair</Link></li>
              <li><Link href="#" className="text-gray-600">Wing Chair</Link></li>
              <li><Link href="#" className="text-teal-600 hover:text-gray-600">Desk Chair</Link></li>
              <li><Link href="#" className="text-gray-600">Wooden Chair</Link></li>
              <li><Link href="#" className="text-gray-600">Park Bench</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 font-inter">Support</h4>
            <ul className="mt-4 space-y-2 font-inter">
              <li><Link href="#" className="text-gray-600">Help & Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-600 font-inter">Teams & Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-600 font-inter">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-teal-600 font-inter">Help</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold  text-gray-800 font-inter">Newsletter</h4>
            <form className="mt-4  gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border  border-gray-300 rounded px-4 py-2 focus:outline-teal-600"
              />
              <button
                type="submit"
                className="mt-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 mt-4 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt erat ex.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-4">
          <div className="container mx-auto flex flex-col font-inter md:flex-row items-center justify-between text-gray-600 text-sm">
            <p>© 2023 - Blogy - Designed & Developed by Zahirsoft</p>
            <div className="flex space-x-4">
              <Image src="/images/paypal.png" alt="PayPal" width={150} height={4} className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

