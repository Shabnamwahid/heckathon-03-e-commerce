import React from "react";
import Image from "next/image";
interface ProductCardProps {
  image: string; // پروڈکٹ کی تصویر
  name: string;  // پروڈکٹ کا نام
  price: string; // پروڈکٹ کی قیمت
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg">
      <Image 
        src={image} 
        alt={name} 
        width={200}
        height={200}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{price}</p>
    </div>
  );
};

export default ProductCard;
