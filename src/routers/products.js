import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductsByIdController,
  patchProductsByIdController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import { productsSchema, updProductsSchema } from '../validation/product.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));

router.get(
  '/products/:productId',
  isValidId,
  ctrlWrapper(getProductsByIdController),
);

router.post(
  '/products',
  validateBody(productsSchema),
  ctrlWrapper(createProductController),
);

router.patch(
  '/products/:productId',
  isValidId,
  validateBody(updProductsSchema),
  ctrlWrapper(patchProductsByIdController),
);

router,
  delete ('/products/:productId',
  isValidId,
  ctrlWrapper(deleteProductController));

export default router;
