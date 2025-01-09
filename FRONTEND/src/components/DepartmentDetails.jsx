import { useEffect, useState } from "react";
import { getAllEmployees } from "../API/employeeAPI";
import TabWithContent from "./TabWithContent";
import Skeleton5 from "./Skeleton5";

function DepartmentDetails({ department }) {
  const [employeesData, setEmployeesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const allEmployees = await getAllEmployees();
        const filteredEmployees = allEmployees.filter(
          (employee) => employee.department === department.name
        );
        setEmployeesData(filteredEmployees);
        setLoading(false);
      } catch (error) {
        console.error("Błąd podczas pobierania pracowników", error);
        setLoading(false);
      }
    };

    if (department) {
      fetchEmployees();
    }
  }, [department]);

  if (!department) {
    return (
      <div className="bg-box-color flex flex-col flex-1 p-5 rounded-md gap-5 justify-center h-fit">
        <div>Wybierz dział, aby zobaczyć szczegóły</div>
        <div className="opacity-75">
          <Skeleton5 />
        </div>
      </div>
    );
  }

  if (loading) {
    return <div>Ładowanie danych pracowników...</div>;
  }

  const tabs = [
    {
      name: "Informacje",
      content: (
        <div>
          <div>{department.desc}</div>

          <h3 className="text-xl font-bold mt-4 mb-2">Adres:</h3>
          <div className="flex flex-col md:flex-row md:gap-5 gap-1">
            <div>{department.address.street}</div>
            <div className="hidden md:flex">•</div>
            <div>{department.address.city}</div>
            <div className="hidden md:flex">•</div>
            <div>{department.address.zipCode}</div>
            <div className="hidden md:flex">•</div>
            <div>{department.address.room}</div>
          </div>

          <div className="flex flex-col">
            <div className="text-xl font-bold mt-4 mb-2">E-mail działu:</div>
            <div className="text-main-color ">{department.depEmail}</div>
          </div>
        </div>
      ),
    },
    {
      name: "Pracownicy",
      content: (
        <div>
          <ul className="space-y-2">
            {employeesData.map((employee, index) => (
              <li key={index} className="border-b pb-2">
                <div className="text-lg font-bold">{employee.name}</div>
                <div className="flex flex-col md:flex-row md:gap-3 gap-1">
                  <div className="text-sm">{employee.job}</div>
                  <div className="hidden md:flex">•</div>
                  <div className="text-sm">{employee.city}</div>
                  <div className="hidden md:flex">•</div>
                  <div className="text-sm">{employee.email}</div>
                  <div className="hidden md:flex">•</div>
                  {employee.phone && employee.phone.length > 0 ? (
                    <div className="text-sm">{employee.phone.join(", ")}</div>
                  ) : (
                    <div className="text-sm">Brak nr telefonu</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      name: "Procedury",
      content: (
        <div>
          <ul>
            {department.procedury.map((procedure, index) => (
              <li key={index}>
                <a
                  href={`/procedures/${procedure}`}
                  className="text-blue-500 underline"
                >
                  {procedure}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-1 flex-col rounded-md bg-box-color p-5">
      <div className="text-5xl font-bold text-main-color pb-5">
        {department.name.toUpperCase()}
      </div>
      <TabWithContent tabs={tabs} />
    </div>
  );
}

export default DepartmentDetails;
