import { useState } from "react";

function TimelineElemDown({ title = "event", date = "01-01-2000", isFuture }) {
  const [isFutureState, setIsFutureState] = useState(isFuture);

  return (
    <li>
      <hr className={isFutureState ? "bg-gray-400" : "bg-main-color"} />

      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={
            isFutureState ? "text-gray-400 h-5 w-5" : "text-main-color h-5 w-5"
          }
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end timeline-box bg-box-color border-2 border-secondary-color text-main-color font-medium flex flex-col">
        <div>{title}</div>
        <div>{date}</div>
      </div>
      <hr className={isFutureState ? "bg-gray-400" : "bg-main-color"} />
    </li>
  );
}

export default TimelineElemDown;
