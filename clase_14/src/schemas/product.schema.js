import z from "zod";

export const productSchema = z.object({
  name: z.string().min(3).max(80, {
    message: "El nombre debe tener entre 3 y 80 caracteres",
  }),
  price: z.number().positive().min(0, {
    message: "El precio debe ser mayor a 0",
  }),
  image: z
    .string()
    .url({
      message: "La imagen debe ser una URL válida",
    })
    .optional(),
  stock: z.number().int().positive().min(0, {
    message: "El stock debe ser mayor a 0",
  }),
  status: z.enum(["available", "unavailable"], {
    message: "El estado debe ser 'available' o 'unavailable'",
  }),
});
