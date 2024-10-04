import Event from "../models/Event.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Błąd podczas pobierania danych z bazy", error });
  }
};
