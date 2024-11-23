import { ProductsCollection } from '../db/models/Product.js';

export const getProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};
