import { FaRegUserCircle } from "react-icons/fa";

function EmployeeInfo({
  name = "IMIE NAZWISKO",
  company = "PTWP",
  job = "nieudacznik",
  department = "nieudacznictwo",
  city = "city",
}) {
  return (
    <div className="flex flex-row  p-5 border-b-2 items-center justify-between">
      <div className="flex items-center gap-5">
        <FaRegUserCircle className="w-16 h-16" />
        <div className="flex flex-col">
          <p className="font-bold text-secondary-color">{name}</p>
          <div className="flex flex-col md:flex-row text-main-color gap-2">
            <span>{company.toUpperCase()}</span>
            <span className="md:flex hidden">•</span>
            <span>{job}</span>
            <span className="md:flex hidden">•</span>
            <span>{department}</span>
            <span className="md:flex hidden">•</span>
            <span>{city.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfo;