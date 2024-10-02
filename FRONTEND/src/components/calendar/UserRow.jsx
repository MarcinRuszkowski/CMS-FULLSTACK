import { format } from "date-fns";

function UserRow({
  user,
  daysInMonth,
  // selectedDays,
  // toggleDaySelection,
  // getLeaveColor,
}) {
  return (
    <div className="flex items-center mb-2 space-x-2">
      <div className="w-40 font-semibold text-left text-secondary-color">
        {user.name}
      </div>
      {daysInMonth.map((day) => {
        // const dayString = format(day, "yyyy-MM-dd");
        const isWeekend = day.getDay() === 0 || day.getDay() === 6;

        return (
          <div
            key={day}
            className={`min-w-[60px] p-2 rounded-lg text-center text-secondary-color border-2 border-bg-color ${
              isWeekend ? "bg-gray-400 text-white" : "" // pusty str bo dla nie weekendow jest stylowanie wyżej
              // selectedDays[user.id]?.[dayString]
              // ? getLeaveColor(selectedDays[user.id][dayString])
              // : " hover:border-main-color"
            }`}
            // onClick={() => {
            //   if (!isWeekend) {
            //     toggleDaySelection(user.id, day);
            //   }
            // }}
          >
            {format(day, "d")}
          </div>
        );
      })}
    </div>
  );
}

export default UserRow;
