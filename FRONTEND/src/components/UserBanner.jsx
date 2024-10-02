import { FaRegUserCircle } from "react-icons/fa";

function UserBanner({
  name = "Imie Nazwisko",
  city = "miasto",
  email = "email",
  phone = "0000 00 000",
}) {
  return (
    <div className="flex flex-row pb-5 border-b-2 items-center justify-between">
      <div className="flex items-center gap-5">
        <FaRegUserCircle className="w-16 h-16" />
        <div className="flex flex-col">
          <p className="font-bold text-secondary-color">{name}</p>
          <div className="flex flex-col md:flex-row text-main-color gap-2">
            <span>{city}</span>
            <span className="md:flex hidden">•</span>
            <span>{email}</span>
            <span className="md:flex hidden">•</span>
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBanner;
