import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllProductsController,
  getProductsByIdController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));

router.get('/products/:productId', ctrlWrapper(getProductsByIdController));

export default router;
