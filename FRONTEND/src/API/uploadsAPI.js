import axios from "axios";

const API_URL = "http://localhost:5050/uploads/";

export const getEmployeeProfileImage = async (employee) => {
  try {
    const response = await axios.get(API_URL, employee);
    return response;
  } catch (error) {
    console.error("Error fetching imgs", error);
    throw error;
  }
};
