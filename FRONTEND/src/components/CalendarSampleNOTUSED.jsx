import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
} from "date-fns";

const users = [
  { id: 1, name: "Jan Kowalski" },
  { id: 2, name: "Anna Nowak" },
  { id: 3, name: "Michał Wiśniewski" },
  { id: 4, name: "Katarzyna Zawadzka" },
  { id: 5, name: "Piotr Zieliński" },
];

const Calendar = () => {
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
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const toggleDaySelection = (userId, day) => {
    const dayString = format(day, "yyyy-MM-dd");
    const newSelectedDays = { ...selectedDays };

    if (!newSelectedDays[userId]) {
      newSelectedDays[userId] = {};
    }

    if (newSelectedDays[userId][dayString]) {
      delete newSelectedDays[userId][dayString];
    } else {
      newSelectedDays[userId][dayString] = selectedLeaveType;
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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4">
        <label htmlFor="leaveType" className="mr-2 font-semibold">
          Rodzaj urlopu:
        </label>
        <select
          id="leaveType"
          value={selectedLeaveType}
          onChange={(e) => setSelectedLeaveType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="urlop na żądanie">Urlop na żądanie</option>
          <option value="urlop wypoczynkowy">Urlop wypoczynkowy</option>
          <option value="urlop okolicznościowy">Urlop okolicznościowy</option>
          <option value="opieka nad dzieckiem">Opieka nad dzieckiem</option>
          <option value="zwolnienie lekarskie">Zwolnienie lekarskie</option>
        </select>
      </div>

      <header className="flex justify-between items-center mb-4 text-center">
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Poprzedni
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Następny
        </button>
      </header>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className="flex items-center mb-4 space-x-2">
            <div className="font-bold text-left w-1/6">Dzień</div>

            {daysInMonth.map((day) => (
              <div
                key={day}
                className={`min-w-[60px] p-2 text-lg text-center 
                  ${
                    isToday(day)
                      ? "border border-blue-500 bg-blue-100"
                      : "bg-gray-100"
                  }
                `}
              >
                {format(day, "d")}
              </div>
            ))}
          </div>

          {users.map((user) => (
            <div key={user.id} className="flex items-center mb-2 space-x-2">
              <div className="w-1/6 font-semibold text-left">{user.name}</div>

              {daysInMonth.map((day) => (
                <div
                  key={day}
                  className={`min-w-[60px] p-2 rounded-lg text-center bg-gray-50 border border-gray-200 
                    ${
                      selectedDays[user.id]?.[format(day, "yyyy-MM-dd")]
                        ? getLeaveColor(
                            selectedDays[user.id][format(day, "yyyy-MM-dd")]
                          )
                        : ""
                    }
                  `}
                  onClick={() => toggleDaySelection(user.id, day)}
                >
                  {format(day, "d")}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
