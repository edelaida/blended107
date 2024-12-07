import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export function isValidId(req, res, next) {
  const { productId } = req.params;

  if (!isValidObjectId(productId)) {
    return next(createHttpError(400, 'ID is not valid'));
  }
  next();
}
