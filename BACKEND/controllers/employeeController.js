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

export const addEmployee = async (req, res) => {
  const { name, company, job, department, city, email } = req.body;
  const profileImage = req.file ? req.file.filename : null;
  const phone = req.body.phone || null;

  try {
    const newEmployee = new Employee({
      name,
      company,
      job,
      department,
      city,
      email,
      phone,
      profileImage,
    });

    const savedEmployee = await newEmployee.save();

    res.status(201).json(savedEmployee);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Błąd podczas dodawania nowego pracownika", error });
  }
};
