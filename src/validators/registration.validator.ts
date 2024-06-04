import Joi from "joi";

const userRegistrationValidator =
    Joi.object({
        username: Joi
            .string()
            .pattern(/^[a-zA-Z]\w{1,19}$/)
            .required()
            .min(1)
            .max(20)
            .messages({
                "string.pattern.base": "Ім'я користувача повинно починатися з літери і може містити лише літери, цифри та символи підкреслення, з довжиною від 1 до 20 символів.",
                "string.required.base": 'Введіть ім\'я користувача',
                "string.max": "Імя перевищує 20 символів",
                "string.min": "Імя нижче 1",
                "string.empty": "Імя не може бути порожнім"
            }),
        password: Joi
            .string()
            .pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/)
            .max(120)
            .min(1)
            .messages({
                "string.pattern.base": "Пароль має містити принаймні одну цифру, одну велику літеру, одну маленьку літеру, один спеціальний символ і мати довжину від 8 до 20 символів",
                "string.required.base": "Введіть Пароль користувача",
                "string.max": "Пароль перевищує 128 символів",
                "string.min": "Пароль нижче 1",
                "string.empty": "Пароль не може бути порожнім"
            }),
        confirm_password: Joi.any().valid(Joi.ref('password')).required()
    })

export  default userRegistrationValidator;
