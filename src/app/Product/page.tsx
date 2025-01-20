
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { fetchProducts } from "../../sanity/lib/fetchProducts";

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

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deliveryType, setDeliveryType] = useState<string>("Standard");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Add to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove from Cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const handleDeliveryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDeliveryType(event.target.value);
  };

  const handlePlaceOrder = () => {
    alert(
      `Your order has been placed with ${cart.length} items using ${deliveryType} delivery.`
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <Image
              src={product.image.asset.url}
              alt={product.title}
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
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Cart Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        {/* Always Show Cart Section */}
        <div className="space-y-4 bg-gray-100 p-4 rounded-md">
          {cart.length > 0 ? (
            cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <Image
                    src={product.image.asset.url}
                    alt={product.title}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <p className="ml-4">{product.title}</p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-full"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Delivery Options */}
        <div className="mt-6">
          <label htmlFor="delivery-type" className="block mb-2 text-lg">
            Select Delivery Type
          </label>
          <select
            id="delivery-type"
            value={deliveryType}
            onChange={handleDeliveryChange}
            className="p-2 border border-gray-400 rounded w-full"
            disabled={cart.length === 0} // Disable when cart is empty
          >
            <option value="Standard">Standard</option>
            <option value="Express">Express</option>
          </select>

          {/* Place Order */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full w-full"
            disabled={cart.length === 0} // Disable when cart is empty
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

