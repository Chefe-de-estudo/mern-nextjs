import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import config from "../config/config.js";

export const register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: "1d" });
  res.json({ token, user });
};
