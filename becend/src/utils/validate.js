import joi from "joi";

const userSchema = joi.object({
    fullName: joi.string().min(2).required(),
    emailOrPhone: joi.string().min(6).required(),
    username: joi.string().min(2).required(),
    viloyat: joi.string().min(2).required(),
    password: joi.string().min(6).required(),
    gender: joi.string().valid('Erkak', 'Ayol')
})

const fanShema = joi.object({
    first_fan: joi.string().valid("Matematika", "Biologiya").required(),
    second_fan: joi.string().valid("Ingliz tili", "Fizika", "Kimyo").required()
})

export {
    userSchema,
    fanShema
}