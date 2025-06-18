import { FaRegUserCircle } from "react-icons/fa";

export const EmployeeDetails = ({ employee }) => {
  const phoneData =
    employee.phone && employee.phone.length > 0
      ? employee.phone.join(" ;  ")
      : "Brak danych";

  const employeeInfos = [
    { header: "E-mail", data: employee.email },
    { header: "Telefony kom.", data: phoneData },
    { header: "Slack", data: employee.slack },
  ];

  return (
    <div className="bg-box-color rounded-md p-5">
      <header className="flex-col md:flex-row flex items-center gap-10  border-b-2 pb-5">
        {employee.profileImage ? (
          <img
            src={employee.profileImage}
            alt={employee.name}
            className="w-[150px] h-[150px] rounded-full"
          />
        ) : (
          <FaRegUserCircle className="text-secondary-color w-[150px] h-auto" />
        )}

        <div className="space-y-2">
          <h1 className="text-secondary-color text-4xl font-bold">
            {employee.name}
          </h1>
          <div className="flex flex-col md:flex-row text-main-color gap-2">
            <span>PTWP</span>
            <span className="md:flex hidden">•</span>
            <span>PTWP</span>
            <span className="md:flex hidden">•</span>
            <span>PTWP</span>
            <span className="md:flex hidden">•</span>
            <span>PTWP</span>
          </div>
        </div>
      </header>
      <div className="">
        <div className="flex flex-col gap-5 mt-5">
          <h1 className="text-2xl font-bold ">Dane adresowe</h1>
          <div className="flex flex-col flex-wrap md:flex-row  pl-2 text-secondary-color gap-2">
            <span>{employee.company}</span>
            <span className="md:flex hidden">•</span>
            <span>{employee.department}</span>
            <span className="md:flex hidden">•</span>
            <span>{employee.job}</span>
            <span className="md:flex hidden">•</span>
            <span>{employee.city}</span>
          </div>
          <div className="flex flex-row flex-wrap gap-8 pl-2">
            {employeeInfos.map((info, index) => (
              <div key={index} className="flex flex-col items-start">
                <h3 className="text-medium text-gray-600">{info.header}</h3>
                <p className="font-semibold text-main-color">{info.data}</p>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-bold ">Zakres obowiązków</h1>
          <ul className="list-disc pl-6">
            {employee.scopeOfDuties.map((duty, index) => (
              <li key={index} className="text-gray-600">
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
