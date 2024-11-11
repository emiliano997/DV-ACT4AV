import { Router } from "express";
import { validateId } from "../middlewares/validateId.js";
import { validateSchemaZod } from "../middlewares/validateSchemaZod.js";
import { productSchema } from "../schemas/product.schema.js";
import { ProductController } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", ProductController.getAll);
productRouter.post(
  "/",
  validateSchemaZod(productSchema),
  ProductController.create
);

productRouter.get("/:id", validateId, ProductController.getById);
productRouter.put("/:id", validateId, ProductController.update);
productRouter.delete("/:id", validateId, ProductController.delete);

export { productRouter };
