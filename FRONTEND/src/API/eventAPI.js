import axios from "axios";

const API_URL = "http://localhost:5050/api/eventsCalendar";

export const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
