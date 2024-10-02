import { Link } from "react-router-dom";

function MyAbsenceBtn() {
  return (
    <Link
      to="/absence/detail"
      className="bg-main-color p-3 absolute text-white font-medium rounded-md hover:rounded-full top-5 right-5 text-sm"
    >
      Szczegóły Twoich nieobecności
    </Link>
  );
}

export default MyAbsenceBtn;
