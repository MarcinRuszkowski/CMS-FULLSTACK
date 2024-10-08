import { useEffect, useState } from "react";
import { getEvents } from "../API/eventAPI";
import { FaCheckCircle } from "react-icons/fa";

function EventsCalendarPage() {
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

  const groupEventsByYear = (events) => {
    return events.reduce((acc, event) => {
      const startDate = new Date(event.startDate);
      const year = startDate.getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(event);
      return acc;
    }, {});
  };

  const groupedEvents = groupEventsByYear(eventsData);
  const today = new Date();

  let firstFutureEventFound = false;

  return (
    <>
      <section className="sm:mx-5">
        <div className="mx-5">
          {Object.keys(groupedEvents).map((year) => (
            <div key={year}>
              <div className="m-5 text-center text-xl font-bold">{year}</div>
              <ul className="timeline timeline-vertical">
                {groupedEvents[year].map((event, index) => {
                  const startDate = new Date(event.startDate);
                  const isFutureEvent = startDate > today;

                  const addGreenBorder =
                    isFutureEvent && !firstFutureEventFound;

                  if (addGreenBorder) {
                    firstFutureEventFound = true;
                  }

                  return (
                    <li key={event._id.$oid}>
                      <hr
                        className={
                          isFutureEvent ? "bg-box-color" : "bg-main-color"
                        }
                      />
                      <div
                        className={`${
                          index % 2 === 0 ? "timeline-start" : "timeline-end"
                        } ${
                          addGreenBorder
                            ? "border-green-500 border-double border-4 "
                            : isFutureEvent
                            ? "border-secondary-color"
                            : "border-main-color"
                        } border-2 bg-box-color timeline-box`}
                      >
                        <div className="font-semibold">{event.eventName}</div>
                        <div className="text-sm text-gray-500">
                          {startDate.toLocaleDateString("pl-PL", {
                            day: "2-digit",
                          })}{" "}
                          -{" "}
                          {new Date(event.endDate).toLocaleDateString("pl-PL", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                      <div className="timeline-middle">
                        <FaCheckCircle
                          className={`my-1.5 ${
                            isFutureEvent ? "" : "text-main-color"
                          }`}
                        />
                      </div>
                      <hr
                        className={
                          isFutureEvent ? "bg-box-color" : "bg-main-color"
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default EventsCalendarPage;
