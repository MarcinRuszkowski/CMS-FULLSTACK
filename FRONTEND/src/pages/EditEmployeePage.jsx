import { useState, useEffect } from "react";
import { getAllEmployees, updateEmployee } from "../API/employeeAPI";
import { getEmployeeProfileImage } from "../API/uploadsAPI";
import Select from "../components/Select";
import NewEmployeeCard from "../components/NewEmployeeCard";
import AlertSuccess from "../components/AlertSuccess";
import AlertError from "../components/AlertError";

function EditEmployeePage() {
  const [employeesData, setEmployeesData] = useState([]);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [imageTitle, setImageTitle] = useState("Nie wybrano zdjęcia");
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [errors, setErrors] = useState({});
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getAllEmployees();
        setEmployeesData(employees);
      } catch (error) {
        console.error("Error fetching employees:", error);
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

    setCompanyOptions(Array.from(companies));
    setLocationOptions(Array.from(locations));
    setDepartmentOptions(Array.from(departments));
  }, [employeesData]);

  const handleEmployeeSelect = async (employeeName) => {
    const selected = employeesData.find(
      (employee) => employee.name === employeeName
    );

    if (selected) {
      setSelectedEmployee(selected);
      setEmployeeName(selected.name);
      setSelectedCompany(selected.company);
      setSelectedCity(selected.city);
      setSelectedDepartment(selected.department);
      setJobTitle(selected.job || "");
      setEmail(selected.email || "");
      setPhone(selected.phone || "");

      if (selected.profileImage) {
        try {
          const imageUrl = await getEmployeeProfileImage(selected.profileImage);
          setProfileImage(imageUrl);
          setImageTitle(selected.profileImage);
        } catch (error) {
          console.error("Error fetching profile image:", error);
          setProfileImage(null);
        }
      } else {
        setProfileImage(null);
        setImageTitle("Nie wybrano zdjęcia");
      }
    }
  };

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
    if (!email) {
      error.email = "Email jest wymagany";
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

  const handleUpdateEmployee = async () => {
    if (!validateFields()) return;

    const formData = new FormData();
    formData.append("name", employeeName);
    formData.append("company", selectedCompany);
    formData.append("city", selectedCity);
    formData.append("department", selectedDepartment);
    formData.append("job", jobTitle);
    formData.append("email", email);
    if (profileImage && typeof profileImage === "object") {
      formData.append("profileImage", profileImage);
    }
    if (phone) {
      formData.append("phone", phone);
    }

    try {
      const updatedEmployee = await updateEmployee(
        selectedEmployee._id,
        formData
      );
      console.log("Zaktualizowano pracownika:", updatedEmployee);

      setEmployeeName("");
      setSelectedCompany("");
      setSelectedCity("");
      setSelectedDepartment("");
      setJobTitle("");
      setEmail("");
      setPhone("");
      setProfileImage(null);
      setImageTitle("Nie wybrano zdjęcia");
      setErrors({});
      setErrorMessage([]);
      setShowErrorAlert(false);
      setSelectedEmployee(null);

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error("Błąd podczas aktualizacji pracownika:", error);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setImageTitle(file.name);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="bg-box-color md:mx-5 p-5 rounded-md flex flex-col flex-1 gap-5">
        <div className="border-b-2 border-main-color">
          <div className="flex flex-col gap-2">
            <div className="text-secondary-color">Wybierz pracownika:</div>
            <select
              className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color mb-5"
              onChange={(e) => handleEmployeeSelect(e.target.value)}
            >
              <option value="">Imię Nazwisko</option>
              {employeesData.map((employee, index) => (
                <option key={index} value={employee.name}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
        </div>

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
        <input
          type="email"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Email"
          value={email}
          onChange={(e) => handleInputChange(e.target.value, setEmail, "email")}
        />
        <input
          type="tel"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Phone"
          value={phone}
          onChange={(e) => handleInputChange(e.target.value, setPhone, "phone")}
        />

        <label className="cursor-pointer text-secondary-color space-y-3">
          <div className="">Dodaj zdjęcie profilowe:</div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
            className="hidden"
          />
          <div className="bg-bg-color w-fit p-2 rounded hover:rounded-full">
            {imageTitle ||
              (profileImage
                ? profileImage.split("/").pop()
                : "Nie wybrano zdjęcia")}
          </div>
        </label>

        <button
          className="bg-main-color w-3/4 md:w-1/3 p-3 rounded-md hover:rounded-full text-white font-medium mt-10"
          onClick={handleUpdateEmployee}
        >
          Zapisz edycję
        </button>
      </div>

      <div className="flex flex-1">
        <NewEmployeeCard
          name={employeeName}
          company={selectedCompany}
          city={selectedCity}
          department={selectedDepartment}
          job={jobTitle}
          email={email}
          phone={phone}
          image={profileImage}
        />
      </div>

      {showAlert && (
        <div className="absolute bottom-8 right-2">
          <AlertSuccess message="Zapisano zmiany" />
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

export default EditEmployeePage;
