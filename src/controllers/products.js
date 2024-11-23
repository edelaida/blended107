import { getProducts, getProductById } from '../services/products.js';
import createHttpError from 'http-errors';

export const getAllProductsController = async (req, res) => {
  const products = await getProducts();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductsByIdController = async (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  const product = await getProductById(productId);
  console.log(product);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res
    .status(200)
    .json({
      status: 200,
      message: `Successfully found product by id ${productId}`,
      data: product,
    });
};
