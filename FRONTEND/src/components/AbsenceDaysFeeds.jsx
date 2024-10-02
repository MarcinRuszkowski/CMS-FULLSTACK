import Feeds from "./Feeds";

function AbsenceDaysFeeds() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row p-5 justify-between">
        <p className="font-bold text-sm text-secondary-color">
          Nieobecności pracownika
        </p>
        <select
          name="year"
          className="rounded-md px-2 py-2 text-xs font-extrabold shadow-sm cursor-pointer hover:border-main-color border-secondary-color text-secondary-color bg-bg-color border-2 w-4/12"
        >
          <option value="" disabled selected>
            Wybierz rok
          </option>
          <option value="month2">2024</option>
          <option value="month3">2024</option>
          <option value="month4">2024</option>
        </select>
      </div>
      <Feeds />
    </div>
  );
}

export default AbsenceDaysFeeds;
