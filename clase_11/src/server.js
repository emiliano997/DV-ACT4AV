import express from "express";
import __dirname from "./dirname.js";

const app = express();

// Petición GET
app.get("/", (request, response) => {
  // request: Petición del cliente
  // response: Respuesta del servidor
  // response.send("<h1>Hola mundo</h1>"); // Cualquier tipo de respuesta
  // response.json({
  //   message: "Hola mundo",
  //   date: new Date().toLocaleDateString("es-ES", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   }),
  //   success: true,
  // });

  response.sendFile(__dirname + "/index.html");
});

// Endpoint products
const productsDB = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
  { id: 6, name: "Product 6", price: 600 },
  { id: 7, name: "Product 7", price: 700 },
  { id: 8, name: "Product 8", price: 800 },
  { id: 9, name: "Product 9", price: 900 },
  { id: 10, name: "Product 10", price: 1000 },
];

app.get("/products", (request, response) => {
  // request.query -> Parámetros de la consulta
  const { limit, page } = request.query;
  console.log(page);

  let products = [...productsDB];

  if (limit && !isNaN(limit)) {
    products = products.slice(0, Number(limit));
  }

  if (page && !isNaN(page)) {
    // Lógica de paginación
  }

  response.json(products);
});

app.get("/products/:id", (req, res) => {
  // request.params -> Parámetros de la URL
  const { id } = req.params; // String

  if (isNaN(id)) {
    return res.json({ error: "El ID debe ser un número" });
  }

  const product = productsDB.find((p) => p.id === Number(id));

  if (!product) {
    return res.json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

// Endpoint users
const users = [
  { id: 1, name: "Admin", email: "admin@admin.com", age: 20, role: "admin" },
  { id: 2, name: "User 2", email: "user2@user2.com", age: 25, role: "user" },
  { id: 3, name: "User 3", email: "user3@user3.com", age: 30, role: "user" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
