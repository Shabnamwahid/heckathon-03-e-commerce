// src/lib/sanityClient.ts

import { createClient } from 'next-sanity';

// Sanity ke project ID aur dataset ki values aap apne `.env` file se export karenge 
import { projectId, dataset, apiVersion } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,  // Use CDN for fetching data (for performance optimization in production)
});
