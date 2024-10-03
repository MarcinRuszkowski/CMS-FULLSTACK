import { useState, useEffect } from "react";
import { getAllEmployees } from "../API/employeeAPI";
import Select from "../components/Select";
import NewEmployeeCard from "../components/NewEmployeeCard";

function AddEmployeePage() {
  const deps = ["it", "asdsda", "aasd"];
  // const [employeesData, setEmployeesData] = useState([]);

  // useEffect(() => {
  //   const fetchEmployees = async () => {
  //     try {
  //       const employees = await getAllEmployees();
  //       setEmployeesData(employees);
  //     } catch (error) {
  //       console.error("Błąd podczas pobierania danych:", error);
  //     }
  //   };

  //   fetchEmployees();
  // }, []);
  const [employeeName, setEmployeeName] = useState("");
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [jobTitle, setJobTitle] = useState("");

  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <div className="bg-box-color md:mx-5 p-5 rounded-md flex flex-col flex-1 gap-5">
        <input
          type="text"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Imie Nazwisko"
          onChange={(e) => setEmployeeName(e.target.value)}
        />
        <Select
          defOption="Wybierz firmę"
          options={deps}
          onChange={(value) => setSelectedCompany(value)}
        />
        <Select
          defOption="Wybierz miasto"
          options={deps}
          onChange={(value) => setSelectedCity(value)}
        />
        <Select
          defOption="Wybierz dział"
          options={deps}
          onChange={(value) => setSelectedDepartment(value)}
        />
        <input
          type="text"
          className="w-full rounded-md p-3 hover:rounded-full bg-bg-color border-2 border-main-color text-secondary-color"
          placeholder="Specjalista ds. nieudacznictwa"
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <button className="bg-main-color w-3/4 md:w-1/3 p-3 rounded-md hover:rounded-full text-white font-medium mt-10">
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
    </div>
  );
}

export default AddEmployeePage;
