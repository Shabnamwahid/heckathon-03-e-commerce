import React from "react";
import Image from "next/image";


export default function Product() {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$20", image: "/images/White.png", isNew: true },
    { id: 2, name: "Library Stool Chair", price: "$20", image: "/images/Pink.png", isNew: true },
    { id: 3, name: "Library Stool Chair", price: "$20", image: "/images/Orange.png", isNew: false },
    { id: 4, name: "Library Stool Chair", price: "$20", image: "/images/Sofa.png", isNew: false },
    { id: 5, name: "Library Stool Chair", price: "$20", image: "/images/wooden.png", isNew: true },
    { id: 6, name: "Library Stool Chair", price: "$20", image: "/images/brown.png", isNew: true },
    { id: 7, name: "Library Stool Chair", price: "$20", image: "/images/black.png", isNew: false},
    { id: 8, name: "Library Stool Chair", price: "$20", image: "/images/White.png", isNew: false },
    { id: 9, name: "Library Stool Chair", price: "$20", image: "/images/library.png", isNew: true },
    { id: 10, name: "Library Stool Chair", price: "$20", image: "/images/Pink.png", isNew: true },
    { id: 11, name: "Library Stool Chair", price: "$20", image: "/images/Orange.png", isNew: false },
    { id: 12, name: "Library Stool Chair", price: "$20", image: "/images/Desk.png", isNew: false },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-lg w-full h-44 object-cover mb-4"
            />
            {product.isNew && (
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full mb-2 inline-block">
                New
              </span>
            )}
            <h4 className="font-medium text-lg">{product.name}</h4>
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
        <p className="text-black  mb-4">
          Get updates on the latest products and discounts.
        </p>
        <input
          type="email"
          placeholder="Email Address..."
          className="px-4  py-2  text-black border-b-2 border-black bg-gray-100 w-1/2 max-w-md "
        />
        <button className=" text-black border-b-2 border-black px-4 py-2 ">
          SUBMIT
        </button>
      </section>

      {/* Instagram Products Section */}
      <section className="mt-12 text-center">
        <h2 className="text-xl font-bold mb-4">Follow Products and Discounts on Instagram</h2>
        <div className="flex justify-center gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="w-24 h-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
