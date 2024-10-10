import { useEffect, useState } from "react";
import { getAllEmployees } from "../API/employeeAPI";
import Calendar from "../components/calendar/Calendar";

function AbsencePage() {
  const [employeesData, setEmployeesData] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getAllEmployees();
        setEmployeesData(employees);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const departments = new Set();
    

    employeesData.forEach((employee) => {
      departments.add(employee.department);
    });

    setDepartmentOptions(Array.from(departments));
  }, [employeesData]);

  
  return (
    <section className="flex flex-row md:mx-5  bg-box-color p-5 rounded-md max-h-screen">
      <Calendar
        departmentOptions={departmentOptions}
        employees={employeesData}
      />
      <div className="flex flex-col lg:flex-row gap-5 "></div>
    </section>
  );
}

export default AbsencePage;
