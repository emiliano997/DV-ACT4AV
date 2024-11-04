import { Router } from "express";
import { validateId } from "../middlewares/validateId.js";
import { validateSchemaJoi } from "../middlewares/validateSchemaJoi.js";
import { userSchema } from "../schemas/user.schema.js";

const userRouter = Router();

// Endpoint users
const users = [
  { id: 1, name: "Admin", email: "admin@admin.com", age: 20, role: "admin" },
  { id: 2, name: "User 2", email: "user2@user2.com", age: 25, role: "user" },
  { id: 3, name: "User 3", email: "user3@user3.com", age: 30, role: "user" },
];

userRouter.get("/", (req, res) => {
  res.status(200).json(users);
});

userRouter.post("/", validateSchemaJoi(userSchema), (req, res) => {
  const { name, email, age, role } = req.body;

  const userExists = users.some((u) => u.email === email);

  if (userExists) {
    return res.status(409).json({
      error: "El email ya está registrado",
    });
  }

  const user = {
    id: users[users.length - 1].id + 1,
    name,
    email,
    age,
    role,
  };

  users.push(user);

  res.status(201).json({
    message: "Usuario creado",
    user,
  });
});

userRouter.put("/:id", validateId, (req, res) => {
  const { id } = req.params;

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const { name, email, age, role } = req.body;

  user.name = name ?? user.name;
  user.email = email ?? user.email;
  user.age = age ?? user.age;
  user.role = role ?? user.role;

  const index = users.findIndex((u) => u.id === Number(id));

  users[index] = user;

  res.json({
    message: "Usuario actualizado",
    user,
  });
});

userRouter.delete("/:id", validateId, (req, res) => {
  const { id } = req.params;

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const index = users.findIndex((u) => u.id === Number(id));

  users.splice(index, 1);

  res.json({
    message: "Usuario eliminado",
    user,
  });
});

export { userRouter };
