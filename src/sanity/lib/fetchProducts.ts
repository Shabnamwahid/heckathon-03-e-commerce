// src/lib/fetchProducts.ts

import { client } from './client';  // Apne `client.ts` file se import karenge

const productsQuery = `
  *[_type == "products"]{
    title,
    price,
    image {
      asset->{url}
    }
  }
`;

export async function fetchProducts() {
  try {
    const products = await client.fetch(productsQuery);  // Sanity se data fetch karna
    return products;  // Successfully fetched products ko return karna
  } catch (error) {
    console.error('Error fetching products:', error);  // Agar error aata hai toh console pe log karna
    return [];
  }
}
