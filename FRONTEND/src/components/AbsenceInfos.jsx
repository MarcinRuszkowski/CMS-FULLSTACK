import AbsenceDaysFeeds from "./AbsenceDaysFeeds";
import AbsenceInfo from "./AbsenceInfo";

function AbsenceInfos() {
  return (
    <div className="flex flex-col flex-1 rounded-md bg-box-color px-5">
      <div className=" border-b-2 border-gray-20  py-7 font-bold">
        <div className="mt-4 sm:mt-0 sm:pt-1 sm:text-left">
          <p className="text-main-color text-xl  mb-2">Moje obecności</p>
          <p className="text-xs font-medium text-gray-600">
            Tutaj sprawdzisz listę obecności pracowników Grupy PTWP
          </p>
        </div>
      </div>
      <AbsenceInfo title="Urlop należny" days="892" />
      <AbsenceInfo title="Urlop przeniesiony z lat poprzednich" days="1" />
      <AbsenceInfo title="Urlop wykorzystany w 2024" days="22" />
      <AbsenceInfo title="Przysługująca opieka nad dzieckiem" />
      <AbsenceInfo title="Wykorzystane zwolnienia chorobowe" days="43" />
      <AbsenceDaysFeeds />
    </div>
  );
}

export default AbsenceInfos;
