import bcrypt from "bcryptjs";
import User from "../models/User.js";
import {
  generateToken,
  verifyToken,
  generateRefreshToken,
} from "../utils/authUtils.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Nie znaleziono użytkownika");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Niepoprawne hasło");
    }
    const token = generateToken(user);
    res.status(200).json({ user: user, token: token });
  } catch (error) {
    res.status(401).json({ message: "Logowanie nie powiodło się" });
  }
};

export const refreshToken = (req, res) => {
  try {
    const oldToken = req.body;
    const decodedToken = verifyToken(oldToken);
    const existingUser = User.findById(decodedToken.id);
    if (!existingUser) {
      throw new Error("Nie znaleziono użytkonika");
    }
    const newToken = generateRefreshToken(existingUser);
    res.json({ token: newToken });
  } catch (error) {
    res.status(401).json({ message: "Niepoprawny token" });
  }
};
