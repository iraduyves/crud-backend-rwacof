import Joi from 'joi';

export const validateProduct = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        description: Joi.string().min(5).required(),
        price: Joi.number().precision(2).required(),
        category: Joi.string().optional(),
        stock: Joi.number().integer().min(0).optional(),
        imageUrl: Joi.string().uri().optional(),
    });

    return schema.validate(data);
};
