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

router.get('/', ctrlWrapper(getAllProductsController));

router.get('/:productId', isValidId, ctrlWrapper(getProductsByIdController));

router.post(
  '/',
  validateBody(productsSchema),
  ctrlWrapper(createProductController),
);

router.patch(
  '/:productId',
  isValidId,
  validateBody(updProductsSchema),
  ctrlWrapper(patchProductsByIdController),
);

router, delete ('/:productId', isValidId, ctrlWrapper(deleteProductController));

export default router;
