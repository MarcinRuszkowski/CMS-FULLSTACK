import { Link } from "react-router-dom";

function AbsencePlannerBtn() {
  return (
    <Link
      to="/absence/absencePlanner"
      className="bg-main-color py-1 px-2 h-fit  text-white font-medium rounded-md hover:rounded-full text-sm"
    >
      Zaplanuj nieobecność
    </Link>
  );
}

export default AbsencePlannerBtn;
