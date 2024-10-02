import { useState } from "react";

function VacationForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [absenceType, setAbsenceType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-1 gap-8 px-5 py-8 bg-box-color rounded-md"
    >
      <div className="flex flex-col md:flex-row gap-8 md:justify-between">
        <div className="flex flex-col flex-1 gap-2">
          <label
            htmlFor="start-vacation"
            className="text-secondary-color font-medium"
          >
            Rozpoczęcie
          </label>

          <input
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            className="bg-bg-color text-secondary-color border-2 border-secondary-color hover:border-main-color rounded-md"
          />
          {isSubmitted && !startDate && (
            <p className="text-red-500">* to pole jest wymagane</p>
          )}
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label
            htmlFor="end-vacation"
            className="text-secondary-color font-medium"
          >
            Zakończenie
          </label>

          <input
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            className="bg-bg-color text-secondary-color border-2 border-secondary-color hover:border-main-color rounded-md"
          />
          {isSubmitted && !endDate && (
            <p className="text-red-500">* to pole jest wymagane</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 -mt-7">
        <div className="flex flex-row gap-4">
          <label htmlFor="absenceType" className="text-gray-500 font-medium">
            Rodzaj nieobecności
          </label>
        </div>

        <select
          onChange={(e) => setAbsenceType(e.target.value)}
          className="py-1 px-3 rounded-md text-secondary-color bg-bg-color border-2 border-secondary-color hover:border-main-color cursor-pointer"
        >
          <option value="" disabled selected>
            Rodzaj urlopu
          </option>
          <option value="urlopo-wypoczynkowy">Urlop wypoczynkowy</option>
          <option value="urlopo-na-żądanie">Urlop na żądanie</option>
          <option value="urlopo-okolicznościowy">Urlop okolicznościowy</option>
        </select>
        {isSubmitted && !absenceType && (
          <p className="text-red-500">* to pole jest wymagane</p>
        )}
      </div>
      <div className="flex flex-col gap-2 -mt-7">
        <label className="text-secondary-color font-medium">Zastępstwo</label>
        <input
          type="search"
          className="rounded-md border-2 py-1 px-3 hover:border-main-color border-secondary-color bg-bg-color text-secondary-color"
          placeholder="Imie i nazwisko pracownika"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-secondary-color font-medium">
          Dodatkowe informacje
        </label>
        <textarea
          type="text"
          className="border-2 rounded-md py-1 px-3 hover:border-main-color bg-bg-color text-secondary-color border-secondary-color"
          placeholder="Jakieś dodakowe informacje..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-main-color hover:rounded-full rounded-md py-2 px-3"
      >
        Złóż wniosek
      </button>
    </form>
  );
}

export default VacationForm;
