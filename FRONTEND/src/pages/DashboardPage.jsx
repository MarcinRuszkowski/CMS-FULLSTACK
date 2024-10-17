import { useNavigate } from "react-router-dom";
import CardsPanel from "../components/CardsPanel";
import News from "../components/News";
import Stats from "../components/Stats";
import UpcomingEvents from "../components/UpcomingEvents";
import { useEffect, useState } from "react";
import { getUserData } from "../API/userAPI";

function DashboardPage() {
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

  return (
    <section className="md:mx-5 flex flex-col gap-5">
      <div className="text-main-color font-medium text-xl">
        Cześć, {user?.email || "użytkowniku"}
      </div>
      <CardsPanel />
      <News />
      <Stats />
      <UpcomingEvents />
    </section>
  );
}

export default DashboardPage;
