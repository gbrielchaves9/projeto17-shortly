import joi from 'joi';

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
  confirmPassword: joi.string().min(4).required().valid(joi.ref('password')).messages({'any.only': 'confirmPassword must match password'})
});

export default userSchema;
