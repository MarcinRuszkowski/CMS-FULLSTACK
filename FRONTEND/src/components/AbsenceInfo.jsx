function AbsenceInfo({ title = "tytuł", days = "0" }) {
  return (
    <div className=" border-b-2  py-7 font-bold text-sm flex justify-between">
      <div className="font-bold text-secondary-color">{title}</div>
      <div className="text-secondary-color">
        <span className="text-main-color">{days}</span> dni
      </div>
    </div>
  );
}

export default AbsenceInfo;
