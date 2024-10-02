import { FaRegUserCircle } from "react-icons/fa";

function AbsenceUser({
  username = "Imie Nazwisko",
  job = "Starszy specjalista ds niczego",
}) {
  return (
    <div className="flex flex-row border-b-2 pb-5 gap-5 items-center">
      <FaRegUserCircle className="w-16 h-16" />
      <div className="flex flex-col justify-center">
        <div className="text-main-color font-bold">{username}</div>
        <div className="text-secondary-color text-xs">{job}</div>
      </div>
    </div>
  );
}

export default AbsenceUser;
