function EventsCalendarRight({
  eventName = "Nazwa wydarzenia",
  eventDate = "1-3 styczeń 2000",
  bg = "bg-box-color",
}) {
  return (
    <li>
      <hr className="bg-main-color" />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-main-color h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`timeline-end timeline-box border-2 border-box-color hover:border-main-color cursor-pointer ${bg}`}
      >
        <div className="flex flex-col gap-2">
          <p className="font-bold text-secondary-color">{eventName}</p>
          <p className="text-xs text-secondary-color">{eventDate}</p>
        </div>
      </div>
      <hr className="bg-main-color" />
    </li>
  );
}

export default EventsCalendarRight;
