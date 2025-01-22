

// export default client;
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset, apiVersion } from '../env';

// Sanity ImageAsset کی تعریف
export type SanityImageAsset = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'sanity.imageAsset';
    url?: string;
  };
};

// Sanity کلائنٹ کی کنفیگریشن
const client = createClient({
  projectId,
  dataset: dataset || 'production',
  apiVersion: apiVersion || '2023-01-01',
  useCdn: true,
});

// URL Builder کی تعریف
const builder = imageUrlBuilder(client);

// Image URL پیدا کرنے کا فنکشن
export const urlFor = (source: SanityImageAsset['asset']): string => {
  if (!source) {
    throw new Error('Source is required to generate an image URL.');
  }
  return builder.image(source).url();  // .url() کا استعمال کریں تاکہ آپ URL حاصل کر سکیں۔
};

export default client;
  

// import { createClient } from 'next-sanity';

// // Sanity ke project ID aur dataset ki values aap apne `.env` file se export karenge 
// import { projectId, dataset, apiVersion } from '../env';

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true,  // Use CDN for fetching data (for performance optimization in production)
// });
