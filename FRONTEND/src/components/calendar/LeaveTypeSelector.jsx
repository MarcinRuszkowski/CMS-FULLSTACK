function LeaveTypeSelector({ selectedLeaveType, setSelectedLeaveType }) {
  return (
    <div className="mb-4 text-secondary-color">
      <label htmlFor="leaveType" className="mr-2 font-semibold">
        Rodzaj urlopu:
      </label>
      <select
        id="leaveType"
        value={selectedLeaveType}
        onChange={(e) => setSelectedLeaveType(e.target.value)}
        className="px-4 py-2 rounded-md hover:rounded-full bg-box-color border-2 border-main-color"
      >
        <option value="urlop na żądanie">Urlop na żądanie</option>
        <option value="urlop wypoczynkowy">Urlop wypoczynkowy</option>
        <option value="urlop okolicznościowy">Urlop okolicznościowy</option>
        <option value="opieka nad dzieckiem">Opieka nad dzieckiem</option>
        <option value="zwolnienie lekarskie">Zwolnienie lekarskie</option>
      </select>
    </div>
  );
}

export default LeaveTypeSelector;
