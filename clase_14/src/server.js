import express from "express";
import __dirname from "./dirname.js";
import { productRouter } from "./routes/product.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import morgan from "morgan";
import path from "path";

const app = express();

// Configuración de Express
app.use(express.json()); // Middleware a nivel de aplicación
app.use(express.urlencoded({ extended: true })); // Middleware a nivel de aplicación
app.use(morgan("dev")); // Middleware de tercero
app.use(express.static(path.resolve(__dirname, "../public"))); // Middleware incorporado

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
