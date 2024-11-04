import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().min(3).required({
    message: "El nombre es requerido y debe tener al menos 3 caracteres",
  }),
  email: Joi.string().email().required({
    message: "El email es requerido y debe tener un formato válido",
  }),
  age: Joi.number().min(18).required({
    message: "La edad es requerida y debe ser mayor de 18 años",
  }),
  role: Joi.string().valid("user", "admin").required({
    message: "El rol debe ser 'user' o 'admin'",
  }),

  // Ejemplo de validación de un array de objetos
  // products: Joi.array()
  //   .items(
  //     Joi.object({
  //       id: Joi.number().required(),
  //       name: Joi.string().required(),
  //       price: Joi.number().required(),
  //     })
  //   )
  //   .required(),

  // Ejemplo de validación de un objeto anidado
  // address: Joi.object({
  //   street: Joi.string().required(),
  //   city: Joi.string().required(),
  //   country: Joi.string().required(),
  // }).required(),
});
