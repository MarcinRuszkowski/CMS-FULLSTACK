import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: `Użytkownik o emailu ${email} już istnieje` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = User({
      email,
      password: hashedPassword,
      role: "employee",
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "Utworzono użytkownika pomyślnie", user: savedUser });
  } catch (error) {
    res.status(400).json({ message: "Błąd", error });
  }
};
