import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { format } from "date-fns";

function MonthNavigator({ currentDate, handlePrevMonth, handleNextMonth }) {
  const polishMonths = [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = format(currentDate, "yyyy");

  return (
    <header className="flex justify-between items-center mb-4 text-center">
      <button
        onClick={handlePrevMonth}
        className="px-4 py-2 bg-main-color text-white text-2xl rounded-md hover:rounded-full transition"
      >
        <FaArrowLeftLong />
      </button>
      <h2 className="text-xl font-bold text-main-color">
        {polishMonths[currentMonth].toUpperCase()} {currentYear}
      </h2>
      <button
        onClick={handleNextMonth}
        className="px-4 py-2 bg-main-color text-white text-2xl rounded-md hover:rounded-full transition"
      >
        <FaArrowRightLong />
      </button>
    </header>
  );
}

export default MonthNavigator;
