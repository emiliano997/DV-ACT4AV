import { Router } from "express";

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

userRouter.post("/", (req, res) => {
  const { name, email, age, role } = req.body;

  if (!name || !email || !age || !role) {
    return res.status(400).json({
      error: "Todos los campos son requeridos",
    });
  }

  console.log(role);

  if (role !== "user" && role !== "admin") {
    return res.status(400).json({
      error: "El rol debe ser 'user' o 'admin'",
    });
  }

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

userRouter.put("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número" });
  }

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

userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número" });
  }

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
