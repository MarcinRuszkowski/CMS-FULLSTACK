import axios from "axios";

const API_URL = "https://cms-fullstack-c9vn.onrender.com/api/user/register";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};
