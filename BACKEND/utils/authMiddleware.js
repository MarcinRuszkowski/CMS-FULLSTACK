import jwt from "jsonwebtoken";
import { secretKey } from "../config/jwtConfig.js";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Brak tokenu" });
  }

  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "Niepoprawny format tokenu" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: "Niepoprawny token" });
    req.user = user;
    next();
  });
};
