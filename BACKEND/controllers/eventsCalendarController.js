export const getEventsCalendar = (req, res) => {
  const events = [
    {
      eventName: "XI Europejski Kongres Gospodarczy",
      eventDate: "13-15 maja 2020",
      type: "right",
    },
    {
      eventName: "Narowowe Wyzwania w Rolnictwie",
      eventDate: "1-15 listopad 2024",
      type: "left",
    },
  ];

  res.json(events);
};
