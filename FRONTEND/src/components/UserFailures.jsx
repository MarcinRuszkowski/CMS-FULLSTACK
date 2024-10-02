import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

function UserFailures({
  name = "Imie Nazwisko",
  mobile = "+48 000 000 000",
  phone = "48 32 00 00 000",
  email = "imie.nazwisko@ptwp.pl",
}) {
  const [isActive, setIsActive] = useState(false);

  const changeStatus = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-row pb-5 border-b-2 items-center justify-between">
      <div className="flex items-center gap-5">
        <FaRegUserCircle className="w-16 h-16" />
        <div className="flex flex-col">
          <p className="font-bold text-secondary-color">{name}</p>
          <div className="flex flex-col lg:flex-row text-main-color gap-2 text-nowrap">
            <span>{mobile}</span>
            <span className="lg:flex hidden">•</span>
            <span>{phone}</span>
            <span className="lg:flex hidden">•</span>
            <span>{email}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center sm:mr-10 gap-2 w-24">
        {isActive ? (
          <>
            <span
              onClick={changeStatus}
              className="flex h-4 w-4 rounded-full bg-green-500"
            ></span>
            <span className="text-green-500 font-medium text-xs">DOSTĘPNY</span>
          </>
        ) : (
          <>
            <span
              onClick={changeStatus}
              className="flex h-4 w-4 rounded-full bg-red-500"
            ></span>
            <span className="text-red-500 font-medium text-xs">
              NIEDOSTĘPNY
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default UserFailures;
