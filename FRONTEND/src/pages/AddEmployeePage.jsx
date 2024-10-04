import { useState, useEffect } from "react";
import { getAllEmployees, createEmployee } from "../API/employeeAPI";
import Select from "../components/Select";
import NewEmployeeCard from "../components/NewEmployeeCard";
import AlertSuccess from "../components/AlertSuccess";
import AlertError from "../components/AlertError";

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
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [errors, setErrors] = useState({});

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

    // departments.add("Marketing");
    // jakby jakiegoś działu nie było to rzeba dodac tą linijke.
    // po dodaniu pracownika do db można ją usunąc bo już bedzie pobierana z db

    setCompanyOptions(Array.from(companies));
    setLocationOptions(Array.from(locations));
    setDepartmentOptions(Array.from(departments));
  }, [employeesData]);

  const validateFields = () => {
    let error = {};

    if (!employeeName) {
      error.employeeName = "Imię i nazwisko są wymagane";
    }
    if (!selectedCompany) {
      error.selectedCompany = "Firma jest wymagana";
    }
    if (!selectedCity) {
      error.selectedCity = "Miasto jest wymagane";
    }
    if (!selectedDepartment) {
      error.selectedDepartment = "Dział jest wymagany";
    }
    if (!jobTitle) {
      error.jobTitle = "Stanowisko jest wymagane";
    }

    setErrors(error);

    const errorMessages = Object.values(error);
    setErrorMessage(errorMessages);

    if (errorMessages.length > 0) {
      setShowErrorAlert(true);
      return false;
    } else {
      setShowErrorAlert(false);
      return true;
    }
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
      setErrors({});
      setErrorMessage([]);
      setShowErrorAlert(false);

      //  alert na 3 sekundy
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error("Błąd podczas dodawania pracownika:", error);
    }
  };

  const handleInputChange = (value, setter, errorField) => {
    setter(value);

    if (value) {
      setErrors((prev) => ({ ...prev, [errorField]: "" }));
      setErrorMessage((prev) =>
        prev.filter((msg) => msg !== errors[errorField])
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="bg-box-color md:mx-5 p-5 rounded-md flex flex-col flex-1 gap-5">
        <input
          type="text"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Imię i nazwisko"
          value={employeeName}
          onChange={(e) =>
            handleInputChange(e.target.value, setEmployeeName, "employeeName")
          }
        />

        <Select
          defOption="Wybierz firmę"
          options={companyOptions}
          value={selectedCompany}
          onChange={(value) =>
            handleInputChange(value, setSelectedCompany, "selectedCompany")
          }
        />

        <Select
          defOption="Wybierz miasto"
          options={locationOptions}
          value={selectedCity}
          onChange={(value) =>
            handleInputChange(value, setSelectedCity, "selectedCity")
          }
        />

        <Select
          defOption="Wybierz dział"
          options={departmentOptions}
          value={selectedDepartment}
          onChange={(value) =>
            handleInputChange(
              value,
              setSelectedDepartment,
              "selectedDepartment"
            )
          }
        />

        <input
          type="text"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Stanowisko"
          value={jobTitle}
          onChange={(e) =>
            handleInputChange(e.target.value, setJobTitle, "jobTitle")
          }
        />

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

      {showErrorAlert && (
        <div className="absolute bottom-8 right-2">
          <div className="flex flex-col gap-1">
            {errorMessage.map((message, index) => (
              <AlertError key={index} message={message} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddEmployeePage;
