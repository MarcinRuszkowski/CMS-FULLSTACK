import jwt from "jsonwebtoken";
import { secretKey } from "../config/jwtConfig.js";

export const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

export const generateRefreshToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "7h" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};
