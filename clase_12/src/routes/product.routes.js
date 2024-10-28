import { Router } from "express";

const productRouter = Router();

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

productRouter.get("/", (request, response) => {
  const { limit, page } = request.query;

  let products = [...productsDB];

  if (limit && !isNaN(limit)) {
    products = products.slice(0, Number(limit));
  }

  response.status(200).json(products);
});

productRouter.post("/", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      error: "Todos los campos son requeridos",
    });
  }

  const product = {
    id: productsDB[productsDB.length - 1].id + 1,
    name,
    price,
  };

  productsDB.push(product);

  res.status(201).json({
    message: "Producto creado",
    product,
  });
});

productRouter.get("/:id", (req, res) => {
  // request.params -> Parámetros de la URL
  const { id } = req.params; // String

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número" });
  }

  const product = productsDB.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

productRouter.put("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número" });
  }

  const product = productsDB.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const { name, price } = req.body;

  product.name = name ?? product.name;
  product.price = price ?? product.price;

  const index = productsDB.findIndex((p) => p.id === Number(id));

  productsDB[index] = {
    ...product,
  };

  res.json({
    message: "Producto actualizado",
    product,
  });
});

productRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número" });
  }

  const product = productsDB.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const index = productsDB.findIndex((p) => p.id === Number(id));

  productsDB.splice(index, 1);

  res.json({
    message: "Producto eliminado",
    product,
  });
});

export { productRouter };
