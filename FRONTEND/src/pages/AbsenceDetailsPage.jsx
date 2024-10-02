import UserAbsenceCard from "../components/UserAbsenceCard";
import AbsenceInfos from "../components/AbsenceInfos";

function AbsenceDetailsPage() {
  return (
    <section className="flex flex-col md:flex-row sm:mx-5 gap-5">
      <AbsenceInfos />
      <UserAbsenceCard />
    </section>
  );
}

export default AbsenceDetailsPage;
