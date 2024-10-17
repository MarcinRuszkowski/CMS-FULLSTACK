import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { validateEmail, validatePassword } from "../utils/signupValidation.js";

export const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Błąd podczas rejestracji" });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Nieprawidłowy format adresu email" });
    }

    if (!validatePassword(password)) {
      return res
        .status(400)
        .json({ message: "Hasło musi mieć przynajmniej 4 znaki" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: `Użytkownik o adresie email ${email} już istnieje` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      role: "employee",
    });

    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "Utworzono użytkownika pomyślnie", user: savedUser });
  } catch (error) {
    console.error("Błąd podczas rejestracji:", error);
    res.status(500).json({ message: "Błąd serwera", error });
  }
};
