import { createContext, useEffect, useState } from "react";
import { getAllDepartments } from "../API/departmentAPI";
import SidebarSimple from "../components/SidebarSimple";
import DepartmentDetails from "../components/DepartmentDetails";

export const DepartmentsContext = createContext();

function DepartmentsPage() {
  const [departmentsData, setDepartmentsData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const events = await getAllDepartments();
        setDepartmentsData(events);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <DepartmentsContext.Provider
      value={{ departmentsData, selectedDepartment, setSelectedDepartment }}
    >
      <div className="flex flex-col lg:flex-row gap-5 sm:mx-5">
        <SidebarSimple />
        <DepartmentDetails department={selectedDepartment} />
      </div>
    </DepartmentsContext.Provider>
  );
}

export default DepartmentsPage;
