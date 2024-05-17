import Joi from 'joi';

export  const userValidator =
    Joi
        .object({
            username: Joi
                .string()
                .pattern(/w{4,}/)
                .required()
                //message('defaul')
                .messages({
                    "string.patter.base": "only words accepted",
                    "string.required.base": "username is required"
                }),
            age: Joi
                .number()
                .min(0)
                .max(100)
                .required()
                .messages({
                    "number.min": 'should be more than 0',
                    "number.max":'"shoul be not more that  100'
                })
        })