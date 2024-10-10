import { format, isToday } from "date-fns";
import UserRow from "./UserRow";

const DayGrid = ({ daysInMonth, employees }) => {
  const dayNames = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        <div className="flex items-center   space-x-2 sticky top-0 shadow pb-2  z-10">
          <div className="font-bold text-left text-secondary-color w-40">
            PRACOWNICY
          </div>
          {daysInMonth.map((day) => {
            const isWeekend = day.getDay() === 0 || day.getDay() === 6;
            const dayIndex = day.getDay();
            const dayName = dayNames[dayIndex === 0 ? 6 : dayIndex - 1];

            return (
              <div
                key={day}
                className={`min-w-[60px] p-2 text-lg text-center font-medium rounded-md text-secondary-color ${
                  isToday(day)
                    ? " bg-main-color text-white"
                    : isWeekend
                    ? "bg-gray-600 text-white"
                    : "bg-bg-color"
                }`}
              >
                <div>{format(day, "d")}</div>

                <div className="text-sm">{dayName}</div>
              </div>
            );
          })}
        </div>
        <div className="overflow-y-auto pt-3">
          {employees.map((employee) => (
            <UserRow employee={employee} daysInMonth={daysInMonth} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayGrid;
