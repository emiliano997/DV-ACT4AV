import express from "express";
import __dirname from "./dirname.js";
import { productRouter } from "./routes/product.routes.js";
import { userRouter } from "./routes/user.routes.js";

const app = express();

// Configuración de Express
app.use(express.json()); // Middleware
app.use(express.urlencoded({ extended: true })); // Middleware

// Routes
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
