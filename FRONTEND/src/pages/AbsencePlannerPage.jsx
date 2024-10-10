import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday, // Importowanie funkcji isToday
} from "date-fns";
import MonthNavigator from "../components/calendar/MonthNavigator";
import DayColorDesc from "../components/calendar/DayColorDesc";

function AbsencePlannerPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState({});
  const [selectedLeaveType, setSelectedLeaveType] =
    useState("urlop na żądanie");

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 }),
  });

  const toggleDaySelection = (day) => {
    const dayString = format(day, "yyyy-MM-dd");
    const newSelectedDays = { ...selectedDays };

    if (newSelectedDays[dayString]) {
      delete newSelectedDays[dayString];
    } else {
      newSelectedDays[dayString] = selectedLeaveType;
    }

    setSelectedDays(newSelectedDays);
  };

  const getLeaveColor = (leaveType) => {
    switch (leaveType) {
      case "urlop na żądanie":
        return "bg-red-500 text-white";
      case "urlop wypoczynkowy":
        return "bg-main-color text-white";
      case "urlop okolicznościowy":
        return "bg-orange-500 text-white";
      case "opieka nad dzieckiem":
        return "bg-green-500 text-white";
      case "zwolnienie lekarskie":
        return "bg-pink-500 text-white";
      default:
        return "";
    }
  };

  const dayNames = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"];

  return (
    <div className="w-full flex flex-col bg-box-color p-5 rounded-md gap-5">
      <div className="text-xl text-main-color font-bold">
        Zaplanuj swoją nieobecność
      </div>

      <div className="mb-4 text-secondary-color flex flex-col gap-3">
        <label htmlFor="leaveType" className="mr-2 font-semibold">
          Rodzaj urlopu:
        </label>
        <select
          value={selectedLeaveType}
          onChange={(e) => setSelectedLeaveType(e.target.value)}
          className="px-4 py-2 rounded-md hover:rounded-full bg-box-color border-2 border-main-color w-fit"
        >
          <option value="urlop na żądanie">Urlop na żądanie</option>
          <option value="urlop wypoczynkowy">Urlop wypoczynkowy</option>
          <option value="urlop okolicznościowy">Urlop okolicznościowy</option>
          <option value="opieka nad dzieckiem">Opieka nad dzieckiem</option>
          <option value="zwolnienie lekarskie">Zwolnienie lekarskie</option>
        </select>
      </div>

      <DayColorDesc />

      <MonthNavigator
        currentDate={currentDate}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />

      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className="grid grid-cols-7 gap-2">
            {dayNames.map((dayName, index) => (
              <div
                key={index}
                className="text-lg text-center font-medium text-secondary-color"
              >
                {dayName}
              </div>
            ))}

            {daysInMonth.map((day) => {
              const dayString = format(day, "yyyy-MM-dd");
              const isWeekend = day.getDay() === 0 || day.getDay() === 6;
              const isSelected = selectedDays[dayString];
              const isCurrentMonth = isSameMonth(day, currentDate);
              const isTodayDay = isToday(day);

              return (
                <div
                  key={day}
                  className={`min-w-[60px] p-2 rounded-lg text-center text-secondary-color border-2 border-bg-color 
                  ${isSelected ? getLeaveColor(selectedDays[dayString]) : ""}
                  ${
                    isWeekend
                      ? "bg-gray-400 text-white"
                      : "hover:border-main-color"
                  }
                  ${!isCurrentMonth ? "bg-bg-color text-secondary-color" : ""}
                  ${isTodayDay ? "border-secondary-color" : ""}`}
                  onClick={() => {
                    if (isCurrentMonth && !isWeekend) {
                      toggleDaySelection(day);
                    }
                  }}
                >
                  {format(day, "d")}
                </div>
              );
            })}
          </div>
          <button className="border-2 border-main-color rounded-md hover:rounded-full bg-main-color text-white py-2 px-3 mt-5">
            Wyślij wniosek
          </button>
        </div>
      </div>
    </div>
  );
}

export default AbsencePlannerPage;
