import { FaRegUserCircle } from "react-icons/fa";

function NewEmployeeCard({ name, company, city, department, job }) {
  return (
    <div className="flex flex-col p-5 bg-box-color w-full rounded-md items-center   md:items-start gap-5 h-fit min-h-40 relative">
      <FaRegUserCircle className="text-9xl md:absolute top-3 right-3" />
      <div className="space-y-3">
        <div className="text-main-color text-3xl font-medium">{name} </div>
        <div className="items-start w-full">
          <div className="text-secondary-color">{company}</div>
          <div className="text-secondary-color">{city}</div>
          <div className="text-secondary-color">{department}</div>
          <div className="text-secondary-color">{job}</div>
        </div>
      </div>
    </div>
  );
}

export default NewEmployeeCard;
