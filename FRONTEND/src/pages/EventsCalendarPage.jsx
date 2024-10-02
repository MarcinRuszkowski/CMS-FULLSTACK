import { useState, useEffect } from "react";
import axios from "axios";
import EventsCalendarRight from "../components/EventsCalendarRight";
import EventsCalendarLeft from "../components/EventsCalendarLeft";

function EventsCalendarPage() {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/eventsCalendar"
  //       );
  //       setEvents(response.data);
  //     } catch (error) {
  //       console.error("Błąd podczas pobierania wydarzeń:", error);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  return (
    <>
      <section className="sm:mx-5 ">
        <div className="mx-5">
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-middle">
                <div className="timeline-middle pb-5">
                  <p className="font-bold text-xl text-secondary-color">2019</p>
                </div>
              </div>
              <hr className="bg-main-color" />
            </li>
            <EventsCalendarRight
              eventName="XI Europejski Kongres Gospodarczy"
              eventDate="13-15 maja 2020"
              bg="bg-blue-300"
            />
            <EventsCalendarLeft
              eventName="Narowowe Wyzwania w Rolnictwie"
              eventDate="1-15 listopad 2024"
            />
            <EventsCalendarRight
              eventName="4Buildings"
              eventDate="13-15 maja 2020"
            />
            <EventsCalendarLeft
              eventName="European Start-up Days 4"
              eventDate="5-3 grudzień 2024"
            />
            <EventsCalendarRight
              eventName="XV Forum Rynku Zdrowia"
              eventDate="13-15 maja 2020"
              bg="bg-green-300"
            />

            <EventsCalendarLeft eventDate="1-15 listopad 2024" />
            <EventsCalendarRight
              eventName="4Buildings"
              eventDate="13-15 maja 2020"
            />
            <EventsCalendarLeft
              eventName="European Start-up Days 4"
              eventDate="1-15 listopad 2024"
            />
            <li>
              <div className="timeline-middle">
                <div className="timeline-middle pb-5">
                  <p className="font-bold text-xl text-secondary-color">2020</p>
                </div>
              </div>
              <hr className="bg-main-color" />
            </li>
            <EventsCalendarRight eventName="Gołębie" eventDate="2 maja 2020" />
            <EventsCalendarLeft
              eventName="European Start-up Days 4"
              eventDate="1-15 listopad 2024"
              bg="bg-yellow-200"
            />
            <EventsCalendarLeft eventDate="1-15 listopad 2024" />
            <EventsCalendarRight
              eventName="4Buildings"
              eventDate="13-15 maja 2020"
            />
            <EventsCalendarLeft
              eventName="European Start-up Days 4"
              eventDate="1-15 listopad 2024"
            />
            <EventsCalendarRight eventName="Gołębie" eventDate="2 maja 2020" />
            <EventsCalendarRight eventName="Gołębie" eventDate="22 maja 2020" />
            <EventsCalendarLeft
              eventName="European Start-up Days 4"
              eventDate="1-15 listopad 2024"
              bg="bg-yellow-200"
            />
          </ul>
        </div>
      </section>
    </>
  );
}

export default EventsCalendarPage;
