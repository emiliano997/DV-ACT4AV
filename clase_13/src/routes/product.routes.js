import { Router } from "express";
import { validateId } from "../middlewares/validateId.js";
import { validateSchemaZod } from "../middlewares/validateSchemaZod.js";
import { productSchema } from "../schemas/product.schema.js";

const productRouter = Router();

// Endpoint products
const productsDB = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/150",
    stock: 10,
    status: "available",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://via.placeholder.com/150",
    stock: 20,
    status: "available",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://via.placeholder.com/150",
    stock: 30,
    status: "unavailable",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "https://via.placeholder.com/150",
    stock: 40,
    status: "available",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "https://via.placeholder.com/150",
    stock: 50,
    status: "unavailable",
  },
];

productRouter.get("/", (request, response) => {
  const { limit, page } = request.query;

  let products = [...productsDB];

  if (limit && !isNaN(limit)) {
    products = products.slice(0, Number(limit));
  }

  response.status(200).json(products);
});

productRouter.post("/", validateSchemaZod(productSchema), (req, res) => {
  const { name, price, image, stock, status } = req.body;

  const product = {
    id: productsDB[productsDB.length - 1].id + 1,
    name,
    price,
    image,
    stock,
    status,
  };

  productsDB.push(product);

  res.status(201).json({
    message: "Producto creado",
    product,
  });
});

productRouter.get("/:id", validateId, (req, res) => {
  const { id } = req.params;
  const product = productsDB.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

productRouter.put("/:id", validateId, (req, res) => {
  const { id } = req.params;

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

productRouter.delete("/:id", validateId, (req, res) => {
  const { id } = req.params;

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
