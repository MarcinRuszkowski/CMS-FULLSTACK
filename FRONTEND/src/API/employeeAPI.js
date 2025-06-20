import axios from "axios";

const API_URL = "https://cms-fullstack-c9vn.onrender.com/api/employees";

export const getAllEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees", error);
    throw error;
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding employee", error);
    throw error;
  }
};

export const updateEmployee = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating employee", error);
    throw error;
  }
};
