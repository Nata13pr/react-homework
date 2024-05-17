import Joi from 'joi';

export const userValidator =
    Joi
        .object({
            title: Joi
                .string()
                .pattern(/^\w{5,}$/)
                .required()
                .messages({
                    "string.pattern.base": "only words accepted",
                    "string.required.base": "title is required"
                }),

            body: Joi
                .string()
                .pattern(/^\w{10,}$/)
                .required()
                .messages({
                    "string.pattern.base": "only words accepted",
                    "string.required.base": "body is required"
                }),
        })
