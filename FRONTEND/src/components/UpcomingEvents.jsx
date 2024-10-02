import TimelineHorizontal from "./TimelineHorizontal";

function UpcomingEvents() {
  return (
    <div className="flex flex-col bg-box-color p-5 rounded-md">
      <p className="text-main-color font-medium text-lg border-b-2 pb-2">
        NADCHODZĄCE WYDARZENIA
      </p>
      <TimelineHorizontal />
    </div>
  );
}

export default UpcomingEvents;
