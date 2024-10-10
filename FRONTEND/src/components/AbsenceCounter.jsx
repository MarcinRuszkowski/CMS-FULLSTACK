function AbsenceCounter({ leaveOnRequest, restLeave, leaveForChild }) {
  return (
    <div className="flex flex-col text-secondary-color">
      <div className="flex flex-row gap-2">
        Pozostało <div className="">{restLeave}</div>dni urlopu wypoczynkowego
      </div>
      <div className="flex flex-row gap-2">
        Pozostało <div className="">{leaveOnRequest}</div>dni urlopu na żądanie
      </div>
      <div className="flex flex-row gap-2">
        Pozostało <div className="">{leaveForChild}</div>dni opieki nad
        dzieckiem
      </div>
    </div>
  );
}

export default AbsenceCounter;
