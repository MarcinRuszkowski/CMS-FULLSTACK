import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/login";

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
