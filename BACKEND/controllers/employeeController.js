import Employee from "../models/Employee.js";

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Błąd podczas pobierania danych z bazy", error });
  }
};
