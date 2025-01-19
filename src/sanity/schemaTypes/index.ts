
// import { type SchemaTypeDefinition } from 'sanity'
// import { productSchema } from './product';


// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [productSchema],
// }
import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./product";
import { categorySchema } from "./categories";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema],
};