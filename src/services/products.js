import { ProductsCollection } from '../db/models/Product.js';

export const getProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  const product = await ProductsCollection.create(payload);
  return product;
};
export const updateProduct = async(productId, payload, options = {}) => {
  const rawResult = await ProductsCollection.findOneAndUpdate(
      { _id: productId },
      payload,
      {
          new: true,
          includeResultMetadata: true,
          ...options,
      },
  );
  if(!rawResult || !rawResult.value) return null;
  
  return {
      contact: rawResult.value,
      isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteProduct = async (productId) => {
  const product = await ProductsCollection.findOneAndDelete({
    _id: productId,
  });
  return product;
};