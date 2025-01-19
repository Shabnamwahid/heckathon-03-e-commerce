import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
// import { createClient } from 'next-sanity';

// import { apiVersion, dataset, projectId } from '../env';

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true,
// });

// // Example function for server-side rendering
// export async function getServerSideProps() {
//   const products = await client.fetch('*[_type == "product"]'); // Fetch products

//   return {
//     props: {
//       products,
//     },
//   };
// }

// const ProductsPage = ({ products }: { products:  Product[] }) => {
//   return (
//     <div>
//       <h1> products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductsPage;
