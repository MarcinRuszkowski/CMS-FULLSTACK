import axios from "axios";

const API_URL = "https://cms-fullstack-c9vn.onrender.com/uploads/";

export const getEmployeeProfileImage = async (employee) => {
  try {
    const response = await axios.get(API_URL + employee);
    
    return response.config.url;
  } catch (error) {
    console.error("Error fetching imgs", error);
    throw error;
  }
};
