import { Link } from "react-router-dom";

function AbsencePlannerBtn() {
  return (
    <Link
      to="/absence/absencePlanner"
      className="bg-main-color p-3  text-white font-medium rounded-md hover:rounded-full text-sm"
    >
      Zaplanuj nieobecność
    </Link>
  );
}

export default AbsencePlannerBtn;
