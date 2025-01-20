

// import Hero from "@/components/Hero";
// import FeaturedProducts from "@/components/FeaturedProducts";
// import Category from "@/components/Category";
// // import Footer from "@/components/Footer";
// import HotCategory from "@/components/HotCategory";
// import OurProducts from "@/components/OurProducts";

// export default function Home() {
//   return (
//     <div>
//       {/* <Navbar /> */}
      
//       <Hero />
//       <FeaturedProducts />
//       <Category />
//       <HotCategory />
//       <OurProducts />

//       {/* <Footer /> */}
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Category from "@/components/Category";
// import Footer from "@/components/Footer";
import HotCategory from "@/components/HotCategory";
import OurProducts from "@/components/OurProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const products = [
    { id: 1, name: "Smart Watch", price: "$50", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Wireless Headphones", price: "$80", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Gaming Mouse", price: "$30", image: "https://via.placeholder.com/150" },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Existing Components */}
      <Hero />
      <FeaturedProducts />
      <Category />
      <HotCategory />
      <OurProducts />

      {/* New Components */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Store</h1>
        
        {/* SearchBar Component */}
        <SearchBar placeholder="Search for a product..." onSearch={handleSearch} />
        
        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))}
        </div>
      </div>

      {/* Uncomment Footer when ready */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
