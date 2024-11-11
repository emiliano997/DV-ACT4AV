import { ProductStatus } from "@prisma/client";
import { ProductService } from "../service/product.service.js";

export class ProductController {
  static async getAll(req, res) {
    try {
      const { limit = 10, page = 1 } = req.query;

      if (isNaN(limit) || isNaN(page)) {
        return res
          .status(400)
          .json({ error: "Limit y page deben ser números" });
      }

      const products = await ProductService.getAll({ limit, page });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  }

  static async create(req, res) {
    const { name, price, image, stock, status } = req.body;

    try {
      const newProduct = await ProductService.create({
        name,
        price,
        image,
        stock,
        status,
      });

      res.status(201).json({
        message: "Producto creado",
        newProduct,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al crear el producto" });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    const product = await ProductService.getById({ id });

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  }

  static async update(req, res) {
    const { id } = req.params;

    try {
      const product = await ProductService.getById({ id });

      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      const { name, price, stock, image } = req.body;

      product.name = name ?? product.name;
      product.price = price ?? product.price;
      product.stock = stock ?? product.stock;
      product.image = image ?? product.image;

      if (product.stock === 0) {
        product.status = ProductStatus.unavailable;
      }

      console.log(id);

      await ProductService.update({ id, product });

      res.json({
        message: "Producto actualizado",
        product,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el producto" });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      const product = await ProductService.getById({ id });

      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      await ProductService.delete({ id });

      res.json({
        message: "Producto eliminado",
        product,
      });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el producto" });
    }
  }
}
