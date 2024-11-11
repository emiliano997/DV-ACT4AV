import { prisma } from "../providers/prisma.js";

export class ProductService {
  static async getAll({ limit = 10, page = 1 }) {
    return prisma.product.findMany({
      take: limit ? Number(limit) : undefined,
      skip: page ? (Number(page) - 1) * Number(limit) : undefined,
      where: {
        status: "available",
      },
    });
  }

  static async getById({ id }) {
    return prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  }

  static async create({ name, price, image, stock, status }) {
    return prisma.product.create({
      data: {
        name,
        price,
        image,
        stock,
        status,
      },
    });
  }

  static async update({ id, product }) {
    return prisma.product.update({
      where: {
        id: id,
      },
      data: product,
    });
  }

  static async delete({ id }) {
    return prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}
