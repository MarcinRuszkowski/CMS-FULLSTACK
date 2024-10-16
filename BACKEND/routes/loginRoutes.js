import express from "express";
import { login, refreshToken } from "../controllers/loginController.js";

const router = express.Router();

router.post("/login", login);
router.post("/refresh-token", refreshToken);

export default router;
