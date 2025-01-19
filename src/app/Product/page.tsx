

// "use client";


// import React, { useEffect, useState } from "react";
// import Image from "next/legacy/image";
// import { fetchProducts } from "../../sanity/lib/fetchProducts"; // Correct relative path
//  // Import the fetchProducts function

// export default function Product() {
//   const [products, setProducts] = useState<any[]>([]);  // State to store fetched products
//   const [loading, setLoading] = useState<boolean>(true);  // State to manage loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchProducts();  // Call fetchProducts to fetch data from Sanity
//       setProducts(data);  // Set fetched data to state
//       setLoading(false);  // Stop loading once data is fetched
//     };

//     fetchData();  // Execute fetchData
//   }, []);  // Dependency array ensures that effect runs only on mount

//   if (loading) {
//     return <div>Loading...</div>;  // Loading state
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

//       {/* Product Grid */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
//             {/* Showing image fetched from Sanity */}
//             <Image
//               src={product.image.asset.url}  // Using Sanity image URL
//               alt={product.title}  // Product name
//               width={200}
//               height={200}
//               className="rounded-lg w-full h-44 object-cover mb-4"
//             />
//             {product.isNew && (
//               <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full mb-2 inline-block">
//                 New
//               </span>
//             )}
//             <h4 className="font-medium text-lg">{product.title}</h4>
//             <p className="text-gray-600 font-medium">{product.price}</p>
//             <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* Newsletter Section */}
//       <section className="mt-16 text-center bg-gray-100 py-8 rounded-lg">
//         <h2 className="text-2xl font-bold mb-2">Or Subscribe To The Newsletter</h2>
//         <p className="text-black mb-4">
//           Get updates on the latest products and discounts.
//         </p>
//         <input
//           type="email"
//           placeholder="Email Address..."
//           className="px-4 py-2 text-black border-b-2 border-black bg-gray-100 w-1/2 max-w-md"
//         />
//         <button className="text-black border-b-2 border-black px-4 py-2">
//           SUBMIT
//         </button>
//       </section>

//       {/* Instagram Products Section */}
//       <section className="mt-12 text-center">
//         <h2 className="text-xl font-bold mb-4">Follow Products and Discounts on Instagram</h2>
//         <div className="flex justify-center gap-4">
//           {products.slice(0, 6).map((product) => (
//             <div key={product.id} className="w-24 h-24">
//               <Image
//                 src={product.image.asset.url}  // Using Sanity image URL
//                 alt={product.title}
//                 width={96}
//                 height={96}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { fetchProducts } from "../../sanity/lib/fetchProducts";

// Define the product interface
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

  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            {/* Showing image fetched from Sanity */}
            <Image
              src={product.image.asset.url} // Using Sanity image URL
              alt={product.title} // Product name
              width={200}
              height={200}
              className="rounded-lg w-full h-44 object-cover mb-4"
            />
            {product.isNew && (
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full mb-2 inline-block">
                New
              </span>
            )}
            <h4 className="font-medium text-lg">{product.title}</h4>
            <p className="text-gray-600 font-medium">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="mt-16 text-center bg-gray-100 py-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Or Subscribe To The Newsletter</h2>
        <p className="text-black mb-4">
          Get updates on the latest products and discounts.
        </p>
        <input
          type="email"
          placeholder="Email Address..."
          className="px-4 py-2 text-black border-b-2 border-black bg-gray-100 w-1/2 max-w-md"
        />
        <button className="text-black border-b-2 border-black px-4 py-2">
          SUBMIT
        </button>
      </section>

      {/* Instagram Products Section */}
      <section className="mt-12 text-center">
        <h2 className="text-xl font-bold mb-4">Follow Products and Discounts on Instagram</h2>
        <div className="flex justify-center gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="w-24 h-24">
              <Image
                src={product.image.asset.url} // Using Sanity image URL
                alt={product.title}
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
