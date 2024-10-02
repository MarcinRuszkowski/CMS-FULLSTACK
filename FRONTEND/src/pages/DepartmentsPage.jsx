import { createContext, useState } from "react";
import departmentsInfo from "../JSONData/departmentsInfo.json";
import SidebarSimple from "../components/SidebarSimple";
import DepartmentDetails from "../components/DepartmentDetails";

export const DepartmentInfoContext = createContext();

function DepartmentsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <DepartmentInfoContext.Provider
      value={{ departmentsInfo, selectedDepartment, setSelectedDepartment }}
    >
      <div className="flex flex-col lg:flex-row gap-5 sm:mx-5">
        <SidebarSimple />
        <DepartmentDetails />
      </div>
    </DepartmentInfoContext.Provider>
  );
}

export default DepartmentsPage;
