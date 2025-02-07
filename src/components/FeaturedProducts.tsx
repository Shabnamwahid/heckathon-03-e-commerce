
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsCartDash } from "react-icons/bs";
import { fetchProducts } from '@/sanity/lib/fetchProducts';


interface Product {
  id: string;
  title: string;
  price: string;
  image: {
    asset: {
      url: string;
    };
  };
  isNew?: boolean;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product type for state
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(); // Call fetchProducts to fetch data from Sanity
      setProducts(data); // Set fetched data to state
      setLoading(false); // Stop loading once data is fetched
    };

    fetchData(); // Execute fetchData
  }, []); // Dependency array ensures that effect runs only on mount

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }
  const limitedProducts = products.slice(0, 4);
  return (
    <div className="w-full bg-white">
      {/* Logo Section */}
      <div className="h-[139px] flex justify-center items-center py-4 gap-28">
        <Image src="/images/Logo1.png" alt="Zapier" width={85} height={87} className="w-[85px] h-[87px] object-contain" />
        <Image src="/images/Logo2.png" alt="Pipedrive" width={107} height={109} className="w-[107px] h-[109px] object-contain" />
        <Image src="/images/Logo3.png" alt="CIB Bank" width={135} height={139} className="w-[135px] h-[139px] object-contain" />
        <Image src="/images/Logo4.png" alt="Logo4" width={63} height={65} className="w-[63px] h-[65px] object-contain" />
        <Image src="/images/Logo5.png" alt="Burnt Toast" width={98} height={65} className="w-[98px] h-[101px] object-contain" />
        <Image src="/images/Logo6.png" alt="PandaDoc" width={113} height={115} className="w-[113px] h-[115px] object-contain" />
        <Image src="/images/Logo7.png" alt="Moz" width={84} height={87} className="w-[84px] h-[87px] object-contain" />
      </div>

      {/* Featured Products Section */}
      <div className="bg-white py-8 w-full h-auto mt-10 mb-10">
        <h2 className="text-center text-2xl font-inter font-semibold mb-6">Featured Products</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedProducts.map(product => (
            <div key={product.id} className="relative w-full h-[377px] p-4 rounded-lg shadow-sm">
              {product.isNew && (
                <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded text-white bg-green-500">
                  New
                </span>
              )}
              <Image
                src={product.image.asset.url}
                alt={product.title}
                width={300}
                height={300}
                className="w-[350px] h-[350px] object-cover rounded-lg mb-4 "
              />
              <div className="flex justify-between items-center">
                <h3 className="text-md font-medium font-inter text-[#029FAE]">{product.title}</h3>
                <BsCartDash className="w-6 h-6 rounded-sm text-gray-500" />
              </div>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
