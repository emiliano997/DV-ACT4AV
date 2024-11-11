import { UserService } from "../service/user.service.js";
import { comparePassword } from "../utils/hash.js";
import { createToken, verifyToken } from "../utils/jwt.js";

export class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    const user = await UserService.getByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "El email no está registrado" });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "La contraseña es incorrecta" });
    }

    const token = createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return res.status(200).json({ message: "Login exitoso", token });
  }

  static async register(req, res) {
    const { name, email, password, role } = req.body;

    const user = await UserService.getByEmail(email);

    if (user) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    await UserService.create({ name, email, password, role });

    return res.status(201).json({ message: "Usuario creado" });
  }

  static async profile(req, res) {
    console.log(req.headers);

    const token = req.headers.authorization.split(" ")[1];

    const user = verifyToken(token);

    res.json({ user });
  }
}
