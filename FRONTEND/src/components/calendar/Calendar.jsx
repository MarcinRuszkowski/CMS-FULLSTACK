import { useState } from "react";
import {
  // format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import MonthNavigator from "./MonthNavigator";
// import LeaveTypeSelector from "./LeaveTypeSelector";
import DayGrid from "./DayGrid";
import DayColorDesc from "./DayColorDesc";
import SearchInput from "./SearchInput";

const users = [
  { id: 1, name: "Jan Kowalski", department: "IT" },
  { id: 2, name: "Anna Nowak", department: "Księgowość" },
  { id: 3, name: "Michał Wiśniewski", department: "Marketing" },
  { id: 4, name: "Katarzyna Zawadzka", department: "Marketing" },
  { id: 5, name: "Piotr Zieliński", department: "IT" },
  { id: 6, name: "Walter White", department: "IT" },
];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState("dowolny");
  // const [selectedLeaveType, setSelectedLeaveType] =
  //   useState("urlop na żądanie");

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

  // const toggleDaySelection = (userId, day) => {
  //   const dayString = format(day, "yyyy-MM-dd");
  //   const newSelectedDays = { ...selectedDays };

  //   if (!newSelectedDays[userId]) {
  //     newSelectedDays[userId] = {};
  //   }

  //   if (newSelectedDays[userId][dayString]) {
  //     delete newSelectedDays[userId][dayString];
  //   } else {
  //     newSelectedDays[userId][dayString] = selectedLeaveType;
  //   }

  //   setSelectedDays(newSelectedDays);
  // };

  // const getLeaveColor = (leaveType) => {
  //   switch (leaveType) {
  //     case "urlop na żądanie":
  //       return "bg-red-500 text-white";
  //     case "urlop wypoczynkowy":
  //       return "bg-main-color text-white";
  //     case "urlop okolicznościowy":
  //       return "bg-orange-500 text-white";
  //     case "opieka nad dzieckiem":
  //       return "bg-green-500 text-white";
  //     case "zwolnienie lekarskie":
  //       return "bg-pink-500 text-white";
  //     default:
  //       return "";
  //   }
  // };

  const filteredUsers =
    selectedDepartment === "dowolny"
      ? users
      : users.filter((user) => user.department === selectedDepartment);

  return (
    <div className="w-full flex flex-col  bg-box-color p-5 rounded-md gap-5">
      <div>
        <div className="text-xl text-main-color font-bold">Nieobecności</div>
        <div className="text-sm text-secondary-color">
          Tutaj sprawdzisz listę obecności pracowników Grupy PTWP
        </div>
      </div>

      {/* <LeaveTypeSelector
        selectedLeaveType={selectedLeaveType}
        setSelectedLeaveType={setSelectedLeaveType}
      /> */}
      <div className="sm:ml-auto">
        <SearchInput
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
        users={filteredUsers}
        selectedDays={selectedDays}
        // toggleDaySelection={toggleDaySelection}
        // getLeaveColor={getLeaveColor}
      />
    </div>
  );
}

export default Calendar;
