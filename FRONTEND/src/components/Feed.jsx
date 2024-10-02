function Feed({
  absenceAlias = "u",
  bg = "bg-main-color",
  absenceType = "nieobecność",
  absenceDays = "1",
  fromDate = "01-01-2000",
  toDate = "02-01-2000",
}) {
  return (
    <li className="flex flex-row items-center gap-5 px-5">
      <div
        className={`flex justify-center items-center ${bg} rounded-full text-box-color font-medium  min-w-9 h-9`}
      >
        {absenceAlias.toUpperCase()}
      </div>
      <div className="text-secondary-color flex flex-col lg:flex-row gap-2">
        {absenceType}
        <p className="text-main-color font-bold">{absenceDays}</p> dni w dniach
        od {fromDate} do {toDate}
      </div>
    </li>
  );
}

export default Feed;
