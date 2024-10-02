import TimelineElemUp from "./TimelineElemUp";
import TimelineElemDown from "./TimelineElemDown";

function TimelineHorizontal() {
  return (
    <ul className="timeline my-5 overflow-x-auto">
      <TimelineElemDown isFuture={false} title="EEC" date="13-05-2024" />
      <TimelineElemUp isFuture={false} title="4DD" />
      <TimelineElemDown isFuture={false} title="EEC" date="13-05-2024" />
      <TimelineElemUp isFuture={true} />
      <TimelineElemDown isFuture={true} title="EEC" date="9-05-2024" />
      <TimelineElemUp isFuture={true} title="4DD" />
      <TimelineElemDown isFuture={true} title="EEC" date="13-05-2024" />
      <TimelineElemUp isFuture={true} title="4DD" />
      <TimelineElemDown isFuture={true} title="Gołębie" date="11-05-2024" />
      <TimelineElemUp isFuture={true} title="4DD" />
      <TimelineElemDown isFuture={true} title="EEC" />
      <TimelineElemUp isFuture={true} title="4DD" />
      <TimelineElemDown isFuture={true} title="EEC" date="13-01-2024" />
      <TimelineElemUp isFuture={true} />
      <TimelineElemDown isFuture={true} title="EEC" date="13-05-2024" />
      <TimelineElemUp isFuture={true} title="4DD" />
      <TimelineElemDown isFuture={true} title="EEC" date="13-05-2024" />
      <TimelineElemUp isFuture={true} title="4DD" />
    </ul>
  );
}

export default TimelineHorizontal;
