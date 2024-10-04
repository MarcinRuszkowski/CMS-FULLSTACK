import { Link } from "react-router-dom";

function AdminCard({ linkTo, color, icon, title, desc }) {
  return (
    <Link
      to={linkTo}
      className={`flex flex-col justify-around gap-2  rounded-md items-center border-4   ${color} h-72  w-48 `}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-6xl text-white">{icon}</div>
        <div className="text-white text-xl font-medium">
          {title.toUpperCase()}
        </div>
      </div>

      <div className="text-sm mx-5 text-white  text-center">{desc}</div>
    </Link>
  );
}

export default AdminCard;
