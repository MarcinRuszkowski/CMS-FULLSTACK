import axios from "axios";

const API_URL = "http://localhost:5050/api/departments";

export const getAllDepartments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching departments", error);
    throw error;
  }
};
