import { useContext } from "react";
import { DepartmentInfoContext } from "../pages/DepartmentsPage";
import TabWithContent from "./TabWithContent";
import Skeleton5 from "./Skeleton5";

function DepartmentDetails() {
  const { departmentsInfo, selectedDepartment } = useContext(
    DepartmentInfoContext
  );

  if (!selectedDepartment) {
    return (
      <div className="flex flex-1 flex-col justify-center bg-box-color gap-5 p-3 pt-6 rounded-md">
        <div className="opacity-70 m-5 space-y-4">
          <div className="text-center">Wybierz dział</div>
          <Skeleton5 />
        </div>
      </div>
    );
  }

  const departmentKey = Object.keys(departmentsInfo).find((key) =>
    Object.keys(departmentsInfo[key]).includes(selectedDepartment)
  );
  const departmentData = departmentKey
    ? departmentsInfo[departmentKey][selectedDepartment]
    : [];

  return (
    <div className="flex flex-1 flex-col bg-box-color gap-5 p-3 pt-6 rounded-md">
      <p className="text-main-color font-bold text-3xl">
        {selectedDepartment.toUpperCase()}
      </p>
      <TabWithContent tabs={departmentData} />
    </div>
  );
}

export default DepartmentDetails;
