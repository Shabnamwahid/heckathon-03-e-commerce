
'use client';
import Image from 'next/image';
import Link from 'next/link';

const productsData: Record<
  string,
  { id: number; title: string; description: string; price: number; image: string }[]
> = {
  sofa: [
    { id: 1, title: 'Modern Sofa', description: 'Comfortable and luxurious.', price: 500, image: '/images/Pink.png' },
    { id: 2, title: 'Classic Sofa', description: 'Elegant design for homes.', price: 450, image: '/images/Sofa.png' },
    { id: 3, title: 'Classic Sofa', description: 'Elegant design for homes.', price: 450, image: '/images/Large.png' },
  ],
  'wooden-chair': [
    { id: 1, title: 'Wooden Chair', description: 'Stylish and strong.', price: 150, image: '/images/wooden.png' },
    { id: 2, title: 'Classic Wooden Chair', description: 'Perfect for dining.', price: 120, image: '/images/White.png' },
    { id: 3, title: 'Classic Wooden Chair', description: 'Perfect for dining.', price: 120, image: '/images/Desk.png' },
  ],
  'wing-chair': [
    { id: 1, title: 'Modern Cozy Chair', description: 'Ideal for comfort.', price: 200, image: '/images/Orange.png' },
    { id: 2, title: 'Luxurious Cozy Chair', description: 'Relaxation guaranteed.', price: 250, image: '/images/brown.png' },
    { id: 3, title: 'Luxurious Cozy Chair', description: 'Relaxation guaranteed.', price: 250, image: '/images/black.png' },
  ],
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params; // Use the params to access category value

  // Retrieve products for specific category
  const products = category ? productsData[category] : [];

  if (!products || products.length === 0) {
    return <p className="text-center text-red-500 mt-10">Category not found!</p>;
  }

  return (
    <div className="container mx-auto px-10 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{category.toUpperCase()} Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className=" group relative h-96 w-full  ">
              <Image
                src={product.image}
                alt={product.title}
               
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg object-cover transition-opacity group-hover:opacity-75  duration-300 "
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <p className="text-gray-900 font-bold">Price: ${product.price}</p>
             <Link href="/Product" ><button
                onClick={() => alert(`Clicked on ${product.title}`)}
                className="mt-4 block w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                View Details
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
