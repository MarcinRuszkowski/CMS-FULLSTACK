import Department from "../models/Department.js";

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Błąd podczas pobierania danych z bazy", error });
  }
};
