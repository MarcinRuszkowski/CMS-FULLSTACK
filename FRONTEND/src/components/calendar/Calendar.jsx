import { useState } from "react";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import MonthNavigator from "./MonthNavigator";
import DayGrid from "./DayGrid";
import DayColorDesc from "./DayColorDesc";
import SearchInput from "./SearchInput";
import MyAbsenceBtn from "../MyAbsenceBtn";
import AbsencePlannerBtn from "../AbsencePlannerBtn";

function Calendar({ employees, departmentOptions }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState("dowolny");

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

  const filteredEmployees = employees.filter((employee) => {
    if (selectedDepartment === "dowolny") return true; // pokaż wszystkich pracowników, jeśli wybrano dowolny
    return employee.department === selectedDepartment;
  });

  return (
    <div className="w-full flex flex-col  gap-5">
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div>
          <div className="text-xl text-main-color font-bold">Nieobecności</div>
          <div className="text-sm text-secondary-color">
            Tutaj sprawdzisz listę obecności pracowników Grupy PTWP
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 w-fit text-nowrap sm:ml-auto">
          <AbsencePlannerBtn />
          <MyAbsenceBtn />
        </div>
      </div>

      <div className="sm:ml-auto">
        <SearchInput
          departmentOptions={departmentOptions}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
        />
      </div>
      <DayColorDesc />

      <MonthNavigator
        currentDate={currentDate}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <DayGrid
        daysInMonth={daysInMonth}
        employees={filteredEmployees}
        selectedDays={selectedDays}
      />
    </div>
  );
}

export default Calendar;
