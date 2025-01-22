// /** @type {import('next').nextConfig} */
// const nextConfig = {
//     images: {
//         domains:["cdn.sanity.io"]
//     },
// };

// module.exports = nextConfig;
 
// // export default nextConfig;
// next.config.js (or next.config.mjs if you're using mjs extensions)
// const nextConfig = {
//     images: {
//       domains: ["cdn.sanity.io", "via.placeholder.com"],
//     },
//   };
  
//   export default nextConfig;  // ES module export syntax
 

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "via.placeholder.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
    domains: ['via.placeholder.com'],  // Add any other domains if needed
  },
};

export default nextConfig;

