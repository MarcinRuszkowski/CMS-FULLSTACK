import Calendar from "../components/calendar/Calendar";
import MyAbsenceBtn from "../components/MyAbsenceBtn";

function AbsencePage() {
  return (
    <section className="flex flex-row md:mx-5 relative">
      <Calendar />
      <MyAbsenceBtn />
    </section>
  );
}

export default AbsencePage;
