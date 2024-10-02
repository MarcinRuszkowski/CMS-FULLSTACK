import VacationForm from "../components/VacationForm";

function VacationFormPage() {
  return (
    <>
      <section className="flex flex-col md:flex-row sm:mx-5 gap-5">
        <VacationForm />
        <div className="flex flex-col flex-1 rounded-md p-5 gap-5">
          <p className="font-bold text-2xl text-secondary-color">
            SKŁADANIE WNIOSKU URLOPOWEGO
          </p>
          <p className="text-secondary-color">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium excepturi obcaecati nesciunt fugiat, commodi debitis
            impedit numquam, ipsa nihil aspernatur eum. Quaerat, atque. Iure aut
            ratione corrupti, possimus eum architecto.
          </p>
          <p className="text-secondary-color">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium excepturi obcaecati nesciunt fugiat, commodi debitis
            impedit numquam, ipsa nihil aspernatur eum. Quaerat, atque. Iure aut
            ratione corrupti, possimus eum architecto.
          </p>
        </div>
      </section>
    </>
  );
}

export default VacationFormPage;
