import { UserService } from "../service/user.service.js";
import { hashPassword } from "../utils/hash.js";

export class UserController {
  static async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);

      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async create(req, res) {
    try {
      const { name, email, password, role } = req.body;

      const passwordHash = await hashPassword(password);

      console.log(passwordHash);

      const user = await UserService.create({
        name,
        email,
        role,
        password: passwordHash,
      });

      res.status(201).json(user);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const { name, email, role } = req.body;

      user.name = name ?? user.name;
      user.email = email ?? user.email;
      user.role = role ?? user.role;

      const updatedUser = await UserService.update({ id, user });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await UserService.delete({ id });

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
