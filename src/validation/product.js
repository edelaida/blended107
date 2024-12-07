import Joi from 'joi';

export const productsSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  price: Joi.number().required(),
  category: Joi.string()
    .valid('books', 'electronics', 'clothing', 'other')
    .required(),
  description: Joi.string().required(),
});

export const updProductsSchema = Joi.object({
  name: Joi.string().min(2).max(30),
  price: Joi.number(),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string(),
});
