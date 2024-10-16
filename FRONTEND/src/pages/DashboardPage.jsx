import { useNavigate } from "react-router-dom";
import CardsPanel from "../components/CardsPanel";
import News from "../components/News";
import Stats from "../components/Stats";
import UpcomingEvents from "../components/UpcomingEvents";
import { useEffect, useState } from "react";

function DashboardPage() {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();

        if (response.ok) {
          setUser(result);
        } else {
          console.error("Błąd pobierania użytkownika:", result.message);
        }
      } catch (error) {
        console.error("Błąd połączenia:", error.message);
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
