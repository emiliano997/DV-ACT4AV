import { prisma } from "../providers/prisma.js";

export class UserService {
  static async getAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  }

  static async getByEmail(email) {
    return prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
      },
    });
  }

  static async getById(id) {
    return prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        password: false,
      },
    });
  }

  static async create({ name, email, role, password }) {
    return prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
  }

  static async update({ id, user }) {
    return prisma.user.update({
      where: {
        id: id,
      },
      data: user,
    });
  }

  static async delete({ id }) {
    return prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
