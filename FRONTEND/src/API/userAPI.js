import axios from "axios";

const API_URL = "http://localhost:5000/api/user";

export const getUserData = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
