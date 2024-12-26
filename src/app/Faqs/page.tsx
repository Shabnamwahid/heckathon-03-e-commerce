import React from "react";

export default function Questions() {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Questions Looks Here</h2>
      <p className="text-gray-600 text-center mb-10">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Grid for FAQs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ Item 1*/}
        <div className="bg-gray-300 border border-gray-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
           
             What types of chairs do you offer?
            <span className="text-black font-bold  mb-2 text-sm ml-20 ">➕</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia nisi
            neque facere.
          </p>
        </div>

        {/* FAQ Item 2*/}
        <div className="bg-gray-300 border border-gray-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
           
            How can we get in touch with you?
            <span className="text-black font-bold  mb-2 text-sm  ml-20">➕</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio
            minus non nam.
          </p>
        </div>

        {/* FAQ Item 3*/}
        <div className="bg-gray-300 border border-gray-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
           
            Do you share customer info with third parties?
            <span className="text-black font-bold  mb-4 text-sm ml-4 ">➕</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias
            ex officiis laudantium.
          </p>
        </div>

        {/* FAQ Item 4*/}
        <div className="bg-gray-300 border border-gray-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
           
            What will be delivered? And when?
            <span className="text-black font-bold  mb-2 text-sm ml-20 ">➕</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            autem deserunt!
          </p>
        </div>

        {/* FAQ Item 5*/}
        <div className="bg-gray-300 border border-gray-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
          
            Can I try a chair before purchasing?
            <span className="text-black font-bold  mb-2 text-sm  ml-16">➕</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            impedit dolorum neque?
          </p>
        </div>

        {/* FAQ Item 6*/}
        <div className="bg-gray-300 border border-gray-300 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
           
            How do I care and maintain my Comforty chair?
            <span className="text-black font-bold  mb-4 text-sm ml-2">➕</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            reprehenderit quas pariatur autem!
          </p>
        </div>
      </div>
    </div>
  );
}
