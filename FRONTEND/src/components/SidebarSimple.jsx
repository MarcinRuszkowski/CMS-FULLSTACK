import { useContext } from "react";
import { DepartmentInfoContext } from "../pages/DepartmentsPage";
import { MdOutlineReadMore } from "react-icons/md";

function SidebarSimple() {
  const { departmentsInfo, selectedDepartment, setSelectedDepartment } =
    useContext(DepartmentInfoContext);

  const departmentNames = Object.keys(departmentsInfo).flatMap((key) =>
    Object.keys(departmentsInfo[key])
  );

  return (
    <ul className="rounded-md min-w-content text-main-color bg-box-color text-xl font-bold p-3 h-min">
      {departmentNames.map((departmentName, index) => (
        <li key={index} className="my-2 mx-5 rounded-md text-nowrap">
          <button
            onClick={() => setSelectedDepartment(departmentName)}
            className={`flex justify-between w-full gap-5 text-secondary-color py-3 rounded-md px-3 
              hover:translate-x-6 transition-transform ${
                selectedDepartment === departmentName
                  ? "bg-main-color text-white"
                  : "bg-box-color"
              }`}
          >
            {departmentName.toUpperCase()}
            <MdOutlineReadMore />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SidebarSimple;
