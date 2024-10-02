import CardsPanel from "../components/CardsPanel";
import News from "../components/News";
import Stats from "../components/Stats";
import UpcomingEvents from "../components/UpcomingEvents";

function DashboardPage() {
  return (
    <section className="md:mx-5 flex flex-col gap-5">
      <CardsPanel />
      <News />
      <Stats />
      <UpcomingEvents />
    </section>
  );
}

export default DashboardPage;
