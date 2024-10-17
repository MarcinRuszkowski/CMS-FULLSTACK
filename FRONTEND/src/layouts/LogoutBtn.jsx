import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div
      className="font-medium text-white bg-main-color py-1 px-2 rounded-md hover:rounded-full cursor-pointer"
      onClick={handleLogout}
    >
      Wyloguj się
    </div>
  );
}

export default LogoutBtn;
