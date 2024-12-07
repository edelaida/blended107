import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/products.js';
import createHttpError from 'http-errors';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductsController = async (req, res) => {
  console.log('query', req.query);
  const filter = parseFilterParams(req.query);
  console.log('filter', filter);
  const products = await getProducts(filter);
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
  res.status(200).json({
    status: 200,
    message: `Successfully found product by id ${productId}`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const patchProductsByIdController = async (req, res, next) => {
  const { productId } = req.params;
  const result = await updateProduct(productId, req.body);

  if (!result) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result.product,
  });
};

export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) {
    next(createHttpError(404, 'Product, not found'));
    return;
  }
  res.status(204).send();
};
