import { ProductsCollection } from '../db/models/Product.js';

export const getProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findById(productId);
  return product;
};
