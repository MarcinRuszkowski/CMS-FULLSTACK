import { Link } from "react-router-dom";

function Card({ icon, title, color, linkTo }) {
  return (
    <Link
      to={linkTo}
      className={`flex flex-col gap-2 border-b-4 rounded-md items-center justify-center hover:border-2 bg-box-color w-full h-40 ${color}`}
    >
      <div className="text-6xl">{icon}</div>
      <div className="text-card-color text-lg font-medium text-center">
        {title.toUpperCase()}
      </div>
    </Link>
  );
}

export default Card;
