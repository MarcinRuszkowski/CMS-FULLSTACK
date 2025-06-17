import axios from "axios";

const API_URL = "https://cms-fullstack-c9vn.onrender.com/api/eventsCalendar";

export const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
