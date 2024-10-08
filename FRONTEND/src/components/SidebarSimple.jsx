import { useContext } from "react";
import { DepartmentsContext } from "../pages/DepartmentsPage";
import { MdOutlineReadMore } from "react-icons/md";

function SidebarSimple() {
  const { departmentsData, selectedDepartment, setSelectedDepartment } =
    useContext(DepartmentsContext);

  return (
    <ul className="rounded-md min-w-content text-main-color bg-box-color text-xl font-bold p-3 h-min">
      {departmentsData.map((department, index) => (
        <li key={index} className="my-2 mx-5 rounded-md text-nowrap">
          <button
            onClick={() => setSelectedDepartment(department)}
            className={`flex justify-between w-full gap-5 text-secondary-color py-3 rounded-md px-3 
              hover:translate-x-6 transition-transform ${
                selectedDepartment && selectedDepartment.name === department.name
                  ? "bg-main-color text-white"
                  : "bg-box-color"
              }`}
          >
            {department.name.toUpperCase()}
            <MdOutlineReadMore />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SidebarSimple;
