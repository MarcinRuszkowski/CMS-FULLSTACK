import { useState, useEffect } from "react";
import { getAllEmployees, createEmployee } from "../API/employeeAPI";
import Select from "../components/Select";
import NewEmployeeCard from "../components/NewEmployeeCard";
import AlertSuccess from "../components/AlertSuccess";

function AddEmployeePage() {
  const [employeesData, setEmployeesData] = useState([]);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [jobTitle, setJobTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({
    employeeName: "",
    selectedCompany: "",
    selectedCity: "",
    selectedDepartment: "",
    jobTitle: "",
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getAllEmployees();
        setEmployeesData(employees);
      } catch (error) {
        console.error("", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const companies = new Set();
    const locations = new Set();
    const departments = new Set();

    employeesData.forEach((employee) => {
      companies.add(employee.company);
      locations.add(employee.city);
      departments.add(employee.department);
    });

    // departments.add("alchemia");
    // jakby jakiegoś działu nie było to rzeba dodac tą linijke.
    // po dodaniu pracownika do db można ją usunąc bo już bedzie pobierana z db

    setCompanyOptions(Array.from(companies));
    setLocationOptions(Array.from(locations));
    setDepartmentOptions(Array.from(departments));
  }, [employeesData]);

  const validateFields = () => {
    let formErrors = {};

    if (!employeeName) formErrors.employeeName = "Imię i nazwisko są wymagane";
    if (!selectedCompany) formErrors.selectedCompany = "Firma jest wymagana";
    if (!selectedCity) formErrors.selectedCity = "Miasto jest wymagane";
    if (!selectedDepartment)
      formErrors.selectedDepartment = "Dział jest wymagany";
    if (!jobTitle) formErrors.jobTitle = "Stanowisko jest wymagane";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleAddEmployee = async () => {
    if (!validateFields()) return;

    const newEmployee = {
      name: employeeName,
      company: selectedCompany,
      city: selectedCity,
      department: selectedDepartment,
      job: jobTitle,
    };

    try {
      const addedEmployee = await createEmployee(newEmployee);
      console.log("Dodano pracownika:", addedEmployee);

      // resetowanie po dodaniu formularza
      setEmployeeName("");
      setSelectedCompany("");
      setSelectedCity("");
      setSelectedDepartment("");
      setJobTitle("");
      setErrors({}); // Zresetuj błędy

      //  alert na 3 sekundy
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error("Błąd podczas dodawania pracownika:", error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="bg-box-color md:mx-5 p-5 rounded-md flex flex-col flex-1 gap-5">
        <input
          type="text"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Imie Nazwisko"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />
        {errors.employeeName && (
          <span className="text-red-500">{errors.employeeName}</span>
        )}

        <Select
          defOption="Wybierz firmę"
          options={companyOptions}
          value={selectedCompany}
          onChange={(value) => setSelectedCompany(value)}
        />
        {errors.selectedCompany && (
          <span className="text-red-500">{errors.selectedCompany}</span>
        )}

        <Select
          defOption="Wybierz miasto"
          options={locationOptions}
          value={selectedCity}
          onChange={(value) => setSelectedCity(value)}
        />
        {errors.selectedCity && (
          <span className="text-red-500">{errors.selectedCity}</span>
        )}

        <Select
          defOption="Wybierz dział"
          options={departmentOptions}
          value={selectedDepartment}
          onChange={(value) => setSelectedDepartment(value)}
        />
        {errors.selectedDepartment && (
          <span className="text-red-500">{errors.selectedDepartment}</span>
        )}

        <input
          type="text"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Specjalista ds. nieudacznictwa"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        {errors.jobTitle && (
          <span className="text-red-500">{errors.jobTitle}</span>
        )}

        <button
          className="bg-main-color w-3/4 md:w-1/3 p-3 rounded-md hover:rounded-full text-white font-medium mt-10"
          onClick={handleAddEmployee}
        >
          Dodaj pracownika
        </button>
      </div>

      <div className="flex flex-1">
        <NewEmployeeCard
          name={employeeName}
          company={selectedCompany}
          city={selectedCity}
          department={selectedDepartment}
          job={jobTitle}
        />
      </div>

      {showAlert && (
        <div className="absolute bottom-8 right-2">
          <AlertSuccess message="Dodano użytkownika" />
        </div>
      )}
    </div>
  );
}

export default AddEmployeePage;
