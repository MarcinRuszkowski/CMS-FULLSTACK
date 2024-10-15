import User from "../models/User.js";
import Employee from "../models/Employee.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// rejestracja nowego użytkownika i pracownika
export const register = async (req, res) => {
  const { email, password, name, company, job, department, city, phone } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Użytkownik już istnieje" });
    }

    const newEmployee = new Employee({
      name,
      company,
      job,
      department,
      city,
      email,
      phone,
    });

    const savedEmployee = await newEmployee.save();

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      employeeId: savedEmployee._id,
    });

    await newUser.save();

    res.status(201).json({ message: "Użytkownik i pracownik zarejestrowani" });
  } catch (error) {
    res.status(500).json({ message: "Błąd serwera", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).populate("employeeId");
    if (!user) {
      return res.status(400).json({ message: "Niepoprawne dane logowania" });
    }

    // hasło
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Niepoprawne dane logowania" });
    }

    // tworzenie token JWT
    const token = jwt.sign(
      { userId: user._id, employeeId: user.employeeId._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, employee: user.employeeId });
  } catch (error) {
    res.status(500).json({ message: "Błąd serwera", error });
  }
};
