import { useEffect, useState } from "react";
import { getEvents } from "../API/eventAPI";
import { FaCheckCircle } from "react-icons/fa";

function UpcomingEvents() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents();
        setEventsData(events);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchEvents();
  }, []);

  const today = new Date();

  const pastEvents = eventsData.filter(
    (event) => new Date(event.startDate) <= today
  );
  const futureEvents = eventsData.filter(
    (event) => new Date(event.startDate) > today
  );

  const limitedPastEvents = pastEvents.slice(-2);
  const limitedFutureEvents = futureEvents.slice(0, 4);

  const eventsToDisplay = [...limitedPastEvents, ...limitedFutureEvents];

  let firstFutureEventFound = false;

  return (
    <div className="flex flex-col bg-box-color p-5 rounded-md">
      <p className="text-main-color font-medium text-lg border-b-2 pb-2 mb-3">
        NADCHODZĄCE WYDARZENIA
      </p>
      <ul className="timeline overflow-x-auto">
        {eventsToDisplay.map((event, index) => {
          const startDate = new Date(event.startDate);
          const endDate = new Date(event.endDate);
          const isFutureEvent = startDate > today;

          const addGreenBorder = isFutureEvent && !firstFutureEventFound;

          if (addGreenBorder) {
            firstFutureEventFound = true;
          }

          return (
            <li key={event._id.$oid}>
              <hr className={isFutureEvent ? "bg-bg-color" : "bg-main-color"} />
              <div
                className={`${
                  index % 2 === 0 ? "timeline-start" : "timeline-end"
                } ${
                  addGreenBorder
                    ? "border-pink-700 text-pink-700"
                    : isFutureEvent
                    ? " border-secondary-color"
                    : "border-main-color"
                } border-2 bg-bg-color timeline-box`}
              >
                <div className="font-semibold">{event.eventName}</div>
                <div className="text-sm text-gray-500">
                  {startDate.toLocaleDateString("pl-PL", {
                    day: "2-digit",
                  })}
                  {" - "}
                  {endDate.toLocaleDateString("pl-PL", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="timeline-middle">
                <FaCheckCircle
                  className={`my-1.5 ${isFutureEvent ? "" : "text-main-color"}`}
                />
              </div>
              <hr className={isFutureEvent ? "bg-bg-color" : "bg-main-color"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UpcomingEvents;
