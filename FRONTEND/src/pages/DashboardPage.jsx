import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserData } from "../API/userAPI";
import { getAllEmployees } from "../API/employeeAPI";
import UpcomingEvents from "../components/UpcomingEvents";
import CardsPanel from "../components/CardsPanel";
import News from "../components/News";
import Stats from "../components/Stats";

function DashboardPage() {
  const [employeesData, setEmployeesData] = useState([]);
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserData(token);
        setUser(userData);
      } catch (error) {
        console.error("Błąd pobierania użytkownika:", error.message);
        navigate("/login");
      }
    };

    if (token) {
      fetchUser();
    } else {
      navigate("/login");
    }
  }, [navigate, token]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getAllEmployees();
        setEmployeesData(employees);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchEmployees();
  }, []);

  const employeeName = user
    ? employeesData.find((employee) => employee.email === user.email)?.name
    : null;

  const employeeFirstName = employeeName ? employeeName.split(" ")[0] : "";

  return (
    <section className="md:mx-5 flex flex-col gap-5">
      <div className="text-main-color font-medium text-xl">
        Cześć,
        <span className="text-3xl font-bold ml-3">
          {employeeFirstName || "użytkowniku"}
        </span>
      </div>
      <CardsPanel />
      <News />
      <Stats />
      <UpcomingEvents />
    </section>
  );
}

export default DashboardPage;
