import { Router } from "express";
import { validateSchemaJoi } from "../middlewares/validateSchemaJoi.js";
import { userSchema } from "../schemas/user.schema.js";
import { UserController } from "../controllers/user.controller.js";

const userRouter = Router();

// Endpoint users
const users = [
  { id: 1, name: "Admin", email: "admin@admin.com", age: 20, role: "admin" },
  { id: 2, name: "User 2", email: "user2@user2.com", age: 25, role: "user" },
  { id: 3, name: "User 3", email: "user3@user3.com", age: 30, role: "user" },
];

userRouter.get("/", UserController.getAll);

userRouter.post("/", validateSchemaJoi(userSchema), UserController.create);

userRouter.put("/:id", UserController.update);

userRouter.delete("/:id", UserController.delete);

export { userRouter };
