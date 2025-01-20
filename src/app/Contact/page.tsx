
// import React from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
// import { GrTrophy } from "react-icons/gr";
// import Image from "next/legacy/image";


// const Contact = () => {
//   return (
//     <div className="p-10">
//       <h2 className="flex justify-center text-3xl font-bold mb-8">Get In Touch With Us</h2>
//       <div className="flex justify-center mb-8">
//         <div className="text-gray-400 text-center">
//           <p className="mb-2 w-[100%] mx-auto">For More Information About Our Product & Services. Please Feel Free To Drop Us </p>
//           <p className="w-[90%] mx-auto"> An Email.Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-20">
//         <div>
//           <p className="mb-6 flex  font-bold">
//             <FaMapMarkerAlt className="mr-2 text-xl" />
//             <strong>Address:</strong>
//           </p>
//           <div className="flex  mb-4">
//             <div className="flex flex-col items-">
//               <p className="mb- w-[100%] text-center">236 5th SE Avenue, New York </p>
//               <p className="w-[70%] text-center">NY10000, United States</p>
//             </div>
//           </div>

//           <p className="mb-6 flex font-bold">
//             <FaPhoneAlt className="mr-2 text-xl" />
//             <strong>Phone:</strong>
//           </p>
//           <div className="flex mb-4">
//             <div className="flex flex-col items-center">
//               <p className="mb-2 w-[100%] text-center">Mobile: +(84) 546-6789</p>
//               <p className="w-[100%] text-center">Hotline: +(84) 456-6789</p>
//             </div>
//           </div>

//           <p className="mb-6 flex font-bold ">
//             <FaRegClock className="mr-2 text-xl" />
//             <strong>Working Time:</strong>
//           </p>
//           <div className="flex  mb-4">
//             <div className="flex flex-col items-center">
//               <p className="mb-2 w-[100%] text-center">Mon-Fri 9:00 AM - 5:00 PM</p>
//               <p className="w-[100%] text-center">Saturday-Sunday: 9:00 - 21:00</p>
//             </div>
//           </div>
//         </div>

//         <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="block w-full border rounded-lg p-2 mb-6"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="block w-full border rounded-lg p-2 mb-6"
//           />
//           <input
//             type="text"
//             placeholder="Subject"
//             className="block w-full border rounded-lg p-2 mb-6"
//           />
//           <textarea
//             placeholder="Message"
//             rows={4}
//             className="block w-full border rounded-lg p-2 mb-6"
//           ></textarea>
//           <button className="bg-[#029FAE] text-white py-2 px-10">Submit</button>
//         </form>
//       </div>

//       {/* icons section */}
// <div className="flex justify-around py-14 space-x-10 mt-10 bg-gray-300">
//   {/* 1 */}
//   <div className="flex flex-col items-center">
//     <p className="mb-6 flex font-bold">
//       <GrTrophy className="mr-2 text-xl" />
//       <strong>High Quality</strong>
//     </p>
//     <div className="flex mb-4">
//       <p className="mb-2 w-[100%] text-center">Crafted from top materials</p>
//     </div>
//   </div>

//   {/* 2 */}
//   <div className="flex flex-col items-center">
//     <p className="mb-6 flex font-bold">
//       <Image src="/images/tick.png" alt="tick" width={20} height={20} className="mr-2 text-xl" />
//       <strong>Warranty Protection</strong>
//     </p>
//     <div className="flex mb-4">
//       <p className="mb-2 w-[100%] text-center">Over 2 years</p>
//     </div>
//   </div>

//   {/* 3 */}
//   <div className="flex flex-col items-center">
//     <p className="mb-6 flex font-bold">
//       <Image src="/images/girl.png" alt="tick" width={20} height={20} className="mr-2 text-xl" />
//       <strong>24 / 7 Support</strong>
//     </p>
//     <div className="flex mb-4">
//       <p className="mb-2 w-[100%] text-center">Dedicated support</p>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Contact;

'use client';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { GrTrophy } from "react-icons/gr";
import Image from "next/legacy/image";

const Contact = () => {
  const [comments, setComments] = useState<string[]>([]); // Fix: explicitly set the type of comments as string[]
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-10">
      <h2 className="flex justify-center text-3xl font-bold mb-8">Get In Touch With Us</h2>
      <div className="flex justify-center mb-8">
        <div className="text-gray-400 text-center">
          <p className="mb-2 w-[100%] mx-auto">For More Information About Our Product & Services. Please Feel Free To Drop Us </p>
          <p className="w-[90%] mx-auto"> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <p className="mb-6 flex font-bold">
            <FaMapMarkerAlt className="mr-2 text-xl" />
            <strong>Address:</strong>
          </p>
          <div className="flex mb-4">
            <div className="flex flex-col items-center">
              <p className="mb- w-[100%] text-center">236 5th SE Avenue, New York </p>
              <p className="w-[70%] text-center">NY10000, United States</p>
            </div>
          </div>

          <p className="mb-6 flex font-bold">
            <FaPhoneAlt className="mr-2 text-xl" />
            <strong>Phone:</strong>
          </p>
          <div className="flex mb-4">
            <div className="flex flex-col items-center">
              <p className="mb-2 w-[100%] text-center">Mobile: +(84) 546-6789</p>
              <p className="w-[100%] text-center">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <p className="mb-6 flex font-bold ">
            <FaRegClock className="mr-2 text-xl" />
            <strong>Working Time:</strong>
          </p>
          <div className="flex mb-4">
            <div className="flex flex-col items-center">
              <p className="mb-2 w-[100%] text-center">Mon-Fri 9:00 AM - 5:00 PM</p>
              <p className="w-[100%] text-center">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full border rounded-lg p-2 mb-6"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full border rounded-lg p-2 mb-6"
          />
          <input
            type="text"
            placeholder="Subject"
            className="block w-full border rounded-lg p-2 mb-6"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="block w-full border rounded-lg p-2 mb-6"
          ></textarea>
          <button type="button" className="bg-[#029FAE] text-white py-2 px-10">Submit</button>
        </form>
      </div>

      {/* Comments and Reviews Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Leave a Comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          rows={4}
          className="block w-full border rounded-lg p-2 mb-4"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="bg-[#029FAE] text-white py-2 px-10 mb-6"
        >
          Add Comment
        </button>

        <h3 className="text-2xl font-bold mb-4">Reviews</h3>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-100">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;


