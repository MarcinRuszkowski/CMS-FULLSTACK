import Feed from "./Feed";

function Feeds() {
  return (
    <ul className="steps steps-vertical">
      <Feed
        absenceAlias="L4"
        bg="bg-green-500"
        absenceType="Opieka nad psem"
        absenceDays="12"
        fromDate="01-02-2004"
        toDate="01-01-20014"
      />
      <div className="relative h-full">
        <span className="bg-secondary-color h-full w-1  rotate-180 absolute left-9"></span>
      </div>
      <Feed absenceAlias="o" bg="bg-red-500" />
      <div className="relative h-full">
        <span className="bg-secondary-color h-full w-1  rotate-180 absolute left-9"></span>
      </div>
      <Feed />
      <div className="relative h-full">
        <span className="bg-secondary-color h-full w-1  rotate-180 absolute left-9"></span>
      </div>
      <Feed absenceDays="6457" />
      <div className="relative h-full">
        <span className="bg-secondary-color h-full w-1  rotate-180 absolute left-9"></span>
      </div>
      <Feed absenceAlias="P" bg="bg-orange-500" />
      <div className="relative h-full">
        <span className="bg-secondary-color h-full w-1  rotate-180 absolute left-9"></span>
      </div>
      <Feed />
    </ul>
  );
}

export default Feeds;
