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

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, company, job, department, city, email, phone } = req.body;
  const profileImage = req.file ? req.file.filename : null;

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res
        .status(404)
        .json({ message: "Pracownik nie został znaleziony" });
    }

    employee.name = name || employee.name;
    employee.company = company || employee.company;
    employee.job = job || employee.job;
    employee.department = department || employee.department;
    employee.city = city || employee.city;
    employee.email = email || employee.email;
    employee.phone = phone || employee.phone;

    if (profileImage) {
      employee.profileImage = profileImage;
    }

    const updatedEmployee = await employee.save();

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Błąd podczas aktualizacji danych pracownika", error });
  }
};
